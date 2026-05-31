import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import SEO from '../components/SEO'

const focusAreas = [
  {
    title: 'Agentic AI Systems',
    desc: 'Multi-agent orchestration, autonomous task decomposition, tool-use in LLMs, and agent reliability at scale.',
  },
  {
    title: 'AIOps & Intelligent Automation',
    desc: 'AI-driven incident detection, root cause analysis, predictive capacity planning, and self-healing infrastructure.',
  },
  {
    title: 'Platform Engineering',
    desc: 'Internal developer platforms, golden paths, developer experience metrics, and engineering productivity at scale.',
  },
  {
    title: 'Cybersecurity & Malware Prevention',
    desc: 'AI-powered algorithms for detection and prevention of malware infections across enterprise environments.',
  },
]

const publications = [
  {
    title: 'Innovative Framework for Secure and Scalable Web and Mobile Application Development in Fintech: A User-Centric and AI-Driven Approach',
    venue: '2025 5th International Conference on Ubiquitous Computing and Intelligent Information Systems (ICUIS)',
    year: '2025',
    type: 'Conference',
    status: 'Published',
    doi: 'https://doi.org/10.1109/icuis67429.2025.11380645',
  },
  {
    title: 'Transfer Learning for Efficient Domain Adaptation in Sequential Recommendation Systems',
    venue: 'IEEE IEMCON 2025',
    year: '2025',
    type: 'Conference',
    status: 'Published',
    doi: 'https://doi.org/10.1109/IEMCON67450.2025.11381193',
  },
  {
    title: 'AI-Powered Algorithms for the Prevention and Detection of Computer Malware Infections',
    venue: '2025 6th International Conference on Electronics and Sustainable Communication Systems (ICESC)',
    year: '2025',
    type: 'Conference',
    status: 'Published',
    doi: 'https://doi.org/10.1109/icesc65114.2025.11212519',
  },
  {
    title: 'AI-Augmented Site Reliability Engineering: Enhancing Resilience and Compliance in Financial Systems',
    venue: '2nd International Conference on Deep Learning and Visual Artificial Intelligence (ICDLAI 2025), Jodhpur Institute of Engineering and Technology, Dec 20–21, 2025',
    year: '2025',
    type: 'Conference',
    status: 'In Press',
    doi: null,
    abstract: 'Explores the application of AI-augmented monitoring and automated compliance validation in SRE workflows for financial systems. Proposes a self-healing infrastructure model that reduces mean-time-to-resolution while maintaining regulatory compliance in high-availability FinTech environments.',
  },
  {
    title: 'Orchestrating AI Microservices for Adaptive Fraud Detection and Compliance in Modern Financial Systems',
    venue: '2nd International Conference on Deep Learning and Visual Artificial Intelligence (ICDLAI 2025), Jodhpur, Dec 20–21, 2025',
    year: '2025',
    type: 'Conference',
    status: 'In Press',
    doi: null,
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
]

const reviews = [
  { venue: '5th International Conference on Artificial Intelligence and Knowledge Processing (AIKP)', year: '2025', count: '2 papers' },
  { venue: 'International Conference on Computational Approaches (iconCEPT), NIT Puducherry', year: '2025', count: '3 papers' },
  { venue: 'International Conference on Smart Technologies and Innovation for Computing (INCSTIC)', year: '2025', count: '1 paper' },
  { venue: 'IEEE Conference on AI in Education (PUNECON track)', year: '2025', count: '6 papers' },
  { venue: 'International Conference on Industrial Engineering and Operations Management (IEOM-VIT)', year: '2025', count: '4 papers' },
  { venue: 'International Conference on Recent Trends in Advanced Computing (ICRTAC), Malaysia — VIT', year: '2025', count: '4 papers' },
  { venue: '2nd International Conference on Business Intelligence, Computational Mathematics & Data Analytics (IBCD), Dr. D.Y. Patil Institute, Pune', year: '2025', count: '7 papers' },
  { venue: '9th International Conference on Computational Intelligence and Data Science (ICCIDS), SSN College', year: '2026', count: '3 papers' },
  { venue: 'International Conference on Computational Intelligence and Emerging Systems (iCCIES)', year: '2026', count: '1 paper' },
  { venue: '5th International Conference on Cyber-Physical Systems (i5CPS), NIT Karaikal', year: '2026', count: '4 papers' },
  { venue: '6th International Conference on Advances in Information Communication Technology and Computing (AICTC), BTU Bikaner', year: '2026', count: '1 paper' },
  { venue: 'World Conference on Computer Science and Technology (WcCST), Punjab', year: '2026', count: '2 papers' },
  { venue: 'International Conference on Human-Computer Interaction (Human)', year: '2026', count: '1 paper' },
  { venue: 'International Conference on ICT for Global Innovations and Solutions', year: '2026', count: '1 paper' },
  { venue: 'International Conference on AI, Signal & Emerging Technologies (ICAISET)', year: '2026', count: '5 papers' },
]

const statusBadge = {
  'Published':      'bg-emerald-500/10 text-emerald-600 border-emerald-500/30 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
  'In Press':       'bg-sky-500/10 text-sky-600 border-sky-500/30 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/30',
  'Under Review':   'bg-amber-500/10 text-amber-600 border-amber-500/30 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30',
}

const talks = [
  {
    title: 'Autonomous Testing: Bridging MLOps with Self-Learning Validation Systems',
    event: 'IEEE SoutheastCon 2026 Workshop',
    venue: 'IEEE SoutheastCon 2026 — IEEE Southeast Conference',
    year: '2026',
    type: 'Workshop Tutorial',
    coPresenter: 'Dr. Ravi Gollapalli, University of North Alabama (UNA)',
    abstract: 'Presented a workshop on integrating self-learning test validation systems with MLOps pipelines for autonomous quality assurance in enterprise AI deployments.',
    featured: true,
  },
  {
    title: 'Faculty Development Programme on Emerging AI Technologies',
    event: 'Faculty Development Programme',
    venue: 'NCET',
    year: '2026',
  },
  {
    title: '6th International Conference on Global Financial and Business Environment (ICGFBE 2025)',
    event: '6th ICGFBE',
    venue: 'NDIM, New Delhi',
    year: 'Dec 2025',
  },
  {
    title: 'ICDLAI 2025 (2 presentations)',
    event: 'ICDLAI 2025',
    venue: 'Jodhpur Institute of Engineering and Technology',
    year: 'Dec 2025',
  },
  {
    title: 'ICESC 2025',
    event: 'ICESC 2025',
    venue: 'Hindusthan Institute of Technology, Coimbatore',
    year: 'Sep 2025',
  },
  {
    title: 'ICUIS 2025 / IEEE PUNECON 2025',
    event: 'ICUIS / IEEE PUNECON',
    venue: 'IEEE',
    year: '2025',
  },
]

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

  return (
    <SectionWrapper>
      <SEO
        title="Research & Publications | Sankaranainar Parmasivan"
        description="Research by Sankaranainar Parmasivan on Agentic AI systems, AIOps, MLOps, and autonomous multi-agent orchestration. IEEE Senior Member and independent researcher."
        canonical="https://sankaranainar.dev/research"
        ogType="website"
      />
      <h1 className="section-heading text-gray-900 dark:text-content-primary">Research</h1>
      <p className="section-subheading">
        Exploring the intersection of autonomous AI systems, intelligent operations, and platform engineering.
      </p>

      {/* Researcher profiles */}
      <div className="flex flex-wrap gap-4 mb-10">
        <div className="border-l-4 border-l-[#a6ce39] pl-4">
          <a
            href="https://orcid.org/0009-0006-1738-3863"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg border-2 border-[#a6ce39]/60
              text-[#4a7c2f] dark:text-[#a6ce39] hover:bg-[#a6ce39]/10 font-medium transition-all duration-200"
          >
            <OrcidIcon />
            0009-0006-1738-3863 ↗
          </a>
        </div>
        <a
          href="https://www.webofscience.com/wos/author/record/NWG-8160-2025"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg border-2 border-[#1D6FA4]/50
            text-[#1D6FA4] dark:text-[#5aabdc] hover:bg-[#1D6FA4]/10 font-medium transition-all duration-200"
        >
          <svg viewBox="0 0 48 24" className="h-4 w-auto shrink-0" fill="currentColor" aria-hidden="true">
            <text x="0" y="18" fontSize="16" fontWeight="800" fontFamily="Arial, sans-serif" letterSpacing="0.5">WoS</text>
          </svg>
          Web of Science — NWG-8160-2025 ↗
        </a>
      </div>

      {/* Focus Areas */}
      <h2 className="text-xl font-semibold tracking-tight mb-5 text-gray-900 dark:text-content-primary">
        Research Focus Areas
      </h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        {focusAreas.map(({ title, desc }) => (
          <div key={title} className="card border-l-4 border-l-brand-600">
            <h3 className="font-semibold mb-2 text-gray-900 dark:text-content-primary">{title}</h3>
            <p className="text-sm leading-relaxed text-gray-500 dark:text-content-secondary">{desc}</p>
          </div>
        ))}
      </div>

      {/* Publications */}
      <h2 className="text-xl font-semibold tracking-tight mb-5 text-gray-900 dark:text-content-primary">
        Publications
      </h2>
      <div className="space-y-4 mb-10">
        {publications.map(({ title, venue, year, type, status, doi, coAuthors, abstract }) => (
          <div key={title} className="card">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium mb-1 leading-snug text-gray-900 dark:text-content-primary">{title}</h3>
                {venue && <p className="text-sm text-gray-500 dark:text-content-secondary">{venue} · {year}</p>}
                {coAuthors && <p className="text-xs text-gray-400 dark:text-content-tertiary mt-0.5">Co-authors: {coAuthors}</p>}
              </div>
              <div className="flex items-center gap-2 shrink-0 flex-wrap">
                <span className="badge">{type}</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusBadge[status]}`}>
                  {status}
                </span>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              {doi && (
                <a
                  href={doi}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs font-mono transition-colors duration-150
                    text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  {doi.replace('https://doi.org/', 'DOI: ')} ↗
                </a>
              )}
              {abstract && (
                <button
                  onClick={() => setOpenAbstract(openAbstract === title ? null : title)}
                  className="text-xs font-medium transition-colors duration-150
                    text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  {openAbstract === title ? 'Hide Abstract ↑' : 'Read Abstract ↓'}
                </button>
              )}
            </div>
            {abstract && openAbstract === title && (
              <p className="mt-3 text-sm leading-relaxed text-gray-500 dark:text-content-secondary
                border-l-2 border-brand-600/40 pl-3 italic">
                {abstract}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Works in Progress */}
      <h2 className="text-xl font-semibold tracking-tight mb-2 text-gray-900 dark:text-content-primary">
        Works in Progress
      </h2>
      <p className="text-sm text-gray-500 dark:text-content-secondary mb-5">
        Active research with preliminary results.
      </p>
      <div className="space-y-4 mb-14">
        {worksInProgress.map(({ title, detail, status }) => (
          <div key={title} className="card border-l-4 border-l-amber-500">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium mb-1 leading-snug text-gray-900 dark:text-content-primary">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-content-secondary">{detail}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border shrink-0 ${statusBadge[status]}`}>
                {status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Speaking */}
      <h2 className="text-xl font-semibold tracking-tight mb-5 text-gray-900 dark:text-content-primary">
        Speaking & Presentations
      </h2>
      <div className="space-y-4 mb-14">
        {talks.map(({ title, venue, year, coPresenter, abstract, type, featured }) => (
          <div key={title} className={`card ${featured ? 'border-l-4 border-l-brand-600' : ''}`}>
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium mb-1 leading-snug text-gray-900 dark:text-content-primary">{title}</h3>
                <p className="text-sm text-gray-500 dark:text-content-secondary">{venue}</p>
                {type && (
                  <p className="text-xs text-brand-600 dark:text-brand-400 font-medium mt-0.5">{type}</p>
                )}
                {coPresenter && (
                  <p className="text-xs text-gray-400 dark:text-content-tertiary mt-1">
                    Co-presenter: {coPresenter}
                  </p>
                )}
                {abstract && (
                  <p className="text-xs text-gray-400 dark:text-content-tertiary mt-1 italic leading-relaxed">
                    {abstract}
                  </p>
                )}
              </div>
              <span className="badge shrink-0 font-mono">{year}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Peer Reviews */}
      <div className="border-l-4 border-l-brand-600 pl-4 mb-5">
        <h2 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-content-primary">
          Professional Peer Review &amp; Editorial Board Service
        </h2>
        <p className="mt-1 text-sm font-semibold text-brand-600 dark:text-brand-400">
          40+ papers reviewed across IEEE, Springer, and Elsevier venues — spanning AI, distributed systems, FinTech, and cybersecurity.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map(({ venue, year, count }) => (
          <div key={venue} className="card flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm leading-snug text-gray-700 dark:text-content-secondary">{venue}</p>
              <p className="text-xs text-gray-400 dark:text-content-tertiary mt-0.5 font-mono">{year}</p>
            </div>
            <span className="badge shrink-0 font-mono">{count}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-center text-gray-400 dark:text-content-tertiary font-mono">
        44 papers reviewed across 15 conferences
      </p>
    </SectionWrapper>
  )
}
