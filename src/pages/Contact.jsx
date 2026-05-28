import { useState } from 'react'
import SectionWrapper from '../components/SectionWrapper'

const topics = [
  'Research collaboration',
  'Conference speaking invitations',
  'Engineering leadership advisory',
  'Agentic AI consulting',
  'IEEE activities and volunteering',
  'FinTech & B2B platform engineering',
]

const channels = [
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/sankaranainarparamasivan',
    href: 'https://www.linkedin.com/in/sankaranainarparamasivan/',
    desc: 'Professional updates and connections',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
      </svg>
    ),
    label: 'GitHub',
    value: 'github.com/sankaranainar-p/ai-agentic-works',
    href: 'https://github.com/sankaranainar-p/ai-agentic-works',
    desc: 'Open source projects and experiments',
  },
  {
    icon: (
      <svg viewBox="0 0 256 256" className="w-5 h-5 shrink-0" fill="none">
        <circle cx="128" cy="128" r="128" fill="#a6ce39"/>
        <circle cx="86" cy="86" r="16" fill="white"/>
        <rect x="70" y="112" width="32" height="80" rx="4" fill="white"/>
        <path d="M120 86h44c28 0 48 18 48 46s-20 46-48 46h-44V86z" fill="white"/>
        <path d="M136 102h26c18 0 30 10 30 30s-12 30-30 30h-26V102z" fill="#a6ce39"/>
      </svg>
    ),
    label: 'ORCID',
    value: '0009-0006-1738-3863',
    href: 'https://orcid.org/0009-0006-1738-3863',
    desc: 'Publications and research profile',
  },
]

const INITIAL = { name: '', email: '', subject: '', message: '' }

function ContactForm() {
  const [form, setForm] = useState(INITIAL)
  const [sent, setSent] = useState(false)

  const set = field => e => setForm(f => ({ ...f, [field]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    const body = `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    window.location.href =
      `mailto:sankar.rajamanoharan@gmail.com` +
      `?subject=${encodeURIComponent(form.subject || 'Contact from sankaranainar.vercel.app')}` +
      `&body=${encodeURIComponent(body)}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputCls = `w-full px-4 py-2.5 rounded-lg text-sm transition-colors duration-150 outline-none
    border bg-white dark:bg-surface-700 text-gray-900 dark:text-content-primary
    border-gray-200 dark:border-surface-500
    focus:border-brand-500 dark:focus:border-brand-500 focus:ring-1 focus:ring-brand-500/30
    placeholder:text-gray-400 dark:placeholder:text-content-tertiary`

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide
            text-gray-500 dark:text-content-secondary">Name</label>
          <input type="text" required placeholder="Your name"
            value={form.name} onChange={set('name')} className={inputCls} />
        </div>
        <div>
          <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide
            text-gray-500 dark:text-content-secondary">Email</label>
          <input type="email" required placeholder="you@organization.com"
            value={form.email} onChange={set('email')} className={inputCls} />
        </div>
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide
          text-gray-500 dark:text-content-secondary">Subject</label>
        <input type="text" required placeholder="e.g. Research collaboration on Agentic AI"
          value={form.subject} onChange={set('subject')} className={inputCls} />
      </div>
      <div>
        <label className="block text-xs font-semibold mb-1.5 uppercase tracking-wide
          text-gray-500 dark:text-content-secondary">Message</label>
        <textarea required rows={5} value={form.message} onChange={set('message')}
          placeholder="Describe your inquiry — for speaking invitations please include event name, date, expected audience, and topic."
          className={`${inputCls} resize-none`} />
      </div>
      <button type="submit" className="btn-primary w-full justify-center">
        {sent ? (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Opening your email client…
          </>
        ) : (
          <>
            Send Message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>
      <p className="text-xs text-center text-gray-400 dark:text-content-tertiary">
        Or write directly to{' '}
        <a href="mailto:sankar.rajamanoharan@gmail.com"
          className="font-mono text-brand-600 dark:text-brand-400 hover:underline">
          sankar.rajamanoharan@gmail.com
        </a>
      </p>
    </form>
  )
}

export default function Contact() {
  return (
    <SectionWrapper>
      <h1 className="section-heading text-gray-900 dark:text-content-primary">Contact</h1>
      <p className="section-subheading">
        Open to meaningful conversations about research, engineering, and innovation.
      </p>

      {/* Direct email highlight */}
      <div className="mb-10 p-4 rounded-xl flex items-center gap-4
        bg-brand-600/5 border border-brand-600/20 dark:bg-brand-600/10 dark:border-brand-500/25">
        <div className="shrink-0 w-10 h-10 rounded-lg bg-brand-600 flex items-center justify-center shadow-sm">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide mb-0.5
            text-gray-500 dark:text-content-secondary">Direct Email</p>
          <a href="mailto:sankar.rajamanoharan@gmail.com"
            className="font-mono text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline">
            sankar.rajamanoharan@gmail.com
          </a>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-10">
        {/* Form */}
        <div>
          <h2 className="text-lg font-semibold tracking-tight mb-5 text-gray-900 dark:text-content-primary">
            Send a Message
          </h2>
          <ContactForm />
        </div>

        {/* Right panel */}
        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-semibold tracking-tight mb-4 text-gray-900 dark:text-content-primary">
              Other Channels
            </h2>
            <div className="space-y-3">
              {channels.map(({ icon, label, value, href, desc }) => (
                <a key={label} href={href} target="_blank" rel="noreferrer"
                  className="card flex items-start gap-4 group hover:border-brand-500/40">
                  <span className="mt-0.5 shrink-0 text-gray-500 dark:text-content-secondary
                    group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                    {icon}
                  </span>
                  <div className="min-w-0">
                    <p className="font-semibold text-gray-900 dark:text-content-primary
                      group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                      {label}
                    </p>
                    <p className="text-xs font-mono text-gray-500 dark:text-content-secondary truncate">{value}</p>
                    <p className="text-xs text-gray-400 dark:text-content-tertiary mt-0.5">{desc}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold tracking-tight mb-4 text-gray-900 dark:text-content-primary">
              I'm Happy to Discuss
            </h2>
            <div className="card">
              <ul className="space-y-2.5">
                {topics.map(topic => (
                  <li key={topic} className="flex items-center gap-3 text-sm text-gray-700 dark:text-content-secondary">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-600 dark:bg-brand-400 shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="card border-l-4 border-l-brand-600">
            <p className="text-sm leading-relaxed text-gray-700 dark:text-content-secondary">
              <span className="font-semibold text-gray-900 dark:text-content-primary">Response time:</span>{' '}
              I aim to reply to all meaningful inquiries within a few business days. For speaking
              invitations, please include the event name, date, expected audience, and topic.
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
