export default function Office() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-800">私たちのオフィス</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          東京・大手町の中心に位置する私たちのオフィスは、創造性とコラボレーションを促進する空間として設計されています。
          最新のテクノロジーと快適な環境で、革新的なソリューション開発に取り組んでいます。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-200 h-64 relative">
              {/* 実際の実装では適切な画像を配置してください */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-800 text-lg font-bold">[オフィス外観の写真]</span>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-600">大手町ビル外観 - 地下鉄大手町駅から徒歩3分</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-200 h-64 relative">
              {/* 実際の実装では適切な画像を配置してください */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-800 text-lg font-bold">[オフィス内部の写真]</span>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-600">オープンスペースのワークエリア - コラボレーションを促進</p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-200 h-48 relative">
              {/* 実際の実装では適切な画像を配置してください */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-800 text-lg font-bold">[会議室の写真]</span>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-600">ミーティングスペース</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-200 h-48 relative">
              {/* 実際の実装では適切な画像を配置してください */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-800 text-lg font-bold">[リラックススペースの写真]</span>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-600">リフレッシュエリア</p>
            </div>
          </div>
          
          <div className="rounded-lg overflow-hidden shadow-lg">
            <div className="bg-gray-200 h-48 relative">
              {/* 実際の実装では適切な画像を配置してください */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-gray-800 text-lg font-bold">[開発エリアの写真]</span>
              </div>
            </div>
            <div className="p-4 bg-white">
              <p className="text-gray-600">開発チームワークスペース</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-orange-700 mb-6 text-center">アクセス</h3>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-3xl mx-auto">
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2">住所</h4>
              <p>〒100-0004 東京都千代田区大手町1-1-1 大手町ビル 10階</p>
            </div>
            
            <div className="mb-6">
              <h4 className="font-semibold text-lg mb-2">交通アクセス</h4>
              <ul className="list-disc pl-5 space-y-2">
                <li>東京メトロ 大手町駅 C4出口より徒歩3分</li>
                <li>JR 東京駅 丸の内北口より徒歩8分</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">地図</h4>
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <p>Google Map等を埋め込む</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 