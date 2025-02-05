import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-900 to-orange-800 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">会社情報</h3>
          <p>株式会社Bee</p>
          <p>〒100-0004</p>
          <p>東京都千代田区大手町1-1-1</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">製品情報</h3>
          <ul>
            <li>
              <Link href="/features" className="hover:text-orange-300 transition-colors duration-300">
                機能一覧
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-orange-300 transition-colors duration-300">
                料金プラン
              </Link>
            </li>
            <li>
              <Link href="/case-studies" className="hover:text-orange-300 transition-colors duration-300">
                導入事例
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">サポート</h3>
          <ul>
            <li>
              <Link href="/contact" className="hover:text-orange-300 transition-colors duration-300">
                お問い合わせ
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:text-orange-300 transition-colors duration-300">
                よくある質問
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-orange-300 transition-colors duration-300">
                サポート体制
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">法的情報</h3>
          <ul>
            <li>
              <Link href="/terms" className="hover:text-orange-300 transition-colors duration-300">
                利用規約
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-orange-300 transition-colors duration-300">
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link href="/law" className="hover:text-orange-300 transition-colors duration-300">
                特定商取引法に基づく表記
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-orange-200">&copy; 2023 株式会社AIワークフロー All rights reserved.</p>
      </div>
    </footer>
  )
}

