export default function Process() {
  const steps = [
    {
      title: "無料デモ・ニーズヒアリング",
      description: "Beeの機能をご紹介し、あなたのビジネスニーズをお伺いします。",
    },
    {
      title: "AIチャット返信機能の導入",
      description: "まずは効果を実感しやすいAIチャット返信機能から始めましょう。",
    },
    {
      title: "メールマーケティング機能の活用",
      description: "過去の顧客へのアプローチで、リピート率向上を目指します。",
    },
    {
      title: "為替連動価格調整の設定",
      description: "為替変動に応じた自動価格調整で、利益を安定させます。",
    },
    {
      title: "税務・在庫管理の統合",
      description: "売上、経費、仕入れを一元管理し、正確な利益把握を実現します。",
    },
    {
      title: "継続的なサポートと機能拡張",
      description: "新機能の追加や、よりスケーラブルな仕組みづくりをサポートします。",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg mb-8">
          Beeは段階的に機能を拡張していきます。以下のステップで、あなたのeBayビジネスを効率化します。
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-800">Beeの導入プロセス</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {steps.map((step, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full -left-4 ring-4 ring-white text-white">
                {index + 1}
              </span>
              <h3 className="font-medium leading-tight text-orange-700">{step.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-center text-lg">
          Beeは、AIチャット返信やメールマーケティングなど、すぐに効果を実感できる機能から段階的に導入可能です。
          あなたのペースに合わせて、eBayビジネスの効率化と収益向上を実現しましょう。
        </p>
      </div>
    </section>
  )
}

