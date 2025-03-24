import { Metadata } from "next"
import Pricing from "@/components/Pricing"
import Process from "@/components/Process"
import FAQ from "@/components/FAQ"

export const metadata: Metadata = {
  title: "料金プラン | Bee",
  description: "Beeの料金プランをご紹介。あなたのビジネス規模に合わせた最適なプランをお選びいただけます。30日間の無料トライアルを今すぐお試しください。",
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="py-20 px-4 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">料金プラン</h1>
          <p className="text-xl">あなたのビジネス規模に合わせた柔軟なプランをご用意</p>
        </div>
      </div>
      
      <Pricing />
      <Process />
      <FAQ />
    </div>
  )
} 