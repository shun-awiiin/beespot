import { Metadata } from "next"
import Contact from "@/components/Contact"

export const metadata: Metadata = {
  title: "お問い合わせ | Bee",
  description: "Beeに関するお問い合わせはこちらから。製品に関するご質問、導入のご相談など、お気軽にお問い合わせください。",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <div className="py-20 px-4 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-500">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">お問い合わせ</h1>
          <p className="text-xl">ご質問、お見積り、導入サポートなど、お気軽にお問い合わせください</p>
        </div>
      </div>
      
      <Contact />
    </div>
  )
} 