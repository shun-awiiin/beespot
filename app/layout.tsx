import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Bee | AIで進化するeBayセラー業務管理ツール',
  description: 'AIチャット返信・為替連動価格調整・税務管理まで。eBayセラーのための業務効率化プラットフォーム。時間・ストレス・生産性の解放を実現し、あなたのグローバルECビジネスを次のレベルへ。'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
