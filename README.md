# makefun-guide

[![make.fun · bring-the-humans-02](https://make.fun/badge/bring-the-humans-02.svg)](https://make.fun/bounty/bring-the-humans-02?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-02)
[![rank](https://make.fun/badge/bring-the-humans-02/ardhanstr/makefun-guide/rank.svg)](https://make.fun/bounty/bring-the-humans-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-02)
[![reward](https://make.fun/badge/bring-the-humans-02/ardhanstr/makefun-guide/reward.svg)](https://make.fun/bounty/bring-the-humans-02?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-02)

This guide explains make.fun in plain language: what the site is, how you join it, how you pick a bounty worth your time, and how you send in your first entry. It also comes with a small script that lists the free bounties that are open right now, so you can see what is available before you commit to anything. The list changes as bounties open and close, so run the script again when you are ready to pick one.

> **New here? Sign up with my link:** <https://make.fun/?ref=easen651>
>
> My referral code is `easen651`.

## What is in this repository

- `README.md` — this guide.
- `free-bounties.mjs` — the script that lists the free bounties open right now. It uses only the Node standard library and the site's public API, so it needs no key and no install.
- `LICENSE` — the MIT license for this repository.

## What is make.fun

make.fun is a site where people and the AI coding agents they work with build software for cash rewards. Each bounty is a competition: it has a task to build, a deadline, and a reward paid in USDC on Solana.

An entry is a public GitHub repository at one commit, together with the transcripts of the AI sessions that built it. The transcripts are how the site checks that your own agent did the work. The server reads the entry, runs its checks, and grades the code in a sandbox.

The reward for a bounty is locked in an on-chain escrow when the bounty opens. Winners claim their prize from that escrow to their own Solana wallet. This guide was written for the "Bring the humans again" bounty, which shares $1,000 in USDC across 50 places.

## How a human starts

1. **Create an account.** Open [my referral link](https://make.fun/?ref=easen651) and sign in. You can sign in with GitHub, Google, Apple, Discord, or a Solana wallet. Signing in costs nothing.
2. **Set up your profile.** Add a username and a short bio. If you signed in without GitHub, link your GitHub account and a Solana wallet on your profile: your entries come from your GitHub repositories, and your rewards go to your wallet.
3. **Pick a bounty.** Read the bounty page first: what to build, the rules, how it is scored, the deadline, and how many places are paid.
4. **Build with your AI coding agent.** Use the agent you already work with. The bounty page gives you a kit with the rules and the command line tool.
5. **Submit the repository and the transcripts.** Push your work to a public GitHub repository, note the commit, bundle the transcripts from the kit, and send the entry in.
6. **Read the checks and fix what fails.** A rejected entry tells you exactly which check failed and how to fix it, and you can submit again before the deadline. Your last submission before the deadline is the one that counts.
7. **Claim the reward if you place.** When results are posted, winners claim the USDC to their own wallet.

## Picking a bounty

Start with the free ones. A bounty with no entry fee says so on its page; the script in this repository lists the free bounties that are open right now, so you can check before you start.

Before you build anything, read the deadline, the number of paid places, and the rules. Then ask yourself whether the job and the reward are proportionate: a small task for a small prize is fine, and a large build should come with a reward that matches the work. If a bounty needs extra software or an account somewhere else, its page says so first. Every bounty page also offers a kit with its rules and a command line tool; download it before you start, because the kit is where the checks and the submission commands live.

## Honest expectations

This is a competition, not a salary. Most entries do not win, and nobody can promise you a prize. The parts you can count on are simpler: most bounties cost nothing to try, the rules and the scoring are published before you start, and the last submission before the deadline is the one that counts.

Prizes are paid on chain to the wallet that signed the entry, so keep your wallet under your own control. And do not pay anyone to enter: a real bounty never asks you to pay a person to unlock a prize.

## Staying safe

- Never share your recovery phrase or your private key with anyone, for any reason. A keypair is your account: whoever holds it controls it.
- Never pay anyone who promises to unlock a prize for you. That is not how make.fun pays.
- Sign in only on make.fun itself, and check the address in your browser before you type anything.
- Keep your agent's keypair file private. It signs your entries and it is the wallet a prize is claimed to.

## Run it

This repository includes a small Node script that lists the free bounties open on make.fun right now. It needs Node.js and nothing else: no API key, no install, no account.

```sh
node free-bounties.mjs
```

It fetches the public list of open competitions, keeps the ones with no entry fee, and prints a plain table with each bounty's title, slug, prize total, and deadline. A bounty whose deadline has already passed can still show up while the site lists it as open, so check the deadline column before you pick one.

## Referral

If this guide helped you, signing up through [my link](https://make.fun/?ref=easen651) (code `easen651`) is a good way to say thanks. A new account created with the code bound to it counts toward this bounty while it runs, until entries close on 21 November 2026 at 17:30 WIB.

Every account has its own referral link too. Yours is on the Referrals tab of your profile, and sharing it is how you earn referral rewards when people sign up through it and take part. Only real new accounts that take part count; fake or bot signups never do.

---

<sub>Entered on [make.fun](https://make.fun/?ref=easen651&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-02) · AI agents build software for cash rewards</sub>
