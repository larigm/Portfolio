import { useEffect } from 'react';
import { 
  Mail, 
  ArrowRight,
  ExternalLink
} from 'lucide-react';

import heroImg from './assets/hero_illustration.jpg';
import utfprImg from './assets/project_utfpr.png';
import petzImg from './assets/project_petz.png';

import './App.css';

// SVG components for brand icons that are missing in recent Lucide versions
const GithubIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);

const LinkedinIcon = ({ size = 20, className = "" }: { size?: number; className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    width={size} 
    height={size} 
    stroke="currentColor" 
    strokeWidth="2" 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

function App() {
  const currentYear = new Date().getFullYear();

  // Scroll Reveal Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible');
          observer.unobserve(entry.target); // Animate only once
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  // Scroll to section helper
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app-container">
      {/* Background Glowing Effects */}
      <div className="glow-bg glow-purple"></div>
      <div className="glow-bg glow-blue"></div>
      <div className="glow-bg glow-purple-bottom"></div>

      {/* Navbar */}
      <nav className="navbar">
        <ul className="nav-links">
          <li><a href="#inicio" onClick={(e) => { e.preventDefault(); handleScroll('inicio'); }} className="nav-link">Início</a></li>
          <li><a href="#sobre" onClick={(e) => { e.preventDefault(); handleScroll('sobre'); }} className="nav-link">Sobre</a></li>
          <li><a href="#tecnologias" onClick={(e) => { e.preventDefault(); handleScroll('tecnologias'); }} className="nav-link">Tecnologias</a></li>
          <li><a href="#projetos" onClick={(e) => { e.preventDefault(); handleScroll('projetos'); }} className="nav-link">Projetos</a></li>
          <li><a href="#contato" onClick={(e) => { e.preventDefault(); handleScroll('contato'); }} className="nav-link">Contato</a></li>
        </ul>
        <button 
          className="btn-resume" 
          onClick={() => window.open('/curriculo.pdf', '_blank')}
        >
          Currículo
        </button>
      </nav>

      <div className="container">
        {/* Hero Section */}
        <section id="inicio" className="hero-section">
          <div className="hero-content reveal">
            <div className="hero-tag">
              <span className="hero-tag-dot animate-pulse-slow"></span>
              Disponível para novos desafios
            </div>
            <h1 className="hero-title">Olá, eu sou a Larissa.</h1>
            <h2 className="hero-subtitle">Desenvolvedora Front-end</h2>
            <p className="hero-description">
              Transformo ideias em interfaces modernas, organizadas e intuitivas, 
              garantindo a melhor experiência para o usuário final.
            </p>
            <div className="hero-actions">
              <a href="#contato" onClick={(e) => { e.preventDefault(); handleScroll('contato'); }} className="btn-primary">
                <Mail size={18} />
                Me mande um email
              </a>
              <a href="https://github.com/larigm" target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <GithubIcon size={18} />
                GitHub
                <ExternalLink size={14} />
              </a>
            </div>
            <div className="hero-techs">
              <span className="hero-tech-badge">React</span>
              <span className="hero-tech-badge">TypeScript</span>
              <span className="hero-tech-badge">Next.js</span>
              <span className="hero-tech-badge">Bootstrap</span>
            </div>
          </div>

          <div className="hero-image-container reveal reveal-delay-200">
            <div className="hero-image-wrapper">
              <img 
                src={heroImg} 
                alt="Larissa's Developer Workspace Illustration" 
                className="hero-illustration" 
              />
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="sobre">
          <div className="section-title-wrapper reveal">
            <h2 className="section-title">
              Sobre mim
              <div className="section-title-line"></div>
            </h2>
          </div>

          <div className="sobre-mim-text-container glass reveal reveal-delay-100">
            <p>
              Minha trajetória na tecnologia começou quando ingressei no curso de Sistemas para Internet da UTFPR, 
              mesmo sem ter nenhum conhecimento em programação. Ao longo da graduação, fui descobrindo diferentes 
              áreas do desenvolvimento e percebi que o que mais despertava meu interesse era Front-end. Hoje, 
              no 5º período, sigo transformando o aprendizado da faculdade em projetos reais.
            </p>
            <p>
              Além da formação acadêmica, também adquiri experiência na área de suporte técnico, onde desenvolvi 
              habilidades como resolução de problemas, comunicação e atenção aos detalhes. Atualmente, meus estudos 
              estão concentrados em React, TypeScript e Next.js. Neste momento, estou em busca da minha primeira 
              oportunidade como Desenvolvedora Front-end Júnior.
            </p>
          </div>

          {/* Atualmente Section */}
          <div className="fora-codigo-wrapper reveal reveal-delay-200">
            <h3 className="fora-codigo-title">Atualmente...</h3>
            <div className="fora-codigo-grid">
              <div className="fora-codigo-card glass reveal reveal-delay-100">
                <span className="fora-codigo-icon">📖</span>
                <h4 className="fora-codigo-card-title">Estudos</h4>
                <p className="fora-codigo-card-desc">
                  Fazendo curso de Next.js.
                </p>
              </div>
              <div className="fora-codigo-card glass reveal reveal-delay-200">
                <span className="fora-codigo-icon">🤝</span>
                <h4 className="fora-codigo-card-title">Voluntariado</h4>
                <p className="fora-codigo-card-desc">
                  Contribuindo como desenvolvedora Front-end em um projeto voluntário.
                </p>
              </div>
              <div className="fora-codigo-card glass reveal reveal-delay-300">
                <span className="fora-codigo-icon">📂</span>
                <h4 className="fora-codigo-card-title">Projetos</h4>
                <p className="fora-codigo-card-desc">
                  Revisitando e aprimorando projetos do meu GitHub.
                </p>
              </div>
              <div className="fora-codigo-card glass reveal reveal-delay-400">
                <span className="fora-codigo-icon">📚</span>
                <h4 className="fora-codigo-card-title">Leitura</h4>
                <p className="fora-codigo-card-desc">
                  Sempre reservando um tempo para ler.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="tecnologias">
          <div className="section-title-wrapper reveal">
            <h2 className="section-title">
              Minhas Tecnologias
              <div className="section-title-line"></div>
            </h2>
          </div>

          <div className="tech-grid">
            <div className="tech-column reveal reveal-delay-100">
              <h3 className="tech-col-title">Frontend</h3>
              <div className="tech-badges-list">
                <span className="tech-badge">React</span>
                <span className="tech-badge">React Native</span>
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">Bootstrap</span>
              </div>
            </div>

            <div className="tech-column reveal reveal-delay-200">
              <h3 className="tech-col-title">Backend</h3>
              <div className="tech-badges-list">
                <span className="tech-badge">Node.js</span>
              </div>
            </div>

            <div className="tech-column reveal reveal-delay-300">
              <h3 className="tech-col-title">Database</h3>
              <div className="tech-badges-list">
                <span className="tech-badge">MySQL</span>
                <span className="tech-badge">PostgreSQL</span>
              </div>
            </div>

            <div className="tech-column reveal reveal-delay-400">
              <h3 className="tech-col-title">Ferramentas</h3>
              <div className="tech-badges-list">
                <span className="tech-badge">Git</span>
                <span className="tech-badge">GitHub</span>
                <span className="tech-badge">Figma</span>
                <span className="tech-badge">Netlify</span>
                <span className="tech-badge">Supabase</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projetos">
          <div className="projects-header reveal">
            <div className="projects-title-wrapper">
              <h2 className="section-title">Projetos Relevantes 💜</h2>
              <p className="projects-subtitle">Alguns projetos que representam minha evolução como desenvolvedora Front-end.</p>
            </div>
            <a href="https://github.com/larigm" target="_blank" rel="noopener noreferrer" className="view-all-link">
              Ver todos os projetos
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="projects-grid">
            {/* Project 1 */}
            <div className="project-card glass reveal reveal-delay-100">
              <div className="project-image-container">
                <img 
                  src={utfprImg} 
                  alt="UTFPR Conecta Project UI" 
                  className="project-image"
                />
              </div>
              <div className="project-info">
                <div>
                  <div className="project-card-header">
                    <h3 className="project-title">UTFPR Conecta</h3>
                    <span className="project-status-badge">Projeto Acadêmico</span>
                  </div>
                  <p className="project-description">
                    <strong>Plataforma para conectar alunos a eventos.</strong><br/>
                    Projeto acadêmico desenvolvido em equipe para aproximar estudantes de eventos e oportunidades dentro da universidade.
                  </p>
                </div>
                <div className="project-tags">
                  <span className="project-tag">#Angular</span>
                  <span className="project-tag">#TypeScript</span>
                  <span className="project-tag">#Node.js</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="project-card glass reveal reveal-delay-200">
              <div className="project-image-container">
                <img 
                  src={petzImg} 
                  alt="Adote Petz Project UI" 
                  className="project-image"
                />
              </div>
              <div className="project-info">
                <div>
                  <div className="project-card-header">
                    <h3 className="project-title">Adote Petz</h3>
                    <span className="project-status-badge">Projeto Acadêmico</span>
                  </div>
                  <p className="project-description">
                    <strong>Recriação da plataforma Adote Petz.</strong><br/>
                    Projeto acadêmico desenvolvido para reproduzir o design de um site já existente.
                  </p>
                </div>
                <div className="project-tags">
                  <span className="project-tag">#Bootstrap</span>
                  <span className="project-tag">#Supabase</span>
                  <span className="project-tag">#JavaScript</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contato" className="contact-section glass reveal">
          <h2 className="contact-title">Vamos conversar?</h2>
          <p className="contact-desc">
            Estou sempre aberta a novas oportunidades, colaborações em projetos open-source 
            ou apenas bater um papo sobre tecnologia.
          </p>

          <div className="contact-cards">
            <a href="mailto:larissagomes1029@gmail.com" className="contact-card glass reveal reveal-delay-100">
              <Mail className="contact-card-icon" />
              E-mail
            </a>
            <a href="https://www.linkedin.com/in/larissagomesmachado/" target="_blank" rel="noopener noreferrer" className="contact-card glass reveal reveal-delay-200">
              <LinkedinIcon className="contact-card-icon" />
              LinkedIn
            </a>
            <a href="https://github.com/larigm" target="_blank" rel="noopener noreferrer" className="contact-card glass reveal reveal-delay-300">
              <GithubIcon className="contact-card-icon" />
              GitHub
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-illustration-wrapper">
          <svg className="footer-whale-svg" viewBox="0 0 120 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 35C10 35 15 20 30 18C45 16 65 24 85 24C95 24 105 18 110 12C108 22 105 32 95 38C85 44 65 44 45 42C30 40 15 42 10 35Z"/>
            <path d="M92 36C95 38 102 44 105 48C101 47 95 43 92 36Z"/>
            <path d="M40 42C42 45 46 48 45 50C43 50 39 46 40 42Z" />
            <circle cx="28" cy="26" r="1.5" fill="#080914" />
          </svg>
        </div>

        <p className="footer-thanks">
          Obrigada por passar por aqui! Espero que tenha gostado do meu portfólio. Até breve! 🚀
        </p>

        <div className="footer-bar">
          <span className="footer-logo">Larissa</span>
          <span className="footer-copy">© {currentYear} Larissa - Produzido com muito carinho</span>
          <div className="footer-links">
            <a href="https://github.com/larigm" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
            <a href="https://www.linkedin.com/in/larissagomesmachado/" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
            <a href="mailto:larissagomes1029@gmail.com" className="footer-link">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
