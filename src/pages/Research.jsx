import SectionWrapper from '../components/SectionWrapper'

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
]

const reviews = [
  { venue: 'IEEE Transactions on Software Engineering', count: '6 papers' },
  { venue: 'IEEE Internet of Things Journal', count: '4 papers' },
  { venue: 'ACM Computing Surveys', count: '3 papers' },
  { venue: 'Empirical Software Engineering', count: '5 papers' },
  { venue: 'Journal of Systems and Software', count: '4 papers' },
]

const statusColor = {
  Published:      'bg-emerald-50 text-emerald-700 border-emerald-200',
  'Under Review': 'bg-amber-50 text-amber-700 border-amber-200',
}

export default function Research() {
  return (
    <SectionWrapper>
      <h1 className="section-heading">Research</h1>
      <p className="section-subheading">
        Exploring the intersection of autonomous AI systems, intelligent operations, and platform engineering.
      </p>

      {/* ORCID */}
      <div className="mb-10">
        <a
          href="https://orcid.org/0009-0007-7891-7697"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg border-2 border-[#a6ce39] text-[#4a7c2f] hover:bg-[#a6ce39]/10 font-medium transition-colors duration-200"
        >
          <svg viewBox="0 0 256 256" className="w-5 h-5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="128" cy="128" r="128" fill="#a6ce39"/>
            <circle cx="86" cy="86" r="16" fill="white"/>
            <rect x="70" y="112" width="32" height="80" rx="4" fill="white"/>
            <path d="M120 86h44c28 0 48 18 48 46s-20 46-48 46h-44V86z" fill="white"/>
            <path d="M136 102h26c18 0 30 10 30 30s-12 30-30 30h-26V102z" fill="#a6ce39"/>
          </svg>
          View ORCID Profile
          <svg className="w-3.5 h-3.5 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      </div>

      {/* Focus Areas */}
      <h2 className="text-xl font-semibold text-navy-800 mb-5">Research Focus Areas</h2>
      <div className="grid sm:grid-cols-2 gap-4 mb-14">
        {focusAreas.map(({ title, desc }) => (
          <div key={title} className="card border-l-4 border-l-navy-700">
            <h3 className="font-semibold text-navy-900 mb-2">{title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>

      {/* Publications */}
      <h2 className="text-xl font-semibold text-navy-800 mb-5">Publications</h2>
      <div className="space-y-4 mb-14">
        {publications.map(({ title, venue, year, type, status, doi }) => (
          <div key={title} className="card">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-navy-900 mb-1 leading-snug">{title}</h3>
                <p className="text-sm text-gray-500">{venue} · {year}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="badge">{type}</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColor[status]}`}>
                  {status}
                </span>
              </div>
            </div>
            <a
              href={doi}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-navy-600 hover:text-navy-800 transition-colors font-mono"
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              {doi.replace('https://doi.org/', 'DOI: ')}
            </a>
          </div>
        ))}
      </div>

      {/* Peer Reviews */}
      <h2 className="text-xl font-semibold text-navy-800 mb-5">Peer Review Service</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map(({ venue, count }) => (
          <div key={venue} className="card flex items-center justify-between gap-4">
            <p className="text-sm text-gray-700 leading-snug">{venue}</p>
            <span className="badge shrink-0">{count}</span>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
