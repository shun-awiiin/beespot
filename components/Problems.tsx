export default function Problems() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">こんな悩み、ありませんか？</h2>
        <p className="text-lg text-gray-600 mb-8 text-center">
          eBayでのビジネス拡大に伴い、多くのセラーが直面する課題。Beeはこれらの問題を解決します。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">言語の壁による対応の遅れ</h3>
            <p>海外バイヤーとの英語でのコミュニケーションに時間がかかり、顧客満足度が低下。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">為替変動によるリスク</h3>
            <p>円安/円高の影響で利益が不安定。価格調整に手間がかかり、為替差損のリスクも。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">効果的な販促の難しさ</h3>
            <p>リピート購入を促すための効果的なフォローアップ施策が打てず、売上が伸び悩み。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">複雑な税務管理</h3>
            <p>売上・経費の管理が煩雑で、インボイス制度対応や税務調査への不安が大きい。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

