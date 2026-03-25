export default function About() {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section__title">About Me</h2>
        <div className="about__grid">
          <div className="about__image-wrap">
            <div className="about__image-placeholder" aria-hidden="true">
              <span>DC</span>
            </div>
          </div>
          <div className="about__text">
            <p>
              I&apos;m a passionate frontend developer with a love for building
              clean, accessible, and highly responsive web interfaces. I thrive
              on turning complex designs into fluid, pixel-perfect experiences
              using modern JavaScript frameworks.
            </p>
            <p>
              With a strong foundation in React, I enjoy exploring reactive
              programming paradigms and keeping up with the latest in web
              technology. When I&apos;m not coding, I enjoy contributing to
              open-source projects and sharing knowledge with the developer
              community.
            </p>
            <ul className="about__info-list">
              <li>
                <span className="about__info-label">Name:</span> Dina Chat
              </li>
              <li>
                <span className="about__info-label">Role:</span> Frontend Developer
              </li>
              <li>
                <span className="about__info-label">Email:</span>{' '}
                <a href="mailto:hello@dinachat.dev">hello@dinachat.dev</a>
              </li>
              <li>
                <span className="about__info-label">Location:</span> Remote
              </li>
            </ul>
            <a href="#contact" className="btn btn--primary">
              Hire Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
