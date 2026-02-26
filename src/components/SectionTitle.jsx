function SectionTitle({ title, subtitle }) {
  return (
    <div className="hb-section-title">
      <h2>{title}</h2>
      {subtitle && <p className="section-quote">“{subtitle}”</p>}
    </div>
  );
}

export default SectionTitle;
