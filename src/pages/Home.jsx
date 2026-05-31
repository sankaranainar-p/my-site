import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionWrapper from '../components/SectionWrapper'
import SEO from '../components/SEO'

// ── Typewriter ─────────────────────────────────────────────────────────────

const PHRASES = ['Engineering Leader.', 'Agentic AI Researcher.', 'IEEE Senior Member.']

function Typewriter() {
  const [displayed, setDisplayed] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [erasing, setErasing] = useState(false)

  useEffect(() => {
    const phrase = PHRASES[phraseIdx]
    let timeout

    if (!erasing) {
      if (displayed.length < phrase.length) {
        timeout = setTimeout(() => setDisplayed(phrase.slice(0, displayed.length + 1)), 65)
      } else {
        timeout = setTimeout(() => setErasing(true), 2200)
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35)
      } else {
        setErasing(false)
        setPhraseIdx(i => (i + 1) % PHRASES.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [displayed, erasing, phraseIdx])

  return (
    <span className="typewriter-cursor text-brand-500 dark:text-brand-400">
      {displayed}
    </span>
  )
}

// ── Count-up stat ──────────────────────────────────────────────────────────

function CountStat({ value, label }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)
  const num = parseInt(value)
  const suffix = value.replace(/\d/g, '')

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 1400
          const steps = 40
          const stepTime = duration / steps
          let step = 0
          const timer = setInterval(() => {
            step++
            const progress = step / steps
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(eased * num))
            if (step >= steps) clearInterval(timer)
          }, stepTime)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [num])

  return (
    <div ref={ref} className="text-center">
      <div className="font-mono text-3xl sm:text-4xl font-bold text-white mb-1 tabular-nums">
        {count}{suffix}
      </div>
      <div className="text-sm text-blue-200 dark:text-blue-200 font-medium tracking-wide uppercase">
        {label}
      </div>
    </div>
  )
}

// ── Data ───────────────────────────────────────────────────────────────────

const credentials = [
  {
    icon: '🏦',
    title: 'Software Engineering Manager',
    org: 'Mastercard',
    desc: 'Leading distributed systems and AI-driven engineering teams in the FinTech space. Driving CI/CD modernization via Jenkins pipeline architecture across 20+ teams and spearheading enterprise Agentic AI adoption.',
  },
  {
    icon: '⚡',
    title: 'IEEE Senior Member',
    org: 'Institute of Electrical and Electronics Engineers',
    desc: 'Recognized for significant professional contributions and sustained service to the engineering community.',
  },
  {
    icon: '🧠',
    title: 'Researcher — Agentic AI & AIOps',
    org: 'Independent Research',
    desc: 'Leading enterprise AI efficiency initiatives and Agentic AI adoption at Mastercard. Publishing and speaking on LLM-based autonomous agents, multi-agent orchestration, and AI-driven operations at scale.',
  },
  {
    icon: '🎓',
    title: 'MS in Management (GPA 3.8)',
    org: 'University of Illinois Urbana-Champaign (UIUC)',
    desc: '15+ years in the IT industry, backed by certifications from Google, Vanderbilt, Adobe, and UIUC Gies College of Business spanning AI, cloud, DevOps, and leadership.',
  },
]

const highlights = [
  { label: 'Publications',        value: '5+'  },
  { label: 'Conference Talks',    value: '7+'  },
  { label: 'Peer Reviews',        value: '40+' },
  { label: 'Years in Engineering',value: '15+' },
  { label: 'Research Domains',    value: '5'   },
]

const skillGroups = [
  {
    label: 'AI & Research',
    colorClass: 'bg-brand-600/10 text-brand-400 border-brand-600/30 hover:border-brand-500/60 dark:bg-brand-600/10 dark:text-brand-400 dark:border-brand-600/30',
    skills: ['Agentic AI', 'LLM Orchestration', 'Multi-Agent Systems', 'MLOps', 'AIOps', 'AI Compliance', 'Explainable AI'],
  },
  {
    label: 'Engineering',
    colorClass: 'bg-purple-600/10 text-purple-400 border-purple-600/30 hover:border-purple-500/60',
    skills: ['Java', 'Spring Boot', 'Angular', 'Kafka', 'React', 'TypeScript', 'Python', 'FastAPI'],
  },
  {
    label: 'DevOps & CI/CD',
    colorClass: 'bg-emerald-600/10 text-emerald-400 border-emerald-600/30 hover:border-emerald-500/60',
    skills: ['Jenkins', 'Kubernetes', 'Docker', 'Azure', 'Terraform', 'GitHub Actions'],
  },
  {
    label: 'Observability',
    colorClass: 'bg-amber-600/10 text-amber-400 border-amber-600/30 hover:border-amber-500/60',
    skills: ['Splunk', 'Dynatrace', 'SLO/SLI/SLA', 'Incident Response', 'Self-Healing Infrastructure'],
  },
]

// ── ORCID icon ─────────────────────────────────────────────────────────────

function OrcidIcon() {
  return (
    <svg viewBox="0 0 256 256" className="w-4 h-4 shrink-0" fill="none">
      <circle cx="128" cy="128" r="128" fill="#a6ce39"/>
      <circle cx="86" cy="86" r="16" fill="white"/>
      <rect x="70" y="112" width="32" height="80" rx="4" fill="white"/>
      <path d="M120 86h44c28 0 48 18 48 46s-20 46-48 46h-44V86z" fill="white"/>
      <path d="M136 102h26c18 0 30 10 30 30s-12 30-30 30h-26V102z" fill="#a6ce39"/>
    </svg>
  )
}

// ── Component ──────────────────────────────────────────────────────────────

export default function Home() {
  return (
    <>
      <SEO
        title="Sankaranainar Parmasivan | Engineering Leader & AI Researcher"
        description="Sankaranainar Parmasivan — Software Engineering Manager at Mastercard, IEEE Senior Member, Agentic AI Researcher. 15+ years in FinTech and autonomous AI systems."
        canonical="https://sankaranainar.dev"
        includeSchema
      />
      {/* ── Hero ── */}
      <div className="relative min-h-screen flex items-center overflow-hidden
        bg-white dark:bg-surface-950 transition-colors duration-300">

        {/* Subtle radial glow */}
        <div className="pointer-events-none absolute inset-0
          bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(37,99,235,0.08),transparent)]
          dark:bg-[radial-gradient(ellipse_60%_50%_at_70%_40%,rgba(37,99,235,0.12),transparent)]" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full py-24 lg:py-32">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-14 lg:gap-20">

            {/* Text block */}
            <div className="flex-1 text-center lg:text-left">
              {/* Name */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] tracking-tight mb-4
                text-gray-900 dark:text-content-primary">
                Sankaranainar<br className="hidden sm:block" />
                <span className="sm:hidden"> </span>Parmasivan
              </h1>

              {/* Typewriter subtitle */}
              <p className="text-xl sm:text-2xl font-medium mb-7 min-h-[2rem]
                text-gray-500 dark:text-content-secondary">
                <Typewriter />
              </p>

              {/* Credential pills */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-9">
                <a
                  href="https://orcid.org/0009-0006-1738-3863"
                  target="_blank"
                  rel="noreferrer"
                  className="credential-pill bg-[#a6ce39]/10 text-[#4a7c2f] border-[#a6ce39]/50
                    hover:bg-[#a6ce39]/20 dark:bg-[#a6ce39]/10 dark:text-[#a6ce39] dark:border-[#a6ce39]/40"
                >
                  <OrcidIcon />
                  ORCID 0009-0006-1738-3863
                </a>
                <span className="credential-pill bg-blue-600/10 text-blue-700 border-blue-400/30
                  dark:bg-blue-600/10 dark:text-blue-300 dark:border-blue-500/30">
                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/>
                  </svg>
                  IEEE Senior Member
                </span>
              </div>

              {/* CTA */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Link to="/research" className="btn-primary">
                  View Research
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="shrink-0 relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full blur-2xl opacity-40 dark:opacity-60
                bg-brand-600 scale-110 pointer-events-none" />
              <div className="relative w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden
                ring-2 ring-brand-600/60 shadow-glow-brand">
                <img
                  src="/profile.jpeg"
                  alt="Sankar — Software Engineering Manager"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1
          text-gray-400 dark:text-content-tertiary animate-bounce">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* ── Stats bar ── */}
      <div className="relative bg-gradient-to-r from-surface-950 via-surface-800 to-surface-950
        border-y border-surface-700 dark:border-surface-600">
        {/* Subtle brand gradient line */}
        <div className="absolute top-0 left-0 right-0 h-px
          bg-gradient-to-r from-transparent via-brand-600/50 to-transparent" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
            {highlights.map(({ label, value }) => (
              <CountStat key={label} value={value} label={label} />
            ))}
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px
          bg-gradient-to-r from-transparent via-brand-600/50 to-transparent" />
      </div>

      {/* ── Key Credentials ── */}
      <SectionWrapper>
        <h2 className="section-heading text-gray-900 dark:text-content-primary">Key Credentials</h2>
        <p className="section-subheading text-gray-500 dark:text-content-secondary">What I do and where I do it.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {credentials.map(({ icon, title, org, desc }) => (
            <div key={title} className="card border-l-4 border-l-brand-600">
              <div className="flex gap-4">
                <span className="text-3xl mt-0.5 shrink-0">{icon}</span>
                <div>
                  <h3 className="font-semibold mb-0.5 text-gray-900 dark:text-content-primary">{title}</h3>
                  <p className="text-xs font-semibold mb-2 text-brand-600 dark:text-brand-400">{org}</p>
                  <p className="text-sm leading-relaxed text-gray-500 dark:text-content-secondary">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── Skills & Stack ── */}
      <SectionWrapper className="pt-0">
        <h2 className="section-heading text-gray-900 dark:text-content-primary">Skills & Stack</h2>
        <p className="section-subheading text-gray-500 dark:text-content-secondary">Technologies and domains I work in.</p>
        <div className="space-y-6">
          {skillGroups.map(({ label, colorClass, skills }) => (
            <div key={label} className="flex flex-col sm:flex-row sm:items-start gap-3">
              <span className="shrink-0 w-28 text-xs font-semibold uppercase tracking-widest
                pt-1 text-gray-400 dark:text-content-tertiary font-mono">
                {label}
              </span>
              <div className="flex flex-wrap gap-2">
                {skills.map(skill => (
                  <span key={skill} className={`skill-tag border ${colorClass}`}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* ── CTA ── */}
      <SectionWrapper className="pt-0">
        <div className="rounded-2xl text-center py-14 px-6
          bg-gradient-to-br from-surface-800 to-surface-950 border border-surface-600">
          <div className="absolute inset-0 rounded-2xl pointer-events-none
            bg-[radial-gradient(ellipse_50%_60%_at_50%_100%,rgba(37,99,235,0.1),transparent)]" />
          <h2 className="text-2xl font-bold text-white mb-3">Let's build something together</h2>
          <p className="mb-7 max-w-md mx-auto text-content-secondary">
            Open to research collaborations, conference invitations, advisory roles, and engineering leadership conversations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200
              bg-brand-600 hover:bg-brand-700 text-white shadow-lg hover:shadow-brand-600/30"
          >
            Reach Out
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
