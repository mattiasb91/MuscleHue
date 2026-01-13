import "./ColorLegend.css";

export default function ColorLegend() {
  return (
    <section className="legend-panel">
      <h2 className="legend-title">Legend</h2>
      <p className="legend-subtitle">Muscle color = time since last trained</p>

      <ul className="legend-list">
        <li className="legend-item">
          <span className="swatch swatch-red" />
          <div className="legend-text">
            <div className="legend-label">0–24 hours</div>
            <div className="legend-desc">Just trained. Good work!</div>
          </div>
        </li>

        <li className="legend-item">
          <span className="swatch swatch-orange" />
          <div className="legend-text">
            <div className="legend-label">1–2 days</div>
            <div className="legend-desc">Still fresh</div>
          </div>
        </li>

        <li className="legend-item">
          <span className="swatch swatch-yellow" />
          <div className="legend-text">
            <div className="legend-label">2–3 days</div>
            <div className="legend-desc">Recovering</div>
          </div>
        </li>

        <li className="legend-item">
          <span className="swatch swatch-green" />
          <div className="legend-text">
            <div className="legend-label">3–7 days</div>
            <div className="legend-desc">You can work out again</div>
          </div>
        </li>

        <li className="legend-item">
          <span className="swatch swatch-blue" />
          <div className="legend-text">
            <div className="legend-label">7+ days</div>
            <div className="legend-desc">Fully recovered</div>
          </div>
        </li>
      </ul>
    </section>
  );
}