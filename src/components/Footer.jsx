import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t py-3 bg-white dark:bg-surface-900 border-gray-200 dark:border-surface-600 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-between gap-3 text-[11px] text-gray-500 dark:text-content-tertiary font-mono">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            all systems operational
          </span>
          <span className="hidden sm:inline text-gray-300 dark:text-zinc-700">|</span>
          <span className="hidden sm:inline">© {new Date().getFullYear()} Sankaranainar Parmasivan</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://orcid.org/0009-0006-1738-3863"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            ORCID
          </a>
          <span className="text-gray-300 dark:text-zinc-700">|</span>
          <a
            href="https://www.linkedin.com/in/sankaranainar-paramasivan/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-gray-300 dark:text-zinc-700">|</span>
          <a
            href="https://github.com/sankaranainar-p/ai-agentic-works"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
          >
            GitHub
          </a>
          <span className="text-gray-300 dark:text-zinc-700">|</span>
          <Link to="/contact" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
