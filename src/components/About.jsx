import React, { useEffect, useRef } from 'react';
import { LogoIcon } from './Logo';
import './About.css';

export default function About() {
  const ref = useRef(null);

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

  return (
    <section id="about" className="about" ref={ref}>
      <div className="about-inner">
        <div className="about-logo-wrap reveal">
          <LogoIcon width={140} height={180} />
          <div className="fellow-badge">🌍 Millennium Fellow · 2025</div>
        </div>
        <div className="about-text reveal">
          <div className="section-label" style={{ color: 'var(--blue)' }}>About</div>
          <h2>Driven by curiosity.<br />Grounded in Nigeria.</h2>
          <p>BreeDIn was conceived as part of the United Nations Millennium Fellowship — a global cohort of student leaders taking on the world's most pressing challenges through the lens of the Sustainable Development Goals.</p>
          <p>This initiative is rooted in a simple observation: Nigerian firms are not behind — they're underequipped with confidence. The tools exist. The infrastructure exists. What's missing is a trusted bridge between where organisations are and where AI can take them.</p>
          <p>BreeDIn is that bridge.</p>
          <div className="about-name">
            <strong>Oluwakorede Adeogun</strong>
            <span>Founder · Millennium Fellow · AIoTs Nigeria Initiative</span>
          </div>
        </div>
      </div>
    </section>
  );
}
