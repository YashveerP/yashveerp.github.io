import { COLORS } from '../theme';

const itemStyle = { padding: '1rem 1rem', backgroundColor: COLORS.primary, margin: '0.5rem 1rem', maxWidth: '50rem', borderRadius: '25px', color: COLORS.background};
const descriptionStyle = { padding: '1rem 1rem 1rem 0rem', backgroundColor: COLORS.background, margin: '0.5rem 5rem ', maxWidth: '75rem', borderRadius: '25px', color: COLORS.primary };
export default function Experiences() {
  return (
    <section style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: COLORS.secondary
        }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Experience</h2>
       <dl>
        <div style={itemStyle}>
          <dt>Software Developer — Mobile App Development (CSE 403)</dt>
        </div>
        <div style={descriptionStyle}>
          <dd>- Worked in a team of 6 to design and build a mobile app using React Native and Firebase</dd> 
          <dd>- Practiced agile development and bi-weekly code reviews with peers</dd>
          <dd>- Led backend development.</dd>
        </div>
</dl> 
    </section>
  );
}