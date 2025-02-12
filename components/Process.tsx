export default function Process() {
  const steps = [
    {
      title: "無料トライアルに申し込む",
      description: "申し込み後連絡をする",
    },
    {
      title: "新規登録→ログインをする",
      description: "以下の動画マニュアルを見て、登録を進めてください",
    },
    

  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-4xl mx-auto">
        <p className="text-center text-lg mb-8">
          Beeは段階的に機能を拡張していきます。以下のステップで、あなたのeBayビジネスを効率化します。
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-800">Beeの導入プロセス</h2>
        <ol className="relative border-l border-gray-200 dark:border-gray-700">
          {steps.map((step, index) => (
            <li key={index} className="mb-10 ml-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-orange-500 rounded-full -left-4 ring-4 ring-white text-white">
                {index + 1}
              </span>
              <h3 className="font-medium leading-tight text-orange-700">{step.title}</h3>
              <p className="text-sm text-gray-500 mt-1">{step.description}</p>
            </li>
          ))}
        </ol>
        <p className="mt-8 text-center text-lg">
          Beeは、AIチャット返信やメールマーケティングなど、すぐに効果を実感できる機能から段階的に導入可能です。
          あなたのペースに合わせて、eBayビジネスの効率化と収益向上を実現しましょう。
        </p>

        {/* ここからYouTube動画の埋め込み */}
        <div className="mt-10 relative pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
            src="https://www.youtube.com/embed/rFUvorkF9ic"
            title="YouTube video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  )
}

