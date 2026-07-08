/* =================================================================
   Creative components — section markers, scroll progress, clock
   ================================================================= */

function SectionMarker({ num, en, jp }) {
  return (
    <div className="sect-marker">
      <div className="container">
        <div className="inner">
          <div className="sweep-line"></div>
          <div className="label-block">
            <div className="num">{num}</div>
            <div className="en">{en}</div>
            <div className="jp">{jp}</div>
          </div>
          <div className="sweep-line"></div>
        </div>
      </div>
    </div>
  );
}

function ScrollProgress() {
  const [pct, setPct] = React.useState(0);
  React.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement;
      const max = h.scrollHeight - h.clientHeight;
      setPct(max > 0 ? (h.scrollTop / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);
  return (
    <div className="scroll-progress">
      <div className="bar" style={{ width: pct + "%" }}></div>
    </div>
  );
}

function ScrollMeter() {
  const stops = [
    { id: "top",          label: "01 · TOP" },
    { id: "works",        label: "02 · WORKS" },
    { id: "capabilities", label: "03 · SERVICE" },
    { id: "news",         label: "04 · NEWS" },
    { id: "beyond",       label: "05 · BEYOND" },
    { id: "about",        label: "06 · ABOUT" },
  ];
  const [active, setActive] = React.useState("top");
  React.useEffect(() => {
    const onScroll = () => {
      let cur = stops[0].id;
      const y = window.scrollY + window.innerHeight * 0.35;
      stops.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el && el.offsetTop <= y) cur = s.id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="scroll-meter">
      {stops.map((s) => (
        <a key={s.id} href={"#" + s.id} className={"stop" + (active === s.id ? " active" : "")} style={{pointerEvents:"auto"}}>
          <span>{s.label}</span>
          <span className="tick"></span>
        </a>
      ))}
    </div>
  );
}

function LiveClock() {
  const [now, setNow] = React.useState(() => new Date());
  React.useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const pad = (n) => String(n).padStart(2, "0");
  const hh = pad(now.getHours());
  const mm = pad(now.getMinutes());
  const ss = pad(now.getSeconds());
  return <span className="live-clock">JST · {hh}:{mm}:{ss}</span>;
}

/* ---------------- Mobile hamburger menu (shared) ---------------- */
function MobileMenu({ links }) {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  const defaultLinks = [
    { href: "/works/",         label: "WORKS",   jp: "動いているプロジェクト" },
    { href: "/#capabilities",  label: "SERVICE", jp: "できること、関わり方" },
    { href: "/beyond/",        label: "BEYOND",  jp: "クリエイティブの社会実装" },
    { href: "/news/",          label: "NEWS",    jp: "お知らせ" },
    { href: "/about/",         label: "ABOUT",   jp: "私たちの姿勢と会社概要" },
    { href: "/contact/",       label: "CONTACT", jp: "ご相談はこちら" },
  ];
  const items = links || defaultLinks;
  return (
    <React.Fragment>
      <button
        className={"mnav-btn" + (open ? " open" : "")}
        onClick={() => setOpen(!open)}
        aria-label={open ? "メニューを閉じる" : "メニューを開く"}
        aria-expanded={open}
      >
        <span></span><span></span>
      </button>
      <div className={"mnav-overlay" + (open ? " open" : "")}>
        <div className="mnav-head mono">BRANESSE — MENU</div>
        <nav className="mnav-list">
          {items.map((l, i) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} style={{ transitionDelay: (open ? i * 60 + 100 : 0) + "ms" }}>
              <span className="mnav-num mono">0{i + 1}</span>
              <span className="mnav-label">{l.label}</span>
              <span className="mnav-jp">{l.jp}</span>
            </a>
          ))}
        </nav>
        <div className="mnav-foot mono">
          <a href="mailto:info@branesse.com">info@branesse.com</a>
          <span>© BRANESSE LLC.</span>
        </div>
      </div>
    </React.Fragment>
  );
}

/* ---------------- Auto scroll-reveal (all pages) ----------------
   Tags common elements with .rv and reveals them on intersect.
   Fail-safe: if JS breaks, no .rv class is added → content stays visible. */
function initAutoReveal() {
  const selectors = [
    ".section-head", ".caps-intro", ".proj-head",
    ".cap-cell", ".proj-A .card", ".proj-B .card", ".proj-C .gallery .card",
    ".value-row", ".values-prose",
    ".news-item", ".news-page-item",
    ".stmt h2", ".stmt-pullquote", ".stmt-body",
    ".brand-origin", ".rep-message", ".company-spec",
    ".sect-marker .label-block",
    ".work-block", ".work-spec",
    ".works-row",
    ".page-hero-inner",
  ];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -5% 0px" });

  const tag = () => {
    selectors.forEach((sel) => {
      document.querySelectorAll(sel).forEach((el, i) => {
        if (el.dataset.rvDone) return;
        el.dataset.rvDone = "1";
        const r = el.getBoundingClientRect();
        // already in view on load → show immediately without animation
        if (r.top < window.innerHeight && r.bottom > 0) {
          el.classList.add("rv", "in");
        } else {
          el.classList.add("rv");
          io.observe(el);
        }
      });
    });
  };
  // React renders async; tag in a few passes
  [400, 1200, 2500, 4500].forEach((ms) => setTimeout(tag, ms));
}
if (!window.__branesseRevealInit) {
  window.__branesseRevealInit = true;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initAutoReveal);
  } else {
    initAutoReveal();
  }
}

Object.assign(window, { SectionMarker, ScrollProgress, ScrollMeter, LiveClock, MobileMenu });
