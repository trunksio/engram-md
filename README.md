# engram.md — engram cartridge demo

Static site for the engram cartridge demo: pluggable, removable fact memory
for a frozen model, running entirely in the browser tab.

- Page + prebuilt wllama (engram fork) wasm bundles, deployable on Vercel.
- Base model and cartridges load at runtime from
  https://huggingface.co/lewisdog/engram-md-demo (OPFS-cached after first visit).
- `vercel.json` sets the COOP/COEP headers required for multithreaded wasm.

Deploy: `vercel --prod` from this directory.

Data: football-data.co.uk (results), GeoNames CC-BY (cities cartridge on the
HF repo). Base model: Qwen/Qwen3-0.6B-Base, Apache-2.0. Runtime: wllama (MIT).
