import { Metadata } from "next"
import PageHeader from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "プライバシーポリシー | Bee",
  description: "Beeの個人情報保護方針をご案内します。当社のサービスをご利用される際の個人情報の取り扱いについてをご確認ください。",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <PageHeader 
        title="プライバシーポリシー"
        subtitle="お客様の個人情報保護に関する方針について"
      />
      
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-6">プライバシーポリシー</h2>
          
          <div className="space-y-8">
            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">1. 基本方針</h3>
              <p className="text-gray-700 leading-relaxed">
                株式会社Bee（以下「当社」といいます）は、個人情報の重要性を認識し、個人情報の保護に関する法律、その他の関係法令を遵守するとともに、本プライバシーポリシーを遵守することにより、お客様の個人情報の適切な取り扱いと保護に努めます。
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">2. 収集する個人情報の範囲</h3>
              <p className="text-gray-700 leading-relaxed">
                当社が収集する個人情報は、以下のとおりです。
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
                <li>氏名</li>
                <li>メールアドレス</li>
                <li>電話番号</li>
                <li>住所</li>
                <li>会社名</li>
                <li>部署名</li>
                <li>役職</li>
                <li>eBay関連情報</li>
                <li>支払い情報</li>
                <li>その他当社のサービス提供に必要な情報</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">3. 個人情報の利用目的</h3>
              <p className="text-gray-700 leading-relaxed">
                当社は、収集した個人情報を以下の目的で利用いたします。
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
                <li>サービスの提供・運営</li>
                <li>ユーザーサポート</li>
                <li>利用料金の請求</li>
                <li>お知らせやメールマガジンの配信</li>
                <li>サービスの改善・新サービスの開発</li>
                <li>マーケティング調査・分析</li>
                <li>不正アクセス、不正利用の防止</li>
                <li>その他上記に関連する目的</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">4. 個人情報の第三者提供</h3>
              <p className="text-gray-700 leading-relaxed">
                当社は、以下の場合を除き、お客様の個人情報を第三者に提供することはありません。
              </p>
              <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-700">
                <li>お客様の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体または財産の保護のために必要がある場合</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合</li>
              </ul>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">5. 個人情報の安全管理</h3>
              <p className="text-gray-700 leading-relaxed">
                当社は、個人情報の漏えい、滅失、毀損等を防止するため、必要かつ適切な安全管理措置を講じるとともに、従業員に対する教育・監督を行います。
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">6. 個人情報の開示・訂正・削除等</h3>
              <p className="text-gray-700 leading-relaxed">
                当社は、お客様から個人情報の開示、訂正、追加、削除、利用停止、消去、第三者提供の停止（以下「開示等」といいます）のご請求があった場合、本人確認の上、法令に基づき速やかに対応いたします。
              </p>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">7. お問い合わせ窓口</h3>
              <p className="text-gray-700 leading-relaxed">
                個人情報の取り扱いに関するお問い合わせは、下記の窓口までお願いいたします。
              </p>
              <div className="mt-3 text-gray-700">
                <p>株式会社Bee 個人情報保護担当</p>
                <p>〒101-0041</p>
                <p>東京都千代田区神田須田町1-7-8 VORT秋葉原Ⅳ 2F</p>
                <p>Email: info@bee-group.net</p>
              </div>
            </section>
            
            <section>
              <h3 className="text-xl font-semibold text-orange-700 mb-3">8. プライバシーポリシーの変更</h3>
              <p className="text-gray-700 leading-relaxed">
                当社は、必要に応じて本プライバシーポリシーを変更することがあります。変更した場合は、当社ウェブサイト上に変更後のプライバシーポリシーを掲載します。
              </p>
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