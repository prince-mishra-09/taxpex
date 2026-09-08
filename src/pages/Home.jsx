import Hero from '../components/Hero'
import TrustBanner from '../components/TrustBanner'
import FeaturedServices from '../components/FeaturedServices'
import AudienceSelector from '../components/AudienceSelector'
import Workflow from '../components/Workflow'
import WhyTaxpex from '../components/WhyTaxpex'
import IndustriesMarquee from '../components/IndustriesMarquee'
import ConversionCTA from '../components/ConversionCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBanner />
      <FeaturedServices />
      <AudienceSelector />
      <Workflow />
      <WhyTaxpex />
      <IndustriesMarquee />
      <ConversionCTA />
    </>
  )
}
