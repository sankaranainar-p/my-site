import { createContext, useContext, useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Research from './pages/Research'
import Certifications from './pages/Certifications'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

// ── Theme context ──────────────────────────────────────────────────────────

export const ThemeContext = createContext({ dark: true, toggle: () => {} })
export const useTheme = () => useContext(ThemeContext)

export default function App() {
  const [dark, setDark] = useState(() => localStorage.getItem('theme') !== 'light')

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  }, [dark])

  return (
    <ThemeContext.Provider value={{ dark, toggle: () => setDark(d => !d) }}>
      <div className="min-h-screen flex flex-col bg-white dark:bg-surface-950 transition-colors duration-300">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/"               element={<Home />}           />
            <Route path="/research"       element={<Research />}       />
            <Route path="/certifications" element={<Certifications />} />
            <Route path="/projects"       element={<Projects />}       />
            <Route path="/contact"        element={<Contact />}        />
          </Routes>
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  )
}
