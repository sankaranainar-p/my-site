import { useState, useMemo } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import SEO from '../components/SEO'
import { FileText, Award, BookOpen, ExternalLink, Filter, FolderGit2, Sparkles, Building2 } from 'lucide-react'

const GITHUB_ORG_URL = 'https://github.com/sankaranainar-p/ai-agentic-works'

const focusAreas = [
  {
    title: 'Agentic AI Systems & Multi-Agent Orchestration',
    desc: 'Multi-agent orchestration, autonomous task decomposition, tool-use in LLMs, and agent reliability in high-stakes financial operations.',
  },
  {
    title: 'AIOps & Intelligent Infrastructure Remediation',
    desc: 'AI-driven incident detection, automated root cause analysis (RCA), self-healing workflows, and predictive telemetry triage.',
  },
  {
    title: 'Compliance-as-Code & Regulatory AI',
    desc: 'Automated verification against GDPR, PCI DSS, and MiCA frameworks using static scanners blended with LLM semantic reasoning.',
  },
  {
    title: 'Cybersecurity & Financial Fraud Detection',
    desc: 'Decentralized agentic fraud detection, anomaly classification, and malware prevention in cross-border payment networks.',
  },
]

const publications = [
  {
    id: 'acs-ieee-2026',
    title: 'A Decentralized Agentic Architecture for Real-Time Compliance and Fraud Detection in Cross-Border Payment Systems',
    venue: 'IEEE IT Professional',
    year: '2026',
    type: 'Journal Manuscript',
    status: 'Submitted / Under Review',
    authors: 'Sankaranainar Parmasivan',
    abstract: 'Proposes a decentralized multi-agent framework (AnomalyAgent, PolicyAgent, RiskAgent, XGBoost ML agent, Human-on-the-loop review, and hashed audit trust layer) for real-time compliance enforcement and fraud detection across ISO 20022 cross-border payment rails.',
    repoUrl: `${GITHUB_ORG_URL}/tree/main/acs-cross-border-compliance`,
    featured: true,
  },
  {
    id: 'icuis-2025',
    title: 'Innovative Framework for Secure and Scalable Web and Mobile Application Development in Fintech: A User-Centric and AI-Driven Approach',
    venue: '2025 5th International Conference on Ubiquitous Computing and Intelligent Information Systems (ICUIS)',
    year: '2025',
    type: 'Conference',
    status: 'Published',
    doi: 'https://doi.org/10.1109/icuis67429.2025.11380645',
  },
  {
    id: 'iemcon-2025',
    title: 'Transfer Learning for Efficient Domain Adaptation in Sequential Recommendation Systems',
    venue: 'IEEE IEMCON 2025',
    year: '2025',
    type: 'Conference',
    status: 'Published',
    doi: 'https://doi.org/10.1109/IEMCON67450.2025.11381193',
  },
  {
    id: 'icesc-2025',
    title: 'AI-Powered Algorithms for the Prevention and Detection of Computer Malware Infections',
    venue: '2025 6th International Conference on Electronics and Sustainable Communication Systems (ICESC)',
    year: '2025',
    type: 'Conference',
    status: 'Published',
    doi: 'https://doi.org/10.1109/icesc65114.2025.11212519',
  },
  {
    id: 'icdlai-2025-1',
    title: 'AI-Augmented Site Reliability Engineering: Enhancing Resilience and Compliance in Financial Systems',
    venue: 'Deep Learning and Visual Artificial Intelligence (ICDLAI 2025), Lecture Notes in Networks and Systems, vol 2097, Springer, Cham',
    year: '2025',
    type: 'Springer LNNS Book Chapter',
    status: 'Published',
    doi: 'https://doi.org/10.1007/978-3-032-32476-4_45',
    coAuthors: 'Kathiresan Jayabalan, Sethuraman Radhakrishnan',
    abstract: 'Explores the application of AI-augmented monitoring and automated compliance validation in SRE workflows for financial systems. Proposes a self-healing infrastructure model that reduces mean-time-to-resolution while maintaining regulatory compliance in high-availability FinTech environments.',
  },
  {
    id: 'icdlai-2025-2',
    title: 'Orchestrating AI Microservices for Adaptive Fraud Detection and Compliance in Modern Financial Systems',
    venue: 'Deep Learning and Visual Artificial Intelligence (ICDLAI 2025), Lecture Notes in Networks and Systems, vol 2097, Springer, Cham',
    year: '2025',
    type: 'Springer LNNS Book Chapter',
    status: 'Published',
    doi: 'https://doi.org/10.1007/978-3-032-32476-4_46',
    coAuthors: 'Kathiresan Jayabalan, Sethuraman Radhakrishnan',
    abstract: 'Presents a microservices orchestration framework that applies adaptive AI models for real-time fraud detection across multi-jurisdiction financial platforms. Demonstrates measurable improvement in detection accuracy while maintaining compliance with GDPR, PCI DSS, and MICA regulatory frameworks.',
  },
]

const worksInProgress = [
  {
    title: 'Greenwashing Detection Framework (NLP+ML, F1=0.87)',
    detail: 'Presented at ICGFBE 2025, manuscript targeting IEEE Big Data 2026.',
    status: 'Under Review',
  },
  {
    title: 'Explainable AI for Real-Time Financial Compliance and Risk Management',
    detail: 'Explores explainability techniques applied to AI-driven compliance monitoring in financial systems. Under double-blind review.',
    status: 'Under Review',
  },
]

const reviews = [
  { venue: '5th International Conference on Artificial Intelligence and Knowledge Processing (AIKP)', year: '2025', count: '2 papers', publisher: 'IEEE/Springer' },
  { venue: 'International Conference on Computational Approaches (iconCEPT), NIT Puducherry', year: '2025', count: '3 papers', publisher: 'NIT Puducherry' },
  { venue: 'International Conference on Smart Technologies and Innovation for Computing (INCSTIC)', year: '2025', count: '1 paper', publisher: 'IEEE' },
  { venue: 'IEEE Conference on AI in Education (PUNECON track)', year: '2025', count: '6 papers', publisher: 'IEEE' },
  { venue: 'International Conference on Industrial Engineering and Operations Management (IEOM-VIT)', year: '2025', count: '4 papers', publisher: 'IEOM' },
  { venue: 'International Conference on Recent Trends in Advanced Computing (ICRTAC), Malaysia — VIT', year: '2025', count: '4 papers', publisher: 'VIT' },
  { venue: '2nd International Conference on Business Intelligence, Computational Mathematics & Data Analytics (IBCD), Dr. D.Y. Patil Institute, Pune', year: '2025', count: '7 papers', publisher: 'Springer' },
  { venue: '9th International Conference on Computational Intelligence and Data Science (ICCIDS), SSN College', year: '2026', count: '3 papers', publisher: 'Elsevier / Springer' },
  { venue: 'International Conference on Computational Intelligence and Emerging Systems (iCCIES)', year: '2026', count: '1 paper', publisher: 'IEEE' },
  { venue: '5th International Conference on Cyber-Physical Systems (i5CPS), NIT Karaikal', year: '2026', count: '4 papers', publisher: 'NIT Karaikal' },
  { venue: '6th International Conference on Advances in Information Communication Technology and Computing (AICTC), BTU Bikaner', year: '2026', count: '1 paper', publisher: 'Springer' },
  { venue: 'World Conference on Computer Science and Technology (WcCST), Punjab', year: '2026', count: '2 papers', publisher: 'IEEE' },
  { venue: 'International Conference on Human-Computer Interaction (Human)', year: '2026', count: '1 paper', publisher: 'Springer' },
  { venue: 'International Conference on ICT for Global Innovations and Solutions', year: '2026', count: '1 paper', publisher: 'IEEE' },
  { venue: 'International Conference on AI, Signal & Emerging Technologies (ICAISET)', year: '2026', count: '7 papers', publisher: 'IEEE' },
  { venue: 'IEEE Global Engineering Education Conference (EDUCON 2026), Cairo, Egypt', year: '2026', count: 'Reviewer', publisher: 'IEEE' },
  { venue: 'Emerging Technologies for Next-generation Connected Cities (ETNCC)', year: '2026', count: '3 papers', publisher: 'IEEE' },
  { venue: 'International Workshop on Intelligent Networks (IWIN)', year: '2026', count: '2 papers', publisher: 'IEEE' },
  { venue: 'IEEE International Conference on Control and Automation (ICCA)', year: '2026', count: '2 papers', publisher: 'IEEE' },
]

const statusBadge = {
  'Published':               'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
  'Submitted / Under Review': 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30',
  'Under Review':            'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/30',
}

function OrcidIcon() {
  return (
    <svg viewBox="0 0 256 256" className="w-5 h-5 shrink-0" fill="none">
      <circle cx="128" cy="128" r="128" fill="#a6ce39"/>
      <circle cx="86" cy="86" r="16" fill="white"/>
      <rect x="70" y="112" width="32" height="80" rx="4" fill="white"/>
      <path d="M120 86h44c28 0 48 18 48 46s-20 46-48 46h-44V86z" fill="white"/>
      <path d="M136 102h26c18 0 30 10 30 30s-12 30-30 30h-26V102z" fill="#a6ce39"/>
    </svg>
  )
}

export default function Research() {
  const [openAbstract, setOpenAbstract] = useState(null)
  const [reviewYearFilter, setReviewYearFilter] = useState('All')

  const filteredReviews = useMemo(() => {
    if (reviewYearFilter === 'All') return reviews
    return reviews.filter(r => r.year === reviewYearFilter)
  }, [reviewYearFilter])

  return (
    <SectionWrapper>
      <SEO
        title="Research & Publications | Sankaranainar Parmasivan"
        description="Research publications and peer reviews by Sankaranainar Parmasivan across IEEE, Springer, and Elsevier venues in Agentic AI, AIOps, and FinTech compliance."
        canonical="https://sankaranainar.dev/research"
        ogType="website"
      />

      {/* Header */}
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-500/10 dark:text-brand-400 dark:border-brand-500/20 mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>IEEE Senior Member &amp; Independent Researcher</span>
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Research Publications &amp; Peer Reviews
        </h1>
        <p className="text-gray-500 dark:text-zinc-400 text-sm mt-2 max-w-2xl leading-relaxed">
          Pioneering investigations in multi-agent financial compliance, autonomous SRE, and verifiable research intelligence platforms.
        </p>

        {/* Researcher profiles badges */}
        <div className="flex flex-wrap gap-4 mt-6">
          <a
            href="https://orcid.org/0009-0006-1738-3863"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-[#a6ce39]/40 bg-[#a6ce39]/10
              text-[#4a7c2f] dark:text-[#a6ce39] hover:bg-[#a6ce39]/20 font-mono text-xs font-medium transition-all"
          >
            <OrcidIcon />
            ORCID: 0009-0006-1738-3863 ↗
          </a>
          <a
            href="https://www.webofscience.com/wos/author/record/NWG-8160-2025"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-xl border border-[#1D6FA4]/50 bg-[#1D6FA4]/10
              text-[#1D6FA4] dark:text-[#5aabdc] hover:bg-[#1D6FA4]/20 font-mono text-xs font-medium transition-all"
          >
            <Building2 className="w-4 h-4 text-[#1D6FA4] dark:text-[#5aabdc]" />
            Web of Science: NWG-8160-2025 ↗
          </a>
        </div>
      </div>

      {/* Focus Areas Grid */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <Sparkles className="w-5 h-5 text-brand-600 dark:text-brand-400" />
        Research Focus Areas
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-12">
        {focusAreas.map(({ title, desc }) => (
          <div key={title} className="p-5 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/70 hover:border-brand-300 dark:hover:border-brand-500/30 transition-all">
            <h3 className="font-bold text-gray-900 dark:text-white mb-2 text-sm">{title}</h3>
            <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Publications */}
      <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
        <FileText className="w-5 h-5 text-brand-600 dark:text-brand-400" />
        Publications &amp; Manuscripts
      </h2>

      <div className="space-y-4 mb-14">
        {publications.map(({ id, title, venue, year, type, status, doi, coAuthors, abstract, repoUrl, featured }) => (
          <div
            key={id}
            className={`p-6 rounded-2xl border bg-white dark:bg-zinc-950/80 transition-all ${
              featured
                ? 'border-brand-400 dark:border-brand-500/50 bg-gradient-to-br from-brand-50 dark:from-brand-500/5 via-white dark:via-zinc-950 to-white dark:to-zinc-950 shadow-lg shadow-brand-500/5'
                : 'border-gray-200 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700'
            }`}
          >
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div className="flex-1 min-w-0">
                {featured && (
                  <span className="inline-flex items-center gap-1 text-[11px] font-mono text-brand-600 dark:text-brand-400 font-semibold mb-1">
                    ★ Latest Manuscript Submission (2026)
                  </span>
                )}
                <h3 className="font-bold text-base text-gray-900 dark:text-white leading-snug">{title}</h3>
                <p className="text-xs text-gray-500 dark:text-zinc-400 font-mono mt-1">{venue} · {year}</p>
                {coAuthors && <p className="text-xs text-gray-400 dark:text-zinc-500 mt-1">Co-authors: {coAuthors}</p>}
              </div>

              <div className="flex items-center gap-2 shrink-0 flex-wrap">
                <span className="px-2.5 py-1 rounded-full text-[11px] font-mono bg-gray-100 dark:bg-zinc-900 text-gray-600 dark:text-zinc-300 border border-gray-200 dark:border-zinc-800">
                  {type}
                </span>
                <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono border font-medium ${statusBadge[status]}`}>
                  {status}
                </span>
              </div>
            </div>

            {/* Abstract toggle and DOI / Repo links */}
            <div className="flex flex-wrap items-center gap-4 mt-4 pt-3 border-t border-gray-200 dark:border-zinc-800/80">
              {doi && (
                <a
                  href={doi}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1"
                >
                  {doi.replace('https://doi.org/', 'DOI: ')} <ExternalLink className="w-3 h-3" />
                </a>
              )}
              {repoUrl && (
                <a
                  href={repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2.5 py-1 rounded border border-emerald-200 dark:border-emerald-800/50 flex items-center gap-1 hover:underline"
                >
                  <FolderGit2 className="w-3 h-3" /> acs-cross-border-compliance
                </a>
              )}
              {abstract && (
                <button
                  onClick={() => setOpenAbstract(openAbstract === id ? null : id)}
                  className="text-xs font-mono text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {openAbstract === id ? 'Hide Abstract ↑' : 'Read Abstract ↓'}
                </button>
              )}
            </div>

            {abstract && openAbstract === id && (
              <p className="mt-3 text-xs leading-relaxed text-gray-600 dark:text-zinc-300 bg-gray-50 dark:bg-zinc-900/60 p-3.5 rounded-xl border border-gray-200 dark:border-zinc-800/60 border-l-2 border-l-brand-500">
                {abstract}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Peer Review Service */}
      <div className="rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/80 p-6 md:p-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-gray-200 dark:border-zinc-800">
          <div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-brand-600 dark:text-brand-400" />
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">Peer Review &amp; Editorial Service</h2>
            </div>
            <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1 font-mono">
              54+ papers reviewed across 19 IEEE, Springer, and Elsevier conference venues.
            </p>
          </div>

          {/* Filter */}
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-zinc-900 p-1 rounded-xl border border-gray-200 dark:border-zinc-800">
            <Filter className="w-3.5 h-3.5 text-gray-400 dark:text-zinc-500 ml-2" />
            {['All', '2026', '2025'].map(y => (
              <button
                key={y}
                onClick={() => setReviewYearFilter(y)}
                className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                  reviewYearFilter === y
                    ? 'bg-brand-600 text-white font-bold'
                    : 'text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white'
                }`}
              >
                {y}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {filteredReviews.map(({ venue, year, count, publisher }) => (
            <div key={venue} className="p-3.5 rounded-xl border border-gray-200 dark:border-zinc-800/80 bg-gray-50 dark:bg-zinc-900/40 flex items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="text-xs font-medium text-gray-700 dark:text-zinc-200 leading-snug line-clamp-2">{venue}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-[10px] font-mono text-gray-400 dark:text-zinc-500">{year}</span>
                  <span className="text-gray-300 dark:text-zinc-700">·</span>
                  <span className="text-[10px] font-mono text-brand-600 dark:text-brand-400/80">{publisher}</span>
                </div>
              </div>
              <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-gray-100 dark:bg-zinc-800 text-brand-700 dark:text-brand-400 border border-gray-200 dark:border-zinc-700 shrink-0 font-bold">
                {count}
              </span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
