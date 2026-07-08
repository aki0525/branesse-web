/* =================================================================
   Sub-page shell — shared header/footer/breadcrumb for non-top pages
   ================================================================= */

function SubHeader({ active }) {
  const links = [
    { href: "/#top", label: "TOP" },
    { href: "/works/",     label: "WORKS" },
    { href: "/#capabilities", label: "SERVICE" },
    { href: "/beyond/",    label: "BEYOND" },
    { href: "/news/",      label: "NEWS" },
    { href: "/about/",     label: "ABOUT" },
    { href: "/contact/",   label: "CONTACT" },
  ];
  return (
    <header className="site-header subpage-header">
      <a href="/" className="brand"><img src="/assets/logo-horizontal.png" alt="Branesse" /></a>
      <nav>
        {links.map((l) => (
          <a key={l.label} href={l.href} className={active === l.label ? "active" : ""}>{l.label}</a>
        ))}
      </nav>
      <div className="header-right">
        <div className="corner mono"><LiveClock /></div>
        <MobileMenu />
      </div>
    </header>
  );
}

function PageHero({ num, en, jp, sub, breadcrumbs }) {
  return (
    <section className="page-hero">
      <div className="grid-bg"></div>
      <div className="container">
        <div className="page-hero-inner">
          <div className="page-crumb">
            {breadcrumbs.map((b, i) => (
              <React.Fragment key={i}>
                <a href={b.href}>{b.label}</a>
                {i < breadcrumbs.length - 1 && <span className="page-crumb-sep">/</span>}
              </React.Fragment>
            ))}
          </div>
          <div className="page-num mono">[ {num} ]</div>
          <h1 className="page-en">{en}</h1>
          <h2 className="page-jp">{jp}</h2>
          {sub && <p className="page-sub">{sub}</p>}
        </div>
      </div>
    </section>
  );
}

function SubFooter() {
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
                <li><a href="/works/">Selected Projects</a></li>
                <li><a href="/#capabilities">Service</a></li>
                <li><a href="/beyond/">Beyond Entertainment</a></li>
                <li><a href="/news/">News</a></li>
                <li><a href="/about/">About / Statement</a></li>
                <li><a href="/clients/">Clients / Partners</a></li>
              </ul>
            </div>
            <div className="foot-col">
              <h4>LEGAL</h4>
              <ul>
                <li><a href="/privacy-policy/">Privacy Policy</a></li>
                <li><a href="/contact/">Contact</a></li>
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

Object.assign(window, { SubHeader, PageHero, SubFooter });
