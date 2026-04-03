import SectionWrapper from '../components/SectionWrapper'

const talks = [
  {
    title: 'Building Autonomous Agents for Enterprise Operations',
    event: 'KubeCon North America',
    year: '2024',
    type: 'Conference Talk',
    location: 'Salt Lake City, UT',
  },
  {
    title: 'AIOps at Scale: Lessons from Mastercard',
    event: 'SREcon Americas',
    year: '2024',
    type: 'Conference Talk',
    location: 'San Francisco, CA',
  },
  {
    title: 'From Runbooks to Robots: Agentic Incident Response',
    event: 'PlatformCon',
    year: '2024',
    type: 'Keynote',
    location: 'Virtual',
  },
  {
    title: 'Engineering Excellence at Fintech Scale',
    event: 'LeadDev London',
    year: '2023',
    type: 'Conference Talk',
    location: 'London, UK',
  },
  {
    title: 'Multi-Agent Orchestration Patterns in Production',
    event: 'IEEE CLOUD',
    year: '2023',
    type: 'Technical Talk',
    location: 'Chicago, IL',
  },
  {
    title: 'Platform Engineering: The Golden Path to Developer Productivity',
    event: 'DevOpsDays Chicago',
    year: '2023',
    type: 'Conference Talk',
    location: 'Chicago, IL',
  },
]

const cfpHistory = [
  {
    event: 'KubeCon EU 2025',
    title: 'Agentic AI for Self-Healing Kubernetes Clusters',
    status: 'Submitted',
  },
  {
    event: 'SREcon EMEA 2025',
    title: 'LLM-Driven Capacity Planning: A Production Story',
    status: 'Submitted',
  },
  {
    event: 'QCon San Francisco 2024',
    title: 'Building Trustworthy Autonomous Agents',
    status: 'Accepted',
  },
  {
    event: 'GOTO Chicago 2024',
    title: 'The Engineering Manager\'s Guide to AI Transformation',
    status: 'Accepted',
  },
]

const statusColor = {
  Submitted: 'bg-amber-900/50 text-amber-400 border-amber-700',
  Accepted:  'bg-emerald-900/50 text-emerald-400 border-emerald-700',
  Declined:  'bg-slate-800 text-slate-400 border-slate-700',
}

const typeColor = {
  Keynote:          'bg-purple-900/50 text-purple-400 border-purple-700',
  'Conference Talk': 'bg-brand-900/50 text-brand-400 border-brand-700',
  'Technical Talk': 'bg-sky-900/50 text-sky-400 border-sky-700',
}

export default function Speaking() {
  return (
    <SectionWrapper>
      <h1 className="section-heading">Speaking</h1>
      <p className="section-subheading">
        Sharing ideas on Agentic AI, AIOps, platform engineering, and engineering leadership at global conferences.
      </p>

      {/* Past Talks */}
      <h2 className="text-xl font-semibold text-white mb-5">Conference Talks</h2>
      <div className="space-y-4 mb-14">
        {talks.map(({ title, event, year, type, location }) => (
          <div key={`${title}-${year}`} className="card">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <h3 className="font-medium text-white mb-1">{title}</h3>
                <p className="text-sm text-slate-400">{event} · {location} · {year}</p>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border shrink-0 ${typeColor[type] ?? 'badge'}`}>
                {type}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* CFP History */}
      <h2 className="text-xl font-semibold text-white mb-5">CFP History</h2>
      <div className="space-y-4">
        {cfpHistory.map(({ event, title, status }) => (
          <div key={`${event}-${title}`} className="card">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex-1 min-w-0">
                <p className="text-xs text-brand-400 font-medium mb-1">{event}</p>
                <h3 className="font-medium text-white">{title}</h3>
              </div>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border shrink-0 ${statusColor[status]}`}>
                {status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
