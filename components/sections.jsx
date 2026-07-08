/* ---------------- Selected Projects (3 layouts) ---------------- */

const PROJECTS = [
  {
    n: "01",
    cat: "SNS / IP / YouTube / Community",
    title: "公式IPチャンネル\n企画支援",
    en: "OFFICIAL IP CHANNEL — PRODUCTION & STRATEGY",
    desc: "大型IPの公式チャンネルにおいて、YouTube・SNS・コミュニティ施策を横断した企画整理を支援。メンバーシップ施策、LP・KV・PVの方向性、運用要件までを整理し、ファンとの継続的な接点づくりを設計しました。",
    viz: "channel",
    dark: true,
  },
  {
    n: "02",
    cat: "IP / Entertainment / Creative",
    title: "大型IPコンテンツ\n制作支援",
    en: "MAJOR IP — CONTENT PRODUCTION SUPPORT",
    desc: "大型IP領域において、企画整理、制作進行、クリエイティブ制作を支援。世界観やファンの期待を踏まえながら、関係者間の認識を整理し、制作物として成立する形へ落とし込みました。",
    viz: "majorip",
    dark: true,
  },
  {
    n: "03",
    cat: "Live / Creative / Movie / Production",
    title: "ライブ制作 /\nクリエイティブ制作",
    en: "LIVE PRODUCTION & CREATIVE DIRECTION",
    desc: "ライブ・イベント領域において、発表映像、ティザー制作、演出まわり、制作進行、映像制作支援を担当。ステージ、3D素材、VRMモデル検証なども含め、ライブ体験を高めるクリエイティブ制作を支援しました。",
    viz: "live",
    dark: true,
  },
  {
    n: "04",
    cat: "Character / Content / SNS / IP",
    title: "キャラクターSNS\nプロジェクト",
    en: "CHARACTER IP — SNS CONTENT SYSTEM",
    desc: "キャラクターIPのSNS展開において、世界観設計、ショート動画企画、投稿設計、コンテンツ制作の企画・進行を支援。キャラクターの魅力を継続的なファン接点へ変えるためのコンテンツ設計を行いました。",
    viz: "character",
    dark: false,
  },
  {
    n: "05",
    cat: "SNS / Brand / EC / Web",
    title: "ブランドSNS\nコンテンツ制作",
    en: "BRAND SNS — CONTENT & COMMERCE",
    desc: "ブランド・EC・SNS領域において、Instagram投稿、商品訴求、LP・EC導線、キャンペーンコンテンツの企画・制作を支援。SNSとWebをつなぎ、ブランドの魅力が届く導線を設計しました。",
    viz: "brand",
    dark: false,
  },
];

function Viz({ kind }) {
  if (kind === "majorip") {
    return (
      <div className="viz viz-majorip">
        <div className="mip-watermark">IP</div>
        <div className="mip-grid"></div>
        <div className="mip-frame">
          <div className="mip-frame-tag">FRAME · 01</div>
        </div>
        <div className="mip-stack">
          <div className="mip-layer l1"></div>
          <div className="mip-layer l2"></div>
          <div className="mip-layer l3"></div>
        </div>
        <div className="mip-bracket bracket-tl"></div>
        <div className="mip-bracket bracket-br"></div>
        <div className="viz-tag red rec" style={{top: 12, left: 12}}><span className="sq"></span> MAJOR IP</div>
        <div className="viz-tag" style={{top: 12, right: 12, color: "rgba(255,255,255,.55)"}}>SCOPE · PRODUCTION</div>
        <div className="viz-coord" style={{left: 12, bottom: 12, color: "rgba(255,255,255,.45)"}}>ALIGN / DELIVER</div>
        <div className="viz-coord" style={{right: 12, bottom: 12, color: "rgba(255,255,255,.45)"}}>v 02 / 2026</div>
      </div>
    );
  }
  if (kind === "channel") {
    return (
      <div className="viz viz-ch2">
        <div className="ch-watermark">01</div>
        <div className="tile t1"></div>
        <div className="tile t2"></div>
        <div className="tile t3"></div>
        <div className="viz-tag red rec"><span className="dot"></span> REC · 04:32</div>
        <div className="viz-tag meta">CH · 24/7</div>
        <div className="viz-coord coord-tl">[ x: 0420 / y: 0180 ]</div>
        <div className="viz-coord coord-br">PROGRESS · 36%</div>
        <div className="ch-bar"></div>
      </div>
    );
  }
  if (kind === "live") {
    return (
      <div className="viz viz-live2">
        <div className="live-watermark">LIVE</div>
        <div className="beam b1"></div>
        <div className="beam b2"></div>
        <div className="beam b3"></div>
        <div className="stage-edge"></div>
        <div className="marquee">
          <span>LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
          <span>LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;LIVE&nbsp;&nbsp;✦&nbsp;&nbsp;</span>
        </div>
        <div className="crowd"></div>
        <div className="on-air"><span className="dot"></span> ON AIR</div>
        <div className="eq">
          {Array.from({length: 14}).map((_,i) => (
            <span key={i} style={{ animationDelay: (i * 70) + "ms" }}></span>
          ))}
        </div>
        <div className="ts">CUE 02 · 21:48:02</div>
      </div>
    );
  }
  if (kind === "character") {
    return (
      <div className="viz viz-char2">
        <div className="crosshair"></div>
        <div className="face">
          <div className="ear-l"></div>
          <div className="ear-r"></div>
          <div className="head"></div>
          <div className="head-guide"></div>
          <div className="eye l"></div>
          <div className="eye r"></div>
          <div className="accent-dot"></div>
        </div>
        <div className="measure" style={{top:"18%", left:"50%", transform:"translateX(-50%)"}}>↔ 240px</div>
        <div className="annot a-tl">[CHAR_03]<br/>SPEC SHEET</div>
        <div className="annot a-tr">FRONT · 0.0°</div>
        <div className="annot a-bl">SCALE · 1.00</div>
        <div className="annot a-br">v 1.4 / 2026</div>
        <div className="badge">CHARACTER · SNS</div>
      </div>
    );
  }
  if (kind === "brand") {
    return (
      <div className="viz viz-brand2">
        <div className="b-cell ph1"><span className="lbl">01 · MOOD</span></div>
        <div className="b-cell type"><span style={{fontSize:14}}>Aa</span><span className="lbl">02 · TYPE</span></div>
        <div className="b-cell sw-red dark"><span className="lbl">#E50914</span></div>
        <div className="b-cell grad-1"><span className="lbl">03 · WARM</span></div>
        <div className="b-cell sw-ink dark"><span className="lbl">#0B0B0C</span></div>
        <div className="b-cell pattern"><span className="lbl">04 · TEXTURE</span></div>
        <div className="b-cell ph2"><span className="lbl">05 · KEY VISUAL</span></div>
        <div className="b-cell price">
          <span className="lbl" style={{position:"relative", left:0, bottom:0}}>SKU</span>
          <span className="big">¥ 8,400</span>
        </div>
        <div className="b-cell type" style={{background:"#F4EFE2"}}>
          <span style={{fontFamily:'"Inter",sans-serif', fontSize:11, letterSpacing:".22em"}}>BRAND</span>
        </div>
        <div className="corner-tag tl">MOOD BOARD</div>
        <div className="corner-tag br">04 / SNS</div>
      </div>
    );
  }
  return null;
}

function ProjCardBody({ p }) {
  return (
    <div className="proj-card">
      <div className="top">
        <span>[{p.n}]</span>
        <span className="cat">{p.cat}</span>
      </div>
      <div className="visual"><Viz kind={p.viz} /></div>
      <div>
        <h3 style={{ whiteSpace: "pre-line" }}>{p.title}</h3>
        <div className="mono" style={{fontSize:11, opacity:.55, letterSpacing:".12em", margin:"4px 0 14px"}}>{p.en}</div>
        <p style={{fontSize:13, lineHeight:1.95, margin:0, opacity:.75}}>{p.desc}</p>
      </div>
    </div>
  );
}

function Projects({ layout = "A" }) {
  const head = (
    <div className="proj-head">
      <div className="proj-head-top">
        <div>
          <div className="proj-en">Selected Projects</div>
          <h2 className="proj-h2">動いている<em>プロジェクト</em>。</h2>
        </div>
        <div className="proj-head-right">
          <p className="proj-lead">
            Branesseでは、エンタメ・IP・SNS・ライブ・映像・Web領域を中心に、企画、制作、運用、改善まで横断したクリエイティブ支援を行っています。
          </p>
          <span className="mono" style={{display:"inline-block", marginTop:14, fontSize:11, letterSpacing:".14em", color:"var(--muted)"}}>2025 — 2026 / 05 PROJECTS</span>
        </div>
      </div>
    </div>
  );

  const note = (
    <div className="proj-bottom">
      <div className="proj-note">
        <span className="proj-note-mark">※</span>
        <span>一部プロジェクトは守秘義務・掲載許諾の関係上、企業名・ロゴ・詳細情報を伏せ、業種・支援内容のみ掲載しています。掲載許諾をいただいた企業・プロジェクトについては、別途 Clients / Partners として掲載する場合があります。</span>
      </div>
      <a href="#" className="proj-view-all">
        <span>VIEW ALL WORKS</span>
        <span className="arrow"></span>
      </a>
    </div>
  );

  if (layout === "B") {
    return (
      <section className="projects proj-B" id="works">
        <div className="container">
          {head}
          <div className="grid">
            {PROJECTS.map((p) => (
              <div key={p.n} className={"card" + (p.dark ? " dark" : "")}>
                <ProjCardBody p={p} />
              </div>
            ))}
          </div>
          {note}
        </div>
      </section>
    );
  }

  if (layout === "C") {
    return (
      <section className="projects proj-C" id="works">
        <div className="container">{head}</div>
        <div className="container">
          <div className="gallery">
            {PROJECTS.map((p) => (
              <div key={p.n} className={"card" + (p.dark ? " dark" : "")}>
                <ProjCardBody p={p} />
              </div>
            ))}
            <div className="card" style={{flex:"0 0 240px", minHeight:540, background:"transparent", borderStyle:"dashed", display:"flex", alignItems:"center", justifyContent:"center"}}>
              <div style={{textAlign:"center"}}>
                <div className="mono" style={{fontSize:11, letterSpacing:".18em", color:"var(--muted)", marginBottom:14}}>NEXT</div>
                <div style={{fontSize:14, color:"var(--muted)"}}>+ あなたのプロジェクト</div>
              </div>
            </div>
          </div>
          <div className="scroll-meta">
            <span>← DRAG TO EXPLORE →</span>
            <span>05 / 05 PROJECTS</span>
          </div>
        </div>
        <div className="container">{note}</div>
      </section>
    );
  }

  // A — asymmetric
  return (
    <section className="projects proj-A" id="works">
      <div className="container">
        {head}
        <div className="grid">
          {PROJECTS.map((p, i) => (
            <div key={p.n} className={"card c" + (i + 1)}>
              <ProjCardBody p={p} />
            </div>
          ))}
        </div>
        {note}
      </div>
    </section>
  );
}

/* ---------------- Capabilities ---------------- */
const CAPS = [
  { n:"01", en:"SNS Marketing",      jp:"SNSマーケティング",     desc:"SNS戦略設計、運用、キャンペーン設計、コミュニティ運営までを担当します。" },
  { n:"02", en:"IP / Entertainment", jp:"IP・エンタメ企画",       desc:"IP企画、作品企画、コンテンツプロデュースで世界観を設計します。" },
  { n:"03", en:"Live / Movie",       jp:"ライブ・映像制作",       desc:"ライブ演出、映像制作、撮影・配信オペレーションをサポート。" },
  { n:"04", en:"YouTube / Community",jp:"YouTube・コミュニティ", desc:"チャンネル企画から運用設計、メンバーシップ・コミュニティ施策まで。" },
  { n:"05", en:"Web / Design",       jp:"Web・デザイン",          desc:"Webサイト、LP、UI / UX、ブランドのデジタル接点を設計します。" },
  { n:"06", en:"AI / Tech",          jp:"AI・テクノロジー",       desc:"生成AIの活用、制作ワークフロー設計、データ分析の運用化。" },
];

function Capabilities() {
  return (
    <section className="caps" id="capabilities">
      <div className="container">
        <div className="caps-intro">
          <div>
            <div className="label" style={{marginBottom:18}}>SERVICE</div>
            <h2>企画から、<br/><span style={{color:"var(--red)"}}>制作・運用・検証</span>まで。</h2>
          </div>
          <p>
            クリエイティブプロデュース、クリエイティブディレクションを軸に、ブランドやIPの世界観を、ファンに届くコンテンツへ落とし込みます。企画・制作・運用を横断して、プロジェクトを前に進めます。
          </p>
        </div>
        <div className="grid">
          {CAPS.map((c) => (
            <div key={c.n} className="cap-cell">
              <div className="corner"></div>
              <div className="num">[{c.n}]</div>
              <h3>{c.en}</h3>
              <div className="jp">{c.jp}</div>
              <div className="desc">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Statement ---------------- */
function Statement() {
  return (
    <section className="stmt" id="about">
      <div className="stmt-redline"></div>
      <div className="container">
        <div className="stmt-inner">
          <div className="label" style={{marginBottom: 32}}>STATEMENT &amp; COMPANY</div>
          <h2>
            <span style={{display:"block", whiteSpace:"nowrap"}}>心を動かす体験を、</span>
            <span style={{display:"block", whiteSpace:"nowrap"}}>次の<span className="accent">選択肢</span>へ<span className="accent">.</span></span>
          </h2>

          <div className="stmt-pullquote">
            <div className="pq-label mono">— MISSION</div>
            <div className="pq-text">
              コンテンツを通じて、<br/>
              人と社会の<span className="accent">関係性</span>を、<br/>
              少しだけ、やわらかくする。
            </div>
          </div>

          <div className="stmt-body">
            <p>
              Branesseは、コンテンツを「点」で終わらせず、<em style={{fontStyle:"normal", borderBottom:"1px solid var(--red)", paddingBottom:1}}>文脈を持った「流れ」</em>として設計します。<br/><br/>
              クリエイティブプロデュースとクリエイティブディレクションを軸に、ブランドとファンの関係を深め、社会に届くコンテンツを形にします。短期的な反応ではなく、時間とともに積み重なる信頼と共感を大切にしています。
            </p>
            <div className="stmt-meta">
              <div className="row"><span>FOUNDED</span><span>2025.05.23 — TOKYO</span></div>
              <div className="row"><span>ROLE</span><span>CREATIVE PRODUCE</span></div>
              <div className="row"><span>FIELD</span><span>IP / SNS / LIVE / WEB</span></div>
              <div className="row"><span>APPROACH</span><span>PLAN · MAKE · OPERATE</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Company / Brand Origin ---------------- */
function Company() {
  return (
    <section className="company" id="company">
      <div className="container">
        <div className="company-inner">

          {/* Etymology pull-quote */}
          <div className="brand-origin">
            <div className="label" style={{marginBottom:18}}>BRAND ORIGIN · 社名の由来</div>
            <h2 className="brand-eq">
              <span className="bo-word">
                <span className="bo-en">Brand</span>
                <span className="bo-jp">本質 · 信頼</span>
              </span>
              <span className="bo-x">×</span>
              <span className="bo-word">
                <span className="bo-en">Nest</span>
                <span className="bo-jp">育つ場 · 巣</span>
              </span>
              <span className="bo-eq">=</span>
              <span className="bo-result">Branesse</span>
            </h2>
            <p className="brand-origin-body">
              Branesseは「<strong>Brand</strong>(本質・信頼)」と「<strong>Nest</strong>(育つ場・巣)」をかけ合わせた造語です。形にはしづらいけれど、たしかにそこにあるブランドの本質に寄り添いながら、育つ場をつくっていく。そんな思いを込めて名付けました。
            </p>
          </div>

          {/* Representative message */}
          <div className="rep-message">
            <div className="rep-grid">
              <div>
                <div className="label" style={{marginBottom:18}}>— REPRESENTATIVE MESSAGE</div>
                <h3 className="rep-h3">派手ではなく、<br/>静かに、確実に。</h3>
              </div>
              <div>
                <p>
                  一瞬の反応ではなく、文脈を持った「流れ」として設計することで、ブランドとファンの関係を少しずつ確実に深めていく。<br/><br/>
                  記憶に残るブランドや体験を、時間をかけて育てたい。その積み重ねが、誰かの明日を少しだけ前向きにする — そう信じて、コンテンツに向き合っています。
                </p>
                <div className="rep-sign">
                  <span className="mono">— 代表社員</span>
                  <span className="rep-name">津 章仁 / Akihito Tsu</span>
                </div>
              </div>
            </div>
          </div>

          {/* Company spec */}
          <div className="company-spec">
            <div className="cs-label mono">— COMPANY PROFILE</div>
            <table className="cs-table">
              <tbody>
                <tr><th>社名</th><td>合同会社ブラネス <span className="cs-en">/ Branesse LLC</span></td></tr>
                <tr><th>設立</th><td>2025年5月23日 <span className="cs-en">/ Founded 2025.05.23</span></td></tr>
                <tr><th>所在地</th><td>東京都新宿区 <span className="cs-en">/ Shinjuku, Tokyo, JP</span></td></tr>
                <tr><th>代表社員</th><td>津 章仁 <span className="cs-en">/ Akihito Tsu</span></td></tr>
                <tr><th>事業内容</th><td>コンテンツ制作 / メディア運営 / SNS支援 / ブランド開発支援</td></tr>
                <tr><th>クリエイティブ領域</th><td>IP / Entertainment / Live / Movie / SNS / Web / AI</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Footer ---------------- */
function Footer() {
  return (
    <footer className="foot" id="contact">
      <div className="grid-bg dark"></div>
      <div className="container">
        <div className="foot-inner">
          <div className="foot-top">
            <div>
              <div className="foot-mark"><img src="/assets/logo-horizontal.png" alt="Branesse" /></div>
              <div className="foot-tagline">
                コンテンツで、ブランドとファンを動かす。<br/>
                エンタメ・IP・SNS・ライブ領域のクリエイティブプロデュース。
              </div>
            </div>
            <div className="foot-col">
              <h4>EXPLORE</h4>
              <ul>
                <li><a href="#values">Values</a></li>
                <li><a href="#works">Selected Projects</a></li>
                <li><a href="#capabilities">Service</a></li>
                <li><a href="#beyond">Beyond Entertainment</a></li>
                <li><a href="#news">News</a></li>
                <li><a href="#about">Statement</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>FIELD</h4>
              <ul>
                <li><a href="/#capabilities">SNS / Marketing</a></li>
                <li><a href="/#capabilities">IP / Entertainment</a></li>
                <li><a href="/#capabilities">Live / Movie</a></li>
                <li><a href="/#capabilities">Web / AI</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>LEGAL</h4>
              <ul>
                <li><a href="/privacy-policy/">Privacy Policy</a></li>
                <li><a href="/contact/">Contact</a></li>
                <li><a href="/clients/">Clients / Partners</a></li>
              </ul>
            </div>
            <div className="foot-col foot-contact">
              <h4>CONTACT</h4>
              <h3>ご相談はこちら</h3>
              <a href="mailto:info@branesse.com" className="mail">info@branesse.com <span>→</span></a>
              <div className="mono" style={{marginTop:24, fontSize:11, letterSpacing:".14em", opacity:.5}}>
                Mon — Fri / 10:00 — 19:00 JST
              </div>
            </div>
          </div>
          <div className="foot-bot">
            <span>© 2026 合同会社ブラネス / BRANESSE LLC.</span>
            <span>FOUNDED 2025.05.23 — SHINJUKU, TOKYO</span>
            <span>CREATIVE PRODUCE × DIRECTION</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ---------------- Values (私たちが大切にしていること) ---------------- */
function Values() {
  const items = [
    { n: "01", text: <>日々の<em>"熱量"</em>を、見逃さない。</>, en: "Catch the spark." },
    { n: "02", text: <>日常の<em>"驚き"</em>を、増幅する。</>,     en: "Amplify wonder." },
    { n: "03", text: <>体験の<em>"未来"</em>を、設計する。</>,     en: "Design the future." },
  ];
  return (
    <section className="values" id="values">
      <div className="container">
        <div className="values-grid">
          <div>
            <div className="label" style={{marginBottom:18}}>VALUES · 私たちが大切にしていること</div>
            <h2>私たちが<br/>大切にしていること.</h2>
            <div className="mono" style={{marginTop:20, fontSize:11, letterSpacing:".14em", color:"var(--muted)"}}>WHAT WE BELIEVE</div>
          </div>
          <div className="values-list">
            {items.map((v) => (
              <div key={v.n} className="value-row">
                <span className="num">[{v.n}]</span>
                <div className="text">{v.text}</div>
                <span className="en mono">{v.en}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="values-prose">
          <p>
            Branesseは、エンタメ・IP・SNS・ライブ領域を起点としたクリエイティブプロデュース会社です。<br/>
            映像・Web・SNS・AI・ライブの手法を通じて、ブランドの世界観を設計し、観る人の心を動かすコンテンツをつくり出します。
          </p>
          <div className="tri">
            <span>動かせる。</span>
            <span>残せる。</span>
            <span>一瞬で、好きになる。</span>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- News ---------------- */
const NEWS = [
  { date: "2026.05.23", tag: "COMPANY",  title: "Branesseのコーポレートサイトをリニューアルしました。" },
  { date: "2026.05.12", tag: "PROJECT",  title: "新規IPプロジェクトのクリエイティブプロデュースを開始しました。" },
  { date: "2026.05.05", tag: "LIVE",     title: "アーティストライブのティザー映像制作を担当しました。" },
  { date: "2025.12.20", tag: "PROJECT",  title: "キャラクターSNSプロジェクトの新シリーズを企画開始しました。" },
];

function News() {
  return (
    <section className="news" id="news">
      <div className="container">
        <div className="news-grid">
          <div className="news-head">
            <div className="label" style={{marginBottom:18}}>NEWS · お知らせ</div>
            <h2>お知らせ.</h2>
            <a href="/news/" className="more">VIEW ALL NEWS →</a>
            <div className="mono" style={{marginTop:24, fontSize:11, letterSpacing:".14em", color:"var(--muted)"}}>UPDATES / 2026</div>
          </div>
          <div className="news-list">
            {NEWS.map((n, i) => (
              <div key={i} className="news-item news-item-static">
                <span className="date">{n.date}</span>
                <span className="tag">{n.tag}</span>
                <span className="title">{n.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Beyond Entertainment (Social Implementation) ---------------- */
const BEYOND = [
  {
    n: "01",
    en: "Parenting Media",
    jp: "子育て世代向けメディア",
    desc: "子育て、教育、お金、働き方など、親と子どもの選択肢を広げる情報を、わかりやすく届けるメディア事業。",
  },
  {
    n: "02",
    en: "Education Contents",
    jp: "親子向け・教育コンテンツ",
    desc: "子どもの好奇心や親子の体験につながる、動画・記事・SNS・教材的コンテンツの企画開発。",
  },
  {
    n: "03",
    en: "Local / Community",
    jp: "地域・コミュニティ支援",
    desc: "地域スポーツ、教育、子ども向け活動など、地域と親子をつなぐ情報発信・Web・SNS支援。",
  },
];

function Beyond() {
  return (
    <section className="beyond" id="beyond">
      <div className="container">
        <div className="caps-intro">
          <div>
            <div className="label" style={{marginBottom:18}}>BEYOND ENTERTAINMENT · クリエイティブの社会実装</div>
            <h2>次の<span style={{color:"var(--red)"}}>選択肢</span>を、<br/>社会に。</h2>
          </div>
          <p>
            エンタメ・IP・SNS・ライブ領域で培った企画力・制作力・発信力を、子育て・教育・地域領域へ展開。親と子どもの選択肢を広げるメディア、コンテンツ、デジタル施策に取り組んでいます。
          </p>
        </div>
        <div className="grid">
          {BEYOND.map((b) => (
            <div key={b.n} className="cap-cell">
              <div className="corner"></div>
              <div className="num">[{b.n}]</div>
              <h3>{b.en}</h3>
              <div className="jp">{b.jp}</div>
              <div className="desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Projects, Capabilities, Statement, Footer, Values, News, Company, Beyond });
