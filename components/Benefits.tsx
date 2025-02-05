export default function Benefits() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-800">Bee導入のメリット</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">AI駆動の効率化</h3>
            <p>
              ChatGPTなどの最新AI技術を活用し、問い合わせ対応や販促メール作成を自動化。人間らしい丁寧な対応を維持しながら、作業時間を大幅に削減。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">為替リスクの軽減</h3>
            <p>
              為替レートの変動に連動して出品価格を自動調整。円安/円高の影響を受けやすい輸出ビジネスでの予期せぬ損失を防ぎ、安定した利益確保をサポート。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">包括的な経営管理</h3>
            <p>
              売上、経費、仕入れコストを一元管理し、リアルタイムで利益状況を把握。インボイス制度対応や税務調査への備えも万全に。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">将来を見据えた拡張性</h3>
            <p>
              スマホアプリ対応、仕入れ価格の自動連動、詳細な税務管理ダッシュボードなど、今後も継続的な機能拡張を予定。ビジネスの成長に合わせて活用可能。
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

