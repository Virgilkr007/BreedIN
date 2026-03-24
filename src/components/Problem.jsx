import React, { useEffect, useRef } from 'react';
import './Problem.css';

const problems = [
  { icon: '🧠', bg: '#eff6ff', title: 'Mistrust of AI Systems', desc: 'Fear of job displacement and opacity in AI decision-making creates resistance at all organisational levels.' },
  { icon: '📡', bg: '#fff1f2', title: 'Invisible IoT Potential', desc: 'Devices already deployed in firms go unoptimised — data collected but never meaningfully analysed.' },
  { icon: '💸', bg: '#f0fdf4', title: 'Cost Misconceptions', desc: 'Organisations overestimate implementation costs, not realising AI integration can work with existing infrastructure.' },
  { icon: '📚', bg: '#fefce8', title: 'Knowledge Deficit', desc: 'Decision-makers lack exposure to practical AI+IoT use cases relevant to the Nigerian business context.' },
];

export default function Problem() {
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
    <section id="problem" className="problem" ref={ref}>
      <div className="problem-grid">
        <div className="problem-text reveal">
          <div className="section-label">The Challenge</div>
          <h2>Equivocacy is holding Nigerian firms back</h2>
          <p>Many Nigerian organisations sit on a goldmine of underutilised devices — sensors, smart meters, connected systems — but remain sceptical about integrating AI to make sense of it all.</p>
          <p>This isn't a capability gap. It's a confidence gap. BreeDIn exists to close it — by meeting firms where they are, with tools they already own.</p>
        </div>
        <div className="problem-cards">
          {problems.map((p, i) => (
            <div className="problem-card reveal" key={i}>
              <div className="problem-icon" style={{ background: p.bg }}>{p.icon}</div>
              <div>
                <h4>{p.title}</h4>
                <p>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
