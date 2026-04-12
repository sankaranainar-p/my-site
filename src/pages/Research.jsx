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
  {
    title: 'AI-Augmented Site Reliability Engineering: Enhancing Resilience and Compliance in Financial Systems',
    venue: '2nd International Conference on Deep Learning and Visual Artificial Intelligence (ICDLAI 2025), Jodhpur Institute of Engineering and Technology, Dec 20–21, 2025',
    year: '2025',
    type: 'Conference',
    status: 'In Press',
    doi: null,
  },
  {
    title: 'Orchestrating AI Microservices for Adaptive Fraud Detection and Compliance in Modern Financial Systems',
    venue: '2nd International Conference on Deep Learning and Visual Artificial Intelligence (ICDLAI 2025), Jodhpur, Dec 20–21, 2025',
    year: '2025',
    type: 'Conference',
    status: 'In Press',
    doi: null,
    coAuthors: 'Kathiresan Jayabalan, Sethuraman Radhakrishnan',
  },
  {
    title: 'AI-Driven Greenwashing Detection Framework for ESG Investing Platforms: Enhancing Authenticity in Sustainable Investment',
    venue: '6th International Conference on Global Financial and Business Environment (NDIM), New Delhi, Dec 12–13, 2025',
    year: '2025',
    type: 'Conference',
    status: 'Published',
    doi: null,
    coAuthors: 'Kathiresan Jayabalan',
  },
  {
    title: 'Explainable AI for Real-Time Financial Compliance and Risk Management',
    venue: '',
    year: '2025',
    type: 'Conference',
    status: 'Under Review',
    doi: null,
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

const statusColor = {
  Published:      'bg-emerald-50 text-emerald-700 border-emerald-200',
  'In Press':     'bg-sky-50 text-sky-700 border-sky-200',
  'Under Review': 'bg-amber-50 text-amber-700 border-amber-200',
}

const talks = [
  { title: 'IEEE SoutheastCon 2026 Workshop', venue: 'IEEE Southeast Conference', year: '2026' },
  { title: 'Faculty Development Programme', venue: 'NCET', year: '2026' },
  { title: '6th International Conference on Global Financial and Business Environment', venue: 'NDIM, New Delhi', year: 'Dec 2025' },
  { title: 'ICDLAI 2025 (2 presentations)', venue: 'Jodhpur Institute of Engineering and Technology', year: 'Dec 2025' },
  { title: 'ICESC 2025', venue: 'Hindusthan Institute of Technology, Coimbatore', year: 'Sep 2025' },
  { title: 'ICUIS 2025 / IEEE PUNECON 2025', venue: 'IEEE', year: '2025' },
]

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
        {publications.map(({ title, venue, year, type, status, doi, coAuthors }) => (
          <div key={title} className="card">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-navy-900 mb-1 leading-snug">{title}</h3>
                {venue && <p className="text-sm text-gray-500">{venue} · {year}</p>}
                {coAuthors && <p className="text-xs text-gray-400 mt-0.5">Co-authors: {coAuthors}</p>}
              </div>
              <div className="flex items-center gap-2 shrink-0">
                <span className="badge">{type}</span>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${statusColor[status]}`}>
                  {status}
                </span>
              </div>
            </div>
            {doi && (
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
            )}
          </div>
        ))}
      </div>

      {/* Speaking */}
      <h2 className="text-xl font-semibold text-navy-800 mb-5">Speaking &amp; Presentations</h2>
      <div className="space-y-3 mb-14">
        {talks.map(({ title, venue, year }) => (
          <div key={title} className="card flex flex-wrap items-center justify-between gap-3">
            <div className="flex-1 min-w-0">
              <h3 className="font-medium text-navy-900 leading-snug">{title}</h3>
              <p className="text-sm text-gray-500 mt-0.5">{venue}</p>
            </div>
            <span className="badge shrink-0">{year}</span>
          </div>
        ))}
      </div>

      {/* Peer Reviews */}
      <h2 className="text-xl font-semibold text-navy-800 mb-5">Peer Review Service</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews.map(({ venue, year, count }) => (
          <div key={venue} className="card flex items-start justify-between gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-sm text-gray-700 leading-snug">{venue}</p>
              <p className="text-xs text-gray-400 mt-0.5">{year}</p>
            </div>
            <span className="badge shrink-0">{count}</span>
          </div>
        ))}
      </div>
      <p className="mt-6 text-sm text-gray-400 text-center">44 papers reviewed across 15 conferences</p>
    </SectionWrapper>
  )
}
