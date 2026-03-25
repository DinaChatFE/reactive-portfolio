const PROJECTS = [
  {
    id: 1,
    title: 'Reactive Dashboard',
    description:
      'A real-time analytics dashboard built with React, featuring live data updates, customizable widgets, and interactive charts.',
    tags: ['React', 'TypeScript', 'WebSockets', 'Chart.js'],
    demo: '#',
    source: '#',
    color: '#6366f1',
  },
  {
    id: 2,
    title: 'E-Commerce Platform',
    description:
      'A full-featured online store with product search, cart management, authentication, and seamless checkout flow.',
    tags: ['React', 'Node.js', 'REST API', 'CSS Modules'],
    demo: '#',
    source: '#',
    color: '#22d3ee',
  },
  {
    id: 3,
    title: 'Portfolio Generator',
    description:
      'A drag-and-drop portfolio builder that lets developers showcase their work with customisable themes and live preview.',
    tags: ['React', 'Vite', 'LocalStorage', 'CSS'],
    demo: '#',
    source: '#',
    color: '#f59e0b',
  },
  {
    id: 4,
    title: 'Task Manager App',
    description:
      'A productive task management tool with kanban boards, priority labels, due-date reminders, and multi-user collaboration.',
    tags: ['React', 'TypeScript', 'Zustand', 'Tailwind'],
    demo: '#',
    source: '#',
    color: '#10b981',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section__title">Projects</h2>
        <p className="section__subtitle">
          A selection of things I&apos;ve built. Each project reflects my
          commitment to quality and clean code.
        </p>
        <div className="projects__grid">
          {PROJECTS.map((project) => (
            <article key={project.id} className="project-card">
              <div
                className="project-card__accent"
                style={{ backgroundColor: project.color }}
              />
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__description">
                  {project.description}
                </p>
                <ul className="project-card__tags">
                  {project.tags.map((tag) => (
                    <li key={tag} className="project-card__tag">
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="project-card__footer">
                <a
                  href={project.demo}
                  className="btn btn--sm btn--primary"
                  aria-label={`Live demo of ${project.title}`}
                >
                  Live Demo
                </a>
                <a
                  href={project.source}
                  className="btn btn--sm btn--outline"
                  aria-label={`Source code of ${project.title}`}
                >
                  Source
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
