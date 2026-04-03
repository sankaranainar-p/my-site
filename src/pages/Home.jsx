import { Link } from 'react-router-dom'
import SectionWrapper from '../components/SectionWrapper'

const credentials = [
  {
    icon: '🏦',
    title: 'Software Engineering Manager',
    org: 'Mastercard',
    desc: 'Leading software engineering teams building B2B applications in the FinTech world.',
  },
  {
    icon: '⚡',
    title: 'IEEE Senior Member',
    org: 'Institute of Electrical and Electronics Engineers',
    desc: 'Recognized for significant professional contributions and sustained service to the engineering community.',
  },
  {
    icon: '🧠',
    title: 'Researcher — Agentic AI & AIOps',
    org: 'Independent Research',
    desc: 'Publishing and speaking on LLM-based autonomous agents, multi-agent orchestration, and AI-driven operations.',
  },
  {
    icon: '🎓',
    title: 'MS in Management (GPA 3.8)',
    org: 'University of Illinois Urbana-Champaign (UIUC)',
    desc: '15+ years in the IT industry, backed by certifications from Google, Vanderbilt, Adobe, and UIUC Gies College of Business spanning AI, cloud, DevOps, and leadership.',
  },
]

const highlights = [
  { label: 'Publications', value: '3' },
  { label: 'Conference Talks', value: '15+' },
  { label: 'Peer Reviews', value: '20+' },
  { label: 'Years in Engineering', value: '15+' },
]

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="bg-white border-b border-gray-200">
        <SectionWrapper className="pt-16 pb-16">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
            {/* Text */}
            <div className="flex-1 text-center lg:text-left">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-navy-50 text-navy-700 border border-navy-200 mb-6">
                Open to Collaborations
              </span>
              <h1 className="text-4xl sm:text-5xl font-bold text-navy-900 leading-tight mb-5">
                Engineering Leader.<br />
                <span className="text-navy-500">Researcher. Innovator.</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                Software Engineering Manager at Mastercard, IEEE Senior Member, and researcher
                in Agentic AI and AIOps. I build high-performance engineering teams and push
                the boundaries of autonomous AI systems.
              </p>
              <div className="flex flex-wrap justify-center lg:justify-start gap-3">
                <Link to="/research" className="btn-primary">
                  View Research
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link to="/contact" className="btn-outline">
                  Get in Touch
                </Link>
              </div>
            </div>

            {/* Photo */}
            <div className="shrink-0">
              <div className="w-52 h-52 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-navy-100 shadow-xl">
                <img
                  src="/profile.jpeg"
                  alt="Sankar — Software Engineering Manager"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </SectionWrapper>
      </div>

      {/* Stats */}
      <div className="bg-navy-800 text-white">
        <SectionWrapper className="py-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {highlights.map(({ label, value }) => (
              <div key={label} className="text-center">
                <div className="text-3xl font-bold text-white mb-1">{value}</div>
                <div className="text-sm text-navy-200">{label}</div>
              </div>
            ))}
          </div>
        </SectionWrapper>
      </div>

      {/* Credentials */}
      <SectionWrapper>
        <h2 className="section-heading">Key Credentials</h2>
        <p className="section-subheading">What I do and where I do it.</p>
        <div className="grid sm:grid-cols-2 gap-5">
          {credentials.map(({ icon, title, org, desc }) => (
            <div key={title} className="card flex gap-4">
              <span className="text-3xl mt-0.5 shrink-0">{icon}</span>
              <div>
                <h3 className="font-semibold text-navy-900 mb-0.5">{title}</h3>
                <p className="text-xs text-navy-500 font-semibold mb-2">{org}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* CTA */}
      <SectionWrapper className="pt-0">
        <div className="bg-navy-800 rounded-2xl text-center py-14 px-6">
          <h2 className="text-2xl font-bold text-white mb-3">Let's build something together</h2>
          <p className="text-navy-200 mb-7 max-w-md mx-auto">
            Open to research collaborations, conference invitations, advisory roles, and engineering leadership conversations.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-navy-800 font-semibold hover:bg-navy-50 transition-colors"
          >
            Reach Out
          </Link>
        </div>
      </SectionWrapper>
    </>
  )
}
