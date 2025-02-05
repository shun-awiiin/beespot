export default function Concept() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-100 to-orange-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">eBayビジネスを、もっとスマートに。</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Beeは、AIを活用した問い合わせ対応から為替連動価格調整、税務管理まで、
          eBayセラーの業務を包括的に効率化する総合ツールです。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">AI駆動のチャット返信</h3>
            <p>
              ChatGPTを活用し、過去の履歴を参照。ワンクリックで適切な返信を自動生成し、言語の壁を越えたコミュニケーションを実現。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">為替連動価格調整</h3>
            <p>
              為替レートの変動に合わせて出品価格を自動修正。円安/円高の影響を受けやすい輸出ビジネスでの為替差損を防止。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">効果的なDM配信</h3>
            <p>
              過去の取引履歴からバイヤーを抽出し、AIで最適化されたメッセージを一括送信。セール案内やリピート購入の促進に活用可能。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">包括的な税務管理</h3>
            <p>
              売上、経費、仕入れコストを一元管理。インボイス制度や税務調査に備えた正確な取引履歴・帳簿の自動作成をサポート。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">スマホアプリ対応</h3>
            <p>
              スマホアプリでもBeeを使えることによって外出中でも寝転んでいるときでもビジネスを管理できます。
              ここにAIを関連させることができるので煩雑な顧客対応を隙間時間で解消
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">リピーターや個別対応したいバイヤーリストを作成可能</h3>
            <p>
              バイヤー情報を整理したいと思ったことは一度はあるかと思います。
              あとでしようと思ったことをフラグをつけることで簡単に管理ができ、それを使ってメッセージを送ることもできます。
            </p>
          </div>

        </div>
      </div>
    </section>
  )
}

