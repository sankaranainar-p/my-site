import SectionWrapper from '../components/SectionWrapper'

const projects = [
  {
    title: 'AI Payment Reliability Engine',
    desc: 'Agentic 5-layer incident response loop for payment systems: classify → root cause analysis → remediate → verify → log. Combines a scikit-learn ML classifier with a Groq/Ollama LLM ensemble for structured triage and RCA generation. Exposes a FastAPI backend with SSE streaming and a React dashboard for real-time incident tracking.',
    tags: ['Python', 'FastAPI', 'scikit-learn', 'Groq', 'Ollama', 'React', 'Vite', 'Tailwind', 'SSE'],
    status: 'Production',
  },
  {
    title: 'AIOps Incident Classifier',
    desc: 'ML + LLM ensemble for fintech incident classification and severity routing. A scikit-learn model runs first for speed and reliability; an LLM layer enriches results when available. Integrated with PagerDuty and Slack for automated alert routing. React/Vite frontend shows live incident queue and classification confidence.',
    tags: ['Python', 'FastAPI', 'scikit-learn', 'React', 'Vite', 'Tailwind', 'PagerDuty API', 'Slack API'],
    status: 'Production',
  },
  {
    title: 'AI Compliance-as-Code',
    desc: 'VS Code extension + FastAPI backend that performs real-time compliance analysis on source code. A regex-based static scanner extracts sensitive fields, endpoints, and data-handling patterns, then passes a structured context hint to Claude for deep analysis against GDPR, PCI DSS, and MiCA rule sets — eliminating cold-start LLM re-derivation.',
    tags: ['Python', 'FastAPI', 'Claude API', 'TypeScript', 'VS Code Extension', 'Pydantic', 'GDPR', 'PCI DSS'],
    status: 'Beta',
  },
  {
    title: 'Test Simulation FinTech',
    desc: 'AI-driven test scenario generation platform for compliance-critical payment flows. Dual-engine design: a deterministic rule engine (Engine A) covers known edge cases; an LLM-augmented engine (Engine B) using Ollama/Claude reasons semantically about multi-jurisdiction conflicts, threshold boundaries, and temporal fraud chains that static rules cannot enumerate. Spring Boot backend, Angular frontend.',
    tags: ['Java', 'Spring Boot', 'Angular', 'Claude API', 'Ollama', 'H2', 'TypeScript'],
    status: 'Beta',
  },
  {
    title: 'Agentic AI Dashboard for Personalized Mentorship',
    desc: 'End-to-end AI solution that combines student performance data with syllabus knowledge to generate personalized remedial dashboards. An Agno agent runs fully locally with Ollama (llama3.2) — student data never leaves institutional infrastructure, ensuring FERPA compliance. Reads Excel data and a PDF syllabus, identifies at-risk students (score < 60%), queries syllabus embeddings via LanceDB RAG, and generates Tailwind-styled HTML dashboards with targeted study plans.',
    tags: ['Agno Framework', 'Ollama', 'LanceDB', 'RAG', 'Python', 'Pandas', 'Tailwind CSS', 'PyPDF'],
    status: 'Completed',
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
