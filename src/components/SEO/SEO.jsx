import { Helmet } from 'react-helmet-async'

const SITE_URL = 'https://www.chainandlinks.com'
const SITE_NAME = 'Chain & Links'
const DEFAULT_OG_IMAGE = '/images/Banner/home-banner.jpeg'

const defaultSEO = {
  title: 'Premium Plots & Villas in Chennai - Chain and Links',
  description:
    'Explore premium residential plots and villa communities in Chennai with Chain and Links. Discover Varam in Padappai, Amber in Ponmar and Crossway Springs in Ponmar.',
  keywords:
    'real estate Chennai, plots for sale in Chennai, villa plots in Chennai, residential plots Chennai, premium plots Chennai, gated community plots Chennai',
}

const pageSEO = {
  home: {
    title: 'Premium Plots & Villas in Chennai - Chain and Links',
    description:
      'Discover premium residential plots and villa communities in Chennai. Explore Varam in Padappai, Amber in Ponmar and Crossway Springs with planned amenities and excellent connectivity.',
    keywords:
      'real estate in Chennai, plots for sale in Chennai, villa plots in Chennai, residential plots in Chennai, premium plots Chennai, gated community plots Chennai',
    path: '/',
  },

  about: {
    title: 'About Chain and Links - Premium Residential Plots in Chennai',
    description:
      'Learn about Chain and Links and our approach to creating thoughtfully planned residential plots and villa communities across Chennai.',
    keywords:
      'Chain and Links Chennai, Chain and Links, residential projects Chennai, property projects Chennai, plotted development Chennai',
    path: '/about',
  },

  projects: {
    title: 'Residential Plots & Villa Projects in Chennai - Chain and Links',
    description:
      'Explore Chain and Links residential projects in Chennai including Varam, Amber and Crossway Springs. Find premium plots, villa communities, amenities and locations.',
    keywords:
      'plots for sale Chennai, residential projects Chennai, villa projects Chennai, gated community Chennai, property projects Chennai, plots investment Chennai',
    path: '/projects',
  },

  contact: {
    title: 'Contact Chain and Links - Plots & Villas in Chennai',
    description:
      'Contact Chain and Links for premium residential plots and villa communities in Chennai. Enquire about Varam, Amber and Crossway Springs.',
    keywords:
      'Chain and Links contact, real estate contact Chennai, plots Chennai enquiry, villa plots Chennai contact',
    path: '/contact',
  },

  notFound: {
    title: 'Page Not Found - Chain and Links',
    description:
      'The page you are looking for could not be found. Explore our plots and villa projects in Chennai instead.',
    keywords: 'Chain and Links, plots Chennai',
    path: null,
    noindex: true,
  },
}

const projectSEO = {
  varam: {
    title: 'Varam Villa Plots in Padappai, Chennai - Chain and Links',
    description:
      'Explore Varam premium villa plots in Padappai, Chennai. A 32-acre gated community with 460+ villa plots, 100+ lifestyle amenities and excellent connectivity.',
    keywords:
      'villa plots in Padappai, plots for sale in Padappai, villa plots Chennai, plots in Padappai Chennai, residential plots Padappai, gated community Padappai',
  },

  amber: {
    title: 'Amber Premium Plots in Ponmar, Chennai - Chain and Links',
    description:
      'Explore Amber premium residential plots in Ponmar, Chennai. A 125-acre gated plotted development with 900+ plots, 80+ lifestyle amenities and connectivity to OMR.',
    keywords:
      'plots for sale in Ponmar, plots in Ponmar Chennai, residential plots Ponmar, premium plots Ponmar, gated community plots Ponmar, plots near OMR Chennai',
  },

  'crossway-springs': {
    title: 'Crossway Springs Plots in Ponmar, Chennai - Chain and Links',
    description:
      'Explore Crossway Springs premium plots in Ponmar, Chennai. Discover 513–3428 sq.ft. plots, planned infrastructure, green spaces and excellent connectivity.',
    keywords:
      'Crossway Springs, Crossway Springs Ponmar, plots in Ponmar, plots for sale Ponmar, residential plots Ponmar, residential plots Chennai, plots near Medavakkam',
  },
}

// Builds BreadcrumbList schema
function buildBreadcrumbSchema(breadcrumbs = []) {
  if (!breadcrumbs.length) return null

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: crumb.name,
      ...(crumb.path ? { item: `${SITE_URL}${crumb.path}` } : {}),
    })),
  }
}

function ProjectSEO({ project, breadcrumbs }) {
  const slug = project.slug

  const seo = projectSEO[slug] || {
    title: `${project.name} - Premium Plots in Chennai - Chain and Links`,
    description:
      project.description ||
      `Explore ${project.name}, a premium residential development by Chain and Links in Chennai.`,
    keywords: `${project.name}, plots in Chennai, residential plots Chennai, Chain and Links`,
  }

  const url = `${SITE_URL}/${slug}`
  const ogImage = `${SITE_URL}${project.DesktopbannerImage || DEFAULT_OG_IMAGE}`
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs)

  return (
    <Helmet>
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="robots" content="index, follow" />

      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Project Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'RealEstateListing',
          name: project.name,
          description: seo.description,
          url,
          image: [ogImage],
          address: {
            '@type': 'PostalAddress',
            addressLocality: project.location,
            addressRegion: 'Tamil Nadu',
            addressCountry: 'IN',
          },
          provider: {
            '@type': 'Organization',
            name: SITE_NAME,
            url: SITE_URL,
          },
        })}
      </script>

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  )
}

export default function SEO({ page, project, breadcrumbs }) {
  if (project) {
    return (
      <ProjectSEO
        project={project}
        breadcrumbs={breadcrumbs}
      />
    )
  }

  const seo = pageSEO[page] || defaultSEO
  const url = seo.path ? `${SITE_URL}${seo.path}` : undefined
  const breadcrumbSchema = buildBreadcrumbSchema(breadcrumbs)

  return (
    <Helmet>
      <title>{seo.title}</title>

      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seo.keywords} />
      <meta
        name="robots"
        content={seo.noindex ? 'noindex, follow' : 'index, follow'}
      />

      {url && <link rel="canonical" href={url} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />

      {url && <meta property="og:url" content={url} />}

      <meta
        property="og:image"
        content={`${SITE_URL}${DEFAULT_OG_IMAGE}`}
      />

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />

      <meta
        name="twitter:image"
        content={`${SITE_URL}${DEFAULT_OG_IMAGE}`}
      />

      {/* WebPage Schema */}
      {url && (
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: seo.title,
            description: seo.description,
            url,
            isPartOf: {
              '@type': 'WebSite',
              name: SITE_NAME,
              url: SITE_URL,
            },
          })}
        </script>
      )}

      {/* Breadcrumb Schema */}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  )
}