import React from 'react';
import { AnimatedLogoIcon } from './Logo';
import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="hero-content">
        <div className="millennium-badge">Millennium Fellowship 2025 · SDG Initiative</div>
        <div className="hero-eyebrow">AI + IoT · Nigeria</div>
        <h1>
          Breeding <span className="accent-blue">Intelligence</span><br />
          Into Nigerian<br />
          <span className="accent-pink">Industry</span>
        </h1>
        <p className="hero-sub">
          BreeDIn helps Nigerian firms unlock the AI and IoT tools they already have — turning
          hesitation into adoption through hands-on pilots, workshops, and strategic consultation.
        </p>
        <div className="hero-actions">
          <a href="#contact" className="btn-primary">Partner With Us</a>
          <a href="#approach" className="btn-ghost">See Our Approach</a>
        </div>
        <div className="hero-stats">
          <div className="stat">
            <div className="stat-num">6</div>
            <div className="stat-label">Target Sectors</div>
          </div>
          <div className="stat">
            <div className="stat-num">4</div>
            <div className="stat-label">Program Pillars</div>
          </div>
          <div className="stat">
            <div className="stat-num">NG</div>
            <div className="stat-label">Nigeria-Focused</div>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <AnimatedLogoIcon width={260} height={340} />
      </div>
    </section>
  );
}
