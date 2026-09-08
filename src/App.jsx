import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'
import ServiceDetail from './pages/ServiceDetail'
import WhoWeServe from './pages/WhoWeServe'
import About from './pages/About'
import TasProduct from './pages/TasProduct'
import Tools from './pages/Tools'
import ToolDetail from './pages/ToolDetail'
import Contact from './pages/Contact'
import Security from './pages/Security'
import NotFound from './pages/NotFound'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="services/:slug" element={<ServiceDetail />} />
          <Route path="who-we-serve" element={<WhoWeServe />} />
          <Route path="about" element={<About />} />
          <Route path="tas" element={<TasProduct />} />
          <Route path="tools" element={<Tools />} />
          <Route path="tools/:slug" element={<ToolDetail />} />
          <Route path="contact" element={<Contact />} />
          <Route path="security" element={<Security />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
