import { useEffect, useState } from 'react'
import {
  Users,
  Code2,
  BookOpen,
  ArrowRight,
  Mail,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import ModelShowcase from '../components/ModelShowcase'

// ── IEEE icon ──────────────────────────────────────────────────────────────

function IEEEIcon() {
  return (
    <img src="/ieee-logo.webp" alt="IEEE" className="h-4 w-auto shrink-0" />
  )
}

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
    <span className="typewriter-cursor text-brand-600 dark:text-brand-400">
      {displayed}
    </span>
  )
}

// ── Experience ─────────────────────────────────────────────────────────────

const mcRoles = [
  {
    title: 'Software Engineering Manager',
    dates: 'Feb 2025 – Present',
    desc: "Leading B2B engineering teams building scalable web applications in Mastercard's Commercial domain — driving observability, compliance, and developer productivity at enterprise scale.",
  },
  {
    title: 'Site Reliability Engineering Manager',
    dates: 'Sep 2023 – Feb 2025',
    desc: "Led the UDAP NiFi team in Mastercard's Data Platforms, owning SLAs/SLOs/SLIs for mission-critical data pipelines and embedding reliability across the full SDLC.",
  },
  {
    title: 'Lead Site Reliability Engineer',
    dates: 'Jun 2022 – Oct 2023',
    desc: "Reduced manual deployment time by 40% through Jenkins/XLR automation and owned the NiFi deployment strategy for Mastercard's Unified Data Acquisition Platform in production.",
  },
]

// ── Research domains ─────────────────────────────────────────────────────────

const researchDomains = [
  'Agentic AI Systems',
  'AIOps & Infrastructure Remediation',
  'Compliance-as-Code & Regulatory AI',
  'Financial Fraud Detection',
]

export default function Home() {
  return (
    <>
      <SEO
        title="Sankaranainar Parmasivan | Engineering Leader & AI Researcher"
        description="Sankaranainar Parmasivan — Software Engineering Manager at Mastercard, IEEE Senior Member, Agentic AI Researcher. 15+ years in FinTech and autonomous AI systems."
        canonical="https://sankaranainar.dev"
        includeSchema
      />

      <div className="relative w-full bg-white dark:bg-[#0E1116] text-gray-900 dark:text-[#E6E8EB] transition-colors duration-300">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full blur-[120px] pointer-events-none" />

        {/* ── 1. Hero Section ── */}
        <section className="relative min-h-[90vh] flex items-center justify-center pt-24 pb-16 px-6 lg:px-8 border-b border-gray-200 dark:border-surface-900 overflow-hidden">
          <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center z-10">
            {/* Left side info */}
            <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center space-y-6 text-left">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="credential-pill bg-blue-600/10 text-blue-700 border-blue-400/30
                  dark:bg-blue-600/10 dark:text-blue-300 dark:border-blue-500/30">
                  <IEEEIcon />
                  IEEE Senior Member
                </span>
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
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 dark:text-white leading-tight">
                Sankaranainar Parmasivan
              </h1>

              <p className="text-xl sm:text-2xl font-medium min-h-[2rem] text-gray-500 dark:text-content-secondary">
                <Typewriter />
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  to="/research"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-lg hover:shadow-brand-600/30 gap-2"
                >
                  View Research
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium text-sm text-gray-700 dark:text-white bg-white dark:bg-surface-900 border border-gray-300 dark:border-surface-800 hover:bg-gray-50 dark:hover:bg-surface-800 transition-all gap-2"
                >
                  View My Projects
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-surface-900 max-w-md">
                <a
                  href="mailto:contact@sankaranainar.dev"
                  className="flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-content-secondary hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  Email
                </a>
                <a
                  href="https://linkedin.com/in/sankaranainar-paramasivan"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-content-secondary hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <Users className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  LinkedIn
                </a>
                <Link
                  to="/research"
                  className="flex items-center gap-2 text-xs font-mono text-gray-500 dark:text-content-secondary hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                  Publications
                </Link>
              </div>
            </div>

            {/* Right side professional photo */}
            <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center">
              <div className="shrink-0 relative">
                {/* Glow ring */}
                <div className="absolute inset-0 rounded-full blur-2xl opacity-40 dark:opacity-60
                  bg-brand-600 scale-110 pointer-events-none" />
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full overflow-hidden
                  ring-2 ring-brand-600/60 shadow-glow-brand">
                  <img
                    src="/new-profile-pic.jpg"
                    alt="Sankaranainar Parmasivan"
                    className="w-full h-full object-cover object-top"
                    width="640"
                    height="648"
                    fetchpriority="high"
                    onError={(e) => {
                      e.target.src = "/profile.jpeg";
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Stats Grid Section ── */}
        <section className="relative py-12 px-6 lg:px-8 border-b border-gray-200 dark:border-surface-900 bg-gray-50 dark:bg-surface-950/40">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              <div className="text-center p-4 md:border-r border-gray-200 dark:border-surface-900 last:border-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-600 dark:text-brand-400 font-mono">15+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-content-secondary mt-1 font-mono">Years Experience</div>
              </div>
              <div className="text-center p-4 md:border-r border-gray-200 dark:border-surface-900 last:border-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-600 dark:text-brand-400 font-mono">5+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-content-secondary mt-1 font-mono">Publications</div>
                <div className="text-[10px] text-gray-400 dark:text-content-tertiary mt-0.5 font-mono">3 IEEE · 2 Springer</div>
              </div>
              <div className="text-center p-4 md:border-r border-gray-200 dark:border-surface-900 last:border-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-600 dark:text-brand-400 font-mono">66+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-content-secondary mt-1 font-mono">Peer Reviews</div>
              </div>
              <div className="text-center p-4 md:border-r border-gray-200 dark:border-surface-900 last:border-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-600 dark:text-brand-400 font-mono">4</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-content-secondary mt-1 font-mono">Research Domains</div>
              </div>
              <div className="text-center p-4 last:border-0">
                <div className="text-3xl sm:text-4xl font-extrabold text-brand-600 dark:text-brand-400 font-mono">23+</div>
                <div className="text-xs uppercase tracking-widest text-gray-500 dark:text-content-secondary mt-1 font-mono">Certifications</div>
              </div>
            </div>

            {/* Research domain tags */}
            <div className="flex flex-wrap justify-center gap-2 mt-8 pt-6 border-t border-gray-200 dark:border-surface-900">
              {researchDomains.map((domain) => (
                <span
                  key={domain}
                  className="px-3 py-1 rounded-full text-[11px] font-mono border
                    bg-brand-50 text-brand-700 border-brand-200
                    dark:bg-brand-600/10 dark:text-brand-400 dark:border-brand-600/30"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── 2.5 Active SOTA Model Showcase ── */}
        <section className="relative py-8 px-6 lg:px-8 border-b border-gray-200 dark:border-surface-900 bg-white dark:bg-surface-950/60">
          <div className="max-w-7xl mx-auto">
            <ModelShowcase />
          </div>
        </section>

        {/* ── 3. Core Pillars / Expertise ── */}
        <section className="relative py-20 px-6 lg:px-8 border-b border-gray-200 dark:border-surface-900">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-xs uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400 font-mono mb-2">Capabilities</h2>
              <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Areas of Domain Expertise</p>
              <p className="text-gray-500 dark:text-content-secondary mt-4">
                My career operates at the intersection of high-reliability platforms, distributed systems, and modern artificial intelligence architectures.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Pillar 1 */}
              <div className="p-8 rounded-2xl bg-white dark:bg-surface-950 border border-gray-200 dark:border-surface-900 hover:border-brand-500/40 dark:hover:border-brand-500/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-brand-500/10 flex items-center justify-center border border-brand-500/20 mb-6">
                    <Code2 className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Engineering & Platforms</h3>
                  <p className="text-gray-500 dark:text-content-secondary text-sm leading-relaxed mb-4">
                    Architecting high-throughput microservices and resilient data pipelines. Deep experience in backend and platform operations.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Java', 'Spring Boot', 'Python', 'Kafka', 'TypeScript', 'Kubernetes', 'CI/CD'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-gray-100 dark:bg-surface-900 text-gray-500 dark:text-content-secondary text-[11px] font-mono border border-gray-200 dark:border-surface-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pillar 2 */}
              <div className="p-8 rounded-2xl bg-white dark:bg-surface-950 border border-gray-200 dark:border-surface-900 hover:border-brand-500/40 dark:hover:border-brand-500/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-brand-500/10 flex items-center justify-center border border-brand-500/20 mb-6">
                    <BookOpen className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Agentic AI & Research</h3>
                  <p className="text-gray-500 dark:text-content-secondary text-sm leading-relaxed mb-4">
                    Conducting peer-reviewed research on agentic workflows, AIOps, and LLM-assisted remediation cycles. IEEE Senior Member.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['RAG', 'Agentic Workflows', 'Ollama', 'LanceDB', 'AIOps', 'IEEE & Springer Publications'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-gray-100 dark:bg-surface-900 text-gray-500 dark:text-content-secondary text-[11px] font-mono border border-gray-200 dark:border-surface-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pillar 3 */}
              <div className="p-8 rounded-2xl bg-white dark:bg-surface-950 border border-gray-200 dark:border-surface-900 hover:border-brand-500/40 dark:hover:border-brand-500/30 transition-all duration-300 flex flex-col justify-between">
                <div>
                  <div className="h-12 w-12 rounded-xl bg-brand-500/10 flex items-center justify-center border border-brand-500/20 mb-6">
                    <Users className="w-6 h-6 text-brand-600 dark:text-brand-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">Engineering Leadership</h3>
                  <p className="text-gray-500 dark:text-content-secondary text-sm leading-relaxed mb-4">
                    Managing cross-functional teams to deliver highly compliant, SLA-bound products. Aligning engineering initiatives with organizational business goals.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {['Mastercard', 'UIUC MSM', 'SLAs/SLOs', 'GDPR/PCI', 'Team Building'].map((tech) => (
                      <span key={tech} className="px-2 py-0.5 rounded bg-gray-100 dark:bg-surface-900 text-gray-500 dark:text-content-secondary text-[11px] font-mono border border-gray-200 dark:border-surface-800">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Experience ── */}
        <section className="relative py-20 px-6 lg:px-8 border-b border-gray-200 dark:border-surface-900 bg-white dark:bg-surface-950/30">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <h2 className="text-xs uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400 font-mono mb-2">Experience</h2>
              <p className="text-3xl font-bold text-gray-900 dark:text-white tracking-tight">Where I've built and led.</p>
            </div>

            <div className="card card-featured">
              {/* Mastercard header */}
              <div className="flex items-center justify-between mb-6 pb-5
                border-b border-gray-100 dark:border-surface-600">
                <div>
                  <p className="font-bold text-gray-900 dark:text-content-primary">Mastercard</p>
                  <p className="text-xs text-gray-400 dark:text-content-tertiary font-mono mt-0.5">
                    4 years · O'Fallon, MO
                  </p>
                </div>
                {/* Mastercard logo mark */}
                <div className="flex shrink-0 items-center" aria-hidden="true">
                  <div className="w-7 h-7 rounded-full bg-red-600" />
                  <div className="w-7 h-7 rounded-full bg-orange-400 -ml-3 mix-blend-multiply dark:mix-blend-normal dark:opacity-90" />
                </div>
              </div>

              {/* Vertical timeline */}
              <div className="space-y-0">
                {mcRoles.map((role, i) => (
                  <div key={role.title} className="relative pl-6 pb-6 last:pb-0">
                    {i < mcRoles.length - 1 && (
                      <div className="absolute left-[6px] top-3.5 bottom-0 w-px
                        bg-gray-200 dark:bg-surface-600" />
                    )}
                    <div className="absolute left-0 top-1.5 w-3 h-3 rounded-full
                      border-2 border-brand-600 bg-white dark:bg-surface-800" />
                    <p className="font-semibold text-sm text-gray-900 dark:text-content-primary leading-snug">
                      {role.title}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-content-tertiary font-mono mt-0.5 mb-1.5">
                      {role.dates}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-content-secondary leading-relaxed">
                      {role.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* LinkedIn link */}
              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-surface-600">
                <a
                  href="https://www.linkedin.com/in/sankaranainar-paramasivan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm font-medium text-brand-600 dark:text-brand-400
                    hover:text-brand-700 dark:hover:text-brand-300 transition-colors"
                >
                  Full career history on LinkedIn →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. Contact CTA Footer ── */}
        <section className="relative py-20 px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-surface-950 dark:to-[#0A0D12]">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="text-xs uppercase tracking-[0.2em] text-brand-600 dark:text-brand-400 font-mono">Get in Touch</h2>
            <p className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white tracking-tight">Let's discuss Agentic AI & Reliability Engineering</p>
            <p className="text-gray-500 dark:text-content-secondary text-sm max-w-xl mx-auto">
              Whether you want to discuss AIOps research, check out my IEEE contributions, or explore opportunities, feel free to connect or drop an email.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              <a
                href="mailto:contact@sankaranainar.dev"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white bg-brand-600 hover:bg-brand-700 transition-all shadow-md"
              >
                <Mail className="w-4 h-4" />
                Email Me
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-gray-700 dark:text-white bg-white dark:bg-surface-900 border border-gray-300 dark:border-surface-800 hover:bg-gray-50 dark:hover:bg-surface-800 transition-all"
              >
                Send a Message
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
