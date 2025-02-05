export default function Overview() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">ソフトウェアの概要</h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          当社のソフトウェアは、複雑な業務プロセスを簡素化し、チームの生産性を飛躍的に向上させます。
          人工知能と最新のテクノロジーを駆使して、あなたのビジネスに革命をもたらします。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">AI駆動</h3>
            <p>最新の人工知能技術を活用し、スマートな意思決定をサポート</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">クラウドベース</h3>
            <p>どこからでもアクセス可能で、常に最新の状態を維持</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">カスタマイズ可能</h3>
            <p>あなたのビジネスニーズに合わせて柔軟にカスタマイズ</p>
          </div>
        </div>
      </div>
    </section>
  )
}

