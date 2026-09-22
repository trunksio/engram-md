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

## The Gate-1 spike (in progress)

Integration points confirmed: the aoa-engram `EngramAugmentedCausalLM` injects via a forward
hook on a decoder layer; Kev's pointer head reads `self.lm(...).last_hidden_state`, so an
engram hook on the shared layer reaches the decision automatically (the only wiring needed is
capturing `input_ids` for the hook, which Kev's forward doesn't do today). Plan:

1. Build a capability-fact corpus (agent → capability), keyed so the window fires at the option
   position — mind the special-token constraint (Kev's box delimiters are Qwen specials; use low
   orders or un-ignore the box tokens, else the cartridge never fires there).
2. Train the engram against the **merged** descriptions stack (`export-alloc-qwen3-0.6b/hf/`),
   never the bare base.
3. First test — mount the engram with descriptions **removed** from the prompt: do the collapsed
   decisions come back? If not (likely, per the doc), the LoRA must be retrained cartridge-aware
   (names-only prompts, engram mounted) so it learns to consult the cartridge.
4. Confirming experiment — the withhold-one test: keep one agent's fact only in the engram,
   withhold it from LoRA training, check the decision still picks it (baseline ~0%).

Kept strictly separate from the enterprise planner (`aoa-decide`), per the handoff.
