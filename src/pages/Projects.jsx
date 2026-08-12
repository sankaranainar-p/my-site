import { useState, useMemo } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import SEO from '../components/SEO'
import ModelShowcase from '../components/ModelShowcase'
import { Search, FolderGit2, Sparkles, ExternalLink, Layers, Grid, List } from 'lucide-react'

const GITHUB_ORG_URL = 'https://github.com/sankaranainar-p/ai-agentic-works'

const projects = [
  {
    id: 'acs-cross-border-compliance',
    title: 'ACS: Agentic Compliance System for Cross-Border Payments',
    repoUrl: `${GITHUB_ORG_URL}/tree/main/acs-cross-border-compliance`,
    desc: 'Reference implementation supporting the manuscript "A Decentralized Agentic Architecture for Real-Time Compliance and Fraud Detection in Cross-Border Payment Systems" (submitted to IEEE IT Professional). Simulates a decentralized multi-agent pipeline for real-time fraud detection and compliance enforcement over ISO 20022 cross-border transaction rails: AnomalyAgent, PolicyAgent, RiskAgent, XGBoost ML Agent, Human-on-the-loop review, and a hashed audit trust layer.',
    tags: ['Python', 'Agentic AI', 'ISO 20022', 'XGBoost', 'SMOTETomek', 'FastAPI', 'Multi-Agent', 'IEEE Submitted'],
    category: 'Agentic AI & FinTech',
    status: 'Active / Submitted Paper',
    highlight: 'IEEE IT Professional Paper Implementation',
  },
  {
    id: 'researchcopilot',
    title: 'LexiQ — Research Intelligence Platform',
    repoUrl: `${GITHUB_ORG_URL}/tree/main/researchcopilot`,
    desc: 'A research intelligence platform that grounds LLM-generated synthesis in verifiable evidence rather than raw generation. Combines retrieval-augmented generation with per-sentence source attribution, multi-document evidence divergence classification (SUPPORTS / CONTRADICTS / QUALIFIES), and a three-layer reference integrity check against CrossRef API (existence, attribution, arithmetic). Append-only audit log (SHA-256) ensures full reproducibility.',
    tags: ['Python', 'Flask', 'Ollama', 'scikit-learn', 'TF-IDF', 'RAG', 'CrossRef API', 'PyPDF', 'NumPy'],
    category: 'Agentic AI & R&D',
    status: 'Beta / FDP Demo',
    highlight: 'Faculty Development Programme Showcase',
  },
  {
    id: 'ai-payment-reliability-engine',
    title: 'AI Payment Reliability Engine',
    repoUrl: `${GITHUB_ORG_URL}/tree/main/ai-payment-reliability-engine`,
    desc: 'Agentic 5-layer incident response loop for payment systems: classify → root cause analysis → remediate → verify → audit log. Combines a scikit-learn ML classifier with a Groq / Ollama LLM ensemble for structured triage and RCA generation. Exposes a FastAPI backend with SSE streaming and a React dashboard for real-time incident tracking.',
    tags: ['Python', 'FastAPI', 'scikit-learn', 'Groq', 'Ollama', 'React', 'Vite', 'Tailwind CSS', 'SSE'],
    category: 'AIOps & Reliability',
    status: 'Production',
    highlight: '5-Layer Self-Healing Incident Loop',
  },
  {
    id: 'aiops-incident-classifier',
    title: 'AIOps Incident Classifier',
    repoUrl: `${GITHUB_ORG_URL}/tree/main/aiops-incident-classifier`,
    desc: 'ML + LLM ensemble for fintech incident classification and severity routing. A scikit-learn model runs first for ultra-fast deterministic triage, enriched by an LLM layer for complex contextual incidents. Integrated with PagerDuty and Slack for automated alert routing with a live confidence metrics dashboard.',
    tags: ['Python', 'FastAPI', 'scikit-learn', 'React', 'Vite', 'Tailwind CSS', 'PagerDuty API', 'Slack API'],
    category: 'AIOps & Incident Management',
    status: 'Production',
    highlight: 'Automated Slack & PagerDuty Integration',
  },
  {
    id: 'ai-compliance-as-code',
    title: 'AI Compliance-as-Code',
    repoUrl: `${GITHUB_ORG_URL}/tree/main/ai-compliance-as-code`,
    desc: 'VS Code extension + FastAPI backend that performs real-time compliance analysis directly inside developer code editors. A regex-based static scanner extracts sensitive data handling patterns and endpoints, passing context hints to Claude API for deep verification against GDPR, PCI DSS, and MiCA regulatory frameworks.',
    tags: ['Python', 'FastAPI', 'Claude API', 'TypeScript', 'VS Code Extension', 'Pydantic', 'GDPR', 'PCI DSS', 'MiCA'],
    category: 'DevSecOps & Regulatory',
    status: 'Production',
    highlight: 'Real-time IDE GDPR/PCI DSS/MiCA Scan',
  },
  {
    id: 'test-simulation-fintech',
    title: 'Test Simulation FinTech',
    repoUrl: `${GITHUB_ORG_URL}/tree/main/test-simulation-fintech`,
    desc: 'AI-driven test scenario generation platform for compliance-critical payment flows. Dual-engine design: Engine A (Deterministic Rule Engine) covers known edge cases; Engine B (LLM-Augmented Engine using Ollama/Claude) semantically evaluates multi-jurisdiction regulatory conflicts and fraud chains. Built with Spring Boot backend and Angular frontend.',
    tags: ['Java', 'Spring Boot', 'Angular', 'Claude API', 'Ollama', 'H2 Database', 'TypeScript'],
    category: 'FinTech & Automated Testing',
    status: 'Completed',
    highlight: 'Dual-Engine Semantic Test Simulation',
  },
  {
    id: 'Dashboard_Generator',
    title: 'Agentic AI Dashboard for Personalized Mentorship',
    repoUrl: `${GITHUB_ORG_URL}/tree/main/Dashboard_Generator`,
    desc: 'Local, FERPA-compliant AI mentorship platform combining student performance data with syllabus knowledge to generate personalized remedial dashboards. An Agno agent runs fully locally with Ollama (Llama 3.2) ensuring zero data leakage. Ingests Excel grades and PDF syllabi, queries LanceDB vector embeddings, and outputs styled HTML remedial study plans.',
    tags: ['Agno Framework', 'Ollama', 'Llama 3.2', 'LanceDB', 'RAG', 'Python', 'Pandas', 'Tailwind CSS'],
    category: 'Agentic AI & EdTech',
    status: 'Completed',
    highlight: '100% Local FERPA-Compliant Agno Agent',
  },
]

const statusColor = {
  'Active / Submitted Paper': 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-500/10 dark:text-amber-400 dark:border-amber-500/30',
  'Beta / FDP Demo':         'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/30',
  'Production':               'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
  'Completed':                'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/30',
}

export default function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('All')
  const [viewMode, setViewMode] = useState('grid') // 'grid' | 'architecture' | 'compact'

  // Filter projects
  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const matchesSearch = p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            p.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            p.category.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesTag = selectedTag === 'All' || p.tags.includes(selectedTag)
      return matchesSearch && matchesTag
    })
  }, [searchTerm, selectedTag])

  return (
    <SectionWrapper>
      <SEO
        title="AI & Agentic Projects | Sankaranainar Parmasivan"
        description="AI and agentic engineering projects by Sankaranainar Parmasivan — open source on GitHub at sankaranainar-p/ai-agentic-works."
        canonical="https://sankaranainar.dev/projects"
        ogType="website"
      />

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6">
        <div>
          <a
            href={GITHUB_ORG_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-500/10 dark:text-brand-400 dark:border-brand-500/20 mb-3 hover:underline"
          >
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>GitHub: sankaranainar-p/ai-agentic-works</span>
          </a>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Agentic AI &amp; Engineering Projects
          </h1>
          <p className="text-gray-500 dark:text-zinc-400 text-sm mt-2 max-w-2xl leading-relaxed">
            Open-source repository suite of autonomous agentic architectures, AIOps incident response loops, and compliance-as-code engines.
          </p>
        </div>

        {/* View Switcher */}
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-zinc-900 p-1.5 rounded-xl border border-gray-200 dark:border-zinc-800 shrink-0">
          <button
            onClick={() => setViewMode('grid')}
            className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
              viewMode === 'grid' ? 'bg-brand-600 text-white font-bold' : 'text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white'
            }`}
            title="Grid View"
          >
            <Grid className="w-4 h-4" />
            <span className="hidden sm:inline">Grid</span>
          </button>
          <button
            onClick={() => setViewMode('architecture')}
            className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
              viewMode === 'architecture' ? 'bg-brand-600 text-white font-bold' : 'text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white'
            }`}
            title="Architecture View"
          >
            <Layers className="w-4 h-4" />
            <span className="hidden sm:inline">Architecture</span>
          </button>
          <button
            onClick={() => setViewMode('compact')}
            className={`p-2 rounded-lg text-xs font-mono flex items-center gap-1.5 transition-all ${
              viewMode === 'compact' ? 'bg-brand-600 text-white font-bold' : 'text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white'
            }`}
            title="Compact List"
          >
            <List className="w-4 h-4" />
            <span className="hidden sm:inline">Compact</span>
          </button>
        </div>
      </div>

      {/* Latest AI Model Component */}
      <ModelShowcase />

      {/* Filter and Search Bar */}
      <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
        {/* Search input */}
        <div className="relative flex-1 w-full">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 dark:text-zinc-500" />
          <input
            type="text"
            placeholder="Search projects, stacks, or keywords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white dark:bg-zinc-900/90 border border-gray-300 dark:border-zinc-800 rounded-xl text-xs font-mono text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:border-brand-500/60 transition-colors"
          />
        </div>

        {/* Tag pills */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0 scrollbar-none">
          {['All', 'Python', 'Agentic AI', 'FastAPI', 'RAG', 'scikit-learn', 'Java'].map(tag => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-colors border ${
                selectedTag === tag
                  ? 'bg-brand-50 text-brand-700 border-brand-300 dark:bg-brand-500/20 dark:text-brand-400 dark:border-brand-500/40 font-semibold'
                  : 'bg-gray-50 text-gray-500 border-gray-200 dark:bg-zinc-900 dark:text-zinc-400 dark:border-zinc-800 hover:border-gray-300 dark:hover:border-zinc-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Display */}
      {viewMode === 'grid' && (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="relative flex flex-col justify-between rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/70 p-6 hover:border-brand-400 dark:hover:border-brand-500/40 transition-all duration-300 group hover:shadow-xl hover:shadow-brand-500/5"
            >
              <div>
                {/* Header */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-mono border font-medium ${statusColor[p.status]}`}>
                    {p.status}
                  </span>
                  <span className="text-[11px] font-mono text-gray-500 dark:text-zinc-500 bg-gray-100 dark:bg-zinc-900 px-2 py-0.5 rounded border border-gray-200 dark:border-zinc-800">
                    {p.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors mb-2">
                  {p.title}
                </h3>

                {p.highlight && (
                  <div className="flex items-center gap-1.5 text-xs font-mono text-brand-700 dark:text-brand-400/90 mb-3 bg-brand-50 dark:bg-brand-500/5 px-2.5 py-1 rounded-lg border border-brand-200 dark:border-brand-500/10">
                    <Sparkles className="w-3.5 h-3.5 shrink-0" />
                    <span>{p.highlight}</span>
                  </div>
                )}

                <p className="text-xs text-gray-500 dark:text-zinc-400 leading-relaxed mb-4">
                  {p.desc}
                </p>
              </div>

              <div>
                {/* GitHub link */}
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-[11px] font-mono text-gray-500 dark:text-zinc-500 bg-gray-50 dark:bg-zinc-900/90 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-zinc-800/80 mb-4 hover:text-brand-600 dark:hover:text-brand-400 hover:border-brand-300 dark:hover:border-brand-500/40 transition-colors w-fit"
                >
                  <FolderGit2 className="w-3.5 h-3.5 shrink-0" />
                  <span>View on GitHub</span>
                  <ExternalLink className="w-3 h-3 shrink-0" />
                </a>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[11px] font-mono bg-gray-100 dark:bg-zinc-900 text-gray-500 dark:text-zinc-400 border border-gray-200 dark:border-zinc-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewMode === 'architecture' && (
        <div className="space-y-6">
          {filteredProjects.map((p) => (
            <div
              key={p.id}
              className="rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/80 p-6 hover:border-brand-400 dark:hover:border-brand-500/40 transition-all"
            >
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4 pb-4 border-b border-gray-200 dark:border-zinc-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold">{p.category}</span>
                    <span className="text-gray-300 dark:text-zinc-600">·</span>
                    <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${statusColor[p.status]}`}>
                      {p.status}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-1">{p.title}</h3>
                </div>
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-xs font-mono text-gray-500 dark:text-zinc-400 bg-gray-100 dark:bg-zinc-900 px-3 py-1.5 rounded-lg border border-gray-200 dark:border-zinc-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  <FolderGit2 className="w-3.5 h-3.5" />
                  Repo: {p.id}
                </a>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <h4 className="text-xs font-mono text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-2">System Blueprint &amp; Logic</h4>
                  <p className="text-xs text-gray-600 dark:text-zinc-300 leading-relaxed mb-4 bg-gray-50 dark:bg-zinc-900/50 p-3 rounded-xl border border-gray-200 dark:border-zinc-800/60">
                    {p.desc}
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-zinc-900/80 p-4 rounded-xl border border-gray-200 dark:border-zinc-800 flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-mono text-gray-500 dark:text-zinc-400 uppercase tracking-wider mb-3">Tech Stack &amp; Dependencies</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {p.tags.map(t => (
                        <span key={t} className="px-2 py-1 rounded text-[11px] font-mono bg-white dark:bg-zinc-950 text-brand-700 dark:text-brand-400 border border-gray-200 dark:border-zinc-800">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  {p.highlight && (
                    <div className="mt-4 pt-3 border-t border-gray-200 dark:border-zinc-800 text-[11px] font-mono text-brand-700 dark:text-brand-400">
                      ★ {p.highlight}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {viewMode === 'compact' && (
        <div className="rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/80 divide-y divide-gray-200 dark:divide-zinc-800/80 overflow-hidden">
          {filteredProjects.map((p) => (
            <div key={p.id} className="p-4 hover:bg-gray-50 dark:hover:bg-zinc-900/50 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-brand-600 dark:text-brand-400">{p.category}</span>
                  <span className="text-gray-300 dark:text-zinc-600">·</span>
                  <span className="text-xs font-bold text-gray-900 dark:text-white">{p.title}</span>
                </div>
                <p className="text-xs text-gray-500 dark:text-zinc-400 line-clamp-1">{p.desc}</p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className={`text-[11px] font-mono px-2 py-0.5 rounded border ${statusColor[p.status]}`}>
                  {p.status}
                </span>
                <a
                  href={p.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-[11px] font-mono text-gray-500 dark:text-zinc-500 bg-gray-100 dark:bg-zinc-900 px-2 py-1 rounded border border-gray-200 dark:border-zinc-800 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  <FolderGit2 className="w-3 h-3" />
                  {p.id}
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </SectionWrapper>
  )
}
