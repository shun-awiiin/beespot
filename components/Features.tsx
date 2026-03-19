"use client"

import { useState } from "react"
import {
  MessageSquare,
  Bot,
  Zap,
  BarChart3,
  Truck,
  Calculator,
  Globe,
  Users,
  Mail,
  Smartphone,
  ChevronDown,
} from "lucide-react"

const featureCategories = [
  {
    id: "chat",
    icon: MessageSquare,
    title: "eBayチャットの一元管理",
    tag: "コア機能",
    description: "複数eBayアカウントのメッセージを1画面で管理。他ツールでは個別にeBayを開く必要があるところを、Beeは統合チャットUIで全アカウントを横断的に対応可能。",
    features: [
      "マーカー/タグでチャットを色分け・分類し、対応漏れを防止",
      "テンプレートでよく使う定型文をワンタップ挿入",
      "バイヤー情報パネルで購入履歴や過去のやり取りを即座に確認",
      "取引ごとに期限付きタスクを設定",
      "バイヤーごとにメモを残せるメモ機能",
      "返品・キャンセル等のトラブルアラートを自動表示",
      "画像アップロード対応",
      "ブラックバイヤー共有リストでチーム全体で要注意バイヤーを共有",
    ],
  },
  {
    id: "ai",
    icon: Bot,
    title: "AI機能",
    tag: "Vertex AI / Gemini",
    description: "最新のAI技術を活用し、返信生成・翻訳・自動送信まで幅広くカバー。",
    features: [
      "AI返信生成 — チャット履歴の文脈を読み取り、バイヤーに合った英語返信を自動生成",
      "AI翻訳 — 日本語を自然な英語に変換（Google / Gemini の選択可）",
      "売却時AI自動返信 — 購入確定のWebhookトリガーでサンキューメッセージを自動送信",
      "フィードバックAI自動返答 — ポジティブ/ニュートラルなレビューにAIが返答文を生成",
      "AIモデルの段階分け — プランに応じて標準→高品質→最上位モデルを自動適用",
      "AIメールエージェント（Maxプラン）— プロンプト指示でAIがメール文面を生成→承認→自動送信",
    ],
  },
  {
    id: "automation",
    icon: Zap,
    title: "自動化の充実度",
    tag: "業務効率化",
    description: "オファー送信から価格変更まで、日々のルーティンをまるごと自動化。",
    features: [
      "自動センドオファー — Watchリスト登録者に毎日一括でオファー送信（最大320件/日）",
      "自動返信 — 購入確定・発送開始・支払い催促の3パターンをルールベースで自動送信",
      "自動レビュー返答 — 固定文章 or AI選択で自動返答",
      "自動セールイベント（Markdown）— 毎日12時に値下げイベントを自動作成",
      "プロモーションスケジューラー — 広告ルールを毎分チェックして自動実行",
      "オファー前在庫チェック — DeepBay連携で在庫確認、売切・値上げ時は自動取り下げ",
      "発送追跡メール自動送信 — トラッキングイベントに連動してバイヤーに自動通知",
      "自動価格変更（Coming Soon）",
    ],
  },
  {
    id: "analytics",
    icon: BarChart3,
    title: "データ分析・ストア分析",
    tag: "インサイト",
    description: "eBayのトラフィックから売上傾向まで、データドリブンな意思決定を支援。",
    features: [
      "Traffic自動取得 — インプレッション・ビュー数を毎日自動収集（最大全件）",
      "Sold分析 — 売却済み商品の傾向・価格帯を分析",
      "キーワード分析 — 検索されやすいキーワードの発見、スマート検索、複数一括分析",
      "出品推移 — 出品数・新規出品・古い出品の推移をグラフ化",
      "低パフォーマンス商品の自動検出 — 閾値以下のビュー数の商品を抽出→CSV一括取り下げ",
      "売上シミュレーション — 売上・利益の予測計算",
      "IndexedDBキャッシュ — 大量データをローカルキャッシュしてサクサク動作",
    ],
  },
  {
    id: "shipping",
    icon: Truck,
    title: "配送・トラッキング管理",
    tag: "物流",
    description: "発送待ちから配達完了まで、配送の全工程を一元管理。",
    features: [
      "アクションリスト — 発送待ち・発送済み・返品を一覧管理（タグ・セラー・日数でフィルタ）",
      "配送業者用画面 — 委託先業者向けの専用画面を別途用意",
      "AfterShip + ShipTwoFour の2つの配送APIに連携",
      "追跡イベントに連動した自動通知 — 通関・配達完了などの各ステータスでバイヤーに自動メール",
    ],
  },
  {
    id: "tax",
    icon: Calculator,
    title: "税務・仕入管理",
    tag: "経理",
    description: "売上・利益の集計から仕入管理まで、経理業務を効率化。",
    features: [
      "売上・利益管理 — 集計・分析、CSVエクスポート",
      "仕入記帳 — 仕入の登録・編集・閲覧、CSV一括登録",
      "自動記帳 — 配送管理からの仕入情報自動連携",
      "利益計算機 — 関税対策を含む精緻な利益計算、eBayMAGワールドワイドポリシー対応",
    ],
  },
  {
    id: "mag",
    icon: Globe,
    title: "eBayMAG完全対応",
    tag: "グローバル",
    description: "eBayMAG経由のバイヤーにもフル対応。通貨・言語の壁を自動で解消。",
    features: [
      "通貨自動変換 — 商品価格やチャット内金額がバイヤーの国の通貨に自動切替",
      "詳細な利益計算 — 関税・ワールドワイドポリシー切替時の発送方法変更に対応",
      "言語表示の柔軟な切替 — 日本語・英語の両方/片方表示を自由に選択",
      "MAGバイヤーへの自動オファー — eBayMAG経由のバイヤーにも対応",
    ],
  },
  {
    id: "team",
    icon: Users,
    title: "マルチアカウント・チーム連携",
    tag: "チーム",
    description: "複数アカウントとチームメンバーを柔軟に管理。",
    features: [
      "複数eBayアカウントの一元管理（Base Light: 5、Base Pro: 無制限）",
      "有料プランではチームメンバー無制限",
      "リーダー・メンバー権限管理でチーム内の役割分担",
      "1契約で全アカウントに適用 — オプションはアカウントごとの個別購入不要",
    ],
  },
  {
    id: "marketing",
    icon: Mail,
    title: "メールマーケティング（DM）",
    tag: "販促",
    description: "バイヤーへのダイレクトメッセージで再購入を促進。",
    features: [
      "バイヤーへの個別・一括メッセージ送信",
      "過去の購入者やウォッチリスト登録者をフィルタして送信先を管理",
      "送信済みメッセージを一覧管理",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    title: "モバイルアプリ",
    tag: "Flutter",
    description: "スマホからeBayチャット・AI機能にアクセス。外出先でも即対応。",
    features: [
      "チャット一覧・トーク画面でスマホからeBayチャットを操作",
      "AI回答生成 — スマホからもAI返信をリクエスト",
      "翻訳 — スマホからの翻訳も対応",
      "オファー送信・送料入力をモバイルから直接対応",
      "プッシュ通知 — FCMで新着メッセージをリアルタイム通知",
    ],
  },
]

export default function Features() {
  const [openId, setOpenId] = useState<string | null>("chat")

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-orange-800">
          Beeの全機能
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          チャット管理からAI自動返信、配送追跡、税務管理まで — eBayビジネスに必要なすべてを1つのプラットフォームで
        </p>

        <div className="space-y-4">
          {featureCategories.map((cat) => {
            const Icon = cat.icon
            const isOpen = openId === cat.id

            return (
              <div
                key={cat.id}
                className={`bg-white rounded-2xl shadow-md border transition-all duration-300 ${
                  isOpen ? "border-orange-400 shadow-lg" : "border-orange-200"
                }`}
              >
                <button
                  onClick={() => toggle(cat.id)}
                  className="w-full flex items-center gap-4 p-5 md:p-6 text-left"
                >
                  <div className={`p-3 rounded-xl flex-shrink-0 transition-colors duration-300 ${
                    isOpen ? "bg-orange-500" : "bg-orange-100"
                  }`}>
                    <Icon className={`w-6 h-6 ${isOpen ? "text-white" : "text-orange-600"}`} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="text-lg font-bold text-gray-900">{cat.title}</h3>
                      <span className="text-xs font-medium bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">
                        {cat.tag}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500 mt-1 line-clamp-1">{cat.description}</p>
                  </div>

                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 md:px-6 pb-6 pt-0">
                    <p className="text-sm text-gray-600 mb-4">{cat.description}</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-2">
                      {cat.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-gray-700 py-1">
                          <span className="text-orange-500 mt-0.5 flex-shrink-0">✓</span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
