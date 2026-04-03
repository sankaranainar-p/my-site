import SectionWrapper from '../components/SectionWrapper'

const projects = [
  {
    title: 'Building Agentic AI Dashboard For Personalized Mentorship',
    desc: 'An end-to-end AI solution that combines student performance data with syllabus knowledge to automatically generate personalized dashboards and remedial recommendations. Uses an Agno agent with Ollama (llama3.2) running fully locally — student data never leaves institutional infrastructure, ensuring FERPA compliance. The agent reads Excel student data and a PDF syllabus, identifies at-risk students (score < 60%), queries syllabus embeddings via LanceDB RAG, and generates individual Tailwind-styled HTML dashboards with targeted remedial plans.',
    tags: ['Agno Framework', 'Ollama', 'LanceDB', 'RAG', 'Python', 'Pandas', 'Tailwind CSS', 'PyPDF'],
    status: 'Completed',
  },
  {
    title: 'AIOps Incident Classifier',
    desc: 'ML-powered incident classification system that routes alerts, predicts severity, and suggests runbook actions. Integrated with PagerDuty and Slack. Reduced MTTR by 40% in production at scale.',
    tags: ['Python', 'scikit-learn', 'Kafka', 'PagerDuty API', 'Slack API'],
    status: 'Production',
  },
  {
    title: 'Platform Engineering Metrics Dashboard',
    desc: 'DORA metrics and platform health dashboard aggregating data from GitHub, ArgoCD, Datadog, and Jira. Gives engineering leaders a single pane of glass for team performance and platform reliability.',
    tags: ['React', 'Vite', 'Tailwind', 'Python', 'Datadog API', 'GitHub API'],
    status: 'Production',
  },
  {
    title: 'Multi-Agent Research Assistant',
    desc: 'An orchestrated agent system for academic research — automatically searches arXiv, IEEE Xplore, and ACM DL, synthesizes related work, and generates structured literature review drafts.',
    tags: ['LangGraph', 'Claude API', 'Tavily', 'Python', 'FastAPI'],
    status: 'Beta',
  },
  {
    title: 'SRE Runbook Automator',
    desc: 'Converts human-written runbooks into executable automation scripts using LLMs. Supports dry-run mode, audit logging, and human-in-the-loop approval gates for destructive operations.',
    tags: ['Python', 'Claude API', 'Kubernetes', 'Ansible', 'PostgreSQL'],
    status: 'Beta',
  },
]

const statusColor = {
  Completed:  'bg-emerald-50 text-emerald-700 border-emerald-200',
  Production: 'bg-sky-50 text-sky-700 border-sky-200',
  Beta:       'bg-amber-50 text-amber-700 border-amber-200',
}

export default function Projects() {
  return (
    <SectionWrapper>
      <h1 className="section-heading">Projects</h1>
      <p className="section-subheading">
        Tools, systems, and experiments at the intersection of AI and engineering operations.
      </p>

      <div className="space-y-5">
        {projects.map(({ title, desc, tags, status }) => (
          <div key={title} className="card">
            <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
              <h3 className="font-semibold text-navy-900 text-lg">{title}</h3>
              <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border shrink-0 ${statusColor[status]}`}>
                {status}
              </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
            <div className="flex flex-wrap gap-2">
              {tags.map(tag => (
                <span key={tag} className="badge">{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
