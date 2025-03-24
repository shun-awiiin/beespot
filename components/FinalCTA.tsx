import { Button } from "@/components/ui/button"

export default function FinalCTA() {
  const websiteUrl = "https://bee-marketing.xyz/#/"

  return (
    <section className="bg-gradient-to-r from-orange-400 to-orange-600 text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">今すぐ、あなたのeBayビジネスを次のレベルへ</h2>
        <p className="text-xl mb-8">
          無料トライアルで、AIチャット返信、為替連動価格調整、効率的な税務管理など、
          Beeの革新的な機能をお試しください。eBayビジネスの効率化と収益向上を実感しましょう。
        </p>
        <Button 
          size="lg" 
          asChild
          className="bg-white text-orange-600 hover:bg-orange-100 transition-colors duration-300 mr-4"
        >
          <a 
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            無料で始める
          </a>
        </Button>
        <p className="mt-6 text-sm opacity-75">
          
        </p>
      </div>
    </section>
  )
}

