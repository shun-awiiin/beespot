"use client"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-orange-400 via-orange-300 to-orange-500 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/30 via-orange-400/30 to-orange-600/30 backdrop-blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="w-full md:w-1/2 text-left md:pr-8 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up drop-shadow-lg">
          スマホで完結！
          AIで顧客対応を革新
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 animate-fade-in-up animation-delay-200 drop-shadow">
          -時間・ストレス・生産性の解放、ここに極まる。
          <br />
          -AI駆動のチャット返信、為替連動価格調整、税務管理まで。 Beeが全てを一元化し、小さい時間の解放がチームの成果を最大化させます。
          </p>
          <div className="flex flex-col sm:flex-row justify-start gap-4 animate-fade-in-up animation-delay-400">
          <Button
            size="lg"
            className="bg-white/80 text-orange-800 hover:bg-white transition-colors duration-300 font-semibold backdrop-blur-sm"
            onClick={() => window.open("https://bee-marketing.xyz/#/", "_blank")}
          >
            無料で始める
          </Button>
        </div>

        </div>
        <div className="w-full md:w-3/4 animate-fade-in-up animation-delay-600">
        <div className="relative w-full">
          <div className="absolute -inset-12 bg-gradient-to-r from-orange-400 via-orange-300 to-orange-500 opacity-75 blur-2xl rounded-full"></div>
          <div className="relative transform hover:scale-[1.02] transition-transform duration-500">
            <iframe
              src="https://www.youtube.com/embed/fXET9lDGpz0?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full aspect-video rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>

      </div>
    </section>
  )
}

