export default function SectionWrapper({ children, className = '' }) {
  return (
    <section className={`max-w-6xl mx-auto px-4 sm:px-6 py-16 ${className}`}>
      {children}
    </section>
  )
}
