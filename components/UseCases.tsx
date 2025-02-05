export default function UseCases() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">活用シーン</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">営業管理</h3>
            <p>顧客データの一元管理と営業活動の効率化で、成約率を向上させます。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">プロジェクト管理</h3>
            <p>タスクの進捗や資源配分を最適化し、プロジェクトの成功率を高めます。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">在庫管理</h3>
            <p>需要予測と連動した在庫最適化で、コスト削減と欠品防止を実現します。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

