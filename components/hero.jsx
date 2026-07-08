function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#top" className="brand"><img src="/assets/logo-horizontal.png" alt="Branesse" /></a>
      <nav>
        <a href="#works">WORKS</a>
        <a href="#capabilities">SERVICE</a>
        <a href="#beyond">BEYOND</a>
        <a href="#news">NEWS</a>
        <a href="#about">ABOUT</a>
        <a href="#contact">CONTACT</a>
      </nav>
      <div className="header-right">
        <div className="corner mono"><LiveClock /></div>
        <MobileMenu />
      </div>
    </header>
  );
}

/* ---------------- Collage panels (shared) ---------------- */

function PlayerPanel() {
  return (
    <div className="panel p-player">
      <div className="panel-head">
        <div className="dots"><i/><i/><i/></div>
        <span>CHANNEL / VOD</span>
        <span>● REC</span>
      </div>
      <div className="player-shot">
        <div className="player-meta-row">
          <span>00:42 / 08:21</span>
          <span>4K · HDR</span>
        </div>
      </div>
      <div className="player-bottom">
        <div className="t">EP.04 — TEASER CUT</div>
        <div className="meta">12.4K</div>
      </div>
    </div>
  );
}

function AnalyticsPanel() {
  // build a sparkline path
  const pts = [10, 22, 18, 30, 24, 36, 32, 48, 44, 60, 55, 72, 68, 84, 88];
  const w = 280, h = 70, max = 100;
  const step = w / (pts.length - 1);
  const line = pts.map((v, i) => `${i === 0 ? "M" : "L"} ${i * step} ${h - (v / max) * h}`).join(" ");
  const area = line + ` L ${w} ${h} L 0 ${h} Z`;
  return (
    <div className="panel p-analytics">
      <div className="panel-head">
        <span>SIGNAL / 30D</span>
        <span style={{color:"#E50914"}}>+184%</span>
      </div>
      <div className="panel-body">
        <div className="analytics-big">2.84M</div>
        <div className="analytics-row"><span>IMPRESSIONS</span><span>2026 · WK 19</span></div>
        <div className="spark" style={{marginTop:16}}>
          <svg viewBox={`0 0 ${w} ${h}`} preserveAspectRatio="none">
            <line x1="0" y1={h*0.5} x2={w} y2={h*0.5} className="grid" />
            <line x1="0" y1={h*0.8} x2={w} y2={h*0.8} className="grid" />
            <path d={area} className="area" />
            <path d={line} className="line" />
          </svg>
        </div>
        <div className="analytics-row" style={{marginTop:10}}>
          <span>APR 12</span><span>MAY 12</span>
        </div>
      </div>
    </div>
  );
}

function SnsPanel() {
  return (
    <div className="panel p-sns">
      <div className="panel-head">
        <span>SNS / POST</span>
        <span>04 / 12</span>
      </div>
      <div className="sns-image"></div>
      <div className="sns-meta">
        <i></i><i style={{borderRadius:50}}></i><i></i>
        <span style={{marginLeft:"auto"}}>12.3K · 482</span>
      </div>
    </div>
  );
}

function LivePanel() {
  return (
    <div className="panel panel-dark p-live">
      <div className="panel-head">
        <span><span className="dot" style={{display:"inline-block",width:6,height:6,background:"var(--red)",borderRadius:"50%",marginRight:6}}></span>LIVE</span>
        <span>OUT · MIX</span>
      </div>
      <div className="live-wave">
        {Array.from({length: 24}).map((_, i) => (
          <span key={i} style={{
            animationDelay: (i * 60) + "ms",
            height: (20 + (Math.sin(i) + 1) * 30) + "%"
          }}></span>
        ))}
      </div>
      <div className="live-row">
        <span><span className="dot"></span>ON AIR</span>
        <span>3,482 viewers</span>
      </div>
    </div>
  );
}

function HeroCollage() {
  return (
    <div className="collage">
      <PlayerPanel />
      <AnalyticsPanel />
      <SnsPanel />
      <LivePanel />
    </div>
  );
}

/* ---------------- Hero ---------------- */
function Hero({ layout = "A", accent }) {
  const H1 = (
    <h1 className="hero-h1">
      <span className="l">コンテンツで、</span>
      <span className="l">ブランドと</span>
      <span className="l"><span className="accent">ファン</span>を動かす<span className="punct">.</span></span>
    </h1>
  );
  const Sub = (
    <p className="hero-sub">
      Branesseは、エンタメ・IP・SNS・ライブ・映像・Web・AI領域において、企画・制作・運用を横断するクリエイティブプロデュース会社です。
    </p>
  );
  const CTA = (
    <div className="hero-cta-row">
      <a href="#works" className="btn-ghost">VIEW PROJECTS <span className="arrow"></span></a>
      <a href="#contact" className="mono" style={{fontSize:11, letterSpacing:".14em", borderBottom:"1px solid currentColor", paddingBottom:2}}>CONTACT →</a>
    </div>
  );
  const TopBar = (
    <div className="hero-top">
      <div className="crumb">
        <span className="label">[ 00 / OPENING ]</span>
        <span className="label no-dash" style={{color:"var(--red)"}}>● ON AIR</span>
      </div>
      <div className="label no-dash">CREATIVE PRODUCE × DIRECTION</div>
    </div>
  );

  const Meta = (
    <div className="hero-meta rv">
      <div className="cell"><div className="k">[FIELD]</div><div className="v">ENTERTAINMENT / IP<br/>SNS · LIVE · MOVIE</div></div>
      <div className="cell"><div className="k">[ROLE]</div><div className="v">CREATIVE PRODUCE<br/>CREATIVE DIRECTION</div></div>
      <div className="cell"><div className="k">[OUTPUT]</div><div className="v">SNS · MOVIE · WEB<br/>AI WORKFLOW</div></div>
    </div>
  );

  if (layout === "B") {
    return (
      <section className={"hero hero-B"} id="top">
        <div className="grid-bg"></div>
        <div className="container">
          <div className="hero-inner">
            {TopBar}
            <div className="hero-grid">
              <div>
                {H1}
                {Sub}
                {CTA}
              </div>
              <div className="center-block">
                <div className="grid-bg dark"></div>
                <div className="cb-redline"></div>
                <div className="cb-stack">
                  <div className="cb-big">
                    <span className="cb-num">2025→</span>
                    <span className="cb-bigword">PRODUCE</span>
                    <span className="cb-bigword cb-red">/ DIRECT</span>
                  </div>
                  <div className="cb-line"></div>
                  <div className="cb-keywords">
                    <span>SNS</span><span className="cb-dot">·</span>
                    <span>IP</span><span className="cb-dot">·</span>
                    <span>LIVE</span><span className="cb-dot">·</span>
                    <span>MOVIE</span><span className="cb-dot">·</span>
                    <span>WEB</span><span className="cb-dot">·</span>
                    <span>AI</span>
                  </div>
                  <div className="cb-baseline">
                    <div className="cb-bl-row">
                      <span className="cb-bl-tag">[OUTPUT]</span>
                      <span>MOVIE / SNS / WEB / AI WORKFLOW</span>
                    </div>
                    <div className="cb-bl-row">
                      <span className="cb-bl-tag">[FROM]</span>
                      <span>SHINJUKU, TOKYO · JAPAN</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {Meta}
          </div>
        </div>
      </section>
    );
  }

  if (layout === "C") {
    return (
      <section className={"hero hero-C"} id="top">
        <div className="grid-bg"></div>
        <div className="container">
          <div className="hero-inner">
            {TopBar}
            <div style={{maxWidth: 1100}}>
              {H1}
            </div>
            <div style={{marginTop: 40, display:"grid", gridTemplateColumns:"1fr 1fr", gap: 48}}>
              {Sub}
              <div style={{display:"flex", alignItems:"flex-end"}}>{CTA}</div>
            </div>
            <div className="row-panels">
              <PlayerPanel />
              <AnalyticsPanel />
              <SnsPanel />
              <LivePanel />
            </div>
            {Meta}
          </div>
        </div>
      </section>
    );
  }

  // Default A
  return (
    <section className={"hero hero-A"} id="top">
      <div className="grid-bg"></div>
      <div className="hero-redline"></div>
      <div className="container">
        <div className="hero-inner">
          {TopBar}
          <div className="hero-grid">
            <div>
              {H1}
              {Sub}
              {CTA}
            </div>
            <HeroCollage />
          </div>
          {Meta}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Ticker ---------------- */
function Ticker({ speed = 40, reverse = false }) {
  const items = [
    "SNS MARKETING",
    "IP / ENTERTAINMENT",
    "LIVE / MOVIE",
    "YOUTUBE / COMMUNITY",
    "WEB / AI",
    "CREATIVE PRODUCE",
    "CREATIVE DIRECTION",
  ];
  const items2 = [
    "PLAN  \u2192  MAKE  \u2192  OPERATE",
    "BRAND \u00d7 FAN",
    "STORY \u00d7 SIGNAL",
    "CONTENT \u00d7 COMMUNITY",
    "DIRECTION / PRODUCTION",
    "FROM JAPAN \u00b7 SINCE 2015",
  ];
  const list = reverse ? items2 : items;
  const group = (
    <span className="item">
      {list.map((t, i) => (
        <React.Fragment key={i}>
          <span>{t}</span>
          <span className="star">✦</span>
        </React.Fragment>
      ))}
    </span>
  );
  return (
    <div className={"ticker" + (reverse ? " reverse" : "")} style={{ "--ticker-speed": speed + "s" }}>
      <div className="ticker-track">
        {group}{group}
      </div>
    </div>
  );
}

Object.assign(window, { SiteHeader, Hero, Ticker, PlayerPanel, AnalyticsPanel, SnsPanel, LivePanel, HeroCollage });
