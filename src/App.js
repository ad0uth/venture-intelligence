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
      { icon: "⚡", title: "Machine Truth oracle", desc: "Deterministic resolution from authoritative data (EPEX Spot, EIA) — not social consensus. No conflicts of interest." },
      { icon: "💧", title: "3-phase liquidity plan", desc: "0% fees + MM rebates → own capital deployment → professional MMs. The only deck in this portfolio with an actual answer to the bootstrapping problem." },
      { icon: "🏗️", title: "Platform independent", desc: "Owns entire stack — oracle, CLOB, smart contracts. Zero API dependency risk. No platform can pull the plug." },
      { icon: "💰", title: "Triple revenue model", desc: "0.3% taker fee + 1% settlement fee on winnings + 35% float yield retention. Three proven streams, all aligned with user behaviour." },
    ],
    risks: [
      "Energy market distribution is hard — commodity traders are conservative, non-crypto-native buyers",
      "Only $100K in founder bootstrap capital — thin for a product requiring liquidity seeding",
      "Oracle data infrastructure risk if EPEX Spot or EIA data is delayed or revised",
      "April 28 launch is imminent — smart contract audit status unconfirmed"
    ],
    team: [
      { name: "Gianluigi", role: "Tech Co-Founder", bg: "2nd-time fintech founder. Ex-N26 Tech Lead. Ex-CTO Klar." },
      { name: "Lorenzo F. Villa", role: "Biz Co-Founder", bg: "Crypto since 2016. Coinbase consulting. Law graduate. Bocconi Fintech Lab." },
    ],
    advisors: [
      "Daniele Titotto — Portfolio Manager, Axpo Group (energy)",
      "Alex D'Elia — CEO Prosume Energy (grid)",
      "Andrea La Mendola — ex-COO Hyperloop",
      "[Redacted] MD — major energy firm"
    ],
    somnia: "MEDIUM-HIGH — Cross-chain compatibility is on roadmap. High-frequency energy contract settlement (5-min TTF updates) generates constant on-chain events well-suited to Somnia's architecture. EVM-compatible deployment feasible without full rewrite.",
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
    description: "Scalar/continuum prediction markets — bet on the number, not just yes or no. More +EV surface per event, better odds for traders, more revenue per market.",
    metrics: [
      { label: "SAM", value: "$155B on-chain" },
      { label: "TAM", value: "$1.5T" },
      { label: "Launch", value: "Q2 2026" },
      { label: "Prior raised", value: "~$20M" },
      { label: "Polymarket comp", value: "$1B → $8B+" },
      { label: "Kalshi comp", value: "$2B → $11B" },
    ],
    scores: { "Traction": [9,25], "Market": [15,20], "Biz model": [16,20], "Team": [11,15], "Somnia": [9,10], "Upside": [5,10] },
    highlights: [
      { icon: "📐", title: "Scalar vs binary insight", desc: "Binary markets force yes/no. Scalar markets let you bet on a number, range, or magnitude — creating 50 tradeable positions where binary creates 2." },
      { icon: "🔒", title: "Platform independent", desc: "Standalone protocol. No API dependency on X, TikTok or any social platform. Owns its infrastructure end to end." },
      { icon: "⚡", title: "Strongest Somnia fit", desc: "Scalar markets generate more on-chain ops per event than any other prediction format. Economically broken on high-gas chains. Somnia's architecture is required at retail scale." },
      { icon: "📈", title: "Extraordinary comp momentum", desc: "Polymarket: $1B to $8B+ in months. Kalshi: $2B to $11B. Prediction markets are repricing faster than almost any sector in finance." },
    ],
    risks: [
      "No liquidity bootstrapping plan in deck — the most critical unresolved question",
      "Same 3-person team as Kash (dropped venture) — bandwidth risk",
      "Pre-launch, pre-revenue — no market traction to anchor conviction",
      "Scalar oracle needs to resolve exact numbers — more complex dispute resolution than binary"
    ],
    team: [
      { name: "Jo Lim", role: "Product Lead", bg: "DeFi native. Designed products raising $10M+. HL KBW 2025 winner." },
      { name: "Othniel Naga", role: "CTO", bg: "Founder/CTO VTF & TONCASH. Full-stack Web3, risk/infra. HL KBW 2025." },
      { name: "Joshua Ong", role: "Narrative & Community", bg: "SNS ambassador. HL KBW 2025 winner." },
    ],
    advisors: [
      "Supported by talent from PwC, Mastercard, Citi, Accenture",
      "Previous ventures backed by DeFiance Capital, 500 Startups, Merit Circle, Ton Ventures"
    ],
    somnia: "VERY HIGH — Scalar markets require constant position updates at every point on the curve. On high-gas chains this is economically broken. Somnia's 1M+ TPS, sub-cent transactions make Tide's continuum model viable at retail scale. Strongest Somnia fit of all ventures reviewed.",
    systemPrompt: `You are a senior venture analyst. Deep dive complete on Tide — scalar/continuum prediction market protocol.

KEY FACTS: Pre-launch, pre-revenue. "Make Precision Pay." Core insight: binary markets flatten edge. Scalar bets on real numbers: price, funding, TVL, OI, spread, on-chain KPIs. TAM $1.5T, SAM $155B on-chain. Comparables: Polymarket $1B→$8B+; Kalshi $2B→$11B in months of 2025. Roadmap: Q2 2026 public launch. Team: Jo Lim, Othniel Naga, Joshua Ong. Multi-ETHGlobal + Hyperliquid 2025 hackathon winners. ~$20M raised across prior ventures. CRITICAL GAP: NO liquidity bootstrapping plan in deck. STRUCTURAL ADVANTAGE: standalone protocol, platform independent, no X/TikTok API dependency risk. Somnia fit: VERY HIGH — scalar markets require constant position updates, economically broken on high-gas chains. Analyst verdict: Watch closely — compelling scalar insight, strongest Somnia fit, but liquidity bootstrapping is existential and must be answered before investing.

Be direct, reference specific data, challenge assumptions.`
  },

  oneplayr: {
    id: "oneplayr",
    name: "OnePlayr",
    color: "#22c55e",
    colorDim: "#22c55e20",
    colorBorder: "#22c55e40",
    sector: "Football Social / Web3",
    stage: "Live · $5M raise",
    valuation: "$15M pre / $20M post",
    score: 63,
    verdict: "HIGH POTENTIAL",
    tagline: "From the TikTok for Football to the Global Home of Sports.",
    description: "AI-powered talent discovery meets Web3 fan engagement. NFT PlayrCards serve as evolving digital CVs for grassroots players — making 97% of talent visible to scouts for the first time.",
    metrics: [
      { label: "MAU", value: "85K" },
      { label: "Downloads", value: "130K" },
      { label: "Social views", value: "55M+" },
      { label: "Upload rate", value: "12% (vs 3-5% avg)" },
      { label: "Marketing spend", value: "<$30K total" },
      { label: "CAC", value: "<€0.50" },
    ],
    scores: { "Traction": [22,25], "Market": [7,20], "Biz model": [10,20], "Team": [12,15], "Somnia": [9,10], "Upside": [3,10] },
    highlights: [
      { icon: "🚀", title: "Best traction in portfolio", desc: "85K MAU in 4 months with <$30K spend. 12% upload rate vs 3–5% industry average. Sub-€0.50 CAC. Exceptional early product metrics." },
      { icon: "⚽", title: "Genuine problem solved", desc: "97% of grassroots talent never gets scouted. PlayrCards create verifiable, on-chain football CVs that scouts can discover — a real B2B data product, not just social." },
      { icon: "🌍", title: "MENA first-mover", desc: "90%+ users from MENA. $100B+ in government/private football investment committed to the region. 450M+ football-obsessed mobile-first population." },
      { icon: "🏆", title: "Strongest team of all three", desc: "CEO: Forbes 40u40, ex-VP Growth Pentera ($1B+). Co-founder: licensed FIFA agent who discovered Hakan Çalhanoğlu. Advisors: ex-Adidas, Globe Soccer Director." },
    ],
    risks: [
      "Real SAM is ~$1–2B (football social/scouting niche), not the $100B football economy cited",
      "Zero revenue — 85K users haven't converted to any payment yet",
      "$15M pre-money valuation is aggressive for a pre-revenue product",
      "Web3/NFT layer adds friction for MENA teenage audience — Web3-optional architecture worth serious consideration"
    ],
    team: [
      { name: "Fabio Murolo", role: "CEO & Founder", bg: "Forbes 40u40. BMW CEO of Year Sports Innovation. Ex-VP Growth Pentera ($1B+ co.). Post-MBA exit." },
      { name: "Lami Ejupi", role: "Co-Founder & Head of Football", bg: "Licensed FIFA agent. Discovered Hakan Çalhanoğlu. Manages dozens of pros across Europe & MENA." },
    ],
    advisors: [
      "Philipp Keller — CEO Hirschen Group (ex-Adidas, Red Bull)",
      "Dr Michael Kissler — MiCA/Web3 specialist lawyer",
      "Aaron Goldstein — ex-FTBL, 4M+ followers, UEFA/EA Sports campaigns",
      "Nicola Antognetti — Director Globe Soccer Awards"
    ],
    somnia: "HIGH — High-frequency NFT minting (PlayrCards), micro in-app rewards, real-time fan voting on-chain. Ethereum mainnet is unworkable for this volume of low-value events. Somnia's gasless/near-gasless architecture is required for the product vision to work at scale. Strong candidate for flagship Somnia consumer dApp in MENA.",
    systemPrompt: `You are a senior venture analyst. Deep dive complete on OnePlayr — football social / Web3 talent discovery platform.

KEY FACTS: 85K MAU, 130K downloads in 4 months, 55M+ social views, 12% upload rate (vs 3-5% avg), <€0.50 CAC, <$30K total marketing. 90%+ users MENA. 5 pro clubs + 37 scouts in pipeline — NOT yet converted. Zero revenue. $18K MRR is a Q2 2026 TARGET. Raise: $5M asking, $15M pre / $20M post, Equity SAFE + Token Warrant. $1.3M already raised. Team: Fabio Murolo (CEO, Forbes 40u40, ex-VP Growth Pentera $1B+), Lami Ejupi (Co-Founder, licensed FIFA agent, discovered Hakan Çalhanoğlu). MARKET SIZE CORRECTION: $100B football economy is TV rights/transfers — NOT addressable. Real SAM ~$1-2B. WEB3 QUESTION: Web3-optional architecture might grow 10x faster. Somnia fit: HIGH — high-frequency NFT minting, gasless UX critical for MENA mobile. Analyst verdict: High potential, high risk. Best traction + best team, but biggest revenue gap. Negotiate valuation, push Web3-optional architecture question.

Be direct, reference specific numbers, challenge assumptions.`
  }
};

const NAV_ITEMS = ["overview", "highlights", "team", "risks", "somnia", "chat"];

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
    "Make the bull case vs Tide and OnePlayr",
    "What's the smart contract audit status?"
  ],
  tide: [
    "Why is the liquidity bootstrapping problem so critical?",
    "How does Tide's platform independence compare to what killed Kash?",
    "What would a credible liquidity plan look like?",
    "Make the case for Tide over Inframarkets",
    "How does Somnia change Tide's economics?"
  ],
  oneplayr: [
    "Bridge the gap from 85K users to $1M ARR",
    "Is $15M pre justified at zero revenue?",
    "Should they make Web3 optional to grow faster?",
    "What single metric would most change the investment case?",
    "How does the MENA foothold expand globally?"
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
            {item === "chat" ? "💬 Ask analyst" : item}
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
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 14, marginBottom: 28 }}>
              {v.highlights.map((h, i) => (
                <div key={i} style={{ padding: "18px 20px", border: `1px solid ${v.colorBorder}`, borderRadius: 12, background: v.colorDim }}>
                  <div style={{ fontSize: 22, marginBottom: 10 }}>{h.icon}</div>
                  <div style={{ fontSize: 13, fontWeight: 500, marginBottom: 6, color: "#111827" }}>{h.title}</div>
                  <div style={{ fontSize: 12.5, color: "#4b5563", lineHeight: 1.6 }}>{h.desc}</div>
                </div>
              ))}
            </div>
            <h3 style={{ fontSize: 11, fontWeight: 500, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Key risks</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              {v.risks.map((r, i) => (
                <div key={i} style={{ display: "flex", gap: 10, padding: "12px 14px", background: "#fef2f2", borderRadius: 8, border: "1px solid #fecaca" }}>
                  <span style={{ color: "#ef4444", fontSize: 12, marginTop: 1, flexShrink: 0 }}>⚠</span>
                  <span style={{ fontSize: 12.5, color: "#111827", lineHeight: 1.6 }}>{r}</span>
                </div>
              ))}
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
            </div>
            <h3 style={{ fontSize: 11, fontWeight: 500, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 12 }}>Advisors & backers</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
              {v.advisors.map((a, i) => (
                <div key={i} style={{ padding: "10px 14px", background: "#f9fafb", borderRadius: 8, border: "1px solid #e5e7eb", fontSize: 12.5, color: "#111827", lineHeight: 1.5 }}>
                  {a}
                </div>
              ))}
            </div>
          </div>
        )}

        {section === "risks" && (
          <div style={{ flex: 1, overflowY: "auto", padding: "24px" }}>
            <h3 style={{ fontSize: 11, fontWeight: 500, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 16 }}>Risk assessment</h3>
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
              <div style={{ fontSize: 11, fontWeight: 500, color: "#1d4ed8", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Somnia network fit</div>
              <p style={{ fontSize: 13.5, lineHeight: 1.8, color: "#111827", margin: 0 }}>{v.somnia}</p>
            </div>
            <div style={{ padding: "18px 20px", background: "#f9fafb", borderRadius: 12, border: "1px solid #e5e7eb" }}>
              <div style={{ fontSize: 11, fontWeight: 500, color: "#6b7280", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 10 }}>What Somnia enables</div>
              {[
                "1M+ TPS throughput handles high-frequency on-chain events without bottleneck",
                "Sub-cent transaction costs make micro-value interactions economically viable",
                "EVM-compatible — existing Solidity contracts deployable without full rewrite",
                "Consumer-grade UX without gas friction for end users"
              ].map((point, i) => (
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
        {/* Header */}
        <div style={{ marginBottom: 36 }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: "#9ca3af", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 8 }}>
            Venture Intelligence
          </div>
          <h1 style={{ fontSize: 30, fontWeight: 700, marginBottom: 10, color: "#111827", lineHeight: 1.2 }}>
            Top 3 Ventures — Deep Dive
          </h1>
          <p style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.7, maxWidth: 580, margin: 0 }}>
            Three ventures assessed across traction, market opportunity, business model, team strength, Somnia network fit and risk-adjusted upside. Click any card to read the full analyst report and chat with a dedicated research agent.
          </p>
        </div>

        {/* Score pills */}
        <div style={{ display: "flex", gap: 10, marginBottom: 28, flexWrap: "wrap" }}>
          {Object.values(VENTURES).map(v => (
            <div key={v.id} onClick={() => setActive(v.id)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "7px 14px", borderRadius: 10, border: `1px solid ${v.colorBorder}`, background: v.colorDim, cursor: "pointer" }}>
              <div style={{ width: 7, height: 7, borderRadius: "50%", background: v.color }}/>
              <span style={{ fontSize: 12.5, fontWeight: 500, color: "#111827" }}>{v.name}</span>
              <span style={{ fontSize: 11, color: "#9ca3af" }}>{v.score}/100</span>
            </div>
          ))}
        </div>

        {/* Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginBottom: 24 }}>
          {Object.values(VENTURES).map(v => (
            <VentureCard key={v.id} venture={v} onClick={() => setActive(v.id)}/>
          ))}
        </div>

      </div>
    </div>
  );
}
