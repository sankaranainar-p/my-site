import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-surface-600
      bg-white dark:bg-surface-900 py-8 transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4
        text-sm text-gray-400 dark:text-content-tertiary">
        <p>© {new Date().getFullYear()} Sankaranainar Parmasivan. All rights reserved.</p>
        <div className="flex items-center gap-5">
          <a
            href="https://orcid.org/0009-0006-1738-3863"
            target="_blank"
            rel="noreferrer"
            className="hover:text-[#a6ce39] transition-colors"
          >
            ORCID
          </a>
          <a
            href="https://www.linkedin.com/in/sankaranainarparamasivan/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sankaranainar-p/ai-agentic-works"
            target="_blank"
            rel="noreferrer"
            className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
          >
            GitHub
          </a>
          <Link
            to="/contact"
            className="hover:text-brand-500 dark:hover:text-brand-400 transition-colors"
          >
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
