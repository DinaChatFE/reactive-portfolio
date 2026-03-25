export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <p className="hero__greeting">Hi, I&apos;m</p>
        <h1 className="hero__name">Dina Chat</h1>
        <h2 className="hero__title">Frontend Developer</h2>
        <p className="hero__description">
          I craft modern, reactive web experiences that delight users and solve
          real-world problems.
        </p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            View My Work
          </a>
          <a href="#contact" className="btn btn--outline">
            Get In Touch
          </a>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__avatar">
          <span className="hero__avatar-initials">DC</span>
        </div>
        <div className="hero__shape hero__shape--1" />
        <div className="hero__shape hero__shape--2" />
      </div>
    </section>
  );
}
