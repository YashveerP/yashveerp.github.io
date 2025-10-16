import { COLORS } from '../theme';
const style = { padding: '1rem 1.5rem', backgroundColor: COLORS.primary, margin: '0.5rem 5rem ', maxWidth: '75rem', borderRadius: '25px', color: COLORS.background };
export default function Education() {
  return (
    <section style={{ padding: '5rem 2rem', backgroundColor: COLORS.background, display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center', }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Education</h2>
      <div
        style={style}
      >
        <h3 style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}>
          University of Washington
        </h3>
        <p style={{ margin: 0, color: COLORS.textSecondary }}>
          B.S. in Computer Science
        </p>
        <p style={{ margin: 0, fontStyle: "italic", color: COLORS.textMuted }}>
          2023 – 2027
        </p>
      </div>
    </section>
  );
}