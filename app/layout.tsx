import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Bee AIカスタマイズされた最先端の顧客対応',
  description: 'AIカスタマイズされた最先端の顧客対応 時間・ストレス・生産性の解放、ここに極まる。AI駆動のチャット返信、為替連動価格調整、税務管理まで。 Beeが全てを一元化し、小さい時間の解放がチームの成果を最大化させます'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
