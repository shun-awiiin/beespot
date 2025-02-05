import { PhoneCall, Mail, MessageCircle, MessageSquare } from "lucide-react"

export default function Support() {
  return (
    <section className="bg-gradient-to-b from-orange-50 to-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-800">AI駆動の充実サポート体制</h2>
        <p className="text-center text-lg mb-8">
          Beeは、AIチャットボット、人間のエキスパート、そして包括的なナレッジベースを組み合わせた
          マルチチャネルサポートを提供します。導入からスケーリングまで、あなたのeBayビジネスを全面的にサポートします。
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200 text-center">
            <PhoneCall className="mx-auto mb-4 text-orange-500" size={40} />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">電話サポート</h3>
            <p>平日9:00-18:00</p>
            <p className="mt-2 text-sm text-gray-600">AI機能や為替連動の詳細サポート</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200 text-center">
            <Mail className="mx-auto mb-4 text-orange-500" size={40} />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">メールサポート</h3>
            <p>24時間365日受付</p>
            <p className="mt-2 text-sm text-gray-600">税務・在庫管理の質問に対応</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200 text-center">
            <MessageCircle className="mx-auto mb-4 text-orange-500" size={40} />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">チャットサポート</h3>
            <p>平日9:00-22:00</p>
            <p className="mt-2 text-sm text-gray-600">メールマーケティングのアドバイス</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200 text-center">
            <MessageSquare className="mx-auto mb-4 text-orange-500" size={40} />
            <h3 className="text-xl font-semibold mb-2 text-orange-700">AIチャットボット</h3>
            <p>24時間365日対応</p>
            <p className="mt-2 text-sm text-gray-600">即時回答で素早く解決</p>
          </div>
        </div>
        <p className="mt-8 text-center text-gray-600">
          Beeは常に進化し続けています。定期的なウェビナーやユーザー会の開催、
          最新のAI技術やeBayの動向に関する情報提供など、あなたのビジネス成長を継続的にサポートします。
        </p>
      </div>
    </section>
  )
}

