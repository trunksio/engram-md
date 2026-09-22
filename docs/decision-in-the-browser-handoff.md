# Decision in the browser — handoff note (2026-09-22)

Written at the end of the `aoa-decide` session so a fresh session in this repo can pick up the
"typed decision in the browser" demo without re-deriving anything. The enterprise planner work
(local sovereign allocator for the AOA planner) stays in `~/work/AOA/aoa-decide` and is a
different product; do not let this demo argue for that architecture or vice versa.

## What exists and where

| thing | path | notes |
|---|---|---|
| Decision-model training harness (Kev, Apache-2.0, vendored) | `~/work/AOA/aoa-decide/vendor/kev` | LoRA r16 + 256-d pointer head; TypeSafe-compatible `/v1/systemone` server in `kev.serve` |
| Zero-training logit readout (so1, vendored) | `~/work/AOA/aoa-decide/vendor/open-alternative-jev` | reads next-token logits over option letters; useful as a baseline |
| Project venv (torch 2.14+cu130, transformers 5.17, fla) | `~/work/AOA/aoa-decide/.venv` | same recipe works on spark-d515 (`~/work/AOA/aoa-decide/.venv` there) |
| **Browser candidate checkpoint** | `~/work/AOA/aoa-decide/runs/alloc-namesonly-qwen3-0.6b` | Qwen3-0.6B-Base + Kev LoRA/head, trained names-only (no descriptions in prompt). 94.6% on the allocator test set, agent 91.4%, ECE 0.037, 20 ms on GB10 |
| Same with descriptions in prompt | `~/work/AOA/aoa-decide/runs/alloc-kev06b-qwen3-delta` | 93.6%; already exported below |
| **GGUF export of the 0.6B (with-descriptions run)** | `~/work/AOA/aoa-decide/runs/export-alloc-qwen3-0.6b/` | `model-q8_0.gguf` 639 MB, `head.npz` 2 MB (Wq,bq,Wk,bk), `head.json` (scale, temperature, special token ids). `hf/` is the merged HF checkpoint |
| Export + verify scripts | `~/work/AOA/aoa-decide/scripts/export_gguf.py`, `scripts/verify_gguf.py` | verify: llama.cpp `--pooling none` per-token states + numpy head == torch (argmax 1.00, max dp 0.036) |
| CPU llama.cpp build used for verify | `/tmp/claude-1000/.../scratchpad/llama.cpp` (session scratch; rebuild from upstream, CPU-only cmake) | pp512 on the 0.6B q8: 643 tok/s on the Grace CPU |
| Datasets (Kev/TypeSafe request JSONL) | `~/work/AOA/aoa-decide/data/alloc-v1` (descriptions), `data/alloc-v1-namesonly` | state `{"goal","task"}`; questions `agent` (choice + `none_of_these`), `skill` (choice), `fits` (noul) |
| Registry snapshot used as candidates | `~/work/AOA/aoa-decide/data/registry.json` | 15 agent cards, 40 skills, mirrors aoa-a2a-agents@main |
| Full write-up and results tables | `~/work/AOA/aoa-decide/README.md` | |

Export the names-only run the same way when needed:
`cd ~/work/AOA/aoa-decide && PYTHONPATH=vendor/kev .venv/bin/python scripts/export_gguf.py --run runs/alloc-namesonly-qwen3-0.6b --out runs/export-alloc-namesonly-qwen3-0.6b`

## The inference recipe a wllama client has to reproduce

One causal row per question (this is exactly Kev's "row form", used for hybrid bases; attention-only
bases give identical numbers):

```
<|fim_prefix|> <state tokens> <|fim_middle|> <instruction tokens>
  (<|box_start|> <option tokens> <|box_end|>)*  <|fim_suffix|>
```
Delimiters are five rarely used Qwen special tokens (`kev/model.py: SPECIAL`), so they must be tokenised as
specials (llama.cpp does; verified token-for-token against the HF tokenizer). Take the final-layer, post-norm
hidden state `h` for every token (`--pooling none`, no normalisation), then

```
q = Wq·h[<|fim_suffix|>] + bq            # the <decide> token
k_i = Wk·h[<|box_end|>_i] + bk            # each option's end token
logits_i = (k_i · q) / sqrt(256) / T ;  p = softmax(logits)
```
Noul is a two-option Choice (no, yes). Confidence for Choice as TypeSafe defines it: (p_max - 1/K)/(1 - 1/K).
In wllama the per-token embeddings path is the thing to expose (llama.cpp `pooling_type none`); the head is
~260k floats and runs in plain JS.

Token budget (Qwen3 tokenizer, allocator questions): state ~57, names-only agent question ~170,
with descriptions ~730. wllama disables prompt caching while an engram is mounted, so assume the whole
row is re-encoded per question; at wasm speeds budget roughly a second per decision for names-only.

## The engram tie-in (why names-only matters)

Names-only training scored higher than descriptions-in-prompt (91.4% vs 87.9% on agent choice): the LoRA
memorises what each agent does. That is the fine-tuned-weights failure mode; the fix is to keep the LoRA as
the *behaviour* cartridge and put the registry (or, for a browser demo, whatever fact set the decision needs)
in an engram *fact* cartridge. Constraints from `~/work/aoa-engram` that shape the demo:

- Engram = exact triple store keyed on suffix n-gram hashes; ~100% recall on declared key shapes, chance on
  paraphrase. Option keys are canonical names, so this is fine.
- Stack-bound: build the cartridge on the merged stack (base + LoRA), never the bare base.
- Windows containing Qwen special tokens are invalid by default and Kev's delimiters *are* specials: use low
  orders (2-3) or remove `<|box_start|>`/`<|box_end|>` from `ignored_token_ids`, else the cartridge never fires
  at the option position.
- One engram per llama.cpp / wllama context; several only compose in the PyTorch path.
- The LoRA must be trained to *read* the cartridge (cartridge mounted, synthetic fact sets with rotating
  names) or it will memorise again. First cheap test: withhold one entity from LoRA training, add it via the
  cartridge only, and check the decision picks it (baseline ~0%).

## Proposed demo (browser decision, distinct from the enterprise planner)

A fourth workspace next to Football / Cities / Chat: **Decide**. The user types a request; the page runs
a typed-decision pass (Choice over a small set of actions, plus a Noul "needs clarification?") with the
0.6B decision cartridge, shows the probability bar per option and the confidence, and lets the user mount
or unmount a fact cartridge that changes which options are viable (e.g. a "capabilities" cartridge that
adds an action the base has never seen). Provenance badge as in Chat: did the memory fire on the chosen
option's key? Unmount and the option's probability should collapse to `none_of_these`. That is the
poisoning demo's mirror image: a *legitimate* cartridge changing a decision, auditable per option.

Good candidate task for the page, small enough for a browser and honest about scope: an Intent Studio
pre-flight (classify the request, needs-clarification yes/no, obvious capability gap yes/no) or a personal
data decision (expense category / duplicate / needs-receipt) on data that never leaves the tab.

## Do not carry over

- Anything about Kubernetes-scale serving, calibration thresholds (0.35 / 0.6 / 0.7), Registry pgvector
  candidate sets or `PLANNER_ALLOCATOR`: that is the enterprise planner and lives in `aoa-decide`.
- The 4B/9B checkpoints (Qwen3.5 hybrid bases): not GGUF/wllama material.
