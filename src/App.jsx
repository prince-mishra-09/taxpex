import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Services from './pages/Services'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="services/:slug" element={<div className="container" style={{paddingTop: '8rem'}}><h1>Service Details</h1></div>} />
        <Route path="tas" element={<div className="container" style={{paddingTop: '8rem'}}><h1>TAS Product</h1></div>} />
        <Route path="tools" element={<div className="container" style={{paddingTop: '8rem'}}><h1>Tools</h1></div>} />
        <Route path="insights" element={<div className="container" style={{paddingTop: '8rem'}}><h1>Insights</h1></div>} />
        <Route path="about" element={<div className="container" style={{paddingTop: '8rem'}}><h1>About</h1></div>} />
        <Route path="contact" element={<div className="container" style={{paddingTop: '8rem'}}><h1>Contact</h1></div>} />
        <Route path="*" element={<div className="container" style={{paddingTop: '8rem'}}><h1>404 Not Found</h1></div>} />
      </Route>
    </Routes>
  )
}

export default App
