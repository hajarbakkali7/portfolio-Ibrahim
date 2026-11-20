import { createContext, useContext, useEffect, useRef, useState } from 'react'
import './portfolio.css'
import nova1 from './assets/nova1.jpg'
import nova2 from './assets/nova2.jpg'
import nova3 from './assets/nova3.jpg'
import hiba from './assets/hiba-cosmetique.jpg'
import media1 from './assets/media1.jpg'
import media2 from './assets/media2.jpg'
import media3 from './assets/media3.jpg'
import media4 from './assets/media4.jpg'
import media5 from './assets/media5.jpg'
import media6 from './assets/media6.jpg'
import media7 from './assets/media7.jpg'
import media8 from './assets/media8.jpg'
import media9 from './assets/media9.jpg'

import reel1 from './assets/couverture-reel.jpg'
import reel2 from './assets/couverture-reel2.jpg'
import reel3 from './assets/couverture-reel3.jpg'
import reel4 from './assets/couverture-reel4.jpg'
import reel5 from './assets/couverture-reel5.jpg'
import reel6 from './assets/couverture-reel6.jpg'

import auto1 from './assets/autohaus1.jpg'
import auto2 from './assets/autohaus2.jpg'
import auto3 from './assets/autohaus3.jpg'
import auto4 from './assets/autohaus4.jpg'
import auto5 from './assets/autohaus5.jpg'
import auto6 from './assets/autohaus6.jpg'
import autoVideo from './assets/vedio2-autohaus.mp4'

import poster from './assets/affiche-digital.jpg'
import pres1 from './assets/presentation-une-mark1.jpg'
import pres2 from './assets/presentation-une-mark2.jpg'
import estheVideo from './assets/vedio1-esthe.mp4'

// ─── TRADUCTIONS ─────────────────────────────────────────────────────────────

const T = {
  fr: {
    nav: { about: 'à propos', skills: 'compétences', work: 'projets', path: 'parcours', contact: 'contact' },
    hero: {
      role: 'Infographiste',
      place: 'Tétouan, Maroc',
      status: 'Activité indépendante · disponible',
      tagline: 'Je donne forme aux marques : identités visuelles, contenus et supports qui se remarquent.',
      cta1: 'Voir mes projets',
      cta2: 'Me contacter',
      scroll: 'défiler',
    },
    marquee: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe After Effects', 'Adobe Premiere Pro', 'Montage vidéo', 'Identité visuelle', 'Social media management', 'Gestion de contenu', 'Gestion de projets'],
    about: {
      eyebrow: '01 — À propos',
      title: ['Créer,', 'imprimer,', 'raconter.'],
     text: "Infographiste basé à Tétouan, je maîtrise Illustrator, Photoshop, After Effects, Premiere Pro et le montage vidéo. Mon parcours mêle imprimerie, création d'identités visuelles, gestion de contenu et social media management, ainsi qu'une activité indépendante. À l'aise avec l'intelligence artificielle, j'aime participer à de nouvelles activités et travailler en équipe.",
      stats: ['ans d\'expérience', 'projets & marques', 'outils créatifs'],
    },
    skills: {
      eyebrow: '02 — Compétences',
      title: 'Mes outils & domaines',
     groups: [
  { name: 'Logiciels', items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe After Effects', 'Adobe Premiere Pro'] },
  { name: 'Vidéo', items: ['Montage vidéo'] },
  { name: 'Domaines', items: ['Identité visuelle (branding)', 'Gestion de contenu', 'Social media management', 'Création et gestion de projets', "Maîtrise de l'IA et capacité à travailler avec"] },
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
  autohaus: {
    name: 'Auto Haus Tanger',
    cat: 'Gestion de contenu · Réseaux sociaux',
    intro: "Création de visuels et de contenus pour un concessionnaire automobile : publications, mise en valeur des véhicules et vidéo promotionnelle.",
    tags: ['Contenu', 'Photoshop', 'Vidéo'],
    videoLabel: 'Vidéo promotionnelle',
  },
  social: {
    name: 'Réseaux sociaux',
    cat: 'Social media management',
    intro: "Conception et gestion de contenus Instagram : publications et couvertures de reels cohérentes avec l'identité de chaque marque.",
    tags: ['Instagram', 'Contenu', 'Reels', 'Photoshop'],
    postsTitle: 'Publications Instagram',
    reelsTitle: 'Couvertures de reels',
  },
  poster: {
    name: 'Affiche digitale',
    cat: 'Design graphique · Affiche',
    intro: "Conception d'une affiche digitale percutante, pensée pour les réseaux sociaux et la lecture sur écran.",
    tags: ['Affiche', 'Photoshop', 'Digital'],
  },
  present: {
    name: 'Présentation',
    cat: 'Design graphique · Support de présentation',
    intro: "Mise en page de supports de présentation clairs et élégants, avec une hiérarchie visuelle soignée.",
    tags: ['Mise en page', 'Illustrator', 'Présentation'],
  },
  esthe: {
    name: 'Esthe Beauty — Vidéo',
    cat: 'Montage vidéo · Identité visuelle',
    intro: "Montage vidéo de présentation de la marque Esthe Beauty : rythme, transitions et mise en valeur de son univers visuel.",
    tags: ['Montage vidéo', 'Premiere Pro', 'After Effects'],
  },
  mood: {
    name: 'Mood Food',
    cat: 'Création & gestion de projet',
    intro: "Création et gestion de projet de A à Z, de l'identité jusqu'à l'ouverture.",
    steps: ['Identité', 'Création & gestion', 'Ouverture'],
    tags: ['Identité visuelle', 'Gestion de projet'],
  },
},
    path: {
      eyebrow: '04 — Parcours',
      title: 'Expérience & formation',
      expTitle: 'Expérience professionnelle',
      eduTitle: 'Formation',
      jobs: [
  { when: '2026 — Présent', role: 'Infographiste en activité indépendante', org: 'Indépendant' },
  { when: '2025 — 2026', role: 'Mood Food', org: 'Création & gestion de projet', desc: "Création et gestion de projet de A à Z, de l'identité jusqu'à l'ouverture." },
  { when: '2024 — 2025', role: 'Infographiste', org: 'Imprimerie Express Pub' },
  { when: '2023 — 2024', role: 'Graphiste designer', org: 'Yario Centre' },
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
     status: 'Independent activity · available',
      tagline: 'I give shape to brands: visual identities, content and print pieces that stand out.',
      cta1: 'See my work',
      cta2: 'Get in touch',
      scroll: 'scroll',
    },
   marquee: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe After Effects', 'Adobe Premiere Pro', 'Video editing', 'Brand identity', 'Social media management', 'Content management', 'Project management'],
   about: {
      eyebrow: '01 — About',
      title: ['Create,', 'print,', 'tell.'],
      text: "Graphic designer based in Tetouan, skilled in Illustrator, Photoshop, After Effects, Premiere Pro and video editing. My background blends print shop work, brand identity creation, content management and social media management, along with independent activity. Comfortable working with artificial intelligence, I enjoy taking part in new activities and working in a team.",
      stats: ['years of experience', 'projects & brands', 'creative tools'],
    },
    skills: {
      eyebrow: '02 — Skills',
      title: 'Tools & fields',
      groups: [
  { name: 'Software', items: ['Adobe Illustrator', 'Adobe Photoshop', 'Adobe After Effects', 'Adobe Premiere Pro'] },
  { name: 'Video', items: ['Video editing'] },
  { name: 'Fields', items: ['Brand identity (branding)', 'Content management', 'Social media management', 'Project creation & management', 'AI proficiency and ability to work with AI'] },
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
  autohaus: {
    name: 'Auto Haus Tanger',
    cat: 'Content management · Social media',
    intro: 'Visuals and content for a car dealership: posts, vehicle showcases and a promotional video.',
    tags: ['Content', 'Photoshop', 'Video'],
    videoLabel: 'Promotional video',
  },
  social: {
    name: 'Social media',
    cat: 'Social media management',
    intro: "Design and management of Instagram content: posts and reel covers consistent with each brand's identity.",
    tags: ['Instagram', 'Content', 'Reels', 'Photoshop'],
    postsTitle: 'Instagram posts',
    reelsTitle: 'Reel covers',
  },
  poster: {
    name: 'Digital poster',
    cat: 'Graphic design · Poster',
    intro: 'Design of a striking digital poster, made for social media and on-screen reading.',
    tags: ['Poster', 'Photoshop', 'Digital'],
  },
  present: {
    name: 'Presentation',
    cat: 'Graphic design · Presentation material',
    intro: 'Layout of clear and elegant presentation material with a carefully crafted visual hierarchy.',
    tags: ['Layout', 'Illustrator', 'Presentation'],
  },
  esthe: {
    name: 'Esthe Beauty — Video',
    cat: 'Video editing · Brand identity',
    intro: "Presentation video for the Esthe Beauty brand: pacing, transitions and a showcase of its visual universe.",
    tags: ['Video editing', 'Premiere Pro', 'After Effects'],
  },
  mood: {
    name: 'Mood Food',
    cat: 'Project creation & management',
    intro: 'Project creation and management from A to Z, from identity to opening.',
    steps: ['Identity', 'Creation & management', 'Opening'],
    tags: ['Brand identity', 'Project management'],
  },
},
    path: {
      eyebrow: '04 — Journey',
      title: 'Experience & education',
      expTitle: 'Work experience',
      eduTitle: 'Education',
      jobs: [
  { when: '2026 — Present', role: 'Graphic designer in independent activity', org: 'Self-employed' },
  { when: '2025 — 2026', role: 'Mood Food', org: 'Project creation & management', desc: 'Project creation and management from A to Z, from identity to opening.' },
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
const POSTS = [media1, media2, media3, media4, media5, media6, media7, media8, media9]
const REELS = [reel1, reel2, reel3, reel4, reel5, reel6]
const AUTO_IMAGES = [auto1, auto2, auto3, auto4, auto5, auto6]
const PRES_IMAGES = [pres1, pres2]
const POSTER_IMAGES = [poster]

// Agrandissement d'image avec navigation clavier (Échap, ← →)
function useLightbox(images) {
  const [i, setI] = useState(null)
  const n = images.length

  useEffect(() => {
    if (i === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') setI(null)
      if (e.key === 'ArrowRight') setI(x => (x + 1) % n)
      if (e.key === 'ArrowLeft') setI(x => (x - 1 + n) % n)
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [i, n])

  const stop = (fn) => (e) => { e.stopPropagation(); fn() }

  const node = i !== null && (
    <div className="lb" role="dialog" aria-modal="true" onClick={() => setI(null)}>
      <button type="button" className="lb__close" onClick={stop(() => setI(null))} aria-label="Fermer">✕</button>
      {n > 1 && (
        <button type="button" className="lb__nav lb__nav--prev" onClick={stop(() => setI((i - 1 + n) % n))} aria-label="Précédent">←</button>
      )}
      <img key={i} src={images[i]} alt="" className="lb__img" onClick={(e) => e.stopPropagation()} />
      {n > 1 && (
        <button type="button" className="lb__nav lb__nav--next" onClick={stop(() => setI((i + 1) % n))} aria-label="Suivant">→</button>
      )}
      {n > 1 && <span className="lb__count">{i + 1} / {n}</span>}
    </div>
  )

  return [setI, node]
}

// Vidéo qui se lance quand elle est visible et se met en pause en sortant
function AutoVideo({ src, className = '' }) {
  const ref = useRef(null)
  useEffect(() => {
    const v = ref.current
    if (!v) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) v.play().catch(() => {})
      else v.pause()
    }, { threshold: 0.4 })
    obs.observe(v)
    return () => obs.disconnect()
  }, [])
  return <video ref={ref} className={className} src={src} muted loop playsInline controls preload="metadata" />
}

// Image avec inclinaison 3D au survol
function TiltFrame({ src, alt = '', onClick, className = '' }) {
  const ref = useRef(null)
  const move = (e) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    el.style.setProperty('--rx', `${(-py * 5).toFixed(2)}deg`)
    el.style.setProperty('--ry', `${(px * 6).toFixed(2)}deg`)
  }
  const leave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--rx', '0deg')
    el.style.setProperty('--ry', '0deg')
  }
  return (
    <div
      ref={ref}
      className={`pj-frame ${className}`}
      onMouseMove={move}
      onMouseLeave={leave}
      onClick={onClick}
      onKeyDown={(e) => { if (e.key === 'Enter') onClick?.() }}
      role="button"
      tabIndex={0}
      data-hover
    >
      <img src={src} alt={alt} loading="lazy" />
    </div>
  )
}

function ProjectHead({ data }) {
  return (
    <div className="pj__head">
      <span className="tag">{data.cat}</span>
      <h3 className="nova__name">{data.name}</h3>
      <p className="nova__intro">{data.intro}</p>
      {data.tags && (
        <div className="nova__tags">
          {data.tags.map(tag => <span key={tag}>{tag}</span>)}
        </div>
      )}
    </div>
  )
}

function AutoHausShowcase() {
  const { t } = useLang()
  const a = t.work.autohaus
  const [open, box] = useLightbox(AUTO_IMAGES)

  return (
    <div>
      <Reveal><ProjectHead data={a} /></Reveal>
      <div className="auto">
        <div className="auto__grid">
          {AUTO_IMAGES.map((src, i) => (
            <Reveal key={i} delay={i * 90}>
              <button type="button" className="gimg" onClick={() => open(i)} data-hover aria-label={`${a.name} ${i + 1}`}>
                <img src={src} alt="" loading="lazy" />
              </button>
            </Reveal>
          ))}
        </div>
        <Reveal delay={200} className="auto__side">
          <div className="auto__video">
            <AutoVideo src={autoVideo} />
          </div>
          <span className="auto__label"><i /> {a.videoLabel}</span>
        </Reveal>
      </div>
      {box}
    </div>
  )
}

function SocialShowcase() {
  const { t } = useLang()
  const s = t.work.social
  const [openPost, postsBox] = useLightbox(POSTS)
  const [openReel, reelsBox] = useLightbox(REELS)

  return (
    <div>
      <Reveal><ProjectHead data={s} /></Reveal>

      <Reveal as="h4" className="pj-subtitle">{s.postsTitle}</Reveal>
      <div className="insta">
        {POSTS.map((src, i) => (
          <Reveal key={i} delay={i * 70}>
            <button type="button" className="gimg insta__item" onClick={() => openPost(i)} data-hover aria-label={`${s.postsTitle} ${i + 1}`}>
              <img src={src} alt="" loading="lazy" />
            </button>
          </Reveal>
        ))}
      </div>

      <Reveal as="h4" className="pj-subtitle">{s.reelsTitle}</Reveal>
      <div className="reels">
        {REELS.map((src, i) => (
          <Reveal key={i} delay={i * 90}>
            <button type="button" className="gimg reel" onClick={() => openReel(i)} data-hover aria-label={`${s.reelsTitle} ${i + 1}`}>
              <img src={src} alt="" loading="lazy" />
              <span className="reel__play" aria-hidden="true">▶</span>
            </button>
          </Reveal>
        ))}
      </div>

      {postsBox}
      {reelsBox}
    </div>
  )
}

function PosterShowcase() {
  const { t } = useLang()
  const p = t.work.poster
  const [open, box] = useLightbox(POSTER_IMAGES)

  return (
    <div className="pj-split">
      <Reveal><ProjectHead data={p} /></Reveal>
      <Reveal delay={150}>
        <TiltFrame src={poster} alt={p.name} onClick={() => open(0)} />
      </Reveal>
      {box}
    </div>
  )
}

function PresentationShowcase() {
  const { t } = useLang()
  const p = t.work.present
  const [open, box] = useLightbox(PRES_IMAGES)

  return (
    <div>
      <Reveal><ProjectHead data={p} /></Reveal>
      <div className="pres">
        {PRES_IMAGES.map((src, i) => (
          <Reveal key={i} delay={i * 180}>
            <div className="pres__float" style={{ '--f': i }}>
              <TiltFrame src={src} alt={`${p.name} ${i + 1}`} onClick={() => open(i)} />
            </div>
          </Reveal>
        ))}
      </div>
      {box}
    </div>
  )
}

function EstheVideoShowcase() {
  const { t } = useLang()
  const e = t.work.esthe

  return (
    <div className="pj-split">
      <Reveal><ProjectHead data={e} /></Reveal>
      <Reveal delay={150}>
        <div className="pj-video">
          <AutoVideo src={estheVideo} />
        </div>
      </Reveal>
    </div>
  )
}

function MoodFoodShowcase() {
  const { t } = useLang()
  const m = t.work.mood

  return (
    <Reveal className="mood">
      <span className="mood__mark" aria-hidden="true">A→Z</span>
      <ProjectHead data={m} />
      <ol className="mood__steps">
        <i className="mood__line" aria-hidden="true" />
        {m.steps.map((s, i) => (
          <li key={s} style={{ '--i': i }}>
            <b>{String(i + 1).padStart(2, '0')}</b>
            <span>{s}</span>
          </li>
        ))}
      </ol>
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
          <AutoHausShowcase />
          <SocialShowcase />
          <PosterShowcase />
          <PresentationShowcase />
          <EstheVideoShowcase />
          <MoodFoodShowcase />
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
                        {j.desc && <small className="job__desc">{j.desc}</small>}
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