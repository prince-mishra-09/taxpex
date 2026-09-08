import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { toolsData } from '../data/toolsData'
import GstCalculator from '../components/calculators/GstCalculator'

export default function ToolDetail() {
  const { slug } = useParams()
  
  // Find tool metadata
  const tool = toolsData.find(t => t.slug === slug)

  if (!tool) {
    return <Navigate to="/tools" replace />
  }

  return (
    <div style={{ paddingTop: '80px', backgroundColor: 'var(--c-off-white)', minHeight: '100vh' }}>
      {tool.status === 'coming-soon' ? (
        <div className="container" style={{ textAlign: 'center', padding: '100px 0' }}>
          <h2>{tool.name}</h2>
          <p style={{ color: 'var(--c-muted-text)', marginTop: '16px' }}>This premium tool is currently under development.</p>
          <Link to="/tools" style={{ display: 'inline-block', marginTop: '32px', background: 'var(--c-primary-blue)', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none' }}>
            Explore other tools
          </Link>
        </div>
      ) : (
        // Dynamic Calculator Router
        <>
          {tool.id === 'gst-calculator' && <GstCalculator toolData={tool} />}
          {/* Add more calculators here as they are built */}
        </>
      )}
    </div>
  )
}
