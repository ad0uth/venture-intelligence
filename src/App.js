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
    simpleExplainer: "Inframarkets is a trading platform for energy prices. Instead of buying expensive futures contracts like large banks do, anyone in the world can bet on whether European gas or oil prices will go up or down in the next five minutes, with no minimum bet size and no broker required. The platform settles bets automatically using real price data from official energy exchanges, so there is no human deciding who wins. It sits at the intersection of two trends: the explosion of betting markets online, and the surging volatility in energy prices driven by AI data centers and the shift to renewables.",
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
        label: "Macro tailwinds: why energy prediction markets now",
        body: "The deck's 'Physics at a Tipping Point' framing is directionally correct. Three structural forces are converging. First, AI data center buildout is creating unprecedented electricity demand volatility — grid operators are dealing with swings they haven't seen before, and that volatility has real economic value. Second, the renewable energy transition creates inherent intermittency: solar and wind output is weather-dependent, making intraday price spikes more frequent. EPEX Spot traded $78B in 2025, up 38% in two years — this is real volume growth, not narrative. Third, the broader prediction market category proved product-market fit in 2025 by clearing $5B+ per week in notional volume. The timing argument for energy-specific markets is strong: the underlying asset class has become more volatile exactly as the infrastructure to trade volatility cheaply has matured."
      },
      {
        label: "Oracle and data risk: what could break the model",
        body: "The Machine Truth claim is only as good as the data behind it. Inframarkets' oracle relies on EPEX Spot for European power prices and EIA reports for US energy data. Three failure modes exist. First, data latency: EPEX Spot data feeds have service-level commitments but not zero-latency guarantees — a 5-minute contract resolving on a delayed feed could create incorrect settlements at scale. Second, data access risk: the deck does not disclose whether formal commercial agreements are in place with EPEX and EIA, or whether they're parsing publicly available feeds. Access to EIA is public, but real-time EPEX Spot data requires paid API agreements. Third, data revision risk: energy price reports are sometimes revised after initial publication. The oracle architecture must handle revision scenarios without retroactively invalidating settled markets. None of these are fatal, but they need to be confirmed in diligence."
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
    somnia: "Cross-chain compatibility is already on Inframarkets' post-launch roadmap, suggesting they're chain-agnostic by design. High-frequency energy contract settlement — intraday TTF gas contracts update every 5 minutes, generating constant on-chain position tracking, margin calls and settlement events. Somnia's EVM-compatible architecture means an Inframarkets deployment wouldn't require a full rewrite of oracle or settlement logic. Slightly lower fit than Tide because institutional traders are less sensitive to gas costs than retail consumers — but a meaningful integration opportunity, particularly as Inframarkets expands to retail participation.",
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
    simpleExplainer: "Most betting and prediction platforms force you to pick between two options: yes or no, up or down. Tide lets you bet on the exact number. Instead of just predicting whether Bitcoin will go up, you can bet it lands between $85,000 and $90,000 at a specific time, with each price range having its own odds and payout. This creates far more ways to win on a single event, and rewards people who have genuine insight rather than just a directional hunch. The product is built on blockchain so it operates without a central company controlling which bets are allowed, and currently targets the same crypto-native audience that has driven platforms like Polymarket to multi-billion valuations.",
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
      { name: "Jo Lim", role: "Product Lead", bg: "DeFi native turned operator. Designed DeFi and AI products that raised $10M+. Hyperliquid KBW 2025 winner." },
      { name: "Othniel Naga", role: "CTO", bg: "Founder/CTO of VTF and TONCASH. Full-stack Web3, risk and infra specialist. Hyperliquid KBW 2025 winner." },
      { name: "Joshua Ong", role: "Narrative & Community", bg: "Narrative research and community operator. SNS ambassador. Hyperliquid KBW 2025 winner." },
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
        body: "Unlike Kash (which was dropped from the shortlist), Tide doesn't depend on any social platform's API policy. This is more significant than it sounds. X has restricted financial bots before. TikTok has shut down creator monetisation tools without notice. Kash's entire distribution model lived and died on platform permission. Tide is a standalone protocol — permissionless, self-hosted, owned infrastructure. This structural independence is a real moat that compounds over time as regulatory pressure on financial activities within social platforms increases."
      },
      {
        label: "CLMSR pricing mechanism: how scalar markets stay liquid",
        body: "Tide uses a Continuous Logarithmic Market Scoring Rule (CLMSR) as their automated market maker — a cost-function AMM that always provides quotes across every tick without requiring matched counterparties. The key insight: instead of needing a buyer for every seller at a specific price, the AMM provides continuous two-sided liquidity across all outcomes simultaneously. The formula C(q) = a * log(sum of exp(qi/a)) ensures probabilities always sum to 1 and costs are path-independent. In practice, this means Tide can launch a market and it will have tradeable quotes immediately, without needing to seed traditional order book depth. The tradeoff: the AMM takes on market risk (specifically, the risk of resolving near the consensus price where most capital is concentrated). How Tide capitalises the AMM and manages this risk is a critical diligence question."
      },
      {
        label: "Key diligence questions",
        body: "1. What is the actual liquidity bootstrapping plan — is there a market-making arrangement, a liquidity fund, or own capital commitment? This is the most important unanswered question. 2. Given the same team is building both Tide and another product simultaneously, what's the resource allocation split? 3. What's the oracle architecture for scalar resolution — how are disputes handled when authoritative data is unavailable? 4. What is the smart contract audit status and timeline? 5. How does Tide defend its scalar instrument if Polymarket adds scalar markets as a feature?"
      },
    ],
    reportVerdict: {
      value: "Watch closely",
      sub: "Most intellectually compelling product of the group. Strongest Somnia fit. Genuine structural independence. The gap from Inframarkets in conviction terms is almost entirely one thing: Tide needs to present a credible liquidity plan. If they can — even a rough Phase 0 equivalent — the verdict moves to Strong Invest."
    },
    somnia: "Tide has the strongest Somnia fit of all ventures. Scalar markets generate more on-chain transactions per event than binary ones — every position adjustment, every partial close, every point on the curve being traded generates an on-chain operation. On a high-gas chain, repositioning a Bitcoin price bet costs $8+ in gas fees. On Somnia's 1M+ TPS, sub-cent transaction architecture, continuous position updates become economically viable. There is a serious argument that Tide should be Somnia-native from day one: the product is genuinely constrained by gas costs on existing chains in a way that institutional traders are not.",
    somniaLabel: "Very High",
    somniaPoints: [
      "Continuous scalar position updates across 50 outcome points become economically viable at sub-cent gas",
      "1M+ TPS handles simultaneous position adjustments across many markets without slippage",
      "Retail-scale participation unlocked — small bets that are currently uneconomic become viable",
      "EVM-compatible deployment without full contract rewrite",
      "Could be a flagship Somnia DeFi protocol — genuinely novel financial product category",
    ],
    systemPrompt: `You are a senior venture analyst. Deep dive complete on Tide — scalar/continuum prediction market protocol.

KEY FACTS: Pre-launch, pre-revenue. "Make Precision Pay." Core insight: binary markets flatten edge. Scalar bets on real numbers: price, funding, TVL, OI, spread, on-chain KPIs. TAM $1.5T, SAM $155B on-chain. Comparables: Polymarket $1B→$8B+; Kalshi $2B→$11B in months of 2025. Roadmap: Q2 2026 public launch. Team: Jo Lim, Othniel Naga, Joshua Ong. Multi-ETHGlobal + Hyperliquid 2025 hackathon winners. ~$20M raised across prior ventures. CRITICAL GAP: NO liquidity bootstrapping plan in deck. Pricing: CLMSR (Continuous Log Market Scoring Rule) — always-on AMM quotes across all outcome ticks, path-independent cost. STRUCTURAL ADVANTAGE: standalone protocol, platform independent, no X/TikTok API dependency risk. Somnia fit: VERY HIGH — scalar markets require constant position updates, economically broken on high-gas chains. Analyst verdict: Watch closely — compelling scalar insight, strongest Somnia fit, but liquidity bootstrapping is existential and must be answered before investing.

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
    simpleExplainer: "Kash lets social media accounts turn their followers into a betting market. A sports channel, crypto influencer, or entertainment brand signs up to Kash and gets a custom prediction bot that runs inside their existing X (Twitter) feed. When they post about a topic, their followers can reply to place bets on the outcome — no app download, no account creation required. The brand keeps a cut of every bet placed, and Kash handles the technology, payouts, and compliance in the background. Think of it as giving any social media audience their own sports book, with Kash acting as the white-label infrastructure provider.",
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
        label: "zkTLS technology: what it is and why it matters",
        body: "Kash resolves markets using zkTLS (zero-knowledge Transport Layer Security), implemented via Reclaim Protocol. In plain terms: when a market needs to resolve against real-world data (did a team win, did a price hit a target), zkTLS generates a cryptographic proof that a specific piece of data was retrieved from a specific website at a specific time, without revealing the full response or relying on a trusted intermediary. This is materially different from Polymarket's UMA oracle (which uses human voters) or Inframarkets' approach (direct authoritative data feeds). The advantage is speed and permissionlessness — any publicly available web data can become an oracle without negotiating data provider agreements. The risk is that zkTLS proofs can be gamed if the underlying website data is itself manipulated or if the proof generation is compromised."
      },
      {
        label: "Critical Gaps",
        body: "Three flags stand above the rest. The team disclaimer is unusually candid: key hires are not yet formally employed, meaning the company that closes this round may look different from what is presented. Platform dependency on X's API is existential — X could terminate bot functionality without warning or build prediction market features natively. The AI oracle, while technically elegant, has not been stress-tested at scale; a prominent wrong resolution call would damage community trust in a product built entirely on that trust."
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

KEY FACTS: Raised $2M pre-seed in February 2026. Backers include Coinbase Ventures, Animoca Brands, Spartan Group, Sui Foundation, Moonrock Capital, Big Brain Holdings. Founded by Lucas Martin Calderon (blockchain security for govts/tier-1 banks, crypto HFT background, built Bonding Curve AMM from scratch). CRITICAL: Deck disclaimer states team members are undergoing recruitment and NOT YET formally employed - founding team composition post-funding is uncertain. Product runs inside X (Twitter) via @kash_bot - users predict by replying to posts with no app or wallet required. White-label model: partners pay $3K/month (12-month) or $5K/month (6-month) plus 30% revenue share on trading fees. Partners get branded bot deployed in 48 hours. Markets resolved via AI + zkTLS (Reclaim Protocol) zero-knowledge proofs - permissionless and self-custodial. Flash markets as short as 15 minutes. Leverage and passive USDC yield built into protocol. Live partnership: Doppel Games (March 2026) - official prediction market for AI agent battles on X. Industry: $44-63B prediction market volume in 2025; Polymarket ($9B) and Kalshi ($11B) hold 97.5% of market. No regulatory licenses or clearances secured. Kash is a ZeroID Group subsidiary.

Be direct, reference specific data, challenge assumptions, and flag the team-not-yet-hired issue when relevant.`
  },

  "eagle-ai": {
    id: "eagle-ai",
    name: "Eagle AI",
    color: "#3b82f6",
    colorDim: "#3b82f620",
    colorBorder: "#3b82f640",
    sector: "AI Inference Acceleration",
    stage: "Seed · Pre-commercial",
    valuation: "Undisclosed",
    score: 72,
    verdict: "WATCH CLOSELY",
    tagline: "The speed layer of AI.",
    description: "Eagle AI has built the world's fastest speculative decoding engine for large language models — achieving 5x latency reduction with no accuracy tradeoff. Already embedded in products from NVIDIA, Meta, AWS, Perplexity and DeepSeek.",
    simpleExplainer: "Eagle AI has built software that makes AI chatbots significantly faster without any loss in quality. When an AI like ChatGPT or Claude generates a response, it creates each word one at a time, which is slow and expensive at scale. Eagle's algorithm predicts multiple words ahead simultaneously, achieving up to five times the speed. The technology is already running inside products from NVIDIA, Meta, AWS, Perplexity, and DeepSeek — processing billions of AI requests per day. Eagle is now turning this into a commercial business by launching a companion chip ($13,999) that any AI company can plug into their existing GPU servers, and a cloud inference network built on top of it.",
    metrics: [
      { label: "Speedup", value: "5x vs vanilla" },
      { label: "HF Downloads (1 model)", value: "104K/month" },
      { label: "Chip cost", value: "$13,999" },
      { label: "Chip throughput", value: "640 tokens/sec" },
      { label: "Chip payback", value: "~1.5 months" },
      { label: "Key users", value: "NVIDIA, Meta, AWS" },
    ],
    scores: { "Traction": [20,25], "Market": [16,20], "Biz model": [12,20], "Team": [14,15], "Somnia": [3,10], "Upside": [7,10] },
    highlights: [
      { icon: "🚀", title: "Proven at production scale", desc: "NVIDIA uses Eagle for 1,000 TPS/user on Blackwell. Meta embedded it in Llama-4 Maverick. DeepSeek V3 uses Eagle-style multi-token prediction. This isn't a demo — it's billions of daily calls." },
      { icon: "🔬", title: "Research-born moat", desc: "EAGLE-1 was peer-reviewed at ICML '24, EAGLE-2 at EMNLP '24, EAGLE-3 at NeurIPS '25. Each version improved on the last. The algorithm is academically defensible, not just engineered." },
      { icon: "💡", title: "EAGLE Chip economics", desc: "$13,999 chip powers a full 8-GPU node, achieves 640 tokens/sec (vs Groq LPU at 560 tokens/sec for $11.4M). Pays for itself in ~48 days. Hardware that actually makes financial sense." },
      { icon: "🤝", title: "NVIDIA + AMD partnerships", desc: "Day-0 EAGLE-4 support on all CUDA platforms via NVIDIA. AMD partnership for chip launch and sales rollout. These are not vague MoUs — they're technical co-development commitments." },
    ],
    risks: [
      "Open-source to commercial transition risk: Eagle was built as open-source research. Moving to a closed-source chip and paid cloud service requires a fundamentally different business motion — developer trust may erode if the community feels abandoned.",
      "Hardware is hard: Chip design, manufacturing, and distribution is capital-intensive and operationally complex. The $13,999 chip prototype must survive supply chain, yield, and reliability challenges before revenue scales.",
      "Algorithm commoditisation: Speculative decoding is increasingly understood by the industry. Meta, Google, and OpenAI all have internal inference acceleration teams. Eagle's lead could narrow as competitors invest.",
      "No Somnia/blockchain fit: Eagle AI operates entirely outside the crypto ecosystem. Investment from a blockchain L1 perspective carries strategic misalignment — the commercial upside exists but not as a Somnia ecosystem play.",
      "Revenue not yet proven: Despite billions of production calls, Eagle has not commercialised at scale. The transition from free open-source to paid chip/cloud is the key unvalidated step.",
      "Single founder concentration: Dr. Hongyang Zhang is the primary researcher and public face. Academic founders sometimes struggle with commercial execution — the team of 16 has not been stress-tested on GTM.",
    ],
    team: [
      { name: "Dr. Hongyang Zhang", role: "Co-Founder", bg: "Tenure-track Professor of AI, University of Waterloo. PhD in ML from Carnegie Mellon University, BSc from Peking University. Five 1st-place finishes at NeurIPS, CVPR, and Google competitions. Google Research Scholar Award. Amazon Research Award. World AI Conference Award (WAICO). Co-author of ZKLLM and ZKDL (fastest zk-AI systems in the world). Team of 16 experienced researchers and engineers." },
    ],
    advisors: [
      "NVIDIA — Day-0 EAGLE-4 support on all CUDA platforms, training integration via TensorRT-LLM",
      "AMD — chip launch partnership and sales rollout, Day-0 AMD software support",
    ],
    report: [
      {
        label: "What Eagle AI actually is",
        body: "Eagle AI is best understood as a software-first inference acceleration company turning into a hardware company. The core product is EAGLE (Extrapolation Algorithm for Greater Language-model Efficiency) — a speculative decoding algorithm that predicts at the feature layer of a language model rather than the token layer. This architectural insight allows a smaller draft model to propose multiple tokens simultaneously, which the larger base model then validates in parallel rather than sequentially. The result: 3-5x latency reduction and 2x throughput improvement with no accuracy tradeoff. EAGLE-1 launched January 2024, EAGLE-2 in June 2024 (adding a dynamic draft tree), EAGLE-3 in March 2025 (adding training-time test and a new scaling law), all peer-reviewed at top ML conferences. EAGLE-4 is in development and described as a major innovation. This is not a startup running demos — it's a research programme with billions of production calls daily."
      },
      {
        label: "The traction case: who actually uses this",
        body: "The user list is remarkable for a sub-3-year-old research project. NVIDIA uses Eagle in their Blackwell chips to achieve 1,000 TPS/user — a publicly announced benchmark. AWS introduced Eagle acceleration support in their cloud inference infrastructure. Perplexity accelerates their flagship Sonar LLM with Eagle. Meta used Eagle in both Llama-4 Maverick and Llama-4 Scout inference, achieving their fastest-ever production speedup for large batch sizes (1.4-2.0x at production scale). DeepSeek V3 uses an Eagle-style multi-token prediction approach in their pre-training architecture. NVIDIA's humanoid robotics platform (Jetson Thor) delivers 3.5x faster inference using Eagle on the Qwen2.5-VL-7B model. One Eagle model for Llama3.1-8B alone receives 104,406 monthly downloads on HuggingFace, exceeding all of DeepSeek V3.1's downloads (93.2K). This is genuine, unprompted adoption by the biggest names in AI."
      },
      {
        label: "The commercial pivot: chip and cloud",
        body: "Eagle is transitioning from open-source research to commercial products. The EAGLE Chip ($13,999) connects to existing GPU nodes via RDMA over ethernet — one chip powers a full 8-GPU node. Specs: 640 tokens/sec/user (vs Groq LPU at 560 tokens/sec for $11.4M), 40% more acceleration on top of Eagle software gains, supports all NVIDIA and AMD GPUs with over-the-air model updates. The payback math is compelling: at batch size 64 on Llama-3 70B inference at $0.00026/request, the chip generates enough extra revenue to pay for itself in 48.5 days and pays off the entire $300K H100 node 12 months faster than without it. EAGLE Net is the inference network built on top — only served on GPUs with Eagle Chips attached, creating a supply moat. Roadmap: Q2 2026 private chip sale, Q3 2026 global public sale and cloud production launch."
      },
      {
        label: "The competitive moat: why this is hard to replicate",
        body: "Eagle's moat has three layers. First, academic credibility: the algorithm was published at ICML, EMNLP, and NeurIPS — venues where fraud is essentially impossible. Any competitor must engage with the underlying research, not just reverse-engineer the product. Second, the data flywheel: the more deployments Eagle has, the better the training data for the draft model, and the better EAGLE-4 and future versions will be. Third, the NVIDIA and AMD integration partnerships: Day-0 support on CUDA and ROCm platforms means every new chip generation ships with Eagle natively enabled — this is a significant distribution lock-in. The open-source heritage is also a moat in reverse: the community has built significant tooling on top of Eagle's HuggingFace models, creating switching costs for the 'thousands of AI builders' using it."
      },
      {
        label: "Risk: the open-to-closed transition",
        body: "Eagle's biggest strategic risk is the move from open-source to commercial. The developer community that adopted Eagle did so because it was free, academically rigorous, and community-supported. Closing the source code and charging for chips risks a fork: if the community creates an open-source equivalent (as happened with LLaMA and many other open-source AI projects), Eagle's commercial moat erodes. This transition is being managed carefully — Eagle software on GPU is still available, and the chip is presented as additive rather than a replacement. But the EAGLE Net, which only serves inference on Eagle Chip nodes, is a potential point of contention. How Eagle communicates and manages this transition will determine whether the community remains a distribution asset or becomes a competitive liability."
      },
      {
        label: "Somnia fit and the blockchain question",
        body: "Eagle AI is almost entirely disconnected from the blockchain ecosystem. The inference acceleration technology operates at the GPU hardware and software level — there is no on-chain component, no token, and no natural integration with EVM-compatible chains. The one theoretical connection is the emerging field of on-chain AI verification (where zkML and zkLLM proofs require fast inference), and notably Dr. Zhang is co-author of ZKLLM and ZKDL — suggesting the team has thought about this intersection. But as an investment from Somnia's perspective, Eagle AI is a general AI infrastructure bet with no near-term Somnia ecosystem synergies. The investment thesis stands or falls on the AI compute market alone."
      },
    ],
    reportVerdict: {
      value: "Watch closely",
      sub: "Exceptional research pedigree, proven production adoption, and a compelling chip economics story. The Somnia fit is essentially zero — this is a pure AI infrastructure play. The key bet is whether Dr. Zhang's team can execute a hardware GTM motion that most academics fail at. Worth tracking closely for the next 6-12 months as chip sales begin."
    },
    somnia: "Eagle AI has no direct connection to the Somnia ecosystem. The technology operates at the GPU and server level — inference acceleration for large language models running on traditional computing infrastructure. The only speculative link is Eagle's involvement in zero-knowledge ML (Dr. Zhang co-authored ZKLLM and ZKDL, the fastest zk-AI systems) which could eventually intersect with on-chain AI verification on Somnia. But this is theoretical at best. Eagle AI should be evaluated purely as an AI infrastructure investment, not as a Somnia ecosystem play.",
    somniaLabel: "Low",
    somniaPoints: [
      "No direct on-chain component — Eagle operates at GPU and server infrastructure level",
      "Speculative connection: Dr. Zhang co-authored ZKLLM/ZKDL (fastest zk-AI) — on-chain AI verification is a possible future bridge",
      "EVM compatibility is irrelevant to Eagle's core product",
      "Investment value is independent of Somnia ecosystem growth",
    ],
    systemPrompt: `You are a senior venture analyst. Deep dive complete on Eagle AI — AI inference acceleration via speculative decoding.

KEY FACTS: Eagle AI built EAGLE algorithm (speculative decoding that predicts at feature layer, not token level). Results: 5x latency speedup, 2x throughput, zero accuracy tradeoff. Versions: EAGLE-1 (Jan 2024, ICML '24, 3x speed), EAGLE-2 (Jun 2024, EMNLP '24, 4x, dynamic draft tree), EAGLE-3 (Mar 2025, NeurIPS '25, 5x, new scaling law), EAGLE-4 (coming). Users: NVIDIA (1,000 TPS/user on Blackwell), Meta (Llama-4 Maverick + Scout production inference), AWS (ND inference support), Perplexity (Sonar LLM), DeepSeek V3 (multi-token prediction inspired by EAGLE). HuggingFace: 104K monthly downloads for just one model (exceeds DeepSeek V3.1's 93.2K). Commercialising: EAGLE Chip ($13,999, 640 tokens/sec, 1 chip powers 8-GPU node, 48.5 day payback) and EAGLE Net (inference network, Eagle Chip only). Partners: NVIDIA (Day-0 CUDA support), AMD (chip launch + sales). Team: Dr. Hongyang Zhang (CMU PhD, tenure-track Waterloo, 5x NeurIPS/CVPR winner, Google Scholar Award) + 16 researchers/engineers. Roadmap: Q2 2026 chip private sale, Q3 2026 global public sale. Somnia fit: LOW — pure AI infrastructure play. Analyst verdict: Watch closely — exceptional traction, critical question is hardware GTM execution.

Be direct, reference specific data, challenge assumptions.`
  },

  polaris: {
    id: "polaris",
    name: "Polaris Finance",
    color: "#8b5cf6",
    colorDim: "#8b5cf620",
    colorBorder: "#8b5cf640",
    sector: "DeFi / Yield Infrastructure",
    stage: "Seed · $3M raise (SAFT)",
    valuation: "TBD",
    score: 57,
    verdict: "HIGH POTENTIAL",
    tagline: "The yield layer for Ethereum.",
    description: "Polaris builds a self-sustaining yield infrastructure for Ethereum — a system where returns are generated from protocol activity itself (bonding curve fees, conversions) rather than from external investments or leverage, with no counterparty risk.",
    simpleExplainer: "Polaris Finance is building a new kind of savings product for people who hold Ether, the cryptocurrency that powers the Ethereum network. The problem it solves: most crypto savings accounts today either pay low rates tied to traditional government bonds, or hide risks by betting on crypto prices through centralised exchanges. Polaris creates a system where the interest you earn comes from fees generated by people trading in and out of the product itself — similar to how a toll road earns money from traffic, not from external investments. The more people use Polaris, the more fees are generated, and the higher the yield, creating a self-reinforcing loop with no central company controlling your funds.",
    metrics: [
      { label: "Raise", value: "$3M SAFT" },
      { label: "Chain", value: "Ethereum" },
      { label: "Forecast APY (pUSD)", value: "8.5%+" },
      { label: "Mainnet", value: "Q4 2026" },
      { label: "Research", value: "18 months" },
      { label: "Advisor", value: "Liquity Founder" },
    ],
    scores: { "Traction": [4,25], "Market": [15,20], "Biz model": [14,20], "Team": [12,15], "Somnia": [6,10], "Upside": [6,10] },
    highlights: [
      { icon: "🔄", title: "Endogenous yield — no external risk", desc: "Yield comes from bonding curve trading fees and conversion mechanics within the protocol itself, not from lending to centralised exchanges or buying T-bills. No counterparty, no off-chain exposure." },
      { icon: "📈", title: "Scalable yield", desc: "Unlike RWA-backed stablecoins capped by T-bill rates (currently falling) or basis trade arb hitting its ceiling, Polaris yield scales with protocol adoption — more users = more fees = higher APY." },
      { icon: "🏛️", title: "Ex-Liquity DNA", desc: "CTO Laurens Kessenich is an ex-Liquity developer. Liquity is one of the most technically respected DeFi protocols ever built. Robert Lauko (Liquity founder) is an advisor. This lineage carries real credibility." },
      { icon: "⚖️", title: "Competitive rate at lower risk", desc: "Forecast 90d APY: pUSD 8.5%+ vs USDe at 4.75%, USDS at 4.19%, BOLD at 6.5%. Better rate with none of USDe's centralised exchange counterparty risk or USDS's T-bill ceiling." },
    ],
    risks: [
      "Pre-launch with zero traction: 18 months of research and modelling, but no live product, no users, no audits. Everything is theoretical until Q4 2026 mainnet.",
      "Stablecoin graveyard: The history of DeFi is littered with failed stablecoin projects. UST/LUNA (Terra) collapsed in 2022 with similar endogenous yield mechanics. The design must survive stress scenarios not captured in models.",
      "Yield compression risk: If adoption stalls, fees fall, APY drops, users leave, fees fall further. The self-reinforcing loop works both ways. A confidence shock at any stage could cause a death spiral.",
      "Ethereum-native concentration: 'The Yield Layer for Ethereum' is both a positioning strength and a constraint. Ethereum DeFi TVL is the prize, but it also locks Polaris into Ethereum ecosystem dynamics and competition.",
      "Audit and security risk: Complex tokenomics involving bonding curves, pETH conversions, and vePOLAR vote-escrow mechanics create a large attack surface. A single smart contract exploit could be terminal.",
      "Competitive density: Ethena (USDe), MakerDAO (USDS), Liquity (BOLD) all compete in the yield-bearing stablecoin space with established TVL, brand recognition, and community trust.",
    ],
    team: [
      { name: "Robert Mullins", role: "CEO (Co-Founder)", bg: "7 years in crypto and VC. Previously at Jumper Exchange (cross-chain aggregator). Brings product and go-to-market experience in DeFi." },
      { name: "Laurens Kessenich", role: "CTO (Co-Founder)", bg: "PhD in Physics from ETH Zurich. 7 years in crypto. DeFi founder. Ex-Liquity developer — direct experience building one of the most technically rigorous stablecoin protocols in existence." },
      { name: "TokenBrice", role: "Growth (Co-Founder)", bg: "7 years in crypto. Contributor to DeFiScan, Liquity, and Paraswap. Deep DeFi community relationships. Running growth for multiple respected DeFi protocols." },
    ],
    advisors: [
      "Robert Lauko — Liquity Founder (research advisor, one of the most respected stablecoin architects in DeFi)",
      "Jim Maricondo — Ex-Consensys Japan Lead",
      "Ex-Liquity development team — 15+ years stablecoin development experience across the broader team",
    ],
    report: [
      {
        label: "The core thesis: why DeFi yields have hit a ceiling",
        body: "Polaris's pitch starts with a diagnosis that is directionally correct. The three dominant yield sources in DeFi stablecoins have all hit natural limits. Basis trade arbitrage (selling perpetual futures against spot to capture funding rate) generated 20%+ yields in 2024 but has compressed toward 4-5% as capital flooded the trade. Real-world asset backing (T-bills, treasuries) is capped by prevailing interest rates — currently falling as the Fed cuts. Endogenous yield from lending protocols (Aave, Compound) fluctuates with market conditions and has not scaled past single digits at meaningful TVL. The stablecoin market has grown to $180B+ in supply, but the yield problem gets harder to solve the larger it gets. Polaris is proposing a fourth source: yield generated by the protocol's own economic activity, independent of external rates or leverage."
      },
      {
        label: "The mechanics: pETH, pUSD, and POLAR",
        body: "Polaris operates as a three-asset system. pETH is minted by depositing ETH into a bonding curve — meaning the price increases as more is minted. This creates a structural incentive to mint early and a continuous fee stream as users buy and sell pETH along the curve. pUSD is an over-collateralised stablecoin minted using pETH as collateral — users deposit pETH to borrow pUSD, paying an interest rate that flows to POLAR holders. POLAR is the governance token, earning real yield from all protocol fees via vote-escrow (lock POLAR to receive vePOLAR, which accumulates a share of all borrower interest and trading fees). The forecast 90d APY for pUSD is 8.5%+ and pETH at 4.03%, comparing favourably against Ethena (4.75%), MakerDAO (4.19%), and Liquity BOLD (6.5%) — with none of USDe's centralised exchange counterparty risk."
      },
      {
        label: "Team credibility: the Liquity connection",
        body: "The single most credible signal in Polaris's pitch is the Liquity lineage. Liquity is widely considered one of the best-designed DeFi protocols — immutable, governance-minimised, over-collateralised, zero interest rate. Its mechanics are studied by DeFi researchers as a benchmark for honest protocol design. Laurens Kessenich (CTO) was a Liquity developer; Robert Lauko (Liquity founder) is a Polaris advisor. This matters for three reasons: first, it signals genuine protocol design competence, not just copy-paste DeFi. Second, it provides access to Liquity's community and user base for early GTM. Third, it gives Polaris a credibility anchor when approaching DeFi protocols for integration partnerships. The '15+ years of stablecoin development experience' claim across the team is plausible given this lineage."
      },
      {
        label: "GTM and the path to $5B TVL",
        body: "The GTM plan is staged: Protocol Launch (months 1-6) targeting $300M TVL through vault integrations, lending market partnerships, and DAO/treasury relationships. DeFi Expansion (months 6-18) targeting $1B TVL via L2 expansion and StablecoinOS licensing to other protocols. Institutional Scale (year 2-3) targeting $5B TVL through crypto-native funds and market makers. TradFi (year 3+) targeting $20B+ TVL from asset managers and banks. The early stages are plausible — DeFi protocols integrating yield-bearing stablecoins is a well-established distribution channel (Aave, Curve, Uniswap integrations). The institutional and TradFi stages are speculative and depend heavily on regulatory environment and brand-building that hasn't started yet."
      },
      {
        label: "The Terra/Luna ghost: what Polaris must prove it isn't",
        body: "Any DeFi protocol with endogenous yield mechanics must answer the Terra/Luna question. UST (Terra's stablecoin) also offered high yields generated from protocol activity, also claimed no counterparty risk, and collapsed entirely in May 2022 in what became the largest DeFi failure in history. The key difference Polaris must prove: Polaris yield comes from real fees paid by real users making real transactions, not from a circular tokenomics system dependent on new money flowing in to sustain yields. The bonding curve model is mathematically cleaner than Anchor Protocol's approach — but the stress test scenarios (30% market crash, liquidity crunch, simultaneous redemption pressure) have not been publicly stress-tested. The 18 months of research and modelling is encouraging; the absence of an audit or public model release is a gap."
      },
      {
        label: "Key diligence questions",
        body: "1. Can you share the stress test scenarios from the 18 months of modelling, specifically the conditions under which pUSD loses its peg? 2. Who are the specific vault and lending market partners lined up for Protocol Launch — are there LOIs or just conversations? 3. How does the protocol handle a scenario where ETH drops 50% and pETH holders attempt mass redemption simultaneously? 4. What is the audit timeline and which firms are engaged? 5. Is the StablecoinOS licensing model already in discussion with any other protocols, or is it a future hypothesis?"
      },
    ],
    reportVerdict: {
      value: "High potential",
      sub: "Genuinely novel yield mechanism, strong Liquity lineage, real competitive APY advantage, and a growing stablecoin market. The risk is almost entirely execution and market confidence. This is a Q4 2026 mainnet story — track through audit completion and first $100M TVL milestone before committing significant capital."
    },
    somnia: "Polaris Finance is built as 'The Yield Layer for Ethereum' — explicitly Ethereum-native. However, the StablecoinOS licensing model in their GTM suggests they intend to expand the underlying primitive to other chains. Somnia as an EVM-compatible L1 with high throughput is a realistic expansion target: DeFi protocols need fast liquidation processing (at high TVL, slow liquidations create bad debt), sub-cent transaction fees to make small-position management viable, and EVM compatibility for contract portability. pUSD as a yield-bearing stablecoin on Somnia could provide native DeFi yield infrastructure that the Somnia ecosystem currently lacks.",
    somniaLabel: "Medium",
    somniaPoints: [
      "EVM-compatible: pETH, pUSD and POLAR contracts portable to Somnia without full rewrite",
      "High TPS enables fast liquidation processing — critical for over-collateralised stablecoin safety at scale",
      "Sub-cent transactions make small-position pUSD management economically viable for retail users",
      "StablecoinOS licensing model in GTM plan explicitly envisions multi-chain expansion",
      "pUSD on Somnia would provide native yield-bearing stablecoin infrastructure the ecosystem needs",
    ],
    systemPrompt: `You are a senior venture analyst. Deep dive complete on Polaris Finance — DeFi yield infrastructure for Ethereum.

KEY FACTS: $3M seed via SAFT, Q1 2026 close. Mainnet Q4 2026. Three-asset system: pETH (ETH bonding curve derivative), pUSD (over-collateralised stablecoin), POLAR (governance token, vePOLAR vote-escrow). Yield sources: bonding curve trading fees + pETH-to-POLAR conversion fees + borrower interest rates. Forecast 90d APY: pUSD 8.5%+, pETH 4.03% — better than USDe (4.75%), USDS (4.19%), BOLD (6.5%), with no centralised exchange counterparty risk. Team: Robert Mullins (CEO, 7y crypto, Jumper Exchange), Laurens Kessenich (CTO, PhD Physics ETH Zurich, ex-Liquity developer), TokenBrice (Growth, Liquity/Paraswap). Advisor: Robert Lauko (Liquity founder). GTM: $300M TVL (months 1-6), $1B TVL (months 6-18), $5B TVL (year 2-3) via vaults, lending markets, L2 expansion. CRITICAL RISK: stablecoin graveyard history — must prove it isn't Terra/Luna. No live product, no audits, 18 months of research. Somnia fit: MEDIUM — EVM-compatible, StablecoinOS expansion could include Somnia.

Be direct, reference specific data, challenge assumptions. Always ground the Terra/Luna question when relevant.`
  },

  texochat: {
    id: "texochat",
    name: "Texochat",
    color: "#10b981",
    colorDim: "#10b98120",
    colorBorder: "#10b98140",
    sector: "Web3 Messaging",
    stage: "Pre-launch · Seeking seed",
    valuation: "Undisclosed",
    score: 31,
    verdict: "PASS",
    tagline: "Experience secure and private messaging.",
    description: "Texochat is building a decentralised messaging platform for crypto users — storing messages on IPFS, enabling in-chat token and NFT transfers, and providing a white-label widget for crypto projects to embed community chat.",
    simpleExplainer: "Texochat is building a messaging app designed specifically for cryptocurrency users. Unlike regular apps like WhatsApp or Telegram, it lets users send digital assets like tokens and NFTs directly through chat, stores messages on decentralised networks rather than company servers, and rewards users for their activity. It also offers a chat widget that crypto projects can embed on their own websites. Think of it as Telegram rebuilt for crypto holders, where no central company controls your messages or data — but the product and team are at a very early stage, and the deck does not identify who is building it.",
    metrics: [
      { label: "Crypto owners (global)", value: "560M" },
      { label: "Crypto messaging users", value: "10M/month" },
      { label: "Asia-specific SAM", value: "2M users" },
      { label: "Token sale", value: "17% allocated" },
      { label: "Beta", value: "Q1 2026 (testnet)" },
      { label: "Public sale", value: "Q2 2026" },
    ],
    scores: { "Traction": [2,25], "Market": [10,20], "Biz model": [7,20], "Team": [2,15], "Somnia": [7,10], "Upside": [3,10] },
    highlights: [
      { icon: "💬", title: "In-chat asset transfers", desc: "Users can send tokens and NFTs directly within conversations — a genuine feature gap vs Telegram. No need to copy-paste wallet addresses or leave the chat." },
      { icon: "🔒", title: "IPFS message storage", desc: "Messages stored on IPFS and user devices rather than centralised servers. No single point of control or censorship, which matters to crypto communities that have been deplatformed before." },
      { icon: "🧩", title: "Embeddable widget", desc: "Chat widget for crypto project websites — allows communities to communicate without requiring users to download a separate app. B2B distribution channel that sidesteps cold-start user acquisition." },
      { icon: "🏦", title: "Multi-chain staking", desc: "Staking integration with LidoFi and in-app reward distribution. Combines communication and yield in one interface, which is relevant to DeFi-native users." },
    ],
    risks: [
      "No identified team: The pitch deck does not name a single team member, founder, or technical lead. This is a fundamental gap — there is no way to assess execution capability.",
      "Telegram already dominates: Telegram has 900M+ users, deep crypto-native penetration, a bot ecosystem, and has been adding Web3 features (Telegram Wallet, TON integration). The switching cost argument is thin.",
      "Token sale funding model: The deck allocates 17% to tokensale and positions a Q2 2026 public token sale as a near-term milestone. This suggests the business model relies heavily on token sale proceeds rather than earned revenue.",
      "No traction or product evidence: No user numbers, no pilot partners, no beta waitlist size, no GitHub, no product screenshots beyond diagrams. The deck is entirely pre-product.",
      "Thin differentiation: XMTP, Status, Element, and Waku are all building decentralised messaging with far larger teams, more funding, and more technical rigour. The deck does not address why Texochat wins.",
      "Regulatory risk on in-chat asset transfers: Enabling token transfers within a messaging app creates MSB (money services business) licensing requirements in most jurisdictions — not addressed in the deck.",
    ],
    team: [
      { name: "Unknown", role: "Undisclosed", bg: "No team members named in the pitch deck. The only contact information provided is admin@texochat.com and a Telegram/X handle (@chat_texo). This is a significant red flag for a seed-stage investment evaluation." },
    ],
    advisors: [],
    report: [
      {
        label: "What Texochat is (and isn't)",
        body: "Texochat is positioning itself as a privacy-first, Web3-native messaging platform. The core claim: traditional messaging apps are broken for crypto users because they don't support asset transfers, they store data on centralised servers, and they can censor or ban communities. Texochat proposes: messages on IPFS + user devices (no central storage), in-chat token and NFT transfers, multi-chain staking within the app, and an embeddable widget for crypto project communities. The widget model is the most interesting distribution angle — rather than competing for direct messaging installs against Telegram, it gives crypto projects a tool to embed community chat on their own domains without requiring users to download anything. Whether that's a strong enough wedge to build from is the central question."
      },
      {
        label: "The Telegram problem",
        body: "Any messaging platform targeting crypto users must answer why it beats Telegram. Telegram has 900M+ monthly active users. The crypto community runs almost entirely on Telegram — project announcements, community management, alpha groups, developer channels. Telegram has added TON blockchain integration, Telegram Wallet, and bot-based mini apps. It has network effects that took a decade to build. The deck does not mention Telegram or explain why crypto communities would move. The features Texochat offers (NFT transfers, IPFS storage, in-chat staking) are meaningful improvements but are features Telegram could add. The only durable differentiation would be true censorship resistance and self-sovereign data — but the deck does not make a rigorous case for why these matter enough to drive switching."
      },
      {
        label: "Business model analysis",
        body: "Three revenue streams are described: transaction fees on wallet transfers within chat, service fees for paid features like airdrop tools and rewards, and B2B solutions via the chat widget. The transaction fee model has precedent (LINE Pay, WeChat Pay both monetise in-chat payments) but requires meaningful transaction volume first. The B2B widget is the cleaner near-term revenue model — established crypto projects paying for embedded community tools is a believable enterprise sale. The token sale component (17% allocated, Q2 2026 public sale) suggests the business is currently funded or expects to be funded by token proceeds rather than product revenue, which introduces regulatory and market risk."
      },
      {
        label: "Critical gaps",
        body: "Three issues stand above everything else. First: no named team. A messaging platform requires security expertise, cryptography knowledge, distributed systems engineering, and regulatory awareness. The deck provides zero information about who has these skills. Second: no product evidence. No screenshots of a working product, no GitHub repository, no beta users, no technical whitepaper. The deck is entirely wireframes and feature lists. Third: undifferentiated narrative. The 'Web3 messaging' space has attracted over $500M in venture investment across XMTP (Coinbase ecosystem), Status (Swiss foundation, 10 years of development), Element (Matrix protocol), and others. Texochat does not acknowledge these competitors or explain why their approach is architecturally superior."
      },
      {
        label: "Somnia fit: the only clear positive",
        body: "A decentralised messaging platform that processes every message as an on-chain transaction requires extremely high throughput and near-zero transaction fees to be viable. At the scale of even a small community (10K users, 100 messages per day each = 1M daily transactions), gas fees on Ethereum mainnet or Base would be prohibitive. Somnia's 1M+ TPS and sub-cent transaction costs are precisely the infrastructure profile that decentralised messaging needs. EVM compatibility would allow the team to deploy smart contracts for token transfers and staking without a full rebuild. This is the strongest Somnia fit argument — but it only matters if the product and team can be substantiated."
      },
    ],
    reportVerdict: {
      value: "Pass",
      sub: "Texochat identifies a real problem but offers no evidence of the team, product, or differentiation needed to solve it. The deck is thinner than any other in this group, and the unnamed team is a disqualifying factor for a seed-stage evaluation. Re-evaluate if the team identifies itself and a working product is demonstrated."
    },
    somnia: "Decentralised messaging requires exactly the infrastructure profile Somnia provides: high transaction throughput (every message sent is an on-chain event), sub-cent transaction fees (users cannot pay $0.10 per message to chat), and EVM compatibility for token transfer smart contracts. If Texochat builds a functioning product, Somnia would be a natural home for it — the product is fundamentally unviable on high-gas chains and ideally suited to Somnia's architecture. The Somnia fit is high in theory; the execution risk makes it conditional.",
    somniaLabel: "Medium-High",
    somniaPoints: [
      "Every message = one on-chain transaction: sub-cent fees are required for any viable messaging product",
      "1M+ TPS handles large community chat volumes without latency",
      "In-chat token and NFT transfers require fast, cheap on-chain settlement",
      "EVM-compatible deployment means existing Solidity payment contracts are portable",
    ],
    systemPrompt: `You are a senior venture analyst. Deep dive complete on Texochat — Web3 decentralised messaging platform.

KEY FACTS: Pre-launch, seeking seed. No named team members in deck — critical red flag. Product: messaging app with IPFS message storage, in-chat token and NFT transfers, embeddable widget for crypto project websites, multi-chain staking with LidoFi integration. Revenue: transaction fees + service fees + B2B widget. Token: 50% platform, 17% team/reserve, 13% tokensale, 14% partner — Q2 2026 public token sale planned. Market: 560M crypto owners globally, 10M active crypto messaging users/month. Timeline: Q1 2026 testnet beta, Q2 2026 public sale. Competition: Telegram (dominates crypto messaging, 900M+ MAU), XMTP, Status, Element — all unaddressed in deck. Somnia fit: HIGH in theory — messaging on blockchain requires high TPS and sub-cent fees. Analyst verdict: Pass — no team, no product, no differentiation case made.

Be direct, honest about gaps. The unnamed team is the primary red flag to address.`
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
    "How does Lorenzo actually reach commodity traders who aren't crypto-native?",
    "Make the bull case vs Tide and Kash",
    "What's the smart contract audit status and who is auditing?"
  ],
  tide: [
    "Why is the liquidity bootstrapping problem so critical for scalar markets specifically?",
    "Explain the CLMSR mechanism — how does the AMM always provide quotes?",
    "What would a credible Phase 0 liquidity plan look like for Tide?",
    "Make the case for Tide over Inframarkets",
    "How does Somnia change Tide's unit economics at retail scale?"
  ],
  kash: [
    "The deck says the team isn't hired yet — who is actually building this right now?",
    "X could shut down your bot tomorrow — what's the contingency plan?",
    "Walk me through how a new partner solves the liquidity cold-start problem in month one",
    "How does zkTLS actually verify market resolution — what can it get wrong?",
    "How does Kash's regulatory exposure compare to Polymarket and Kalshi?"
  ],
  "eagle-ai": [
    "How does speculative decoding actually work — explain like I'm an ML engineer",
    "What happens to Eagle's moat if the algorithm gets replicated by NVIDIA internally?",
    "Walk me through the chip payback math at different utilisation rates",
    "What's the risk to the open-source community relationship as Eagle closes its source?",
    "How does Eagle AI's Somnia fit compare to the other companies in this portfolio?"
  ],
  polaris: [
    "Explain the pETH bonding curve mechanism and how it generates yield",
    "How is Polaris different from Terra/Luna — what specifically prevents a death spiral?",
    "Walk through the stress scenario: ETH drops 50%, what happens to pUSD peg?",
    "What does the Liquity lineage actually mean — why does it matter who built what?",
    "What's the path from $300M to $5B TVL — which partners are most critical?"
  ],
  texochat: [
    "Why would any crypto community switch from Telegram to Texochat?",
    "What would a credible team look like for a product like this?",
    "How does the B2B widget model compare to Telegram's existing bot ecosystem?",
    "At what point does this become worth re-evaluating?",
    "What are the MSB licensing requirements for in-chat token transfers?"
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
            {v.simpleExplainer && (
              <div style={{ padding: "16px 20px", background: "#f9fafb", borderRadius: 10, border: "1px solid #e5e7eb", marginBottom: 24 }}>
                <div style={{ fontSize: 10, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>What is this?</div>
                <p style={{ fontSize: 13.5, lineHeight: 1.8, color: "#374151", margin: 0 }}>{v.simpleExplainer}</p>
              </div>
            )}
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
            {v.advisors.length > 0 && (
              <>
                <h3 style={{ fontSize: 11, fontWeight: 500, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Advisors & backers</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                  {v.advisors.map((a, i) => (
                    <div key={i} style={{ padding: "10px 14px", background: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 12.5, color: "#111827", lineHeight: 1.5 }}>
                      {a}
                    </div>
                  ))}
                </div>
              </>
            )}
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
            6 Ventures — Deep Dive
          </h1>
          <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, maxWidth: 580, margin: 0 }}>
            Six ventures assessed across traction, market opportunity, business model, team strength, Somnia network fit and risk-adjusted upside. Click any card to read the full analyst report and chat with a dedicated research agent.
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
