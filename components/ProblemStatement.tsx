export default function ProblemStatement() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">あなたが直面している課題</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">非効率的なワークフロー</h3>
            <p>複雑で時間のかかる業務プロセスが生産性を低下させています。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">データの分断</h3>
            <p>部門間でのデータ共有が困難で、重要な情報が失われています。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">人的ミス</h3>
            <p>手動での作業が多く、ミスが発生するリスクが高くなっています。</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">スケーラビリティの欠如</h3>
            <p>ビジネスの成長に合わせてシステムを拡張することが困難です。</p>
          </div>
        </div>
      </div>
    </section>
  )
}

