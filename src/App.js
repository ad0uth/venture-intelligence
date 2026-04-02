import { useState, useRef, useEffect } from "react";

const VENTURES = {
  inframarkets: {
    id: "inframarkets",
    name: "Inframarkets",
    color: "#f97316",
    colorDim: "#f9731620",
    colorBorder: "#f9731640",
    sector: "Energy Prediction Markets",
    stage: "Seed · $3M raise",
    valuation: "$15M post-money",
    score: 72,
    verdict: "STRONG INVEST",
    tagline: "The missing financial primitive for the AI & energy supercycle.",
    description: "Institutional-grade event contracts on energy assets — bringing prediction market mechanics to a $1T+ annual energy futures market that current platforms can't touch.",
    metrics: [
      { label: "Raise", value: "$3M seed" },
      { label: "Valuation", value: "$15M post" },
      { label: "Live markets", value: "22" },
      { label: "Volume (demo)", value: "$67.6K" },
      { label: "Launch", value: "Apr 28 2026" },
      { label: "Chain", value: "Solana" },
    ],
    scores: { "Traction": [16,25], "Market": [16,20], "Biz model": [19,20], "Team": [13,15], "Somnia": [6,10], "Upside": [8,10] },
    highlights: [
      { icon: "⚡", title: "Machine Truth oracle", desc: "Deterministic resolution from authoritative data (EPEX Spot, EIA) — not social consensus. No conflicts of interest. Dispute-free by design." },
      { icon: "💧", title: "3-phase liquidity plan", desc: "0% fees + MM rebates → own capital deployment → professional MMs. The only deck in this portfolio with a real answer to the bootstrapping problem." },
      { icon: "🏗️", title: "Platform independent", desc: "Owns entire stack — oracle, CLOB, smart contracts. Zero API dependency risk. No platform can pull the plug." },
      { icon: "💰", title: "Triple revenue model", desc: "0.3% taker fee + 1% settlement fee on winnings + 35% float yield retention. Three proven, aligned streams." },
    ],
    risks: [
      "Energy market distribution is hard — commodity traders are conservative, non-crypto-native buyers. Lorenzo's crypto-native GTM playbook may not translate cleanly.",
      "Only $100K in founder bootstrap capital — thin for a product requiring significant liquidity seeding. Even with $3M raised, ~$1M available for liquidity.",
      "Oracle data infrastructure risk — if EPEX Spot or EIA data is delayed, revised, or access is disrupted, market resolution integrity is compromised.",
      "April 28 2026 product launch is imminent — smart contract audit status unconfirmed in deck. Audit is non-negotiable for a financial product.",
      "Built on Solana — Solana has had multiple network outages historically. A hybrid stack mitigates but doesn't eliminate infrastructure dependency.",
    ],
    team: [
      { name: "Gianluigi", role: "Tech Co-Founder", bg: "2nd-time fintech founder with 10+ years across Europe & LatAm. Ex-N26 Tech Lead (top European neobank). Ex-CTO Klar (Mexican fintech). Brings serious regulated fintech infrastructure experience." },
      { name: "Lorenzo F. Villa", role: "Biz Co-Founder", bg: "Crypto power user since 2016. Led crypto consultancy including Coinbase. Bocconi Fintech Lab. Law graduate — directly relevant for the regulatory navigation this product requires." },
    ],
    advisors: [
      "⚡ Daniele Titotto — Portfolio Manager, Axpo Group (one of Europe's largest energy traders)",
      "🔌 Alex D'Elia — CEO Prosume Energy (grid infrastructure)",
      "🚄 Andrea La Mendola — Ex-COO Hyperloop (operations & management)",
      "🌐 Gabriele Cavargna Bontosi — Web3 Entrepreneur (partnerships)",
      "🏭 [Redacted] Managing Director — Major energy firm",
    ],
    teamNote: "Team also includes 3 developers and 2 designers.",
    report: [
      {
        label: "The core thesis",
        body: "Inframarkets is making a bet distinct from every other prediction market in this group: instead of competing for social bettors or crypto traders, they're targeting a $1T+ annual energy futures market where volatility is surging and risk management tools are expensive and gated. The AI and electrification supercycle is making grid volatility a mainstream economic phenomenon — European TTF gas prices swinging 60%+ intraday, renewable intermittency creating constant price spikes. Inframarkets provides event contracts (up/down on European TTF gas in 5 minutes, WTI-Brent spread at close tomorrow) that let anyone trade this volatility with no minimum contract size, 24/7, settled on-chain via authoritative data. This is not a social bet or a crypto wager — it's a missing financial primitive for the real economy."
      },
      {
        label: "What makes this genuinely different",
        body: "The differentiation vs Polymarket is structural, not cosmetic. Polymarket uses 'social truth' — markets resolve based on what reporters and voters say happened. This creates conflicts of interest, is slow, and is inappropriate for financial instruments. Inframarkets uses 'Machine Truth' — their IOS (Inframarkets Oracle System) resolves markets deterministically from authoritative data sources like EPEX Spot and EIA reports. This is the correct architecture for institutional-grade products. The hybrid stack (off-chain CLOB for order matching, on-chain settlement) gives trading-desk speed with blockchain settlement finality. The live product demo shows 22 markets and $67.6K total volume — modest but real and verifiable."
      },
      {
        label: "Revenue model — clearest of the three",
        body: "Three streams, all clean and proven: 0.3% taker fee on trading volume (competitive with crypto derivatives norms), 1% settlement fee on realised winnings (outcome-based, only paid on winning positions — aligns incentives well), and ~35% retention of yield generated on locked capital (idle USDC in open positions earns stablecoin APY, Inframarkets keeps 35%). This third stream is particularly elegant — it monetises float without charging users directly, similar to how traditional brokerages earn on cash balances. No other deck in this group has revenue mechanics this clearly thought through."
      },
      {
        label: "The liquidity plan — the most important differentiator",
        body: "This is what separates Inframarkets from Tide most sharply. Tide's deck is completely silent on the liquidity bootstrapping problem. Inframarkets has a three-phase plan: Phase 0 (3–12 months post-launch): 0% taker/maker fees, -0.1% rebates for market makers up to $10M/month volume, points programme. Phase 1: deploy own capital to guarantee order execution plus dedicated MMs for specific markets. Phase 2: transition to professional MMs only across all markets. This is a coherent, battle-tested approach used by every successful derivatives exchange. The fact that they've thought through the chicken-and-egg problem and have a capital allocation strategy for it — even with $3M seed — is a meaningful signal of operational maturity."
      },
      {
        label: "Key diligence questions",
        body: "1. What is the smart contract audit status and who is auditing? With an April 28 launch date this is the most time-sensitive question. 2. Are there any institutional trading desk conversations already underway — even informal — that validate the energy sector demand? 3. How exactly does Lorenzo's GTM reach commodity traders who aren't already crypto-native? The personas listed (crypto traders, commodity traders, macro traders, gamblers) span very different acquisition channels. 4. What data provider agreements are formally in place with EPEX Spot and EIA? 5. What is the granular breakdown of how the ~$1M available for liquidity (35% of $3M) will be deployed across which markets in the first six months?"
      },
    ],
    reportVerdict: {
      value: "Strong invest case",
      sub: "Most rigorous pitch in the portfolio. Real problem, technically credible solution, clean revenue model, actual liquidity plan, best sector-credentialed advisory team. The risk/reward is compelling at $3M seed / $15M post. Gate: audit status, data provider agreements, evidence of institutional demand conversations."
    },
    somnia: "Cross-chain compatibility is already on Inframarkets' post-launch roadmap, suggesting they're chain-agnostic by design. High-frequency energy contract settlement — intraday TTF gas contracts update every 5 minutes, generating constant on-chain position tracking, margin calls and settlement events. Somnia's EVM-compatible architecture means an Inframarkets deployment wouldn't require a full rewrite of oracle or settlement logic. Slightly lower fit than Tide/OnePlayr because institutional traders are less sensitive to gas costs than retail consumers — but a meaningful integration opportunity, particularly as Inframarkets expands to retail participation.",
    somniaLabel: "Medium-High",
    somniaPoints: [
      "1M+ TPS handles continuous 5-minute energy market settlement events without bottleneck",
      "Sub-cent transactions make micro-position retail trading economically viable",
      "EVM-compatible — existing Solidity contracts deployable without full rewrite",
      "Cross-chain migration aligns with their existing roadmap milestone",
    ],
    systemPrompt: `You are a senior venture analyst. Deep dive complete on Inframarkets — institutional-grade energy prediction markets.

KEY FACTS: $3M seed, $15M post-money. 22 live markets, $67.6K volume. Product launch Apr 28 2026. Built on Solana with hybrid stack (off-chain CLOB + on-chain settlement). IOS oracle: deterministic resolution from EPEX Spot, EIA reports — "machine truth." Revenue: 0.3% taker fee + 1% settlement fee on winnings + ~35% float yield retention. Liquidity plan — RARE DETAIL: Phase 0 (0% fees, -0.1% MM rebates, points), Phase 1 (own capital + dedicated MMs), Phase 2 (professional MMs only). Team: Gianluigi (ex-N26 Tech Lead, ex-CTO Klar, 2nd-time fintech founder), Lorenzo Villa (crypto 2016+, Coinbase consulting, law graduate). Advisors: Daniele Titotto (Portfolio Manager Axpo Group), Alex D'Elia (CEO Prosume Energy), redacted MD energy firm. Market: $1T+ energy futures/yr US+Europe, $78B EPEX Spot 2025 (+38% 2yr). Key structural advantage: owns entire stack, no platform dependency. Analyst verdict: Strong invest case.

Be direct, analytical, rigorous. Challenge assumptions. Reference specific data.`
  },

  tide: {
    id: "tide",
    name: "Tide",
    color: "#2dd4bf",
    colorDim: "#2dd4bf20",
    colorBorder: "#2dd4bf40",
    sector: "Scalar Prediction Markets",
    stage: "Pre-launch · Seed",
    valuation: "TBD",
    score: 65,
    verdict: "WATCH CLOSELY",
    tagline: "Make Precision Pay.",
    description: "Scalar/continuum prediction markets — bet on the number, not just yes or no. Binary markets force two outcomes; Tide creates 50 tradeable positions per event, each with its own mispricing opportunity.",
    metrics: [
      { label: "SAM", value: "$155B on-chain" },
      { label: "TAM", value: "$1.5T" },
      { label: "SOM", value: "$1.56B" },
      { label: "Launch", value: "Q2 2026" },
      { label: "Polymarket comp", value: "$1B → $8B+" },
      { label: "Kalshi comp", value: "$2B → $11B" },
    ],
    scores: { "Traction": [9,25], "Market": [15,20], "Biz model": [16,20], "Team": [11,15], "Somnia": [9,10], "Upside": [5,10] },
    highlights: [
      { icon: "📐", title: "Scalar vs binary insight", desc: "Binary markets force yes/no. Scalar markets let you bet on a number, range, or magnitude — creating 50 tradeable positions where binary creates 2. More +EV shots per event." },
      { icon: "🔒", title: "Platform independent", desc: "Standalone protocol. No API dependency on X, TikTok or any social platform. Owns its infrastructure end to end. Why Kash was dropped and Tide wasn't." },
      { icon: "⚡", title: "Strongest Somnia fit", desc: "Scalar markets generate more on-chain ops per event than any other prediction format. Economically broken on high-gas chains. Somnia's architecture is required at retail scale." },
      { icon: "📈", title: "Extraordinary comp momentum", desc: "Polymarket: $1B to $8B+ in months. Kalshi: $2B to $11B. Prediction markets are repricing faster than almost any sector in finance right now." },
    ],
    risks: [
      "No liquidity bootstrapping plan disclosed — the most critical unresolved question. Scalar markets are harder to bootstrap than binary ones, requiring counterparties at every point on the curve.",
      "Same 3-person core team building multiple products simultaneously — real bandwidth risk for a technically complex product.",
      "Pre-launch, pre-revenue — no live market traction to anchor conviction. Comparable momentum is compelling but not a substitute for product validation.",
      "Scalar oracle complexity — resolving a precise number (not a binary) requires more complex dispute resolution architecture that isn't detailed in the deck.",
      "Polymarket could add scalar markets as a feature. What is the durable moat if the category leader copies the instrument?",
    ],
    team: [
      { name: "Jo Lim", role: "Product Lead", bg: "DeFi native → operator. Designed DeFi & AI products that raised $10M+. HL KBW 2025 winner." },
      { name: "Othniel Naga", role: "CTO", bg: "Founder/CTO of VTF & TONCASH. Full-stack Web3, risk/infra specialist. HL KBW 2025 winner." },
      { name: "Joshua Ong", role: "Narrative & Community", bg: "Narrative research & community operator. SNS ambassador. HL KBW 2025 winner." },
    ],
    advisors: [
      "Previous ventures raised ~$20M from DeFiance Capital, 500 Startups, Merit Circle, Ton Ventures, Blockchain Founders Fund, LVT Capital",
      "Supported by talent from PwC, Mastercard, Citi, Accenture",
      "Multi-hackathon winners: ETHGlobal SG 2024, ETHTaipei 2024, ETHKL 2023 & 2024, ETHBogota 2023, ETHGlobal Istanbul 2023, Hyperliquid 2025",
    ],
    report: [
      {
        label: "The core thesis",
        body: "Every prediction market today forces a binary choice: yes or no, up or down, will or won't. Tide's argument is that this flattens most of the edge in the world. If you believe Bitcoin will land between $85K and $95K in December — not just 'up' or 'down' — you have no clean way to express that view. Binary markets collapse probability distributions into two buckets; scalar markets let you bet on a number, a range, a duration, a magnitude. The result is more +EV shots per event: a Bitcoin price market on Tide might have 50 distinct positions rather than 2, each with its own mispricing opportunity. This isn't a minor product tweak — it's a fundamentally different financial instrument."
      },
      {
        label: "The comparable momentum case",
        body: "Tide's deck makes smart use of comparables. Polymarket went from a $200M raise at $1B valuation in June 2025 to reports of $12–15B talks by October — a 10-15x move in months. Kalshi went from $2B valuation in June to $11B by November. These are some of the fastest valuation re-ratings in recent financial history, and they validate the prediction market category beyond any reasonable doubt. Tide is pitching at seed stage in a sector repricing at extraordinary velocity. Even a small slice of the SAM ($155B on-chain) generates significant revenue at 0.3–1% take rate."
      },
      {
        label: "The liquidity bootstrapping gap — critical flaw",
        body: "This is where Tide materially underperforms Inframarkets. Inframarkets has a three-phase liquidity plan. Tide's deck is completely silent on the same problem. Scalar markets are harder to bootstrap than binary ones: instead of finding two counterparties, you need counterparties at every point on a continuous curve. A Bitcoin price market with 50 possible outcomes needs liquidity at all 50 points simultaneously for the product to work. Polymarket spent years and significant capital seeding binary markets before they became self-sustaining. Tide needs to solve a harder version of the same problem with no disclosed plan for doing so. This is the single most important thing to pressure-test before investing."
      },
      {
        label: "Platform independence — a key structural advantage",
        body: "Unlike Kash (which was dropped from this shortlist), Tide doesn't depend on any social platform's API policy. This is more significant than it sounds. X has restricted financial bots before. TikTok has shut down creator monetisation tools without notice. Kash's entire distribution model lived and died on platform permission. Tide is a standalone protocol — permissionless, self-hosted, owned infrastructure. This structural independence is a real moat that compounds over time as regulatory pressure on financial activities within social platforms increases."
      },
      {
        label: "Key diligence questions",
        body: "1. What is the actual liquidity bootstrapping plan — is there a market-making arrangement, a liquidity fund, or own capital commitment? This is the most important unanswered question. 2. Given the same team is building both Tide and another product simultaneously, what's the resource allocation split? 3. What's the oracle architecture for scalar resolution — how are disputes handled when authoritative data is unavailable? 4. What is the smart contract audit status and timeline? 5. How does Tide defend its scalar instrument if Polymarket adds scalar markets as a feature?"
      },
    ],
    reportVerdict: {
      value: "Watch closely",
      sub: "Most intellectually compelling product of the three. Strongest Somnia fit. Genuine structural independence. The gap from Inframarkets in conviction terms is almost entirely one thing: Tide needs to present a credible liquidity plan. If they can — even a rough Phase 0 equivalent of Inframarkets' plan — the verdict moves to Strong Invest."
    },
    somnia: "Tide has the strongest Somnia fit of all three ventures. Scalar markets generate more on-chain transactions per event than binary ones — every position adjustment, every partial close, every point on the curve being traded generates an on-chain operation. On a high-gas chain, repositioning a Bitcoin price bet costs $8+ in gas fees. On Somnia's 1M+ TPS, sub-cent transaction architecture, continuous position updates become economically viable. There is a serious argument that Tide should be Somnia-native from day one: the product is genuinely constrained by gas costs on existing chains in a way that the institutional traders of Inframarkets are not.",
    somniaLabel: "Very High",
    somniaPoints: [
      "Continuous scalar position updates across 50 outcome points become economically viable at sub-cent gas",
      "1M+ TPS handles simultaneous position adjustments across many markets without slippage",
      "Retail-scale participation unlocked — small bets that are currently uneconomic become viable",
      "EVM-compatible deployment without full contract rewrite",
      "Could be a flagship Somnia DeFi protocol — genuinely novel financial product category",
    ],
    systemPrompt: `You are a senior venture analyst. Deep dive complete on Tide — scalar/continuum prediction market protocol.

KEY FACTS: Pre-launch, pre-revenue. "Make Precision Pay." Core insight: binary markets flatten edge. Scalar bets on real numbers: price, funding, TVL, OI, spread, on-chain KPIs. TAM $1.5T, SAM $155B on-chain. Comparables: Polymarket $1B→$8B+; Kalshi $2B→$11B in months of 2025. Roadmap: Q2 2026 public launch. Team: Jo Lim, Othniel Naga, Joshua Ong. Multi-ETHGlobal + Hyperliquid 2025 hackathon winners. ~$20M raised across prior ventures. CRITICAL GAP: NO liquidity bootstrapping plan in deck. STRUCTURAL ADVANTAGE: standalone protocol, platform independent, no X/TikTok API dependency risk. Somnia fit: VERY HIGH — scalar markets require constant position updates, economically broken on high-gas chains. Analyst verdict: Watch closely — compelling scalar insight, strongest Somnia fit, but liquidity bootstrapping is existential and must be answered before investing.

Be direct, reference specific data, challenge assumptions.`
  },

  kash: {
    id: "kash",
    name: "Kash",
    color: "#F5C800",
    colorDim: "#F5C80020",
    colorBorder: "#F5C80040",
    sector: "Prediction Markets / Social Finance",
    stage: "Pre-Seed · $2M raised",
    valuation: "Undisclosed",
    score: 58,
    verdict: "WATCH CLOSELY",
    tagline: "If it's trending - it's tradable.",
    description: "Kash is a white-label prediction market platform that embeds directly into social media feeds via an AI-powered bot. Social media brands and KOLs deploy branded prediction markets to their audiences on X in 48 hours, sharing trading revenue with Kash.",
    metrics: [
      { label: "Pre-Seed Raise", value: "$2M" },
      { label: "Market Volume (2025)", value: "$44B industry" },
      { label: "Setup Time", value: "48 hours" },
      { label: "Subscription Fee", value: "$3K-$5K/mo" },
      { label: "Revenue Share", value: "30% of trading fees" },
      { label: "Backers", value: "Coinbase, Animoca, Spartan" },
    ],
    scores: { "Traction": [8,25], "Market": [16,20], "Biz model": [14,20], "Team": [7,15], "Somnia": [7,10], "Upside": [6,10] },
    highlights: [
      { icon: "🤖", title: "Zero friction for end users", desc: "Users predict by replying to posts — no app, no wallet setup, no KYC. The entire prediction experience lives inside the social feed users already use." },
      { icon: "🏷️", title: "B2B white-label model", desc: "Kash sells infrastructure to social brands, not to end users. Partners pay $3-5K/month plus 30% revenue share, deploying branded bots to their own audiences in 48 hours." },
      { icon: "⚡", title: "Permissionless, instant markets", desc: "AI agents create and resolve markets autonomously using zkTLS verification. Any topic becomes a tradeable market in seconds — a structural advantage over Polymarket and Kalshi." },
      { icon: "💰", title: "Strong pre-seed syndicate", desc: "Coinbase Ventures, Animoca Brands, Spartan Group and Sui Foundation participated — investors with real distribution networks in the crypto and gaming ecosystems Kash needs." },
    ],
    risks: [
      "Platform dependency: Kash runs inside X's infrastructure — an API policy change or native prediction market feature from X could disable the product entirely.",
      "Team not yet hired: The deck disclaimer explicitly states key team members are undergoing recruitment and are not yet formally employed — founding team composition post-funding is uncertain.",
      "Liquidity cold-start: New partner deployments face thin two-sided markets with poor pricing, potentially driving poor user experience and partner churn before scale is achieved.",
      "AI oracle disputes: A high-profile incorrect market resolution could destroy community trust overnight — no clear on-chain dispute mechanism is described in the deck.",
      "Regulatory exposure: No licenses or regulatory clearances secured — permissionless approach is a feature now but creates significant legal risk as the platform scales.",
      "Incumbent competition: Polymarket ($9B) and Kalshi ($11B) have the resources to replicate the white-label B2B model if Kash proves the concept works.",
    ],
    team: [
      { name: "Lucas Martin Calderon", role: "Founder & CEO", bg: "Blockchain security for governments and tier-1 banks. Crypto hedge fund HFT strategies. Built the Bonding Curve AMM mechanism from scratch. No disclosed co-founder or named CTO as of deck date." },
    ],
    advisors: [
      "Coinbase Ventures — strategic backer (Base ecosystem)",
      "Animoca Brands — backer (gaming/NFT distribution network)",
      "Spartan Group — backer (crypto-native VC, deep DeFi expertise)",
      "Sui Foundation — backer (potential multi-chain expansion signal)",
      "Big Brain Holdings — backer",
      "Halo Capital — backer",
      "Moonrock Capital — backer",
      "Kosmos Ventures — backer",
      "Polaris Fund — backer",
      "Fabric VC — backer",
    ],
    report: [
      {
        label: "What They Do",
        body: "Kash is a white-label prediction market bot that runs inside social media feeds — currently X, with TikTok and Instagram signaled as future targets. Social media brands and KOLs deploy a branded prediction market bot to their audience in 48 hours without writing any code. Users predict by replying to posts, with no app or wallet required. The AI handles market creation, resolution via zkTLS zero-knowledge proofs, and automatic winner payouts in USDC. Flash markets as short as 15 minutes let partners capitalise on trending moments in real time."
      },
      {
        label: "Business Model",
        body: "Partners pay $3,000/month (12-month deal) or $5,000/month (6-month deal) for a white-labeled prediction bot, plus a 30% revenue share on all trading fees generated by their audience. Kash handles all infrastructure, compliance navigation, and settlement. The subscription provides predictable baseline revenue; the revenue share creates asymmetric upside from high-volume partners. End users are not charged directly — they earn in USDC and $KASH tokens."
      },
      {
        label: "Competitive Position",
        body: "Kash occupies a white space neither Polymarket nor Kalshi fills — the B2B white-label layer. Polymarket curates markets slowly and has no partner program; Kalshi requires CFTC approval for each market and takes weeks to months per launch. Kash creates markets in seconds, is permissionless, and deploys under the partner's brand. The risk: this white space is only defensible while the incumbents focus on their own consumer brands. Polymarket (backed by $2B from ICE) could replicate the B2B model with one product decision."
      },
      {
        label: "Critical Gaps",
        body: "Three flags stand above the rest. The team disclaimer is unusually candid: key hires are not yet formally employed, meaning the company that closes this round may look different from what is presented. Platform dependency on X's API is existential — X could terminate bot functionality without warning or build prediction market features natively. The AI oracle, while technically elegant, has not been stress-tested at scale; a prominent wrong resolution call would damage community trust in a product built entirely on that trust."
      },
      {
        label: "Market Opportunity",
        body: "Prediction market trading volume hit $44-63 billion in 2025 and is tracking toward $100+ billion in 2026. Polymarket and Kalshi hold 97.5% of current volume — Kash frames this as proof of demand rather than a competitive barrier. The real market Kash is targeting is adjacent: the hundreds of millions of social media users who form opinionated communities around sports, crypto, and entertainment but currently have no financial stake in their predictions."
      },
      {
        label: "Key Diligence Questions",
        body: "1. Who is actually employed and building the product today — can we speak to the core engineering team? 2. What is the contractual or commercial relationship with X, and what is the contingency plan if X restricts bot-based financial activity? 3. How does a new partner solve the liquidity cold-start problem — what does month-one trading volume look like realistically? 4. Walk through a disputed market resolution end-to-end — who has final authority and can users be made whole? 5. What is the regulatory strategy as Kash scales past $1M monthly trading volume?"
      },
    ],
    reportVerdict: {
      value: "Watch Closely",
      sub: "Kash has identified a genuine white space in the prediction market ecosystem — the B2B layer that turns any social media community into a branded prediction market without friction. The investor syndicate is credible and the technology is real. However, the team-not-yet-hired disclosure is a material concern, the product is pre-revenue at scale, and the entire business sits on X's API infrastructure with no contractual protection. Track through team formation and the first 3-5 paying partner milestones before committing capital."
    },
    somnia: "Kash is a strong fit for Somnia's infrastructure. Prediction markets require a high volume of small, fast transactions — every user prediction is an on-chain event, every resolution is a settlement, and every payout is a transfer. Kash currently runs on Base, but Somnia's 1M+ TPS and sub-cent transaction costs would allow Kash to sponsor gas fees at a fraction of current cost, enabling genuinely micro-stake markets under $1 that are currently economically unviable. The flash market use case — 15-minute markets on trending topics — requires near-instant finality that Somnia provides. EVM compatibility means the migration path is feasible without a full rebuild.",
    somniaLabel: "High",
    somniaPoints: [
      "Sub-cent transactions make micro-stake prediction markets viable — enabling sub-$1 bets currently uneconomical on Base",
      "1M+ TPS supports flash markets at social scale — millions of concurrent predictions across thousands of active partner bots simultaneously",
      "EVM compatibility means Kash's existing smart contracts and settlement infrastructure migrate with minimal re-engineering",
      "Low settlement cost enables the passive yield product to distribute frequent small USDC rewards economically",
      "High throughput future-proofs TikTok and Instagram expansion — transaction volume at that scale would exceed Base's practical capacity",
    ],
    systemPrompt: `You are a senior venture analyst. Deep dive complete on Kash - a white-label social-native prediction market platform built on Base, targeting social media brands and KOLs as B2B customers.

KEY FACTS: Raised $2M pre-seed in February 2026. Backers include Coinbase Ventures, Animoca Brands, Spartan Group, Sui Foundation, Moonrock Capital, Big Brain Holdings. Founded by Lucas Martin Calderon (blockchain security for govts/tier-1 banks, crypto HFT background, built Bonding Curve AMM from scratch). CRITICAL: Deck disclaimer states team members are undergoing recruitment and NOT YET formally employed - founding team composition post-funding is uncertain. Product runs inside X (Twitter) via @kash_bot - users predict by replying to posts with no app or wallet required. White-label model: partners pay $3K/month (12-month) or $5K/month (6-month) plus 30% revenue share on trading fees. Partners get branded bot deployed in 48 hours. Markets resolved via AI + zkTLS (Reclaim Protocol) zero-knowledge proofs - permissionless and self-custodial. Flash markets as short as 15 minutes. Leverage and passive USDC yield built into protocol. Live partnership: Doppel Games (March 2026) - official prediction market for AI agent battles on X. Product in pre-testnet simulation phase - not yet at scale with paying partners. Industry: $44-63B prediction market volume in 2025; Polymarket ($9B) and Kalshi ($11B) hold 97.5% of market. No regulatory licenses or clearances secured. Kash is a ZeroID Group subsidiary.

Be direct, reference specific data, challenge assumptions, and flag the team-not-yet-hired issue when relevant.`
  }
};

const NAV_ITEMS = ["overview", "highlights", "report", "team", "risks", "somnia", "chat"];

const API_URL = process.env.REACT_APP_API_URL || "/api/chat";

function ScoreRing({ score, color, size = 80 }) {
  const r = 30, circ = 2 * Math.PI * r;
  const offset = circ - (score / 100) * circ;
  return (
    <svg width={size} height={size} viewBox="0 0 80 80">
      <circle cx="40" cy="40" r={r} fill="none" stroke="#e5e7eb" strokeWidth="6"/>
      <circle cx="40" cy="40" r={r} fill="none" stroke={color} strokeWidth="6"
        strokeDasharray={circ} strokeDashoffset={offset}
        strokeLinecap="round" transform="rotate(-90 40 40)"
        style={{ transition: "stroke-dashoffset 1s ease" }}/>
      <text x="40" y="44" textAnchor="middle" fontSize="16" fontWeight="500" fill={color}>{score}</text>
    </svg>
  );
}

function ScoreBar({ label, val, max, color }) {
  return (
    <div style={{ marginBottom: 8 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 3 }}>
        <span style={{ fontSize: 11, color: "#6b7280" }}>{label}</span>
        <span style={{ fontSize: 11, fontWeight: 500 }}>{val}<span style={{ color: "#9ca3af" }}>/{max}</span></span>
      </div>
      <div style={{ height: 4, background: "#f3f4f6", borderRadius: 2 }}>
        <div style={{ height: "100%", width: `${(val/max)*100}%`, background: color, borderRadius: 2, transition: "width 1s ease" }}/>
      </div>
    </div>
  );
}

function ChatMsg({ msg }) {
  const u = msg.role === "user";
  return (
    <div style={{ display: "flex", justifyContent: u ? "flex-end" : "flex-start", marginBottom: 12 }}>
      <div style={{
        maxWidth: "85%", padding: "10px 14px", fontSize: 13, lineHeight: 1.7,
        borderRadius: u ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
        background: u ? "#eff6ff" : "#f9fafb",
        color: u ? "#1d4ed8" : "#111827",
        border: u ? "0.5px solid #bfdbfe" : "0.5px solid #e5e7eb",
        whiteSpace: "pre-wrap"
      }}>
        {msg.content}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div style={{ display: "flex", gap: 4, padding: "10px 14px", background: "#f9fafb", borderRadius: "16px 16px 16px 4px", width: "fit-content", border: "0.5px solid #e5e7eb", marginBottom: 12 }}>
      {[0,1,2].map(i => (
        <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "#9ca3af", animation: `bob 1.2s ${i*0.2}s infinite ease-in-out` }}/>
      ))}
      <style>{`@keyframes bob{0%,80%,100%{transform:translateY(0)}40%{transform:translateY(-6px)}}`}</style>
    </div>
  );
}

const SUGGESTED = {
  inframarkets: [
    "Walk me through the revenue at $10M monthly volume",
    "How does the IOS oracle work and what are its failure modes?",
    "How does Lorenzo actually reach commodity traders?",
    "Make the bull case vs Tide and Kash",
    "What's the smart contract audit status?"
  ],
  tide: [
    "Why is the liquidity bootstrapping problem so critical?",
    "How does Tide's platform independence compare to Kash's platform dependency risk?",
    "What would a credible liquidity plan look like?",
    "Make the case for Tide over Inframarkets",
    "How does Somnia change Tide's economics?"
  ],
  kash: [
    "The deck says the team isn't hired yet — who is actually building this right now?",
    "X could shut down your bot tomorrow — what's the contingency plan?",
    "Walk me through how a new partner solves the liquidity cold-start problem in month one",
    "What happens when the AI oracle resolves a market incorrectly — who has final authority?",
    "How does Kash's regulatory exposure compare to Polymarket and Kalshi?"
  ]
};

function ChatView({ venture: v }) {
  const [msgs, setMsgs] = useState([{
    role: "assistant",
    content: `Analyst briefing on ${v.name} loaded. I have the full deck context, financial model and risk assessment. What do you want to dig into?`
  }]);
  const [inp, setInp] = useState("");
  const [loading, setLoading] = useState(false);
  const bot = useRef(null);

  useEffect(() => { bot.current?.scrollIntoView({ behavior: "smooth" }); }, [msgs, loading]);

  async function send(text) {
    const q = text || inp.trim();
    if (!q || loading) return;
    setInp("");
    const next = [...msgs, { role: "user", content: q }];
    setMsgs(next);
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          system: v.systemPrompt,
          messages: next.slice(1).map(m => ({ role: m.role, content: m.content }))
        })
      });
      const data = await res.json();
      setMsgs(p => [...p, { role: "assistant", content: data.content || "Error." }]);
    } catch {
      setMsgs(p => [...p, { role: "assistant", content: "Error — please try again." }]);
    }
    setLoading(false);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <div style={{ flex: 1, overflowY: "auto", padding: "20px 24px 8px" }}>
        {msgs.length <= 1 && (
          <div style={{ marginBottom: 16 }}>
            <p style={{ fontSize: 12, color: "#6b7280", marginBottom: 10 }}>Suggested questions</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {SUGGESTED[v.id].map((q, i) => (
                <button key={i} onClick={() => send(q)} style={{
                  textAlign: "left", padding: "9px 14px", borderRadius: 10,
                  border: `0.5px solid ${v.colorBorder}`, background: v.colorDim,
                  fontSize: 12.5, color: "#111827", cursor: "pointer", lineHeight: 1.4
                }}>
                  {q} <span style={{ color: v.color }}>↗</span>
                </button>
              ))}
            </div>
          </div>
        )}
        {msgs.map((m, i) => <ChatMsg key={i} msg={m} />)}
        {loading && <TypingDots />}
        <div ref={bot} />
      </div>
      <div style={{ padding: "12px 24px 20px", borderTop: "1px solid #e5e7eb", display: "flex", gap: 10 }}>
        <input
          value={inp}
          onChange={e => setInp(e.target.value)}
          onKeyDown={e => e.key === "Enter" && send()}
          placeholder={`Ask anything about ${v.name}…`}
          disabled={loading}
          style={{ flex: 1, fontSize: 13, padding: "10px 14px", borderRadius: 10, border: `1px solid ${loading ? "#e5e7eb" : v.colorBorder}`, outline: "none", color: "#111827", background: "#fff" }}
        />
        <button onClick={() => send()} disabled={loading || !inp.trim()} style={{
          padding: "10px 20px", borderRadius: 10, fontSize: 13, border: "none",
          background: inp.trim() && !loading ? v.color : "#f3f4f6",
          color: inp.trim() && !loading ? "#fff" : "#9ca3af",
          cursor: inp.trim() && !loading ? "pointer" : "not-allowed",
          fontWeight: 500, transition: "all 0.2s"
        }}>
          Send
        </button>
      </div>
    </div>
  );
}

function VentureDetail({ venture: v, onBack }) {
  const [section, setSection] = useState("overview");

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", background: "#fff" }}>
      {/* Header */}
      <div style={{ padding: "14px 24px", borderBottom: "1px solid #e5e7eb", display: "flex", alignItems: "center", gap: 16, background: "#fff" }}>
        <button onClick={onBack} style={{ padding: "6px 12px", borderRadius: 8, border: "1px solid #e5e7eb", background: "transparent", color: "#6b7280", cursor: "pointer", fontSize: 12 }}>
          ← All ventures
        </button>
        <div style={{ width: 1, height: 20, background: "#e5e7eb" }}/>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ width: 8, height: 8, borderRadius: "50%", background: v.color }}/>
          <span style={{ fontWeight: 500, fontSize: 14 }}>{v.name}</span>
          <span style={{ fontSize: 11, color: "#6b7280" }}>· {v.sector}</span>
        </div>
        <div style={{ marginLeft: "auto", padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 500, background: v.colorDim, color: v.color, border: `1px solid ${v.colorBorder}` }}>
          {v.verdict}
        </div>
      </div>

      {/* Sub nav */}
      <div style={{ display: "flex", padding: "0 24px", borderBottom: "1px solid #e5e7eb", overflowX: "auto", background: "#fff" }}>
        {NAV_ITEMS.map(item => (
          <button key={item} onClick={() => setSection(item)} style={{
            padding: "10px 14px", fontSize: 12, border: "none",
            borderBottom: section === item ? `2px solid ${v.color}` : "2px solid transparent",
            background: "transparent",
            color: section === item ? "#111827" : "#6b7280",
            cursor: "pointer", fontWeight: section === item ? 500 : 400,
            textTransform: "capitalize", whiteSpace: "nowrap"
          }}>
            {item === "chat" ? "💬 Ask analyst" : item === "report" ? "Full report" : item}
          </button>
        ))}
      </div>

      {/* Content */}
      <div style={{ flex: 1, overflow: "hidden", display: "flex", flexDirection: "column" }}>

        {section === "overview" && (
          <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
            <div style={{ display: "flex", gap: 24, marginBottom: 28, flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 280 }}>
                <div style={{ fontSize: 11, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>{v.sector}</div>
                <h2 style={{ fontSize: 28, fontWeight: 600, marginBottom: 10, lineHeight: 1.2, color: "#111827" }}>{v.name}</h2>
                <p style={{ fontSize: 14, color: v.color, fontStyle: "italic", marginBottom: 12, lineHeight: 1.5 }}>"{v.tagline}"</p>
                <p style={{ fontSize: 13.5, lineHeight: 1.8, color: "#4b5563", margin: 0 }}>{v.description}</p>
                <div style={{ display: "flex", gap: 10, marginTop: 16, flexWrap: "wrap" }}>
                  <div style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, border: `1px solid ${v.colorBorder}`, color: v.color, background: v.colorDim }}>{v.stage}</div>
                  <div style={{ fontSize: 11, padding: "4px 10px", borderRadius: 6, border: "1px solid #e5e7eb", color: "#6b7280" }}>{v.valuation}</div>
                </div>
              </div>
              <div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 12, padding: "20px 24px", border: `1px solid ${v.colorBorder}`, borderRadius: 12, background: v.colorDim, minWidth: 180 }}>
                  <ScoreRing score={v.score} color={v.color}/>
                  <div style={{ fontSize: 11, color: "#6b7280", textAlign: "center" }}>Overall score</div>
                  <div style={{ width: "100%" }}>
                    {Object.entries(v.scores).map(([k,[val,max]]) => (
                      <ScoreBar key={k} label={k} val={val} max={max} color={v.color}/>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: 11, fontWeight: 500, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Key metrics</h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))", gap: 10 }}>
                {v.metrics.map((m, i) => (
                  <div key={i} style={{ padding: "12px 14px", background: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb" }}>
                    <div style={{ fontSize: 10, color: "#9ca3af", marginBottom: 4 }}>{m.label}</div>
                    <div style={{ fontSize: 14, fontWeight: 500, color: "#111827" }}>{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {section === "highlights" && (
          <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
            <h3 style={{ fontSize: 11, fontWeight: 500, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 16 }}>What makes this compelling</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14 }}>
              {v.highlights.map((h, i) => (
                <div key={i} style={{ padding: "18px 20px", border: `1px solid ${v.colorBorder}`, borderRadius: 12, background: v.colorDim }}>
                  <div style={{ fontSize: 22, marginBottom: 10 }}>{h.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 6, color: "#111827" }}>{h.title}</div>
                  <div style={{ fontSize: 12.5, color: "#4b5563", lineHeight: 1.6 }}>{h.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "report" && (
          <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
            {v.report.map((s, i) => (
              <div key={i} style={{ marginBottom: 24 }}>
                <div style={{ fontSize: 10.5, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: v.color, marginBottom: 8 }}>{s.label}</div>
                <div style={{ fontSize: 13.5, color: "#374151", lineHeight: 1.85 }}>{s.body}</div>
              </div>
            ))}
            <div style={{ padding: "20px 22px", border: `1px solid ${v.colorBorder}`, borderRadius: 12, background: v.colorDim, marginTop: 8 }}>
              <div style={{ fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.06em", color: v.color, marginBottom: 6 }}>Analyst verdict</div>
              <div style={{ fontSize: 22, fontWeight: 700, color: v.color, marginBottom: 6 }}>{v.reportVerdict.value}</div>
              <div style={{ fontSize: 12.5, color: "#4b5563", lineHeight: 1.65 }}>{v.reportVerdict.sub}</div>
            </div>
          </div>
        )}

        {section === "team" && (
          <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
            <h3 style={{ fontSize: 11, fontWeight: 500, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 16 }}>Core team</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 28 }}>
              {v.team.map((t, i) => (
                <div key={i} style={{ padding: "18px 20px", border: "1px solid #e5e7eb", borderRadius: 12, background: "#f9fafb", display: "flex", gap: 14, alignItems: "flex-start" }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", background: v.colorDim, border: `1px solid ${v.colorBorder}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 14, fontWeight: 600, color: v.color, flexShrink: 0 }}>
                    {t.name[0]}
                  </div>
                  <div>
                    <div style={{ fontWeight: 500, fontSize: 14, marginBottom: 2, color: "#111827" }}>{t.name}</div>
                    <div style={{ fontSize: 11, color: v.color, marginBottom: 6 }}>{t.role}</div>
                    <div style={{ fontSize: 12.5, color: "#4b5563", lineHeight: 1.6 }}>{t.bg}</div>
                  </div>
                </div>
              ))}
              {v.teamNote && (
                <div style={{ padding: "12px 16px", background: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 12.5, color: "#4b5563" }}>{v.teamNote}</div>
              )}
            </div>
            <h3 style={{ fontSize: 11, fontWeight: 500, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Advisors & backers</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {v.advisors.map((a, i) => (
                <div key={i} style={{ padding: "10px 14px", background: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 12.5, color: "#111827", lineHeight: 1.5 }}>
                  {a}
                </div>
              ))}
            </div>
            {v.capitalRaised && (
              <>
                <h3 style={{ fontSize: 11, fontWeight: 500, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em", margin: "24px 0 12px" }}>Capital raised to date</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {v.capitalRaised.map((c, i) => (
                    <div key={i} style={{ padding: "10px 14px", background: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 12.5, color: "#111827", lineHeight: 1.5 }}>
                      {c}
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        )}

        {section === "risks" && (
          <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
            <h3 style={{ fontSize: 11, fontWeight: 500, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 16 }}>Risk register</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 28 }}>
              {v.risks.map((r, i) => (
                <div key={i} style={{ padding: "16px 18px", background: "#fef2f2", borderRadius: 12, border: "1px solid #fecaca", display: "flex", gap: 12 }}>
                  <div style={{ fontSize: 18, flexShrink: 0 }}>⚠️</div>
                  <div style={{ fontSize: 13, color: "#111827", lineHeight: 1.7 }}>{r}</div>
                </div>
              ))}
            </div>
            <div style={{ padding: "20px 22px", border: `1px solid ${v.colorBorder}`, borderRadius: 12, background: v.colorDim }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: v.color, textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Analyst verdict</div>
              <div style={{ fontSize: 22, fontWeight: 600, color: v.color, marginBottom: 4 }}>{v.verdict}</div>
              <div style={{ fontSize: 12.5, color: "#4b5563", lineHeight: 1.6 }}>Score: {v.score}/100 · {v.sector}</div>
            </div>
          </div>
        )}

        {section === "somnia" && (
          <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
            <div style={{ padding: "20px 22px", border: "1px solid #bfdbfe", borderRadius: 12, background: "#eff6ff", marginBottom: 20 }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>
                Somnia network fit — {v.somniaLabel}
              </div>
              <p style={{ fontSize: 13.5, lineHeight: 1.8, color: "#111827", margin: 0 }}>{v.somnia}</p>
            </div>
            <div style={{ padding: "18px 20px", background: "#f9fafb", borderRadius: 12, border: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>What Somnia enables for {v.name}</div>
              {v.somniaPoints.map((point, i) => (
                <div key={i} style={{ display: "flex", gap: 10, fontSize: 12.5, lineHeight: 1.6, marginBottom: 8 }}>
                  <span style={{ color: "#1d4ed8", flexShrink: 0 }}>✓</span>
                  <span style={{ color: "#374151" }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "chat" && <ChatView venture={v} />}
      </div>
    </div>
  );
}

function VentureCard({ venture: v, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        border: `1px solid ${hovered ? v.color : v.colorBorder}`,
        borderRadius: 12, padding: "22px 24px", cursor: "pointer",
        background: hovered ? v.colorDim : "#fff",
        transition: "all 0.2s",
        transform: hovered ? "translateY(-2px)" : "translateY(0)",
        boxShadow: hovered ? `0 8px 24px ${v.colorDim}` : "0 1px 4px rgba(0,0,0,0.04)"
      }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 14 }}>
        <div>
          <div style={{ fontSize: 10, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{v.sector}</div>
          <h2 style={{ fontSize: 22, fontWeight: 600, margin: 0, color: "#111827" }}>{v.name}</h2>
        </div>
        <ScoreRing score={v.score} color={v.color} size={64}/>
      </div>
      <p style={{ fontSize: 12.5, color: "#6b7280", lineHeight: 1.6, margin: "0 0 16px" }}>{v.description}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ padding: "4px 12px", borderRadius: 20, fontSize: 11, fontWeight: 500, background: v.colorDim, color: v.color, border: `1px solid ${v.colorBorder}` }}>
          {v.verdict}
        </div>
        <span style={{ fontSize: 12, color: v.color, fontWeight: 500 }}>Deep dive →</span>
      </div>
    </div>
  );
}

export default function App() {
  const [active, setActive] = useState(null);

  if (active) {
    return <VentureDetail venture={VENTURES[active]} onBack={() => setActive(null)} />;
  }

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif", minHeight: "100vh", background: "#f9fafb", padding: "40px 24px" }}>
      <div style={{ maxWidth: 960, margin: "0 auto" }}>
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>
            Venture Intelligence · April 2026
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 700, marginBottom: 10, color: "#111827", lineHeight: 1.2 }}>
            Top 3 Ventures — Deep Dive
          </h1>
          <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, maxWidth: 580, margin: 0 }}>
            Three ventures assessed across traction, market opportunity, business model, team strength and risk-adjusted upside. Click any card to read the full analyst report and chat with a dedicated research agent.
          </p>
        </div>

        <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
          {Object.values(VENTURES).map(v => (
            <div key={v.id} onClick={() => setActive(v.id)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 14px", borderRadius: 10, border: `1px solid ${v.colorBorder}`, background: v.colorDim, cursor: "pointer" }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: v.color }}/>
              <span style={{ fontSize: 12.5, fontWeight: 500, color: "#111827" }}>{v.name}</span>
              <span style={{ fontSize: 11, color: "#9ca3af" }}>{v.score}/100</span>
            </div>
          ))}
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
          {Object.values(VENTURES).map(v => (
            <VentureCard key={v.id} venture={v} onClick={() => setActive(v.id)}/>
          ))}
        </div>
      </div>
    </div>
  );
}
