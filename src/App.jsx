import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Projects from './pages/Projects.jsx'
import ProjectDetailPage from './pages/ProjectDetailPage.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import VaramThankYou from './pages/VaramThankYou.jsx'
import AmberThankYou from './pages/AmberThankYou.jsx'
import CrosswayThankYou from './pages/crosswayThankYou.jsx'
import HomeThankYou from './pages/HomeThankYou.jsx'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />

        {/* Direct Project URLs */}
        <Route
          path="/varam"
          element={<ProjectDetailPage slug="varam" />}
        />

        <Route
          path="/amber"
          element={<ProjectDetailPage slug="amber" />}
        />

        <Route
          path="/crossway-springs"
          element={<ProjectDetailPage slug="crossway-springs" />}
        />

        {/* Thank You Pages */}
        <Route
          path="/varam/thank-you"
          element={<VaramThankYou />}
        />

        <Route
          path="/amber/thank-you"
          element={<AmberThankYou />}
        />

        <Route
          path="/crossway-springs/thank-you"
          element={<CrosswayThankYou />}
        />

        <Route
          path="/home/thank-you"
          element={<HomeThankYou />}
        />

        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  )
}