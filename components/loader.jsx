function Loader({ duration = 3000, onDone, version = 0 }) {
  const [pct, setPct] = React.useState(0);
  const [stage, setStage] = React.useState("loading"); // loading | split | gone
  const [mounted, setMounted] = React.useState(true);
  const [status, setStatus] = React.useState("INITIALIZING");

  React.useEffect(() => {
    setPct(0);
    setStage("loading");
    setMounted(true);
    setStatus("INITIALIZING");

    const start = performance.now();
    let raf;
    const tick = (t) => {
      const p = Math.min(1, (t - start) / duration);
      // ease out cubic for nicer feel
      const eased = 1 - Math.pow(1 - p, 1.7);
      const val = Math.floor(eased * 100);
      setPct(val);
      if (val < 30) setStatus("LOADING ASSETS");
      else if (val < 60) setStatus("COMPILING MODULES");
      else if (val < 90) setStatus("RENDERING SCENE");
      else setStatus("READY");
      if (p < 1) raf = requestAnimationFrame(tick);
      else {
        setTimeout(() => setStage("split"), 300);
        setTimeout(() => {
          setStage("gone");
          onDone && onDone();
        }, 300 + 1000);
        setTimeout(() => setMounted(false), 300 + 1400);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [duration, version]);

  if (!mounted) return null;

  const cls = "loader" + (stage === "split" ? " split-out" : "") + (stage === "gone" ? " gone fade" : "");
  return (
    <div className={cls}>
      <div className="loader-grid"></div>
      <div className="loader-corner-tl"></div>
      <div className="loader-corner-tr"></div>
      <div className="loader-corner-bl"></div>
      <div className="loader-corner-br"></div>

      <div className="loader-top">
        <div>BRANESSE / SYSTEM</div>
        <div>{status}</div>
      </div>

      <div className="loader-center">
        <div className="loader-mark">
          <img src="/assets/logo-horizontal.png" alt="Branesse" />
          <span className="tag">CREATIVE PRODUCE / 2025→</span>
        </div>
        <div className="loader-pct">{String(pct).padStart(3, "0")}<span style={{opacity:.45}}>%</span></div>
      </div>

      <div className="loader-bottom">
        <div className="loader-line-row">
          <div className="mono" style={{fontSize:11, opacity:.5, minWidth: 60}}>BOOT</div>
          <div className="loader-track">
            <div className="fill" style={{ width: pct + "%" }}></div>
            <div className="sweep"></div>
          </div>
          <div className="mono" style={{fontSize:11, opacity:.5, minWidth: 60, textAlign:"right"}}>v 0.1.0</div>
        </div>
        <div className="loader-meta">
          <span>SNS / IP / LIVE / MOVIE / WEB / AI</span>
          <span>エンタメ・IP・SNS・ライブ領域を動かす。</span>
          <span>2026 © BRANESSE</span>
        </div>
      </div>

      <div className="loader-split">
        <div className="top"></div>
        <div className="bot"></div>
      </div>
    </div>
  );
}

Object.assign(window, { Loader });
