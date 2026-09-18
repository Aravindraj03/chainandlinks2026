import { useEffect } from 'react'
import { useLocation, Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './Header/Header.jsx'
import Footer from './Footer/Footer.jsx'

const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'RealEstateAgent',
  name: 'Chain & Links',
  url: 'https://www.chainandlinks.com',
  logo: 'https://www.chainandlinks.com/images/Logo/chainlogo.png',
  image: 'https://www.chainandlinks.com/images/Banner/home-banner.jpeg',
  telephone: '+91-8438598947',
  email: 'Contact@chainandlinks.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'No.78/2 (138/2), L.B Road, Thiruvanmiyur',
    addressLocality: 'Chennai',
    addressRegion: 'Tamil Nadu',
    postalCode: '600041',
    addressCountry: 'IN',
  },
  areaServed: 'Chennai, Tamil Nadu',
  sameAs: [],
}

export default function Layout() {
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0 })
  }, [location.pathname])

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(ORG_SCHEMA)}</script>
      </Helmet>
      <Header />
      <main id="main-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
