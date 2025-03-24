import Hero from "@/components/Hero"
import Concept from "@/components/Concept"
import Benefits from "@/components/Benefits"
import EmphasizedFeatures from "@/components/EmphasizedFeatures"
import Testimonials from "@/components/Testimonials"
import FinalCTA from "@/components/FinalCTA"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <Hero />
      <EmphasizedFeatures />
      <Concept />
      <Benefits />
      {/* <Testimonials /> */}
      <FinalCTA />
    </div>
  )
}

