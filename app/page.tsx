import Hero from "@/components/Hero"
import Concept from "@/components/Concept"
import Problems from "@/components/Problems"
import Features from "@/components/Features"
import Benefits from "@/components/Benefits"
import CaseStudies from "@/components/CaseStudies"
import Testimonials from "@/components/Testimonials"
import Pricing from "@/components/Pricing"
import FAQ from "@/components/FAQ"
import Support from "@/components/Support"
import Process from "@/components/Process"
import FinalCTA from "@/components/FinalCTA"
import Footer from "@/components/Footer"
import Roadmap from "@/components/Roadmap"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Hero />
      <Concept />
      {/* <Problems /> */}
      {/* <Features /> */}
      {/* <Benefits /> */}
      {/* <CaseStudies /> */}
      <Testimonials />
      {/* <Pricing /> */}
      {/* <Roadmap /> */}
      <FAQ />
      {/* <Support /> */}
      <Process />
      <FinalCTA />
      {/* <Footer /> */}
    </div>
  )
}

