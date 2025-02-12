"use client"
import { Button } from "@/components/ui/button"

export default function EmphasizedFeatures() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-500 overflow-hidden">
      {/* 強い背景をやわらげるための半透明オーバーレイ */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-white mb-12">
          スマホで完結！<br className="hidden md:block" /> AIで顧客対応を革新
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* カード: 複数アカウント管理 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transform transition-all hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-500 rounded-full">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
                  />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M11 18h2" />
                </svg>
              </div>
              <h3 className="ml-4 text-2xl font-bold text-gray-800">
                複数アカウント管理
              </h3>
            </div>
            <p className="text-gray-600 text-lg">
              スマホ一台で、複数のアカウントをシームレスに管理。直感的なタッチ操作で、どこにいてもビジネスを最適化します。
            </p>
            <div className="mt-6">
              <Button
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300 font-semibold"
              >
                今すぐ試す
              </Button>
            </div>
          </div>
          {/* カード: AI顧客対応 */}
          <div className="bg-white p-8 rounded-2xl shadow-xl transform transition-all hover:scale-105">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-orange-500 rounded-full">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4-.99L3 21l1-4a8.84 8.84 0 01-.99-4C3 7.582 6.134 4 10 4c2.295 0 4.375.98 5.94 2.56A7.967 7.967 0 0121 12z"
                  />
                </svg>
              </div>
              <h3 className="ml-4 text-2xl font-bold text-gray-800">
                AI顧客対応
              </h3>
            </div>
            <p className="text-gray-600 text-lg">
              最新の AI 技術で問い合わせ内容を瞬時に解析。過去の履歴をもとに最適な返信を自動生成し、顧客満足度を飛躍的に向上させます。
            </p>
            <div className="mt-6">
              <Button
                size="lg"
                className="bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300 font-semibold"
              >
                今すぐ試す
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* バックグラウンドの装飾 */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute top-[-100px] right-[-100px] w-[400px] h-[400px] opacity-20"
          viewBox="0 0 400 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="200" cy="200" r="200" fill="url(#paint0_radial)" />
          <defs>
            <radialGradient
              id="paint0_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(200 200) rotate(0) scale(200)"
            >
              <stop stopColor="#FFA500" />
              <stop offset="1" stopColor="#FF8C00" />
            </radialGradient>
          </defs>
        </svg>
        <svg
          className="absolute bottom-[-150px] left-[-150px] w-[500px] h-[500px] opacity-20"
          viewBox="0 0 500 500"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="250" cy="250" r="250" fill="url(#paint1_radial)" />
          <defs>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(250 250) rotate(0) scale(250)"
            >
              <stop stopColor="#FF8C00" />
              <stop offset="1" stopColor="#FFA500" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  )
}
