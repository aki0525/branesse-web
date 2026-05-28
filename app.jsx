const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#E5A516",
  "heroLayout": "A",
  "projectsLayout": "A",
  "tickerSpeed": 40,
  "showBeyond": true,
  "replayLoader": false
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [loaderVersion, setLoaderVersion] = React.useState(0);
  const [revealed, setRevealed] = React.useState(false);

  // apply accent color live
  React.useEffect(() => {
    document.documentElement.style.setProperty("--gold", t.accent);
    document.documentElement.style.setProperty("--red", t.accent);
  }, [t.accent]);

  // reveal observer
  React.useEffect(() => {
    const els = document.querySelectorAll(".rv");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add("in");
      });
    }, { threshold: 0.18 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [t.heroLayout, t.projectsLayout, revealed]);

  // replay handler
  const handleReplay = () => {
    setRevealed(false);
    setLoaderVersion((v) => v + 1);
    setTweak("replayLoader", false);
  };

  React.useEffect(() => {
    if (t.replayLoader) handleReplay();
  }, [t.replayLoader]);

  return (
    <React.Fragment>
      <ScrollProgress />
      <ScrollMeter />
      <Loader duration={3000} version={loaderVersion} onDone={() => setRevealed(true)} />
      <SiteHeader />
      <main>
        <Hero layout={t.heroLayout} />
        <SectionMarker num="00" en="PROLOGUE · VALUES" jp="私たちが大切にしていること" />
        <Values />
        <Ticker speed={t.tickerSpeed} />
        <SectionMarker num="01" en="SELECTED PROJECTS" jp="動いているプロジェクト" />
        <Projects layout={t.projectsLayout} />
        <SectionMarker num="02" en="SERVICE · NEWS" jp="できること、最新の動き" />
        <Capabilities />
        <News />
        {t.showBeyond && <SectionMarker num="03" en="BEYOND ENTERTAINMENT" jp="クリエイティブの社会実装" />}
        {t.showBeyond && <Beyond />}
        <SectionMarker num={t.showBeyond ? "04" : "03"} en="STATEMENT · COMPANY" jp="私たちの姿勢と、会社概要" />
        <Statement />
        <Company />
        <Footer />
      </main>

      <TweaksPanel title="Tweaks">
        <TweakSection title="Hero Layout">
          <TweakRadio
            value={t.heroLayout}
            onChange={(v) => setTweak("heroLayout", v)}
            options={[
              { value: "A", label: "A · Split" },
              { value: "B", label: "B · Block" },
              { value: "C", label: "C · Stack" },
            ]}
          />
          <div className="mono" style={{fontSize:10, opacity:.55, letterSpacing:".12em", marginTop:8}}>
            {t.heroLayout === "A" && "左:コピー / 右:UIコラージュ"}
            {t.heroLayout === "B" && "コピー + 黒ブロックの3カラム"}
            {t.heroLayout === "C" && "縦組み + パネル横並び"}
          </div>
        </TweakSection>

        <TweakSection title="Selected Projects Layout">
          <TweakRadio
            value={t.projectsLayout}
            onChange={(v) => setTweak("projectsLayout", v)}
            options={[
              { value: "A", label: "Asymmetric" },
              { value: "B", label: "Grid" },
              { value: "C", label: "Gallery" },
            ]}
          />
          <div className="mono" style={{fontSize:10, opacity:.55, letterSpacing:".12em", marginTop:8}}>
            {t.projectsLayout === "A" && "アシメ配置 / 7:5 → 5:7 → 全幅"}
            {t.projectsLayout === "B" && "2×2 + 1ワイド"}
            {t.projectsLayout === "C" && "横スクロールギャラリー"}
          </div>
        </TweakSection>

        <TweakSection title="Accent">
          <TweakColor
            value={t.accent}
            onChange={(v) => setTweak("accent", v)}
            options={["#E5A516", "#F0B428", "#15356F", "#3A9E4D"]}
          />
          <div className="mono" style={{fontSize:10, opacity:.55, letterSpacing:".12em", marginTop:8}}>
            ゴールド(熱量)/ ネイビー(信頼)/ グリーン(育てる)
          </div>
        </TweakSection>

        <TweakSection title="Ticker Speed">
          <TweakSlider
            value={t.tickerSpeed}
            min={15} max={80} step={1}
            onChange={(v) => setTweak("tickerSpeed", v)}
            format={(v) => v + "s / loop"}
          />
        </TweakSection>

        <TweakSection title="Beyond Entertainment">
          <TweakToggle
            value={t.showBeyond}
            onChange={(v) => setTweak("showBeyond", v)}
            label="Social Implementation を表示"
          />
          <div className="mono" style={{fontSize:10, opacity:.55, letterSpacing:".12em", marginTop:8}}>
            {t.showBeyond ? "子育て・教育・地域への社会実装セクション表示中" : "営業特化モード(セクション非表示)"}
          </div>
        </TweakSection>

        <TweakSection title="Loading">
          <TweakButton onClick={handleReplay}>▶ Replay Opening</TweakButton>
        </TweakSection>
      </TweaksPanel>
    </React.Fragment>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
