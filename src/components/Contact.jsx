import React, { useRef, useEffect, useState } from 'react';
import './Contact.css';

const sectors = [
  'Manufacturing & Production',
  'Agriculture & Food Systems',
  'Healthcare & Hospitals',
  'Retail & Logistics',
  'Energy & Utilities',
  'Education Institutions',
  'Other',
];

export default function Contact() {
  const ref = useRef(null);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 100);
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    e.target.reset();
  }

  return (
    <section id="contact" className="contact" ref={ref}>
      <div className="contact-bg" />
      <div className="contact-inner">
        <div className="section-label reveal" style={{ color: 'var(--pink)' }}>Get Involved</div>
        <h2 className="reveal">Ready to breed intelligence<br />into your organisation?</h2>
        <p className="reveal">Whether you're a firm looking to pilot AI+IoT, a partner wanting to collaborate, or an organisation interested in our workshops — we'd love to hear from you.</p>

        <form className="contact-form reveal" onSubmit={handleSubmit}>
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Emeka" required />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Okonkwo" required />
            </div>
          </div>
          <div className="form-group">
            <label>Organisation</label>
            <input type="text" placeholder="Your company or institution" required />
          </div>
          <div className="form-group">
            <label>Sector</label>
            <select required defaultValue="">
              <option value="" disabled>Select your sector</option>
              {sectors.map(s => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div className="form-group">
            <label>How can BreeDIn help you?</label>
            <textarea placeholder="Tell us about your current setup, challenges, or what you'd like to explore..." />
          </div>
          <button type="submit" className={`form-submit ${submitted ? 'sent' : ''}`}>
            {submitted ? '✓ Message Sent!' : 'Send Message →'}
          </button>
        </form>
      </div>
    </section>
  );
}
