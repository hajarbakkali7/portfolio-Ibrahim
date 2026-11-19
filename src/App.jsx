import { createContext, useContext, useEffect, useRef, useState } from 'react'
import './portfolio.css'
import nova1 from './assets/nova1.jpg'
import nova2 from './assets/nova2.jpg'
import nova3 from './assets/nova3.jpg'
import hiba from './assets/hiba-cosmetique.jpg'

// ─── TRADUCTIONS ─────────────────────────────────────────────────────────────

const T = {
  fr: {
    nav: { about: 'à propos', skills: 'compétences', work: 'projets', path: 'parcours', contact: 'contact' },
    hero: {
      role: 'Infographiste',
      place: 'Tétouan, Maroc',
      status: 'Disponible en freelance',
      tagline: 'Je donne forme aux marques : identités visuelles, contenus et supports qui se remarquent.',
      cta1: 'Voir mes projets',
      cta2: 'Me contacter',
      scroll: 'défiler',
    },
    marquee: ['Adobe Illustrator', 'Adobe Photoshop', 'Montage vidéo', 'Identité visuelle', 'Gestion de contenu', 'Gestion de projets'],
    about: {
      eyebrow: '01 — À propos',
      title: ['Créer,', 'imprimer,', 'raconter.'],
      text: "Infographiste basé à Tétouan, je maîtrise Illustrator, Photoshop et le montage vidéo. Mon parcours mêle imprimerie, création d'identités visuelles et gestion de contenu pour différents clients, ainsi qu'activité indépendante et freelance. J'aime participer à de nouvelles activités et travailler en équipe.",
      stats: ['ans d\'expérience', 'projets & marques', 'outils créatifs'],
    },
    skills: {
      eyebrow: '02 — Compétences',
      title: 'Mes outils & domaines',
      groups: [
        { name: 'Logiciels', items: ['Adobe Illustrator', 'Adobe Photoshop'] },
        { name: 'Vidéo', items: ['Montage vidéo'] },
        { name: 'Domaines', items: ['Identité visuelle (branding)', 'Gestion de contenu', 'Création et gestion de projets'] },
      ],
    },
    work: {
  eyebrow: '03 — Projets',
  title: 'Sélection de travaux',
  novatech: {
    name: 'Novatech',
    cat: 'Identité visuelle · UI · Direction artistique',
    intro: "Identité visuelle complète d'une marque technologique : système de couleurs, typographie, icône d'application et affiche de campagne.",
    slides: [
      { label: 'Couleurs & typographie', text: "Une palette vert lime, turquoise et bleu nuit, associée à la typographie Inter pour une lisibilité parfaite sur écran." },
      { label: 'Icône & application', text: "Une icône modulaire déclinée en version claire et sombre, puis intégrée dans les stores et l'interface mobile." },
      { label: 'Affiche « One System »', text: "Visuel de campagne : un seul système, des possibilités infinies. Compositions lumineuses et valeurs de la marque." },
    ],
    tags: ['Branding', 'Illustrator', 'Photoshop', 'UI'],
  },
  hiba: {
    name: 'Hiba Cosmétique',
    cat: 'Identité visuelle · Packaging',
    intro: "Création du logo et de l'univers visuel d'une marque de cosmétiques : monogramme, packaging et motif graphique en rouge et blanc.",
    tags: ['Logo', 'Packaging', 'Mockup', 'Branding'],
  },
  view: 'Voir',
},
    path: {
      eyebrow: '04 — Parcours',
      title: 'Expérience & formation',
      expTitle: 'Expérience professionnelle',
      eduTitle: 'Formation',
      jobs: [
        { when: '2026 — Présent', role: 'Infographiste freelance', org: 'Indépendant' },
        { when: '2025 — 2026', role: 'Gérant', org: 'Restaurant' },
        { when: '2024 — 2025', role: 'Infographiste', org: 'Imprimerie Express Pub' },
        { when: '2023 — 2024', role: 'Infographiste', org: 'Yario Centre' },
        { when: '2021 — 2023', role: 'Projet personnel', org: 'Activité indépendante' },
        { when: '2021 · 2 mois', role: 'Stagiaire', org: 'Imprimerie Dakar Pub' },
        { when: '3 mois', role: 'Stagiaire', org: 'AV Nord' },
      ],
      edu: [
        { title: 'Formation en Infographie', org: 'OFPPT', note: '2 ans de formation, spécialité Infographie' },
        { title: 'Baccalauréat Arts Appliqués', org: '', note: '' },
      ],
      langTitle: 'Langues',
      langs: [
        { name: 'Arabe', level: 'Langue maternelle' },
        { name: 'Français', level: 'Courant' },
        { name: 'Anglais', level: 'Basique' },
      ],
    },
    contact: {
      eyebrow: '05 — Contact',
      title: 'Un projet en tête ?',
      sub: "Contactez-moi directement par téléphone ou par email.",
      cv: 'Télécharger le CV',
      phone: 'Téléphone',
      email: 'Email',
      place: 'Localisation',
    },
    footer: 'Tous droits réservés',
    top: 'Haut de page ↑',
  },

  en: {
    nav: { about: 'about', skills: 'skills', work: 'work', path: 'journey', contact: 'contact' },
    hero: {
      role: 'Graphic Designer',
      place: 'Tetouan, Morocco',
      status: 'Available for freelance',
      tagline: 'I give shape to brands: visual identities, content and print pieces that stand out.',
      cta1: 'See my work',
      cta2: 'Get in touch',
      scroll: 'scroll',
    },
    marquee: ['Adobe Illustrator', 'Adobe Photoshop', 'Video editing', 'Brand identity', 'Content management', 'Project management'],
    about: {
      eyebrow: '01 — About',
      title: ['Create,', 'print,', 'tell.'],
      text: "Graphic designer based in Tetouan, skilled in Illustrator, Photoshop and video editing. My background blends print shop work, brand identity creation and content management for various clients, along with independent and freelance activity. I enjoy taking part in new activities and working in a team.",
      stats: ['years of experience', 'projects & brands', 'creative tools'],
    },
    skills: {
      eyebrow: '02 — Skills',
      title: 'Tools & fields',
      groups: [
        { name: 'Software', items: ['Adobe Illustrator', 'Adobe Photoshop'] },
        { name: 'Video', items: ['Video editing'] },
        { name: 'Fields', items: ['Brand identity (branding)', 'Content management', 'Project creation & management'] },
      ],
    },
   work: {
  eyebrow: '03 — Work',
  title: 'Selected projects',
  novatech: {
    name: 'Novatech',
    cat: 'Brand identity · UI · Art direction',
    intro: 'Complete visual identity for a tech brand: color system, typography, app icon and campaign poster.',
    slides: [
      { label: 'Colors & typography', text: 'A lime, teal and midnight blue palette paired with the Inter typeface for perfect on-screen legibility.' },
      { label: 'Icon & application', text: 'A modular icon in light and dark versions, then applied to app stores and the mobile interface.' },
      { label: '"One System" poster', text: 'Campaign visual: one system, endless possibilities. Glowing compositions and brand values.' },
    ],
    tags: ['Branding', 'Illustrator', 'Photoshop', 'UI'],
  },
  hiba: {
    name: 'Hiba Cosmétique',
    cat: 'Brand identity · Packaging',
    intro: 'Logo and visual universe for a cosmetics brand: monogram, packaging and a graphic pattern in red and white.',
    tags: ['Logo', 'Packaging', 'Mockup', 'Branding'],
  },
  view: 'View',
},
    path: {
      eyebrow: '04 — Journey',
      title: 'Experience & education',
      expTitle: 'Work experience',
      eduTitle: 'Education',
      jobs: [
        { when: '2026 — Present', role: 'Freelance graphic designer', org: 'Self-employed' },
        { when: '2025 — 2026', role: 'Manager', org: 'Restaurant' },
        { when: '2024 — 2025', role: 'Graphic designer', org: 'Imprimerie Express Pub' },
        { when: '2023 — 2024', role: 'Graphic designer', org: 'Yario Centre' },
        { when: '2021 — 2023', role: 'Personal project', org: 'Independent activity' },
        { when: '2021 · 2 months', role: 'Intern', org: 'Imprimerie Dakar Pub' },
        { when: '3 months', role: 'Intern', org: 'AV Nord' },
      ],
      edu: [
        { title: 'Graphic Design Training', org: 'OFPPT', note: '2-year program, Graphic Design specialty' },
        { title: 'Applied Arts Baccalaureate', org: '', note: '' },
      ],
      langTitle: 'Languages',
      langs: [
        { name: 'Arabic', level: 'Native' },
        { name: 'French', level: 'Fluent' },
        { name: 'English', level: 'Basic' },
      ],
    },
    contact: {
      eyebrow: '05 — Contact',
      title: 'Got a project in mind?',
      sub: "Contact me directly via phone or email.",
      cv: 'Download CV',
      phone: 'Phone',
      email: 'Email',
      place: 'Location',
    },
    footer: 'All rights reserved',
    top: 'Back to top ↑',
  },
}

// ─── DONNÉES ─────────────────────────────────────────────────────────────────

const EMAIL = 'brahimbakali199@gmail.com'
const PHONE_DISPLAY = '+212 6 08 09 87 11'
const PHONE_HREF = 'tel:+212608098711'
const CV_FILE = '/CV_Ibrahim_Bakali_FR.pdf'





// ─── LANGUE ──────────────────────────────────────────────────────────────────

const LangContext = createContext({ lang: 'fr', t: T.fr, setLang: () => {} })
const useLang = () => useContext(LangContext)

function LangProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const saved = localStorage.getItem('ib-portfolio-lang')
      return saved === 'fr' || saved === 'en' ? saved : 'fr'
    } catch {
      return 'fr'
    }
  })

  useEffect(() => {
    document.documentElement.lang = lang
    try { localStorage.setItem('ib-portfolio-lang', lang) } catch { /* ignore */ }
  }, [lang])

  return <LangContext.Provider value={{ lang, t: T[lang], setLang }}>{children}</LangContext.Provider>
}

// ─── UTILS ANIMATIONS ────────────────────────────────────────────────────────

function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setSeen(true); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`reveal${seen ? ' in' : ''} ${className}`} style={{ '--delay': `${delay}ms` }} {...rest}>
      {children}
    </Tag>
  )
}

function SplitText({ text, delay = 0, className = '' }) {
  return (
    <span className={className} aria-label={text}>
      {[...text].map((ch, i) => (
        <span key={i} className="char" aria-hidden="true" style={{ '--i': i, '--d': `${delay}ms` }}>
          <span>{ch === ' ' ? '\u00A0' : ch}</span>
        </span>
      ))}
    </span>
  )
}

function CountUp({ to }) {
  const ref = useRef(null)
  const [n, setN] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      obs.disconnect()
      const start = performance.now()
      const dur = 1400
      const tick = (now) => {
        const p = Math.min((now - start) / dur, 1)
        setN(Math.round(to * (1 - Math.pow(1 - p, 3))))
        if (p < 1) requestAnimationFrame(tick)
      }
      requestAnimationFrame(tick)
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [to])

  return <span ref={ref}>{n}</span>
}

function Cursor() {
  const dot = useRef(null)
  const ring = useRef(null)

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    let x = 0, y = 0, rx = 0, ry = 0, raf
    const move = (e) => {
      x = e.clientX
      y = e.clientY
      if (dot.current) {
        dot.current.style.transform = `translate(${x}px, ${y}px)`
        dot.current.classList.add('is-ready')
      }
      if (ring.current) {
        ring.current.classList.add('is-ready')
      }
    }
    const loop = () => {
      rx += (x - rx) * 0.16
      ry += (y - ry) * 0.16
      if (ring.current) {
        ring.current.style.transform = `translate(${rx}px, ${ry}px)`
      }
      raf = requestAnimationFrame(loop)
    }
    const over = (e) => {
      if (ring.current) {
        ring.current.classList.toggle('is-hover', !!e.target.closest('a, button, [data-hover]'))
      }
    }
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', over)
    raf = requestAnimationFrame(loop)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', over)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <>
      <div ref={ring} className="cursor-ring" aria-hidden="true" />
      <div ref={dot} className="cursor-dot" aria-hidden="true" />
    </>
  )
}

function ScrollProgress() {
  const bar = useRef(null)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const p = h.scrollTop / Math.max(h.scrollHeight - h.clientHeight, 1)
      if (bar.current) bar.current.style.transform = `scaleX(${p})`
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return <div ref={bar} className="progress" aria-hidden="true" />
}

// ─── NAVBAR ──────────────────────────────────────────────────────────────────

function Navbar() {
  const { lang, setLang, t } = useLang()
  const links = ['about', 'skills', 'work', 'path', 'contact']
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="nav nav--hero-anim">
      <a href="#top" className="nav__logo">
        <span className="nav__logo-mark">IB</span>
        <span className="nav__logo-text">Ibrahim Bakali</span>
      </a>

      <button 
        className="nav__toggle" 
        onClick={() => setIsOpen(!isOpen)} 
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
      >
        <span></span>
        <span></span>
      </button>

      <nav className={`nav__links ${isOpen ? 'is-open' : ''}`} aria-label="Navigation">
        {links.map(k => (
          <a key={k} href={`#${k}`} onClick={() => setIsOpen(false)}>{t.nav[k]}</a>
        ))}
      </nav>

      <div className="lang" role="group" aria-label="Language">
        {['fr', 'en'].map(l => (
          <button
            key={l}
            type="button"
            className={lang === l ? 'is-active' : ''}
            aria-pressed={lang === l}
            onClick={() => setLang(l)}
          >
            {l.toUpperCase()}
          </button>
        ))}
      </div>
    </header>
  )
}

// ─── HERO (SANS CERCLE NI OVALES) ────────────────────────────────────────────

function Hero() {
  const { t } = useLang()
  const h = t.hero

  return (
    <section id="top" className="hero">
      <div className="hero__meta hero-anim-1">
        <span className="pill"><i className="pill__dot" />{h.status}</span>
        <span className="hero__place">{h.role} · {h.place}</span>
      </div>

      <h1 className="hero__title">
        <SplitText text="IBRAHIM" delay={200} className="hero__line" />
        <SplitText text="BAKALI" delay={500} className="hero__line hero__line--outline" />
      </h1>

      <div className="hero__bottom hero-anim-2">
        <p className="hero__tagline">{h.tagline}</p>
        <div className="hero__cta">
          <a href="#work" className="btn btn--solid">{h.cta1} <span>↓</span></a>
          <a href="#contact" className="btn">{h.cta2} <span>↗</span></a>
        </div>
        <div className="hero__scroll"><span />{h.scroll}</div>
      </div>
    </section>
  )
}

function Marquee() {
  const { t } = useLang()
  const row = t.marquee.map((w, i) => (
    <span key={i} className="marquee__item">{w}<b>✦</b></span>
  ))
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        <div className="marquee__row">{row}</div>
        <div className="marquee__row">{row}</div>
      </div>
    </div>
  )
}

// ─── SECTIONS ────────────────────────────────────────────────────────────────

function About() {
  const { t } = useLang()
  const a = t.about
  const nums = [5, 6, 3]

  return (
    <section id="about" className="section">
      <div className="wrap about">
        <Reveal className="eyebrow">{a.eyebrow}</Reveal>
        <div className="about__grid">
          <Reveal as="h2" className="about__title">
            {a.title.map((w, i) => (
              <span key={i} className={i === 1 ? 'is-serif' : ''}>{w}</span>
            ))}
          </Reveal>
          <Reveal delay={150} className="about__body">
            <p>{a.text}</p>
            <div className="stats">
              {a.stats.map((label, i) => (
                <div key={label} className="stat">
                  <div className="stat__num"><CountUp to={nums[i]} />{i === 0 ? '+' : ''}</div>
                  <div className="stat__label">{label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const { t } = useLang()
  const s = t.skills

  return (
    <section id="skills" className="section section--ink">
      <div className="wrap">
        <Reveal className="eyebrow">{s.eyebrow}</Reveal>
        <Reveal as="h2" className="section__title">{s.title}</Reveal>

        <div className="skills">
          {s.groups.map((g, gi) => (
            <Reveal key={g.name} delay={gi * 120} className="skill-group">
              <div className="skill-group__name">{g.name}</div>
              <ul>
                {g.items.map(item => (
                  <li key={item} data-hover>
                    <span>{item}</span>
                    <i>↗</i>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const NOVA_IMAGES = [nova3, nova2, nova1]

function NovatechShowcase() {
  const { t } = useLang()
  const n = t.work.novatech
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const DURATION = 5000

  useEffect(() => {
    if (paused) return
    const id = setTimeout(() => setActive(a => (a + 1) % NOVA_IMAGES.length), DURATION)
    return () => clearTimeout(id)
  }, [active, paused])

  const go = (i) => setActive((i + NOVA_IMAGES.length) % NOVA_IMAGES.length)

  return (
    <Reveal>
      <article
        className="nova"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="nova__stage" data-hover>
          {NOVA_IMAGES.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`${n.name} — ${n.slides[i].label}`}
              className={`nova__img${i === active ? ' is-active' : ''}${i < active ? ' is-past' : ''}`}
              loading="lazy"
            />
          ))}
          <div className="nova__glow" aria-hidden="true" />
          <span className="nova__count">
            {String(active + 1).padStart(2, '0')} / {String(NOVA_IMAGES.length).padStart(2, '0')}
          </span>
          <div className="nova__arrows">
            <button type="button" onClick={() => go(active - 1)} aria-label="Précédent">←</button>
            <button type="button" onClick={() => go(active + 1)} aria-label="Suivant">→</button>
          </div>
        </div>

        <div className="nova__info">
          <span className="tag">{n.cat}</span>
          <h3 className="nova__name">{n.name}</h3>
          <p className="nova__intro">{n.intro}</p>

          <div className="nova__slide" key={active}>
            <strong>{n.slides[active].label}</strong>
            <p>{n.slides[active].text}</p>
          </div>

          <ul className="nova__thumbs">
            {NOVA_IMAGES.map((src, i) => (
              <li key={i}>
                <button
                  type="button"
                  className={i === active ? 'is-active' : ''}
                  onClick={() => go(i)}
                  data-hover
                  aria-label={n.slides[i].label}
                >
                  <img src={src} alt="" />
                  {i === active && !paused && (
                    <i className="nova__bar" style={{ '--dur': `${DURATION}ms` }} />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="nova__tags">
            {n.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

function HibaShowcase() {
  const { t } = useLang()
  const h = t.work.hiba
  const ref = useRef(null)

  const onMove = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${(-py * 4).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(px * 5).toFixed(2)}deg`)
  }
  const onLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }

  return (
    <Reveal delay={100}>
      <article className="hiba">
        <div className="hiba__info">
          <span className="tag">{h.cat}</span>
          <h3 className="nova__name">{h.name}</h3>
          <p className="nova__intro">{h.intro}</p>
          <div className="nova__tags">
            {h.tags.map(tag => <span key={tag}>{tag}</span>)}
          </div>
        </div>
        <div
          ref={ref}
          className="hiba__frame"
          onMouseMove={onMove}
          onMouseLeave={onLeave}
          data-hover
        >
          <img src={hiba} alt={h.name} loading="lazy" />
        </div>
      </article>
    </Reveal>
  )
}

function Work() {
  const { t } = useLang()
  return (
    <section id="work" className="section">
      <div className="wrap">
        <Reveal className="eyebrow">{t.work.eyebrow}</Reveal>
        <Reveal as="h2" className="section__title">{t.work.title}</Reveal>
        <div className="showcase">
          <NovatechShowcase />
          <HibaShowcase />
        </div>
      </div>
    </section>
  )
}



function Path() {
  const { t } = useLang()
  const p = t.path

  return (
    <section id="path" className="section section--paper2">
      <div className="wrap">
        <Reveal className="eyebrow">{p.eyebrow}</Reveal>
        <Reveal as="h2" className="section__title">{p.title}</Reveal>

        <div className="path">
          <div>
            <Reveal as="h3" className="path__heading">{p.expTitle}</Reveal>
            <ol className="jobs">
              {p.jobs.map((j, i) => (
                <Reveal as="li" key={i} delay={i * 60} className="job" data-hover>
                  <span className="job__when">{j.when}</span>
                  <span className="job__main">
                    <strong>{j.role}</strong>
                    <em>{j.org}</em>
                  </span>
                </Reveal>
              ))}
            </ol>
          </div>

          <div className="path__side">
            <Reveal as="h3" className="path__heading">{p.eduTitle}</Reveal>
            <ul className="edu">
              {p.edu.map((e, i) => (
                <Reveal as="li" key={i} delay={i * 100}>
                  <strong>{e.title}</strong>
                  {e.org && <span className="edu__org"> · {e.org}</span>}
                  {e.note && <p>{e.note}</p>}
                </Reveal>
              ))}
            </ul>

            <Reveal as="h3" className="path__heading path__heading--spaced">{p.langTitle}</Reveal>
            <ul className="langs">
              {p.langs.map((l, i) => (
                <Reveal as="li" key={l.name} delay={i * 100}>
                  <span>{l.name}</span>
                  <i />
                  <span>{l.level}</span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── CONTACT SIMPLIFIÉ (TÉLÉPHONE, GMAIL & TÉLÉCHARGEMENT CV) ─────────────────

function Contact() {
  const { t } = useLang()
  const c = t.contact

  return (
    <section id="contact" className="section section--accent">
      <div className="wrap">
        <Reveal className="eyebrow">{c.eyebrow}</Reveal>
        <Reveal as="h2" className="contact__title">{c.title}</Reveal>
        <Reveal as="p" delay={100} className="contact__sub">{c.sub}</Reveal>

        <Reveal delay={150}>
          <a href={`mailto:${EMAIL}`} className="contact__mail" data-hover>
            {EMAIL}<span>↗</span>
          </a>
        </Reveal>

        <Reveal delay={200} className="contact__row">
          <a href={PHONE_HREF} className="contact__item" data-hover>
            <small>{c.phone}</small>
            {PHONE_DISPLAY}
          </a>
          <div className="contact__item">
            <small>{c.place}</small>
            {t.hero.place}
          </div>
          <a href={CV_FILE} download="CV_Ibrahim_Bakali_FR.pdf" className="btn btn--ink" data-hover>
            {c.cv} <span>↓</span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}

function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <span>© 2026 Ibrahim Bakali — {t.footer}</span>
      <a href="#top">{t.top}</a>
    </footer>
  )
}

// ─── APP ─────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <LangProvider>
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Work />
        <Path />
        <Contact />
      </main>
      <Footer />
    </LangProvider>
  )
}