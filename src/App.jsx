import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ThreatTicker from './components/ThreatTicker'
import Features from './components/Features'
import HowItWorks from './components/HowItWorks'
import Pricing from './components/Pricing'
import TrustAndFooter from './components/TrustAndFooter'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ThreatTicker />
      <Features />
      <HowItWorks />
      <Pricing />
      <TrustAndFooter />
    </div>
  )
}

export default App
