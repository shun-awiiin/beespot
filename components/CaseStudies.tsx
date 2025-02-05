export default function CaseStudies() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-800">導入企業の成功事例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">グローバルファッション株式会社</h3>
            <p className="mb-4">アパレル輸出 / 月間1000件以上の取引</p>
            <p>
              AIチャット返信機能により、海外バイヤーとのコミュニケーションが円滑に。顧客満足度が30%向上し、問い合わせ対応時間を50%削減。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">テックガジェット商事</h3>
            <p className="mb-4">電子機器販売 / 年間売上5億円</p>
            <p>為替連動価格調整機能で、急激な円安にも迅速に対応。利益率を安定させつつ、為替差損を平均70%削減。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">ヴィンテージトレジャーズ</h3>
            <p className="mb-4">アンティーク販売 / 個人事業主</p>
            <p>
              メールマーケティング機能を活用し、過去の顧客に再入荷情報を送信。リピート率が25%向上し、売上が前年比40%増加。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">フューチャーエレクトロニクス</h3>
            <p className="mb-4">家電輸出 / 従業員50名</p>
            <p>
              税務管理機能により、複雑な国際取引の会計処理が効率化。税理士との連携がスムーズになり、年間の経理工数を30%削減。
            </p>
          </div>
        </div>
        <p className="mt-8 text-center text-lg">
          これらの事例は、BeeがどのようにeBayセラーの業務を改善し、収益を向上させるかを示しています。
          AIチャット返信、為替連動価格調整、効果的なマーケティング、そして包括的な税務管理など、
          Beeの多様な機能が、様々な規模や業種のビジネスで成果を上げています。
        </p>
      </div>
    </section>
  )
}

