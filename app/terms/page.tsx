import { Metadata } from "next"
import PageHeader from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "利用規約 | Bee",
  description: "Beeのサービス利用規約です。サービスをご利用いただく前に必ずお読みください。",
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <PageHeader 
        title="利用規約"
        subtitle="Beeをご利用いただく際の規約です。ご利用前に必ずお読みください。"
      />
      
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-6">Beeサービス利用規約</h2>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">第1条（適用）</h3>
              <p className="text-gray-700 leading-relaxed">
                1. 本規約は、株式会社Bee（以下「当社」といいます）が提供するeBayセラー向け業務管理ツール「Bee」（以下「本サービス」といいます）の利用に関し、当社と利用者との間の権利義務関係を定めることを目的とし、利用者と当社との間の本サービスの利用に関わる一切の関係に適用されます。
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                2. 当社が本サービス上で掲載する本サービス利用に関するルール等も、本規約の一部を構成するものとします。
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">第2条（定義）</h3>
              <p className="text-gray-700 leading-relaxed">
                本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。
              </p>
              <ol className="list-decimal pl-5 mt-3 space-y-2 text-gray-700">
                <li>「利用者」とは、本サービスを利用する個人または法人をいいます。</li>
                <li>「コンテンツ」とは、テキスト、音声、音楽、画像、動画、ソフトウェア、プログラム、コードその他の情報をいいます。</li>
                <li>「利用者情報」とは、利用者の登録情報、本サービスの利用履歴、その他利用者が本サービスを利用する際に当社が収集する情報をいいます。</li>
              </ol>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">第3条（登録）</h3>
              <p className="text-gray-700 leading-relaxed">
                1. 本サービスの利用を希望する者（以下「登録希望者」といいます）は、本規約に同意した上で、当社の定める方法によって利用登録の申請を行うものとします。
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                2. 当社は、当社の基準に従い、登録希望者の登録の可否を判断し、登録を認める場合には、その旨を登録希望者に通知します。
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                3. 前項の通知により、登録希望者と当社の間に、本規約を内容とする本サービスの利用契約が成立するものとします。
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">第4条（料金および支払方法）</h3>
              <p className="text-gray-700 leading-relaxed">
                1. 利用者は、本サービスの有料機能を利用する場合、当社が別途定める料金プランに従い、利用料金を支払うものとします。
              </p>
              <p className="text-gray-700 leading-relaxed mt-3">
                2. 利用者は、利用料金を当社が指定する支払方法により支払うものとします。
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">第5条（禁止事項）</h3>
              <p className="text-gray-700 leading-relaxed">
                利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。
              </p>
              <ol className="list-decimal pl-5 mt-3 space-y-2 text-gray-700">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社または第三者の知的財産権、肖像権、プライバシー、名誉、その他の権利または利益を侵害する行為</li>
                <li>本サービスのサーバーまたはネットワークの機能を破壊したり、妨害したりする行為</li>
                <li>当社のサービスの運営を妨害する行為</li>
                <li>不正アクセスをし、またはこれを試みる行為</li>
                <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
                <li>他の利用者に成りすます行為</li>
                <li>当社のサービスに関連して、反社会的勢力に対して直接または間接に利益を供与する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ol>
            </section>

            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">第15条（お問い合わせ窓口）</h3>
              <p className="text-gray-700 leading-relaxed">
                本規約に関するお問い合わせは、下記の窓口までお願いいたします。
              </p>
              <div className="mt-3 text-gray-700">
                <p>株式会社Bee</p>
                <p>〒101-0041</p>
                <p>東京都千代田区神田須田町1-7-8 VORT秋葉原Ⅳ 2F</p>
                <p>Email: info@bee-group.net</p>
              </div>
            </section>
            
            <section>
              <p className="text-gray-700 leading-relaxed text-right">
                2025年2月17日 制定
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
} 