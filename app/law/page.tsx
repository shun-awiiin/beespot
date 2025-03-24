import { Metadata } from "next"
import PageHeader from "@/components/PageHeader"

export const metadata: Metadata = {
  title: "特定商取引法に基づく表記 | Bee",
  description: "特定商取引法に基づく表記をご案内します。Beeサービスの提供元、販売条件などについての情報をご確認ください。",
}

export default function LawPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <PageHeader 
        title="特定商取引法に基づく表記"
        subtitle="Beeをご利用いただく際の取引条件について"
      />
      
      <div className="max-w-4xl mx-auto py-16 px-4">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-orange-800 mb-6">特定商取引法に基づく表記</h2>
          
          <div className="space-y-6">
            <table className="w-full border-collapse">
              <tbody>
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left text-orange-700 font-semibold align-top w-1/3">販売事業者名</th>
                  <td className="py-4 text-gray-700">株式会社Bee</td>
                </tr>
                
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left text-orange-700 font-semibold align-top w-1/3">代表者</th>
                  <td className="py-4 text-gray-700">山崎 美咲</td>
                </tr>
                
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left text-orange-700 font-semibold align-top w-1/3">所在地</th>
                  <td className="py-4 text-gray-700">
                    〒101-0041<br />
                    東京都千代田区神田須田町1-7-8 VORT秋葉原Ⅳ 2F
                  </td>
                </tr>
                
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left text-orange-700 font-semibold align-top w-1/3">連絡先</th>
                  <td className="py-4 text-gray-700">
                    Email: info@bee-group.net<br />
                    ※お問い合わせはメールでのみ承っております
                  </td>
                </tr>
                
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left text-orange-700 font-semibold align-top w-1/3">販売価格</th>
                  <td className="py-4 text-gray-700">
                    各プランの料金は料金ページに記載しております。<br />
                    価格は全て税込み表示となります。
                  </td>
                </tr>
                
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left text-orange-700 font-semibold align-top w-1/3">支払方法</th>
                  <td className="py-4 text-gray-700">
                    クレジットカード決済（VISA、Mastercard、American Express、JCB）<br />
                    銀行振込（法人のお客様のみ）
                  </td>
                </tr>
                
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left text-orange-700 font-semibold align-top w-1/3">支払時期</th>
                  <td className="py-4 text-gray-700">
                    クレジットカード決済：各月の初日に当月分をお支払いいただきます<br />
                    銀行振込：請求書発行後、翌月末日までにお支払いいただきます
                  </td>
                </tr>
                
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left text-orange-700 font-semibold align-top w-1/3">サービス提供時期</th>
                  <td className="py-4 text-gray-700">
                    お申し込み完了後、即時にサービスをご利用いただけます。
                  </td>
                </tr>
                
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left text-orange-700 font-semibold align-top w-1/3">返品・キャンセルについて</th>
                  <td className="py-4 text-gray-700">
                    デジタルコンテンツのため、原則として返品・キャンセルはできません。<br />
                    ただし、サービス開始後14日以内であれば、利用規約に基づき解約が可能です。
                  </td>
                </tr>
                
                <tr className="border-b border-gray-200">
                  <th className="py-4 pr-6 text-left text-orange-700 font-semibold align-top w-1/3">動作環境</th>
                  <td className="py-4 text-gray-700">
                    <strong>対応ブラウザ</strong><br />
                    Google Chrome 最新版<br />
                    Mozilla Firefox 最新版<br />
                    Safari 最新版<br />
                    Microsoft Edge 最新版<br /><br />
                    
                    <strong>対応OS</strong><br />
                    Windows 10以降<br />
                    macOS 10.15以降<br />
                    iOS 15.0以降<br />
                    Android 12.0以降
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
} 