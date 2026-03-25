export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__copy">
          &copy; {year} Dina Chat. Built with React &amp; Vite.
        </p>
        <nav className="footer__social" aria-label="Social links">
          <a
            href="https://github.com/DinaChatFE"
            target="_blank"
            rel="noreferrer"
            className="footer__social-link"
            aria-label="GitHub"
          >
            GitHub
          </a>
          <a
            href="#"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="footer__social-link"
            aria-label="Twitter / X"
          >
            Twitter
          </a>
        </nav>
      </div>
    </footer>
  );
}
