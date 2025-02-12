export default function Concept() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-100 to-orange-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          eBayビジネスを、もっとスマートに。
        </h2>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Beeは、AIを活用した問い合わせ対応から為替連動価格調整、税務管理まで、
          eBayセラーの業務を包括的に効率化する総合ツールです。
        </p>

        {/* 3列×3行のグリッドレイアウト */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          {/* 1. AI駆動のチャット返信 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">AI駆動のチャット返信</h3>
            <p>
              ChatGPTを活用し、過去の履歴を参照。ワンクリックで適切な返信を自動生成し、言語の壁を越えたコミュニケーションを実現。
            </p>
          </div>

          {/* 2. 為替連動価格調整 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">為替連動価格調整</h3>
            <p>
              為替レートの変動に合わせて出品価格を自動修正。円安/円高の影響を受けやすい輸出ビジネスでの為替差損を防止。
            </p>
          </div>

          {/* 3. 効果的なDM配信 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">効果的なDM配信</h3>
            <p>
              過去の取引履歴からバイヤーを抽出し、AIで最適化されたメッセージを一括送信。セール案内やリピート購入の促進に活用可能。
            </p>
          </div>

          {/* 4. 包括的な税務管理 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">包括的な税務管理</h3>
            <p>
              売上、経費、仕入れコストを一元管理。インボイス制度や税務調査に備えた正確な取引履歴・帳簿の自動作成をサポート。
            </p>
          </div>

          {/* 5. スマホアプリ対応 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">スマホアプリ対応</h3>
            <p>
              スマホアプリでもBeeを使えることで、外出先や寝転んでいるときでもビジネスを管理可能。AI連携により、煩雑な顧客対応も隙間時間で解消。
            </p>
          </div>

          {/* 6. リピーター・個別対応バイヤーリスト */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">
              リピーター・個別対応バイヤーリスト
            </h3>
            <p>
              バイヤー情報にフラグをつけることで管理し、後でまとめてメッセージ送信が可能。取引の質を向上させます。
            </p>
          </div>

          {/* 7. ブラックリスト管理 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">ブラックリスト管理</h3>
            <p>
              問題のあるバイヤーをリスト化し、取引時に自動警告を表示。チーム全体でリスク管理を強化します。
            </p>
          </div>

          {/* 8. 問い合わせの日本語訳表示 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">問い合わせの日本語訳表示</h3>
            <p>
              英語など他言語で届いた問い合わせを自動で日本語に翻訳表示。スムーズな対応を実現します。
            </p>
          </div>

          {/* 9. テンプレート呼び出し */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">テンプレート呼び出し</h3>
            <p>
              よく使うメッセージをひな形として保存。ワンクリックで呼び出し、返信作業の効率化を図ります。
            </p>
          </div>
        </div>
        {/* 下部に余った2項目を2列並べる */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 10. 自動応答機能 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">自動応答機能</h3>
            <p>
              夜間や外出時にも自動で受付メッセージを送信。キーワードに応じた定型応答でカスタマーサポートの無人化を実現します。
            </p>
          </div>

          {/* 11. DeepL翻訳対応 */}
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
            <h3 className="text-xl font-semibold mb-4">DeepL翻訳対応</h3>
            <p>
              ツール内で高精度なDeepL翻訳を利用可能。英語以外の言語でもスムーズにやり取りできる環境を提供します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
