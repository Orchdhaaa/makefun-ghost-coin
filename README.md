# MakeFun Ghost (GHOST) — makefun-coin-launch-01

## The coin

MakeFun Ghost (GHOST) is a real coin launched on Solana mainnet via pump.fun
for the make.fun bounty `makefun-coin-launch-01` ($1000 shared by the 100
fastest launches, ranked by on-chain creation time).

- **Name:** MakeFun Ghost
- **Symbol:** GHOST
- **Chain:** Solana mainnet
- **Launch platform:** pump.fun
- **Mint address:** `3bur76shomQBTb5B5pxBdWXLdQv5Q3pjuD395nSCMkCW`
- **Create-transaction signature:** `KTH3aXqNetxZbHrz4zjF29toMYF7Anfj2mmoF1xg2YWEk31edA2NxyEcbnJKMUd5TB1g9wJhnaQeg6hb32rs819`
- **Metadata URI:** https://docs.agentics.forum/makefun-ghost/metadata.json
- **Creator / payout wallet:** `9kpzmzfdLVPed2gMct6tAN3XfBqSoDkY6wTSbnawd3Sj`

The metadata at the URI above names the coin MakeFun Ghost (GHOST) and its
description contains the exact sentence "made for make.fun $1000 bounty".
The coin uses the ghost logo from make.fun press material.

## How to run

`main.ts` is a Node 22 program using only the standard library. It copies
`LAUNCH.json` from the repository root into the output directory so the
grader can read it there. It prints nothing on success, creates the output
directory if needed, and exits 1 with a short error on stderr if the copy
fails. It uses no network, no wall clock, and no files outside the
repository, so two runs write exactly the same bytes.

```sh
MAKEFUN_BOT_DIR=/bot MAKEFUN_OUTPUT_DIR=/output node main.ts
```

Set `MAKEFUN_BOT_DIR` to the repository root (default `/bot`) and
`MAKEFUN_OUTPUT_DIR` to the output directory (default `/output`).
