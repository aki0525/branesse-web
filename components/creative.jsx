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

Object.assign(window, { SectionMarker, ScrollProgress, ScrollMeter, LiveClock });
