import React, { useMemo, useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { FiArrowUpRight, FiDownload, FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import { content, experience, projects, education, certifications, skills } from './content';
import cv from './Assets/CV_David_Verde_2026.pdf';
import './style.css';

function App() {
  const [lang, setLang] = useState('en');
  const t = useMemo(() => content[lang], [lang]);

  return (
    <Router>
      <div className="portfolio-shell">
        <header className="topbar">
          <Link to="/" className="brand">DV<span>.</span></Link>
          <nav>
            <a href="#about">{t.nav.about}</a>
            <a href="#experience">{t.nav.experience}</a>
            <a href="#projects">{t.nav.projects}</a>
            <a href="#education">{t.nav.education}</a>
          </nav>
          <div className="top-actions">
            <div className="lang-switch" aria-label="Language selector">
              <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
              <button className={lang === 'es' ? 'active' : ''} onClick={() => setLang('es')}>ES</button>
            </div>
            <a className="icon-link" href="https://www.linkedin.com/in/david-verde-alvarez/" target="_blank" rel="noreferrer"><FiLinkedin /></a>
          </div>
        </header>

        <main>
          <section className="hero" id="home">
            <div className="hero-copy">
              <p className="eyebrow">{t.hero.eyebrow}</p>
              <h1>David Verde <span>Alvarez</span></h1>
              <h2>{t.hero.title}</h2>
              <p className="hero-subtitle">{t.hero.subtitle}</p>
              <div className="hero-cta">
                <a className="btn btn-primary" href="#projects">{t.hero.primary} <FiArrowUpRight /></a>
                <a className="btn btn-ghost" href={cv} target="_blank" rel="noreferrer">{t.hero.secondary} <FiDownload /></a>
              </div>
              <p className="location"><FiMapPin /> {t.hero.location}</p>
            </div>
            <div className="hero-panel">
              <div className="terminal-head"><span></span><span></span><span></span></div>
              <pre>{`const david = {\n  role: "Full-Stack Developer",\n  focus: ["AI Automation", "Growth"],\n  stack: ["React", "Rails", "Node", "Python"],\n  mindset: "build → measure → improve"\n};`}</pre>
            </div>
          </section>

          <section className="section intro" id="about">
            <div className="section-kicker">01 / PROFILE</div>
            <div className="section-heading-grid">
              <h2>{t.intro.title}</h2>
              <p>{t.intro.body}</p>
            </div>
            <div className="capability-grid">
              {t.intro.cards.map(([title, body], i) => <article className="capability-card" key={title}><span>0{i+1}</span><h3>{title}</h3><p>{body}</p></article>)}
            </div>
            <div className="skills-wrap">{skills.map(skill => <span className="skill-pill" key={skill}>{skill}</span>)}</div>
          </section>

          <section className="section" id="experience">
            <div className="section-kicker">02 / EXPERIENCE</div>
            <div className="section-heading-grid"><h2>{t.experienceTitle}</h2><p>{t.experienceSubtitle}</p></div>
            <div className="timeline">
              {experience.map((item) => (
                <article className="timeline-item" key={`${item.company}-${item.period}`}>
                  <div className="timeline-meta"><strong>{item.period}</strong><span>{item.location}</span></div>
                  <div className="timeline-content"><h3>{item.role[lang]}</h3><h4>{item.company}</h4><ul>{item.bullets[lang].map(b => <li key={b}>{b}</li>)}</ul></div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="projects">
            <div className="section-kicker">03 / PROJECTS</div>
            <div className="section-heading-grid"><h2>{t.projectsTitle}</h2><p>{t.projectsSubtitle}</p></div>
            <div className="project-grid">
              {projects.map((project, i) => (
                <article className="project-card" key={project.title}>
                  <div className="project-index">0{i + 1}</div>
                  <p className="project-tag">{project.tag}</p>
                  <h3>{project.title}</h3>
                  <p>{project.desc[lang]}</p>
                  <div className="stack-line">{project.stack}</div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer"><FiGithub /> {t.viewGithub}</a>
                    {project.demo && <a href={project.demo} target="_blank" rel="noreferrer"><FiArrowUpRight /> {t.viewDemo}</a>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="section" id="education">
            <div className="section-kicker">04 / EDUCATION</div>
            <div className="section-heading-grid"><h2>{t.educationTitle}</h2><p>{t.educationSubtitle}</p></div>
            <div className="education-grid">
              <div className="edu-column">
                {education.map(item => <article className="edu-card" key={item.title}><span>{item.period}</span><h3>{item.title}</h3><p>{item.org}</p></article>)}
              </div>
              <div className="cert-column">
                <h3>Certifications</h3>
                {certifications.map(([name, url]) => <a className="cert-row" href={url} target="_blank" rel="noreferrer" key={name}><span>{name}</span><FiArrowUpRight /></a>)}
              </div>
            </div>
          </section>

          <section className="section contact" id="contact">
            <div><div className="section-kicker">05 / CONTACT</div><h2>{t.contactTitle}</h2><p>{t.contactBody}</p></div>
            <div className="contact-links">
              <a href="mailto:David.verde.alvarez@gmail.com"><FiMail /> Email</a>
              <a href="https://www.linkedin.com/in/david-verde-alvarez/" target="_blank" rel="noreferrer"><FiLinkedin /> LinkedIn</a>
              <a href="https://github.com/David-Verde" target="_blank" rel="noreferrer"><FiGithub /> GitHub</a>
              <a href={cv} target="_blank" rel="noreferrer"><FiDownload /> CV</a>
            </div>
          </section>
        </main>

        <footer><span>© 2026 David Verde Alvarez</span><span>Full-Stack • AI Automation • Digital Growth</span></footer>
      </div>
    </Router>
  );
}

export default App;
