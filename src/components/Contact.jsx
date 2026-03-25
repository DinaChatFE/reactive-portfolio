import { useState } from 'react';

const INITIAL_STATE = { name: '', email: '', message: '' };

export default function Contact() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  function validate() {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = 'Please enter a valid email.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    setErrors((err) => ({ ...err, [name]: undefined }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setForm(INITIAL_STATE);
  }

  return (
    <section id="contact" className="contact section section--alt">
      <div className="container">
        <h2 className="section__title">Get In Touch</h2>
        <p className="section__subtitle">
          Have a project in mind or just want to say hello? I&apos;d love to
          hear from you.
        </p>
        <div className="contact__grid">
          <div className="contact__info">
            <div className="contact__info-item">
              <span className="contact__info-icon" aria-hidden="true">✉️</span>
              <a href="mailto:hello@dinachat.dev">hello@dinachat.dev</a>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon" aria-hidden="true">💼</span>
              <a href="https://github.com/DinaChatFE" target="_blank" rel="noreferrer">
                github.com/DinaChatFE
              </a>
            </div>
            <div className="contact__info-item">
              <span className="contact__info-icon" aria-hidden="true">🌍</span>
              <span>Available for remote opportunities</span>
            </div>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            {submitted ? (
              <div className="contact__success" role="alert">
                🎉 Thank you! I&apos;ll get back to you soon.
              </div>
            ) : (
              <>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    className={`form-input${errors.name ? ' form-input--error' : ''}`}
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    autoComplete="name"
                  />
                  {errors.name && (
                    <span className="form-error" role="alert">{errors.name}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`form-input${errors.email ? ' form-input--error' : ''}`}
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="form-error" role="alert">{errors.email}</span>
                  )}
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className={`form-input form-textarea${errors.message ? ' form-input--error' : ''}`}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <span className="form-error" role="alert">{errors.message}</span>
                  )}
                </div>
                <button type="submit" className="btn btn--primary btn--full">
                  Send Message
                </button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
