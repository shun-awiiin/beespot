import Image from "next/image"

export default function Team() {
  const teamMembers = [
    {
      name: "山崎 美咲",
      position: "代表取締役CEO",
      bio: "",
      imageSrc: "/images/team/ceo.jpg"
    },
    // {
    //   name: "佐藤 花子",
    //   position: "最高技術責任者 (CTO)",
    //   bio: "AIとECテクノロジーの専門家。国内大手IT企業でのシステム開発リーダー経験を活かし、Beeの中核技術を設計・開発。",
    //   imageSrc: "/images/team/cto.jpg"
    // },
    // {
    //   name: "鈴木 一郎",
    //   position: "最高製品責任者 (CPO)",
    //   bio: "10年以上のUI/UXデザイン経験を持つプロダクトスペシャリスト。ユーザー視点を徹底的に追求したインターフェース設計を担当。",
    //   imageSrc: "/images/team/cpo.jpg"
    // },
    // {
    //   name: "高橋 誠",
    //   position: "最高マーケティング責任者 (CMO)",
    //   bio: "複数のスタートアップでマーケティングリーダーを務めた経験を持つ。データドリブンなアプローチでBeeのブランド構築を推進。",
    //   imageSrc: "/images/team/cmo.jpg"
    // },
    // {
    //   name: "田中 美和",
    //   position: "カスタマーサクセス部長",
    //   bio: "元eBayパワーセラー。自身の経験を活かし、ユーザーが最大限の効果を得られるようサポート体制を構築。顧客満足度向上に貢献。",
    //   imageSrc: "/images/team/customer-success.jpg"
    // },
    // {
    //   name: "伊藤 健太",
    //   position: "AI開発リーダー",
    //   bio: "自然言語処理とディープラーニングの専門家。Beeの核となるAIチャット返信システムの開発を主導し、継続的な精度向上に取り組む。",
    //   imageSrc: "/images/team/ai-lead.jpg"
    // }
  ]
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-800">チームメンバー</h2>
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          私たちのチームは、テクノロジー、eBayビジネス、マーケティング、カスタマーサポートなど様々な専門分野のエキスパートで構成されています。
          多様なバックグラウンドと経験を持つメンバーが、お客様のビジネス成功に向けて日々取り組んでいます。
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-orange-200">
              <div className="relative h-64">
                {/* 実際の実装では適切な画像パスに置き換えてください */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-orange-600 opacity-80"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white text-lg font-bold">[写真]</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-orange-700">{member.name}</h3>
                <p className="text-orange-500 mb-4">{member.position}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-orange-700 mb-6">一緒に働きませんか？</h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            Beeは常に新しい仲間を募集しています。eBayセラーの業務効率化と成功を支援する私たちのミッションに共感いただける方は、ぜひご連絡ください。
          </p>
          <a
            href="/careers"
            className="inline-block px-8 py-3 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600 transition-colors duration-300"
          >
            採用情報を見る
          </a>
        </div>
      </div>
    </section>
  )
} 