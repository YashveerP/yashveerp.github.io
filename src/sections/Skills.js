import { COLORS } from "../theme";

const itemStyle = {
  padding: "0.75rem 1.25rem",
  backgroundColor: COLORS.background,
  borderRadius: "12px",
  color: COLORS.primary,
  textAlign: "center",
  fontWeight: "500",
  fontSize: "1rem",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

export default function Skills() {
  return (
    <section
      style={{
        padding: "5rem 2rem",
        backgroundColor: COLORS.secondary,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Skills</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1rem",
          maxWidth: "50rem",
          width: "100%",
        }}
      >
        <div style={itemStyle}>Java</div>
        <div style={itemStyle}>C</div>
        <div style={itemStyle}>C++</div>
        <div style={itemStyle}>Python</div>
        <div style={itemStyle}>JavaScript</div>
        <div style={itemStyle}>React</div>
        <div style={itemStyle}>Git</div>
        <div style={itemStyle}>Firebase</div>
      </div>
    </section>
  );
}
