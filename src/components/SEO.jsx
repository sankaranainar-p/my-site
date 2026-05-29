import { Helmet } from 'react-helmet-async'

const BASE_URL = 'https://sankaranainar.dev'
const DEFAULT_IMAGE = `${BASE_URL}/og-image.jpg`
const SITE_NAME = 'Sankaranainar Parmasivan'

const PERSON_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sankaranainar Parmasivan',
  url: BASE_URL,
  jobTitle: 'Software Engineering Manager',
  worksFor: { '@type': 'Organization', name: 'Mastercard' },
  alumniOf: { '@type': 'Organization', name: 'University of Illinois Urbana-Champaign' },
  memberOf: { '@type': 'Organization', name: 'Institute of Electrical and Electronics Engineers' },
  sameAs: [
    'https://linkedin.com/in/sankaramainarparmasivan',
    'https://orcid.org/0009-0006-1738-3863',
    'https://scholar.google.com/citations?user=IQQ1LrwAAAAJ&hl=en',
    'https://github.com/sankaranainar-p/ai-agentic-works',
  ],
  knowsAbout: ['Agentic AI', 'AIOps', 'Software Engineering', 'FinTech', 'Machine Learning'],
  description:
    'Software Engineering Manager at Mastercard, IEEE Senior Member, and Agentic AI researcher specializing in autonomous systems, MLOps, and FinTech platform engineering.',
}

export default function SEO({
  title = 'Sankaranainar Parmasivan | Engineering Leader & AI Researcher',
  description = 'Sankaranainar Parmasivan — Software Engineering Manager at Mastercard, IEEE Senior Member, Agentic AI Researcher. 15+ years in FinTech and autonomous AI systems.',
  canonical = BASE_URL,
  ogType = 'profile',
  includeSchema = false,
}) {
  return (
    <Helmet>
      {/* Primary */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="author" content="Sankaranainar Parmasivan" />
      <meta
        name="keywords"
        content="Sankaranainar Parmasivan, Agentic AI, Software Engineering Manager, Mastercard, IEEE Senior Member, AIOps, FinTech, MLOps"
      />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={DEFAULT_IMAGE} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="profile:first_name" content="Sankaranainar" />
      <meta property="profile:last_name" content="Parmasivan" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={DEFAULT_IMAGE} />

      {/* JSON-LD Person schema (home page only) */}
      {includeSchema && (
        <script type="application/ld+json">{JSON.stringify(PERSON_SCHEMA)}</script>
      )}
    </Helmet>
  )
}
