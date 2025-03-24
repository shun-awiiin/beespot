import { Metadata } from "next"
import PageHeader from "@/components/PageHeader"
import Features from "@/components/Features"
import Problems from "@/components/Problems"
import CaseStudies from "@/components/CaseStudies"
import Support from "@/components/Support"
import Roadmap from "@/components/Roadmap"

export const metadata: Metadata = {
  title: "機能紹介 | Bee",
  description: "AIチャット返信、為替連動価格調整など、eBayセラー向けの革新的機能をご紹介。時間・ストレス・生産性の悩みを解決するBeeの多彩な機能をご覧ください。",
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <PageHeader 
        title="Beeの機能紹介"
        subtitle="AIと最新テクノロジーを駆使した、eBayセラー向けの多彩な機能"
      />
      
      <Problems />
      <Features />
      {/* <CaseStudies /> */}
      <Support />
      <Roadmap />
    </div>
  )
} 