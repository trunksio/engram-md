# engram.md

Static site for engram.md: a landing page explaining engram fact cartridges
(`index.html`) and a live in-browser demo (`demo.html`) — pluggable, removable
fact memory for a frozen model, running entirely in the browser tab.

- Page + prebuilt wllama (engram fork) wasm bundles, deployable on Vercel.
- Base model and cartridges load at runtime from
  https://huggingface.co/lewisdog/engram-md-demo (streamed with per-file
  progress bars; browser-cached after first visit).
- Workspaces: Football (base + format LoRA, season cartridges), Cities (bare
  base, 16k-cities cartridge) and Chat (Qwen3-0.6B instruct base with all three
  memories rebuilt against it; the model writes the memory's key, a plain
  completion answers it exactly as audited, the model phrases the value).
- `vercel.json` sets the COOP/COEP headers required for multithreaded wasm.
- Local preview: `node serve.mjs` then http://127.0.0.1:8090
- End-to-end test (from the wllama checkout, which has Playwright):
  `node scripts/test_engram_demo.mjs http://127.0.0.1:8090/demo.html`

Deploy: push to main; Vercel auto-deploys (framework "Other", no build step).

Data: football-data.co.uk (results), GeoNames CC-BY (cities cartridge on the
HF repo). Base model: Qwen/Qwen3-0.6B-Base, Apache-2.0. Runtime: wllama (MIT).
