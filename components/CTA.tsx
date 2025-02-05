import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="bg-primary text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">今すぐ始めましょう</h2>
        <p className="text-xl mb-8">30日間の無料トライアルで、ソフトウェアの力を体験してください。</p>
        <Button size="lg" variant="secondary">
          無料トライアルを開始
        </Button>
      </div>
    </section>
  )
}

