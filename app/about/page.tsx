import { Metadata } from "next"
import AboutUs from "@/components/AboutUs"
import Team from "@/components/Team"
import Office from "@/components/Office"

export const metadata: Metadata = {
  title: "会社情報 | Bee",
  description: "Beeを運営する株式会社Beeの企業理念やチームメンバー、オフィス情報をご紹介。eBayセラーの業務効率化を支援する私たちのミッションについてご覧ください。",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="py-20 px-4 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">会社情報</h1>
          <p className="text-xl">私たちのミッションと、それを実現するチーム</p>
        </div>
      </div>
      
      <AboutUs />
      {/* <Team /> */}
      {/* <Office /> */}
    </div>
  )
} 