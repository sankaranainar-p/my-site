import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Sankaranainar Parmasivan. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/sankaranainarparamasivan/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-navy-800 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/sankaranainar-p/ai-agentic-works"
            target="_blank"
            rel="noreferrer"
            className="hover:text-navy-800 transition-colors"
          >
            GitHub
          </a>
          <Link to="/contact" className="hover:text-navy-800 transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  )
}
