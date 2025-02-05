import { Button } from "@/components/ui/button"

export default function Pricing() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-800">料金プラン</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">スタンダードプラン</h3>
            <p className="text-3xl font-bold mb-4">
              ¥15,000<span className="text-sm font-normal">/月</span>
            </p>
            <ul className="mb-6 space-y-2">
              <li>AI チャット返信（100件/月）</li>
              <li>メールマーケティング（基本機能）</li>
              <li>為替連動価格調整（手動更新）</li>
              <li>基本的な税務管理機能</li>
            </ul>
            <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300">
              14日間無料トライアル
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200 border-orange-500">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">プロフェッショナルプラン</h3>
            <p className="text-3xl font-bold mb-4">
              ¥35,000<span className="text-sm font-normal">/月</span>
            </p>
            <ul className="mb-6 space-y-2">
              <li>AI チャット返信（無制限）</li>
              <li>高度なメールマーケティング</li>
              <li>為替連動価格調整（自動更新）</li>
              <li>詳細な税務管理・レポート機能</li>
              <li>優先サポート</li>
            </ul>
            <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300">
              今すぐ始める
            </Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4 text-orange-700">エンタープライズプラン</h3>
            <p className="text-3xl font-bold mb-4">お問い合わせ</p>
            <ul className="mb-6 space-y-2">
              <li>カスタマイズ可能な全機能</li>
              <li>API連携・大規模データ対応</li>
              <li>専任サポート担当者</li>
              <li>オンボーディング支援</li>
            </ul>
            <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300">
              お問い合わせ
            </Button>
          </div>
        </div>
        <p className="mt-8 text-center text-sm text-gray-600">
          ※すべてのプランに14日間の無料トライアル期間が付いています。
          <br />
          年間契約の場合、2ヶ月分無料などの割引オプションもご用意しております。
          <br />
          法人向け請求書払いにも対応しております。
        </p>
      </div>
    </section>
  )
}

