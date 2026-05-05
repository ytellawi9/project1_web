import React from 'react';

const TEAM = [
  { initials: 'Yo', name: 'Youssef Khaled Youssef Wahhabi',   id: '2338871' },
  { initials: 'za', name: 'Zaid Hamdi Hamed Zaabout',    id: '2237591' },
];

const TECH = [
  { icon: '⚛️', name: 'React 18',          desc: 'UI framework — SPA with hooks' },
  { icon: '🔀', name: 'React Router v6',   desc: 'Client-side routing' },
  { icon: '🎨', name: 'CSS3 / RWD',        desc: 'Responsive, mobile-first design' },
  { icon: '📦', name: 'JavaScript ES6+',   desc: 'Array methods, modules, hooks' },
  { icon: '🐙', name: 'GitHub',            desc: 'Version control & collaboration' },
  { icon: '🚀', name: 'Render.com',        desc: 'Static site deployment' },
];

function AboutPage() {
  return (
    <section className="about-page">
      <div className="about-hero">
        <p className="about-hero__kicker">Project 01 — MERN Stack</p>
        <h1>About <em>CineVault</em></h1>
        <p>
          CineVault is a component-based front-end application built as part of the Web Applications
          Programming &amp; Engineering course. It demonstrates React SPA architecture, client-side
          state management, dynamic filtering, and responsive design — all deployed live on Render.com.
        </p>
      </div>

      <hr className="about-divider" />

      <h2 className="about-section-title">Tech Stack</h2>
      <div className="tech-grid">
        {TECH.map(t => (
          <div className="tech-item" key={t.name}>
            <div className="tech-item__icon">{t.icon}</div>
            <div className="tech-item__name">{t.name}</div>
            <div className="tech-item__desc">{t.desc}</div>
          </div>
        ))}
      </div>

      <hr className="about-divider" />

      <h2 className="about-section-title">The Team</h2>
      <div className="team-grid">
        {TEAM.map(member => (
          <div className="team-card" key={member.id}>
            <div className="team-card__avatar">{member.initials}</div>
            <div className="team-card__name">{member.name}</div>
            <div className="team-card__id">{member.id}</div>
            <div className="team-card__role">{member.role}</div>
          </div>
        ))}
      </div>

      <hr className="about-divider" />

      <h2 className="about-section-title">What We Built</h2>
      <p style={{ color: 'var(--muted)', lineHeight: 1.9, maxWidth: 620 }}>
        This project covers Topics 01–05 of the course: modern JavaScript (ES6+), React functional
        components, hooks (<code style={{ color: 'var(--accent)' }}>useState</code>, <code style={{ color: 'var(--accent)' }}>useMemo</code>),
        client-side routing, props-driven component design, complex state combining search + sort + genre
        filter simultaneously, and fully responsive layouts for both desktop and mobile viewports.
      </p>
    </section>
  );
}

export default AboutPage;
