import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'
import SEO from '../components/SEO'
import { Award, Filter, ExternalLink, GraduationCap } from 'lucide-react'

const certifications = [
  {
    title: 'Prompt Engineering for ChatGPT',
    issuer: 'Vanderbilt University',
    issued: 'Jul 2025',
    credentialId: '2H58Y1QZT99O',
    category: 'AI & Prompt Engineering',
  },
  {
    title: 'Google Prompting Essentials Specialization',
    issuer: 'Google',
    issued: 'Jul 2025',
    credentialId: 'IO8I7HNWIDXT',
    category: 'AI & Prompt Engineering',
  },
  {
    title: 'Google AI Essentials',
    issuer: 'Google',
    issued: 'Jun 2025',
    credentialId: '52QHNXZE1BJD',
    category: 'AI & Prompt Engineering',
  },
  {
    title: 'Strategic Leadership & Management Specialization',
    issuer: 'Gies College of Business — University of Illinois Urbana-Champaign',
    issued: 'Jan 2025',
    credentialId: '129047192',
    category: 'Leadership & Management',
  },
  {
    title: 'AI in Project Management',
    issuer: 'LinkedIn',
    issued: 'Nov 2024',
    credentialId: null,
    category: 'AI & Prompt Engineering',
  },
  {
    title: 'How Thought Leadership Can Differentiate Your Brand',
    issuer: 'LinkedIn',
    issued: 'Oct 2024',
    credentialId: null,
    category: 'Leadership & Management',
  },
  {
    title: 'Leading Teams: Developing as a Leader',
    issuer: 'University of Illinois Urbana-Champaign',
    issued: 'Feb 2024',
    credentialId: '299U7LM36FGA',
    category: 'Leadership & Management',
  },
  {
    title: 'Developing CI/CD Solutions with Azure DevOps',
    issuer: 'LinkedIn',
    issued: 'Sep 2021',
    credentialId: null,
    category: 'Cloud & DevOps',
  },
  {
    title: 'Azure DevOps: Continuous Delivery with YAML Pipelines',
    issuer: 'LinkedIn',
    issued: 'Aug 2021',
    credentialId: null,
    category: 'Cloud & DevOps',
  },
  {
    title: 'AEM Developer',
    issuer: 'Adobe',
    issued: 'Apr 2017',
    credentialId: null,
    category: 'Cloud & DevOps',
  },
  {
    title: 'Reviewer Certificate — IEOM-VIT 2025',
    issuer: 'Vellore Institute of Technology (VIT), India',
    issued: '2025',
    credentialId: null,
    category: 'Peer Review',
  },
  {
    title: 'Reviewer Certificate — IEEE AI Symposium',
    issuer: 'University of South Dakota',
    issued: '2025',
    credentialId: null,
    category: 'Peer Review',
  },
  {
    title: 'Reviewer Certificate — IBCD-2025',
    issuer: 'Dr. D.Y. Patil Institute, Pune',
    issued: '2025',
    credentialId: null,
    category: 'Peer Review',
  },
  {
    title: 'Reviewer Certificate — INCSTIC-2025',
    issuer: 'INCSTIC',
    issued: '2025',
    credentialId: null,
    category: 'Peer Review',
  },
  {
    title: 'Reviewer Certificate — ICRTAC',
    issuer: 'VIT, Malaysia',
    issued: '2025',
    credentialId: null,
    category: 'Peer Review',
  },
  {
    title: 'Reviewer Certificate — iconCEPT',
    issuer: 'NIT Puducherry',
    issued: '2025',
    credentialId: null,
    category: 'Peer Review',
  },
  {
    title: 'Reviewer Certificate — AICTC-2026',
    issuer: 'BTU Bikaner',
    issued: '2026',
    credentialId: null,
    category: 'Peer Review',
  },
  {
    title: 'Reviewer Certificate — ICCIDS-2026',
    issuer: 'SSN College of Engineering',
    issued: '2026',
    credentialId: null,
    category: 'Peer Review',
  },
  {
    title: 'Reviewer Certificate — WcCST-2026',
    issuer: 'Punjab',
    issued: '2026',
    credentialId: null,
    category: 'Peer Review',
  },
  {
    title: 'Reviewer Certificate — i5CPS-2026',
    issuer: 'NIT Karaikal',
    issued: '2026',
    credentialId: null,
    category: 'Peer Review',
  },
  {
    title: 'Reviewer Certificate — ICAISET-2026',
    issuer: 'International Conference on AI, Signal & Emerging Technologies',
    issued: '2026',
    credentialId: null,
    category: 'Peer Review',
  },
  {
    title: 'Reviewer Certificate — HUMAN-2026',
    issuer: 'Techno Bengal Institute of Technology, Kolkata (CSI Kolkata Chapter)',
    issued: '2026',
    credentialId: null,
    category: 'Peer Review',
  },
  {
    title: 'Reviewer Certificate — IEEE EDUCON 2026',
    issuer: 'IEEE Education Society / British University in Egypt, Cairo',
    issued: '2026',
    credentialId: null,
    category: 'Peer Review',
  },
]

const categories = ['All', 'AI & Prompt Engineering', 'Leadership & Management', 'Cloud & DevOps', 'Peer Review']

const categoryColor = {
  'AI & Prompt Engineering': 'bg-brand-50 text-brand-700 border-brand-200 dark:bg-brand-500/10 dark:text-brand-400 dark:border-brand-500/30',
  'Leadership & Management': 'bg-purple-50 text-purple-700 border-purple-200 dark:bg-purple-500/10 dark:text-purple-400 dark:border-purple-500/30',
  'Cloud & DevOps':          'bg-sky-50 text-sky-700 border-sky-200 dark:bg-sky-500/10 dark:text-sky-400 dark:border-sky-500/30',
  'Peer Review':             'bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/30',
}

export default function Certifications() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? certifications : certifications.filter(c => c.category === active)

  return (
    <SectionWrapper>
      <SEO
        title="Certifications | Sankaranainar Parmasivan"
        description="Professional certifications held by Sankaranainar Parmasivan, including credentials from Google, Vanderbilt, Adobe, and UIUC Gies College of Business in AI, cloud, DevOps, and leadership."
        canonical="https://sankaranainar.dev/certifications"
        ogType="website"
      />

      {/* Header */}
      <div className="mb-10">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono bg-brand-50 text-brand-700 border border-brand-200 dark:bg-brand-500/10 dark:text-brand-400 dark:border-brand-500/20 mb-3">
          <GraduationCap className="w-3.5 h-3.5" />
          <span>Continuous Learning</span>
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Certifications
        </h1>
        <p className="text-gray-500 dark:text-zinc-400 text-sm mt-2 max-w-2xl leading-relaxed">
          Continuous learning across AI, engineering leadership, and cloud operations.
        </p>
      </div>

      {/* Filter tabs */}
      <div className="flex items-center gap-2 flex-wrap mb-8 bg-gray-100 dark:bg-zinc-900 p-1.5 rounded-xl border border-gray-200 dark:border-zinc-800 w-fit">
        <Filter className="w-3.5 h-3.5 text-gray-400 dark:text-zinc-500 ml-1.5" />
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
              active === cat
                ? 'bg-brand-600 text-white font-bold'
                : 'text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cert cards */}
      <div className="grid sm:grid-cols-2 gap-4">
        {filtered.map(({ title, issuer, issued, credentialId, category }) => (
          <div
            key={title}
            className="p-5 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/80 hover:border-brand-300 dark:hover:border-brand-500/40 transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-start justify-between gap-3 mb-2">
                <h3 className="font-bold text-sm text-gray-900 dark:text-white leading-snug">{title}</h3>
                <Award className="w-4 h-4 text-brand-500/70 shrink-0 mt-0.5" />
              </div>
              <p className="text-xs text-gray-500 dark:text-zinc-400">{issuer}</p>
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-gray-200 dark:border-zinc-800/80">
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[11px] font-mono text-gray-400 dark:text-zinc-500">Issued {issued}</span>
                {credentialId && (
                  <span className="text-[11px] font-mono text-gray-400 dark:text-zinc-500">ID: {credentialId}</span>
                )}
              </div>
              <span className={`px-2.5 py-1 rounded-full text-[11px] font-mono border font-medium ${categoryColor[category]}`}>
                {category}
              </span>
            </div>

            {credentialId && (
              <a
                href={`https://coursera.org/verify/${credentialId}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 mt-3 text-xs font-mono text-brand-600 dark:text-brand-400 hover:underline"
              >
                Verify Credential <ExternalLink className="w-3 h-3" />
              </a>
            )}
          </div>
        ))}
      </div>

      <p className="mt-8 text-xs text-center text-gray-400 dark:text-zinc-500 font-mono">
        {certifications.length} certifications total
      </p>
    </SectionWrapper>
  )
}
