const SKILLS = [
  { name: 'React', level: 90 },
  { name: 'JavaScript (ES6+)', level: 92 },
  { name: 'TypeScript', level: 80 },
  { name: 'HTML5 & CSS3', level: 95 },
  { name: 'Vite / Webpack', level: 78 },
  { name: 'Node.js', level: 70 },
  { name: 'REST APIs', level: 85 },
  { name: 'Git & GitHub', level: 88 },
];

const TOOLS = [
  'React',
  'TypeScript',
  'JavaScript',
  'Vite',
  'CSS Modules',
  'Tailwind',
  'Node.js',
  'Git',
  'Figma',
  'VS Code',
];

export default function Skills() {
  return (
    <section id="skills" className="skills section section--alt">
      <div className="container">
        <h2 className="section__title">Skills</h2>
        <div className="skills__grid">
          <div className="skills__bars">
            <h3 className="skills__sub-title">Proficiency</h3>
            {SKILLS.map(({ name, level }) => (
              <div key={name} className="skill-bar">
                <div className="skill-bar__header">
                  <span className="skill-bar__name">{name}</span>
                  <span className="skill-bar__level">{level}%</span>
                </div>
                <div className="skill-bar__track" role="progressbar" aria-valuenow={level} aria-valuemin={0} aria-valuemax={100} aria-label={name}>
                  <div
                    className="skill-bar__fill"
                    style={{ width: `${level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="skills__tags-wrap">
            <h3 className="skills__sub-title">Tools &amp; Technologies</h3>
            <ul className="skills__tags">
              {TOOLS.map((tool) => (
                <li key={tool} className="skills__tag">
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
