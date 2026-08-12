import { useState } from 'react'
import { Zap, ShieldCheck, Layers, Terminal, Sparkles, CheckCircle2, Server, FolderGit2 } from 'lucide-react'

const GITHUB_URL = 'https://github.com/sankaranainar-p/ai-agentic-works'

export default function ModelShowcase() {
  const [activeTab, setActiveTab] = useState('overview')

  const stackSpecs = {
    name: 'Engineering & Agent Stack',
    capabilities: [
      'Multi-agent orchestration & autonomous task decomposition',
      'Structured JSON & schema-compliant output generation',
      'ISO 20022 transaction risk reasoning',
      'Compliance scanning against GDPR, PCI DSS, and MiCA',
      'Reference-grounded retrieval via CrossRef & LanceDB RAG'
    ],
    agentStack: [
      { name: 'ACS Orchestrator', type: 'Custom Multi-Agent Pipeline', framework: 'Python / SMOTETomek / XGBoost' },
      { name: 'LexiQ RAG Engine', type: 'Reference Integrity & Verification', framework: 'Ollama / TF-IDF / CrossRef API' },
      { name: 'Agno Agent Core', type: 'FERPA-Compliant Local Agent', framework: 'Agno Framework / LanceDB / Llama 3.2' },
      { name: 'AIOps Incident Loop', type: '5-Layer Self-Healing Engine', framework: 'FastAPI / Groq / scikit-learn' }
    ],
    metrics: [
      { label: 'Active Projects Synced', value: '7 Projects' },
      { label: 'Peer Reviews Done', value: '54+ Papers' },
      { label: 'Verified Venues', value: '19 IEEE/Springer' }
    ]
  }

  return (
    <div className="relative overflow-hidden rounded-2xl border border-brand-500/20 bg-gradient-to-b from-white via-gray-50 to-white dark:from-zinc-900/90 dark:via-zinc-900/50 dark:to-black p-6 md:p-8 backdrop-blur-xl shadow-2xl my-8">
      {/* Background glow effects */}
      <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-brand-500/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-6 border-b border-gray-200 dark:border-zinc-800/80">
        <div className="flex items-center gap-3">
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/30 text-brand-600 dark:text-brand-400">
            <Sparkles className="h-5 w-5 animate-pulse" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-600 dark:text-brand-400">Portfolio Stack</span>
              <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Actively Maintained
              </span>
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
              {stackSpecs.name}
            </h2>
          </div>
        </div>

        {/* Tab switcher */}
        <div className="flex items-center gap-1 bg-gray-100 dark:bg-zinc-950/80 p-1 rounded-xl border border-gray-200 dark:border-zinc-800">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'overview'
                ? 'bg-brand-600 text-white font-semibold shadow-md'
                : 'text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Overview & Specs
          </button>
          <button
            onClick={() => setActiveTab('agents')}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              activeTab === 'agents'
                ? 'bg-brand-600 text-white font-semibold shadow-md'
                : 'text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            Agent Frameworks
          </button>
        </div>
      </div>

      {/* Content based on tab */}
      {activeTab === 'overview' ? (
        <div className="grid md:grid-cols-3 gap-6">
          {/* Spec details */}
          <div className="md:col-span-2 space-y-4">
            <p className="text-sm text-gray-600 dark:text-zinc-300 leading-relaxed">
              Multi-agent reasoning, compliance analysis, and incident-triage systems shipped across all 7 projects hosted in{' '}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-brand-700 dark:text-brand-300 bg-brand-50 dark:bg-brand-950/50 px-1.5 py-0.5 rounded font-mono text-xs hover:underline"
              >
                <FolderGit2 className="w-3 h-3" /> ai-agentic-works
              </a>.
            </p>
            <div className="space-y-2 pt-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-gray-500 dark:text-zinc-400 font-semibold">Core Capabilities</h3>
              <div className="grid sm:grid-cols-1 gap-2">
                {stackSpecs.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-gray-700 dark:text-zinc-300 bg-gray-50 dark:bg-zinc-900/60 p-2.5 rounded-lg border border-gray-200 dark:border-zinc-800/60">
                    <CheckCircle2 className="h-4 w-4 text-brand-600 dark:text-brand-400 shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Metrics Column */}
          <div className="space-y-3 bg-gray-50 dark:bg-zinc-950/60 p-4 rounded-xl border border-gray-200 dark:border-zinc-800/80 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono text-gray-500 dark:text-zinc-400 uppercase tracking-wider block mb-3 font-semibold">Stack Metrics</span>
              <div className="space-y-3">
                {stackSpecs.metrics.map(({ label, value }, idx) => (
                  <div
                    key={label}
                    className={`flex items-center justify-between gap-3 ${idx < stackSpecs.metrics.length - 1 ? 'pb-2 border-b border-gray-200 dark:border-zinc-800' : ''}`}
                  >
                    <span className="text-xs text-gray-500 dark:text-zinc-400 flex items-center gap-1.5">
                      {idx === 0 && <Layers className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />}
                      {idx === 1 && <ShieldCheck className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />}
                      {idx === 2 && <Zap className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />}
                      {label}
                    </span>
                    <span className="text-xs font-mono text-brand-700 dark:text-brand-300 font-medium text-right truncate max-w-[55%]">{value}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between gap-3 pt-2 border-t border-gray-200 dark:border-zinc-800">
                  <span className="text-xs text-gray-500 dark:text-zinc-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-brand-600 dark:text-brand-400 shrink-0" />
                    Source
                  </span>
                  <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-mono text-brand-700 dark:text-brand-300 font-medium text-right truncate max-w-[55%] hover:underline"
                  >
                    GitHub ↗
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-gray-200 dark:border-zinc-800 text-[11px] font-mono text-gray-400 dark:text-zinc-500 text-center">
              IEEE &amp; Springer Manuscript Validated Stack
            </div>
          </div>
        </div>
      ) : (
        /* Agent Stack view */
        <div className="grid sm:grid-cols-2 gap-4">
          {stackSpecs.agentStack.map((agent, i) => (
            <div key={i} className="p-4 rounded-xl bg-gray-50 dark:bg-zinc-950/70 border border-gray-200 dark:border-zinc-800 hover:border-brand-500/40 transition-all group">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-brand-600 dark:text-brand-400 font-semibold">{agent.type}</span>
                <Server className="w-4 h-4 text-gray-400 dark:text-zinc-500 group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors" />
              </div>
              <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">{agent.name}</h4>
              <p className="text-xs font-mono text-gray-500 dark:text-zinc-400 bg-gray-100 dark:bg-zinc-900 px-2 py-1 rounded inline-block">
                {agent.framework}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
