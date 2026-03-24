import React, { useEffect, useRef } from 'react';
import './Sectors.css';

const sectors = [
  { emoji: '🏭', title: 'Manufacturing & Production', desc: 'Predictive maintenance, quality control automation, and smart factory floor monitoring.', pill: 'Priority Sector', pillBg: '#eff6ff', pillColor: '#1a4fd6' },
  { emoji: '🌾', title: 'Agriculture & Food Systems', desc: 'Soil sensing, precision irrigation, cold-chain optimisation, and crop yield prediction.', pill: 'Priority Sector', pillBg: '#f0fdf4', pillColor: '#15803d' },
  { emoji: '🏥', title: 'Healthcare & Hospitals', desc: 'Patient monitoring, equipment utilisation analytics, and smart inventory management.', pill: 'Priority Sector', pillBg: '#fff1f2', pillColor: '#e8223a' },
  { emoji: '📦', title: 'Retail & Logistics', desc: 'Demand forecasting, fleet tracking optimisation, and warehouse automation.', pill: 'Active', pillBg: '#fefce8', pillColor: '#a16207' },
  { emoji: '⚡', title: 'Energy & Utilities', desc: 'Smart metering, grid fault detection, and energy consumption optimisation at scale.', pill: 'Active', pillBg: '#fff7ed', pillColor: '#c2410c' },
  { emoji: '🎓', title: 'Education Institutions', desc: 'Campus resource optimisation, smart attendance systems, and learning analytics.', pill: 'Active', pillBg: '#faf5ff', pillColor: '#7c3aed' },
];

export default function Sectors() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e, i) => {
        if (e.isIntersecting) {
          setTimeout(() => e.target.classList.add('visible'), i * 80);
          observer.unobserve(e.target);
        }
      }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="sectors" className="sectors" ref={ref}>
      <div className="sectors-header reveal">
        <div className="section-label" style={{ color: 'var(--blue-deep)' }}>Where We Operate</div>
        <h2>Six sectors. Infinite opportunity.</h2>
        <p>BreeDIn targets the industries where AIoT integration can produce the most transformative outcomes for Nigeria.</p>
      </div>
      <div className="sectors-grid">
        {sectors.map((s, i) => (
          <div className="sector-card reveal" key={i}>
            <span className="sector-emoji">{s.emoji}</span>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
            <span className="sector-pill" style={{ background: s.pillBg, color: s.pillColor }}>{s.pill}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
