import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'

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
]

const categories = ['All', 'AI & Prompt Engineering', 'Leadership & Management', 'Cloud & DevOps', 'Peer Review']

const categoryColor = {
  'AI & Prompt Engineering': 'bg-navy-50 text-navy-700 border-navy-200',
  'Leadership & Management': 'bg-purple-50 text-purple-700 border-purple-200',
  'Cloud & DevOps':          'bg-sky-50 text-sky-700 border-sky-200',
  'Peer Review':             'bg-emerald-50 text-emerald-700 border-emerald-200',
}

const categoryAccent = {
  'AI & Prompt Engineering': 'border-l-navy-700',
  'Leadership & Management': 'border-l-purple-500',
  'Cloud & DevOps':          'border-l-sky-500',
  'Peer Review':             'border-l-emerald-500',
}

export default function Certifications() {
  const [active, setActive] = useState('All')
  const filtered = active === 'All' ? certifications : certifications.filter(c => c.category === active)

  return (
    <SectionWrapper>
      <h1 className="section-heading">Certifications</h1>
      <p className="section-subheading">
        Continuous learning across AI, engineering leadership, and cloud operations.
      </p>

      {/* Filter tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
              active === cat
                ? 'bg-navy-800 border-navy-800 text-white'
                : 'border-gray-300 text-gray-500 hover:border-navy-800 hover:text-navy-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cert cards */}
      <div className="space-y-4">
        {filtered.map(({ title, issuer, issued, credentialId, category }) => (
          <div key={title} className={`card border-l-4 ${categoryAccent[category]} flex flex-wrap items-start justify-between gap-4`}>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-navy-900 mb-1">{title}</h3>
              <p className="text-sm text-gray-500">{issuer}</p>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <span className="text-xs text-gray-400">Issued {issued}</span>
                {credentialId && (
                  <span className="text-xs text-gray-400 font-mono">ID: {credentialId}</span>
                )}
              </div>
            </div>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border shrink-0 ${categoryColor[category]}`}>
              {category}
            </span>
          </div>
        ))}
      </div>

      <p className="mt-8 text-sm text-gray-400 text-center">{certifications.length} certifications total</p>
    </SectionWrapper>
  )
}
