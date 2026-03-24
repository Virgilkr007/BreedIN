import React, { useEffect, useRef } from 'react';
import './Approach.css';

const pillars = [
  { num: '01', title: 'Pilot Deployments', desc: 'We work directly inside firms to activate AI on their existing IoT infrastructure — no new hardware required. Real results, real data, real confidence.', tag: 'Hands-On', color: 'rgba(79,142,247,0.1)', textColor: '#4f8ef7' },
  { num: '02', title: 'Workshops & Training', desc: 'Structured learning sessions for teams at all levels — from C-suite to operations — translating AI concepts into decisions they can act on today.', tag: 'Education', color: 'rgba(255,77,125,0.1)', textColor: '#ff4d7d' },
  { num: '03', title: '1-on-1 Consultations', desc: 'Deep-dive advisory sessions to map each firm\'s specific devices, workflows, and goals to the right AI integration strategy.', tag: 'Strategic', color: 'rgba(232,34,58,0.1)', textColor: '#e8223a' },
  { num: '04', title: 'Research & Case Studies', desc: 'Every engagement produces documented evidence — building a public knowledge base of Nigerian AIoT success stories for the ecosystem to learn from.', tag: 'Research', color: 'rgba(124,58,237,0.1)', textColor: '#7c3aed' },
];

export default function Approach() {
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
    <section id="approach" className="approach" ref={ref}>
      <div className="approach-header reveal">
        <div className="section-label" style={{ color: 'var(--blue)' }}>How We Work</div>
        <h2>Four pillars. One mission.</h2>
        <p>BreeDIn's methodology is hands-on, context-driven, and designed to fit the realities of Nigerian firms — without disrupting what's already working.</p>
      </div>
      <div className="approach-grid">
        {pillars.map((p, i) => (
          <div className="approach-card reveal" key={i}>
            <div className="approach-num">{p.num}</div>
            <h3>{p.title}</h3>
            <p>{p.desc}</p>
            <span className="approach-tag" style={{ background: p.color, color: p.textColor }}>{p.tag}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
