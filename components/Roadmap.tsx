export default function Roadmap() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">今後の開発ロードマップ</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">スマートフォンアプリの開発</h3>
            <p>iOS/AndroidアプリでAIチャット返信機能を使用可能に。外出先でも素早く対応できる環境を整備します。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">仕入れ価格の自動連動</h3>
            <p>連携し、仕入先URLや価格を自動取得。Beeでの一元管理を可能にします。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">詳細な税務管理ダッシュボード</h3>
            <p>より詳細な収支分析、税務レポート生成機能を追加。インボイス制度への対応も強化します。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI機能の拡張</h3>
            <p>商品説明の自動生成、価格戦略の提案など、AIを活用した新機能を順次追加予定です。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

