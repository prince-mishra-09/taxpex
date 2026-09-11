import { useParams, Navigate, Link } from 'react-router-dom'
import { toolsData } from '../data/toolsData'
import GstCalculator from '../components/calculators/GstCalculator'
import IncomeTaxCalculator from '../components/calculators/IncomeTaxCalculator'
import EmiCalculator from '../components/calculators/EmiCalculator'
import SipCalculator from '../components/calculators/SipCalculator'
import InHandSalaryCalculator from '../components/calculators/InHandSalaryCalculator'
import HraCalculator from '../components/calculators/HraCalculator'
import HsnSacFinder from '../components/calculators/HsnSacFinder'
import CagrCalculator from '../components/calculators/CagrCalculator'
import StartupValuationCalculator from '../components/calculators/StartupValuationCalculator'

export default function ToolDetail() {
  const { slug } = useParams()
  
  // Find tool metadata
  const tool = toolsData.find(t => t.slug === slug)

  if (!tool) {
    return <Navigate to="/tools" replace />
  }

  return (
    <div style={{ backgroundColor: 'var(--c-off-white)', minHeight: '100vh' }}>
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
          {tool.id === 'income-tax-calculator' && <IncomeTaxCalculator toolData={tool} />}
          {tool.id === 'emi-calculator' && <EmiCalculator toolData={tool} />}
          {tool.id === 'sip-calculator' && <SipCalculator toolData={tool} />}
          {tool.id === 'in-hand-salary' && <InHandSalaryCalculator toolData={tool} />}
          {tool.id === 'hra-calculator' && <HraCalculator toolData={tool} />}
          {tool.id === 'hsn-sac-finder' && <HsnSacFinder toolData={tool} />}
          {tool.id === 'cagr-calculator' && <CagrCalculator toolData={tool} />}
          {tool.id === 'startup-valuation' && <StartupValuationCalculator toolData={tool} />}
        </>
      )}
    </div>
  )
}
