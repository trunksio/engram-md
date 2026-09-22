# Decision-in-the-browser — Gate-1 findings (2026-09-22)

Follows `decision-in-the-browser-handoff.md`. Ran the handoff's steps 1–2 to decide whether
the **Decide** workspace (an engram fact cartridge that changes a typed decision — the honest
mirror of the poisoning demo) is worth building. Verdict: **yes, build it.**

## Step 1 — the decision model reproduces

`runs/alloc-namesonly-qwen3-0.6b` (Qwen3-0.6B-Base + Kev LoRA/pointer-head), PyTorch path
(`aoa-decide/.venv`, `merge=True`): **91% agent-choice** on the test set — matches the doc's
91.4%. Calibrated per-option probabilities from the pointer head. The foundation is sound.

Notable: every miss is the same shape — label `data_agent`, model picks `none_of_these` with
high confidence ("no agent can do this"). That is the names-only *memorisation* failure the
doc warned about, and it is the exact thing a capability cartridge should fix.

## Step 2 — the decision is genuinely fact-dependent (the decisive proxy)

Rather than build the full engram+LoRA integration to answer the core question — *does the
model consult provided facts, or only its memorised weights?* — a cheaper, decisive proxy:
the **with-descriptions** model (`runs/alloc-kev06b-qwen3-delta`, 93.6%) reads each agent's
capability text from the prompt. Blank the **chosen** agent's description and re-run.

Of the decisions the model got right and confidently via a description (n=13 of 40 sampled):

- **removing that description collapsed the pick (>30pt drop): 46%**
- **flipped it to `none_of_these`: 46%**

| goal | with the fact | fact removed |
|---|---|---|
| "…generate an expense report" | data_agent **100%** | data_agent **1%** → none_of_these |
| "Show my claims" | data_agent **98%** | data_agent **14%** → none_of_these |
| "Review this MSA contract, flag risks" | quality_evaluator **100%** | quality_evaluator **0%** → none_of_these |

The other ~54% don't collapse — those agents are picked from the **name alone**
(`report_generator` for "generate a report"). That's fine: not every decision needs the
cartridge, and the demo should feature the fact-dependent cases.

**Interpretation.** For ~half of decisions the capability fact is *load-bearing*: supply it →
correct agent; remove it → the decision correctly collapses to "no agent can do this." That is
the demo thesis confirmed at the modelling level. The fact here lived in the **prompt**, not an
engram — but it proves the decisive thing: **the decision will use the fact if it is present in
the residual stream, which is exactly what an engram injection does.** So the engram version is
a *motivated engineering port, not a research gamble.*

## The two gates now

- **Gate 1 (modelling) — cleared in proxy.** Remaining: train an engram to *supply* the
  capability facts so the decision reads them from a few-MB cartridge instead of a ~730-token
  prompt (swappable, auditable, cheap). The withhold-one test, with the engram doing the
  supplying, is the confirming experiment.
- **Gate 2 (browser) — the real build risk.** Expose per-token hidden states (`pooling none`)
  in the wllama engram fork for the pointer head (the fork passes `pooling_type` through but
  wires `createEmbedding` for pooled/rerank output; per-token is the piece to add).

## Gate-1 spike result — the mechanism works, and simpler than assumed

Tested whether a per-option vector injected into the residual (what an engram does) can
*restore* a collapsed decision, by capturing the "capability delta" the description creates
at the chosen agent's option token and injecting it on the names-only (collapsed) prompt.

| injection | recovery |
|---|---|
| layer 1, option token (naive engram injection point) | **none** — a bottom-layer add doesn't propagate to the final-layer option vector through 27 layers of attention over the (absent) description tokens |
| final layer, option token, **same goal** | **100%** (1% → 100%) |
| final layer, **one per-agent vector, applied to OTHER goals** | **12/15 (80%)** — data_agent 3/3, quality_evaluator 3/3, ocr_cerebras 6/9 |
| decide token (either layer) | no effect — the capability signal lives in the **option** token, not the query |

**Consequences.**
1. The pointer head is fully steerable by a **single per-agent vector at the option token** —
   exactly what an engram stores (one value per key), and it is **reusable across goals**
   (80% cross-goal with a raw one-shot delta; a trained engram averaging over cases would do
   better). This is the demo, mechanically proven.
2. **A naive engram at layer 1 fails; an engram with `injection_layer` near the top succeeds.**
   Injecting the capability vector where the head reads bypasses the cartridge-aware LoRA
   retraining the handoff assumed necessary. Cleaner and cheaper.
3. Nuance to be honest about: this is an engram storing **decision-steering vectors** (head-space
   capability vectors), not textual fact values — a legitimate variant of the primitive, and
   arguably a more interesting one for the Decide demo.

## The Gate-1 build (next)

Revised by the spike result — no cartridge-aware LoRA retrain; a high-injection-layer engram
storing per-agent capability vectors. Integration confirmed: the aoa-engram
`EngramAugmentedCausalLM` injects via a forward hook on a decoder layer; Kev's pointer head
reads `self.lm(...).last_hidden_state`, so an engram hook reaches the decision automatically
(the only wiring is capturing `input_ids` for the hook, which Kev's forward doesn't do today).

1. Build an engram that stores, per agent name, its **capability vector** at a top injection
   layer (e.g. 26–27), keyed on the agent-name tokens so the window fires at the option
   position — mind the special-token constraint (Kev's box delimiters are Qwen specials; use
   low orders or un-ignore the box tokens, else the cartridge never fires there). The target
   is the head-space capability vector (from many cases per agent), not a textual value.
2. Bind it to the **merged** descriptions stack (`export-alloc-qwen3-0.6b/hf/`), never the bare
   base. Mount in Kev via the layer hook (+ input_ids capture).
3. End-to-end test — names-only prompts, engram mounted: the collapsed decisions come back
   (mount → correct agent; unmount → `none_of_these`). Provenance per option, as in Chat.
4. Withhold-one test — one agent's vector lives ONLY in the engram: the decision still picks it
   (baseline ~0%). Proves the cartridge adds a capability the weights never had.
5. Gate 2 (browser) — export the high-injection-layer engram to GGUF and expose per-token
   hidden states (`pooling none`) in the wllama fork so the pointer head runs in JS.

Kept strictly separate from the enterprise planner (`aoa-decide`), per the handoff.
