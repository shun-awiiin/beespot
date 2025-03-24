import Image from "next/image"

export default function AboutUs() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-800">会社概要</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-orange-700 mb-4">Beeが目指すもの</h3>
            <p className="text-lg mb-4">
              私たちは、eBayセラーの業務をAIと最新テクノロジーで効率化し、「時間・ストレス・生産性」の解放を実現します。
            </p>
            <p className="text-lg mb-4">
              グローバルEC市場において、日本の商品の魅力を世界に届けるセラーの皆様が、
              言語の壁や為替変動、複雑な税務管理などのハードルを越えて、
              ビジネスに集中できる環境を創造すること。それが私たちの使命です。
            </p>
            <p className="text-lg">
              「小さな時間の解放が、チームの成果を最大化する」という理念のもと、
              革新的なソリューションを提供し続けます。
            </p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 opacity-75 blur-xl rounded-full"></div>
            <div className="relative">
              <Image
                src="https://i.postimg.cc/Qxb19bXF/nasa-Q1p7bh3-SHj8-unsplash.jpg" 
                alt="Beeのビジョン"
                width={600}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200 mb-16">
          <h3 className="text-2xl font-bold text-orange-700 mb-8 text-center">企業情報</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <dl className="space-y-6">
                <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                  <dt className="font-semibold text-gray-700">会社名</dt>
                  <dd className="col-span-2">株式会社Bee</dd>
                </div>
                
                <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                  <dt className="font-semibold text-gray-700">設立</dt>
                  <dd className="col-span-2">2025年2月17日</dd>
                </div>
                
                <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                  <dt className="font-semibold text-gray-700">資本金</dt>
                  <dd className="col-span-2">50万円</dd>
                </div>
                
                <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                  <dt className="font-semibold text-gray-700">代表取締役</dt>
                  <dd className="col-span-2">山崎美咲</dd>
                </div>
              </dl>
            </div>
            
            <div>
              <dl className="space-y-6">
                <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                  <dt className="font-semibold text-gray-700">所在地</dt>
                  <dd className="col-span-2">
                    〒101-0041<br />
                    東京都千代田区神田須田町1-7-8<br />
                    VORT秋葉原Ⅳ 2F 
                  </dd>
                </div>
                
                <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                  <dt className="font-semibold text-gray-700">事業内容</dt>
                  <dd className="col-span-2">
                    eBayセラー向けAI管理ツール「Bee」の開発・提供<br />
                    グローバルEC運営コンサルティング
                  </dd>
                </div>
                
                <div className="grid grid-cols-3 gap-4 border-b border-gray-100 pb-3">
                  <dt className="font-semibold text-gray-700">従業員数</dt>
                  <dd className="col-span-2">1名（2025年2月現在）</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
        
        {/* <div className="mb-16">
          <h3 className="text-2xl font-bold text-orange-700 mb-8 text-center">沿革</h3>
          
          <div className="relative border-l-4 border-orange-300 ml-6">
            <div className="mb-10 ml-6">
              <div className="flex flex-row flex-nowrap items-center">
                <span className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full text-white -ml-11 mr-3">
                  1
                </span>
                <h3 className="text-xl font-semibold text-gray-800">2020年4月</h3>
              </div>
              <p className="mt-2 text-gray-600">株式会社Bee設立。eBayセラー向けのサービス開発を開始。</p>
            </div>
            
            <div className="mb-10 ml-6">
              <div className="flex flex-row flex-nowrap items-center">
                <span className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full text-white -ml-11 mr-3">
                  2
                </span>
                <h3 className="text-xl font-semibold text-gray-800">2021年2月</h3>
              </div>
              <p className="mt-2 text-gray-600">BeeのBeta版をリリース。初期ユーザーからのフィードバックを収集。</p>
            </div>
            
            <div className="mb-10 ml-6">
              <div className="flex flex-row flex-nowrap items-center">
                <span className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full text-white -ml-11 mr-3">
                  3
                </span>
                <h3 className="text-xl font-semibold text-gray-800">2021年9月</h3>
              </div>
              <p className="mt-2 text-gray-600">正式版サービスをリリース。AIチャット返信機能が高い評価を獲得。</p>
            </div>
            
            <div className="mb-10 ml-6">
              <div className="flex flex-row flex-nowrap items-center">
                <span className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full text-white -ml-11 mr-3">
                  4
                </span>
                <h3 className="text-xl font-semibold text-gray-800">2022年5月</h3>
              </div>
              <p className="mt-2 text-gray-600">シリーズAで3億円の資金調達に成功。システム強化と機能拡充を加速。</p>
            </div>
            
            <div className="mb-10 ml-6">
              <div className="flex flex-row flex-nowrap items-center">
                <span className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full text-white -ml-11 mr-3">
                  5
                </span>
                <h3 className="text-xl font-semibold text-gray-800">2022年11月</h3>
              </div>
              <p className="mt-2 text-gray-600">為替連動価格調整機能をリリース。ユーザー数が前年比300%に成長。</p>
            </div>
            
            <div className="ml-6">
              <div className="flex flex-row flex-nowrap items-center">
                <span className="flex items-center justify-center w-10 h-10 bg-orange-500 rounded-full text-white -ml-11 mr-3">
                  6
                </span>
                <h3 className="text-xl font-semibold text-gray-800">2023年4月</h3>
              </div>
              <p className="mt-2 text-gray-600">新たなAI技術を統合したプラットフォームへとアップグレード。月間アクティブユーザーが1,000社を突破。</p>
            </div>
          </div>
        </div> */}
        
        <div>
          <h3 className="text-2xl font-bold text-orange-700 mb-8 text-center">私たちの強み</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-orange-200 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center text-orange-700">技術力</h4>
              <p className="text-center text-gray-600">
                最新のAI技術とeBay APIの高度な連携により、他にはない独自の機能を実現。継続的な研究開発で常に最先端を追求します。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-orange-200 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center text-orange-700">専門知識</h4>
              <p className="text-center text-gray-600">
                eBay運営経験豊富なスタッフが多数在籍。実際のセラー視点から生まれた機能と、現場で役立つサポートを提供します。
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-orange-200 transform hover:-translate-y-1">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 3l-6 6m0 0V4m0 5h5M5 3a2 2 0 00-2 2v1c0 8.284 6.716 15 15 15h1a2 2 0 002-2v-3.28a1 1 0 00-.684-.948l-4.493-1.498a1 1 0 00-1.21.502l-1.13 2.257a11.042 11.042 0 01-5.516-5.517l2.257-1.128a1 1 0 00.502-1.21L9.228 3.683A1 1 0 008.279 3H5z" />
                </svg>
              </div>
              <h4 className="text-xl font-semibold mb-2 text-center text-orange-700">サポート力</h4>
              <p className="text-center text-gray-600">
                導入から運用まで、手厚いサポート体制を構築。ユーザーの声を積極的に取り入れた継続的な改善を行っています。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 