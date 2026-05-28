import { useEffect, useRef } from 'react'

export default function SectionWrapper({ children, className = '', noFade = false }) {
  const ref = useRef(null)

  useEffect(() => {
    if (noFade) return
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.05 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [noFade])

  return (
    <section
      ref={ref}
      className={`fade-section max-w-6xl mx-auto px-4 sm:px-6 py-16 ${className}`}
    >
      {children}
    </section>
  )
}
