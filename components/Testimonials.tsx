export default function Testimonials() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-800">お客様の声</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <p className="mb-4 text-gray-600 italic">
              「AIチャット返信機能のおかげで、海外バイヤーとのコミュニケーションが劇的に改善しました。返信時間が75%短縮され、顧客満足度も向上。英語に自信がなくても安心して対応できます。」
            </p>
            <p className="font-semibold text-orange-700">
              田中 美咲様 / グローバルファッション株式会社 カスタマーサポート部長
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <p className="mb-4 text-gray-600 italic">
              「為替連動の価格調整機能は、まさに救世主です。以前は為替変動に追いつけず、利益が不安定でしたが、今では自動で最適な価格設定が可能に。為替差損が激減し、安定した収益を確保できています。」
            </p>
            <p className="font-semibold text-orange-700">佐藤 健一様 / テックガジェット商事 代表取締役</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <p className="mb-4 text-gray-600 italic">
              「メールマーケティング機能で、過去の顧客へのアプローチが容易になりました。AIが生成する文面は自然で効果的。再購入率が30%向上し、売上増加に大きく貢献しています。」
            </p>
            <p className="font-semibold text-orange-700">鈴木 花子様 / ヴィンテージトレジャーズ オーナー</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <p className="mb-4 text-gray-600 italic">
              「税務管理機能により、複雑だった経理作業が大幅に効率化。インボイス制度への対応も安心です。可視化された利益率のダッシュボードは、経営判断に欠かせません。本当に助かっています。」
            </p>
            <p className="font-semibold text-orange-700">山田 太郎様 / フューチャーエレクトロニクス 経理部長</p>
          </div>
        </div>
      </div>
    </section>
  )
}

