import { CheckCircle } from "lucide-react"

export default function Features() {
  const features = [
    {
      title: "AIチャット返信機能",
      description:
        "過去の問い合わせ履歴を参照し、ChatGPTなどのAIを活用して適切な返信を自動生成。追加プロンプトにも対応し、より狙い通りの返信が可能。",
    },
    {
      title: "メールマーケティング機能",
      description:
        "過去の取引履歴からバイヤーを抽出し、一括でDMを送信。セール案内やクーポン送付など、様々な販促活動に活用可能。",
    },
    {
      title: "為替連動価格調整",
      description:
        "為替レートの変動に合わせて出品価格を自動修正。円安/円高の影響を受けやすい輸出ビジネスでの為替差損を防止。",
    },
    {
      title: "税務・商品管理",
      description:
        "売上、経費、仕入れコストを一括管理し、利益率や損益を可視化。インボイス制度や税務調査に備えた正確な取引履歴・帳簿管理が可能。",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-800">Beeの主要機能</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200"
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center text-orange-700">
                <CheckCircle className="text-orange-500 mr-2 flex-shrink-0" />
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

