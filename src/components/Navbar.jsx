import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { useTheme } from '../App'

const links = [
  { to: '/',               label: 'Home'           },
  { to: '/research',       label: 'Research'       },
  { to: '/certifications', label: 'Certifications' },
  { to: '/projects',       label: 'Projects'       },
  { to: '/contact',        label: 'Contact'        },
]

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="5" strokeWidth="2"/>
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
        d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/>
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { dark, toggle } = useTheme()

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md
      bg-white/90 border-b border-gray-200 shadow-sm
      dark:bg-surface-950/90 dark:border-surface-600 transition-colors duration-300">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2.5 font-bold text-lg tracking-tight
            text-gray-900 dark:text-content-primary"
        >
          <span className="w-8 h-8 rounded bg-brand-600 flex items-center justify-center
            text-white font-bold text-sm shadow-sm shadow-brand-600/40">
            SP
          </span>
          <span className="hidden sm:block">Sankaranainar Parmasivan</span>
          <span className="sm:hidden">Sankar</span>
        </Link>

        {/* Desktop links + theme toggle */}
        <div className="hidden md:flex items-center gap-1">
          <ul className="flex items-center gap-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `relative px-3 py-1.5 rounded-md text-sm font-medium transition-colors duration-150 ${
                      isActive
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-600/10'
                        : 'text-gray-500 dark:text-content-secondary hover:text-gray-900 dark:hover:text-content-primary hover:bg-gray-100 dark:hover:bg-surface-700'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {label}
                      {isActive && (
                        <span className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-brand-600 dark:bg-brand-400" />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="ml-3 p-2 rounded-lg transition-colors duration-150
              text-gray-500 hover:text-gray-900 hover:bg-gray-100
              dark:text-content-secondary dark:hover:text-content-primary dark:hover:bg-surface-700"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className="p-2 rounded-md text-gray-500 dark:text-content-secondary
              hover:text-gray-900 dark:hover:text-content-primary hover:bg-gray-100 dark:hover:bg-surface-700"
          >
            {dark ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-gray-500 dark:text-content-secondary
              hover:text-gray-900 dark:hover:text-content-primary hover:bg-gray-100 dark:hover:bg-surface-700"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 dark:border-surface-600
          bg-white dark:bg-surface-900">
          <ul className="px-4 py-3 space-y-1">
            {links.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-brand-600 dark:text-brand-400 bg-brand-50 dark:bg-brand-600/10'
                        : 'text-gray-500 dark:text-content-secondary hover:text-gray-900 dark:hover:text-content-primary hover:bg-gray-100 dark:hover:bg-surface-700'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
