"use client"

import { Button } from "@/components/ui/button"
import { useState } from "react"

const basePlans = [
  {
    name: "Base Free",
    price: "¥0",
    accounts: "1",
    features: [
      "AI返信（月20回）",
      "AI翻訳（月100回）",
      "メッセージ保持30日",
      "チームメンバー1人",
    ],
    highlighted: false,
    cta: "無料で始める",
  },
  {
    name: "Base Light",
    price: "¥3,300",
    accounts: "5まで",
    features: [
      "AI返信 / 翻訳 無制限",
      "自動返信（一部）",
      "ブラックバイヤー共有",
      "チームメンバー無制限",
      "メッセージ保持無制限",
    ],
    highlighted: false,
    cta: "今すぐ始める",
  },
  {
    name: "Base Pro",
    price: "¥5,500",
    accounts: "無制限",
    features: [
      "Base Lightの全機能",
      "eBayアカウント無制限",
    ],
    highlighted: true,
    cta: "今すぐ始める",
  },
  {
    name: "Max",
    price: "¥33,000",
    accounts: "無制限",
    features: [
      "全機能フル開放",
      "AIエージェント",
      "最上位AIモデル",
      "専任担当",
      "優先サポート",
      "新機能先行アクセス",
    ],
    highlighted: false,
    cta: "お問い合わせ",
  },
]

const marketingPackages = [
  {
    name: "マーケティング Light",
    price: "¥5,500",
    features: [
      "自動オファー 10件/日",
      "Traffic 15K件/日",
      "追跡 +30回/月",
      "DM機能",
      "顧客分析",
      "税務管理",
    ],
  },
  {
    name: "マーケティング Pro",
    price: "¥9,900",
    features: [
      "自動オファー 30件/日",
      "Traffic 30K件/日",
      "追跡 +100回/月",
      "AI活用全機能",
      "自動セールイベント",
    ],
  },
]

const sendOfferOptions = [
  { label: "10件/日", price: "¥3,300", note: "月300件" },
  { label: "30件/日", price: "¥4,400", note: "月1,000件" },
  { label: "165件/日", price: "¥9,900", note: "月5,000件" },
  { label: "320件/日", price: "¥16,500", note: "月10,000件" },
]

const trafficOptions = [
  { label: "15,000件", price: "¥3,300", note: "15K/日" },
  { label: "20,000件", price: "¥5,500", note: "20K/日" },
  { label: "30,000件", price: "¥8,800", note: "30K/日" },
  { label: "40,000件", price: "¥11,000", note: "40K/日" },
  { label: "50,000件", price: "¥14,300", note: "50K/日" },
  { label: "全件", price: "¥19,800", note: "無制限" },
]

const trackingOptions = [
  { label: "+30回", price: "¥2,200", note: "月30回" },
  { label: "+100回", price: "¥5,500", note: "月100回" },
  { label: "+200回", price: "¥7,700", note: "月200回" },
  { label: "無制限", price: "¥13,000", note: "無制限" },
]

const boosters = {
  traffic: [
    { label: "+5K", price: "¥2,200" },
    { label: "+10K", price: "¥3,850" },
    { label: "+20K", price: "¥7,700" },
    { label: "全件", price: "¥16,500" },
  ],
  offer: [
    { label: "+20件", price: "¥3,300" },
    { label: "+135件", price: "¥9,900" },
    { label: "+290件", price: "¥16,500" },
  ],
  tracking: [
    { label: "+70回", price: "¥4,400" },
    { label: "+170回", price: "¥6,700" },
    { label: "無制限", price: "¥11,000" },
  ],
}

type OptionTab = "offer" | "traffic" | "tracking"

export default function Pricing() {
  const [activeOption, setActiveOption] = useState<OptionTab>("offer")

  const optionData: Record<OptionTab, { label: string; price: string; note: string }[]> = {
    offer: sendOfferOptions,
    traffic: trafficOptions,
    tracking: trackingOptions,
  }

  const optionTabs: { key: OptionTab; label: string }[] = [
    { key: "offer", label: "自動センドオファー" },
    { key: "traffic", label: "Traffic自動取得" },
    { key: "tracking", label: "発送追跡" },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto">

        {/* ベースプラン */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-orange-800">
            ベースプラン
          </h2>
          <p className="text-center text-gray-600 mb-10">
            Beeチャット・AI向け — ビジネス規模に合わせてお選びください
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {basePlans.map((plan) => (
              <div
                key={plan.name}
                className={`relative bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col ${
                  plan.highlighted
                    ? "border-2 border-orange-500 ring-2 ring-orange-200"
                    : "border border-orange-200"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    おすすめ
                  </span>
                )}
                <h3 className="text-lg font-semibold text-orange-700 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-3">
                  eBayアカウント: <span className="font-medium text-gray-700">{plan.accounts}</span>
                </p>
                <p className="text-3xl font-bold mb-5">
                  {plan.price}
                  {plan.price !== "¥0" && <span className="text-sm font-normal text-gray-500">/月</span>}
                </p>
                <ul className="mb-6 space-y-2 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-orange-500 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full transition-colors duration-300 ${
                    plan.highlighted
                      ? "bg-orange-500 text-white hover:bg-orange-600"
                      : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            ))}
          </div>

          <p className="mt-6 text-center text-sm text-gray-500">
            エンタープライズプランは個別相談（
            <a href="mailto:info@bee-group.net" className="text-orange-600 underline">
              info@bee-group.net
            </a>
            ）
          </p>
        </div>

        {/* マーケティングパッケージ */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-orange-800">
            マーケティングパッケージ
          </h2>
          <p className="text-center text-gray-600 mb-10">
            ベース有料プラン加入者向けのオールインワンパッケージ
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {marketingPackages.map((pkg) => (
              <div
                key={pkg.name}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 border border-orange-200 p-6 flex flex-col"
              >
                <h3 className="text-lg font-semibold text-orange-700 mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold mb-5">
                  {pkg.price}<span className="text-sm font-normal text-gray-500">/月</span>
                </p>
                <ul className="mb-6 space-y-2 flex-1">
                  {pkg.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-orange-500 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300">
                  プランを選択
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* 単体オプション */}
        <div className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-orange-800">
            単体オプション
          </h2>
          <p className="text-center text-gray-600 mb-10">
            必要な機能だけを個別に追加できます
          </p>

          <div className="flex justify-center gap-2 mb-8 flex-wrap">
            {optionTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveOption(tab.key)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeOption === tab.key
                    ? "bg-orange-500 text-white"
                    : "bg-orange-100 text-orange-700 hover:bg-orange-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-md border border-orange-200 overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="bg-orange-50">
                  <th className="text-left px-6 py-3 text-sm font-semibold text-orange-800">プラン</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-orange-800">月額</th>
                  <th className="text-right px-6 py-3 text-sm font-semibold text-orange-800">詳細</th>
                </tr>
              </thead>
              <tbody>
                {optionData[activeOption].map((row, i) => (
                  <tr
                    key={row.label}
                    className={i % 2 === 0 ? "bg-white" : "bg-orange-50/40"}
                  >
                    <td className="px-6 py-3 text-sm text-gray-700 font-medium">{row.label}</td>
                    <td className="px-6 py-3 text-sm text-gray-900 font-bold text-right">{row.price}</td>
                    <td className="px-6 py-3 text-sm text-gray-500 text-right">{row.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ブースター */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-center text-orange-800">
            ブースター
          </h2>
          <p className="text-center text-gray-600 mb-10">
            マーケティングパッケージ加入者専用 — 追加枠で上限を拡張
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Traffic */}
            <div className="bg-white rounded-2xl shadow-md border border-orange-200 p-5">
              <h3 className="text-base font-semibold text-orange-700 mb-4">Traffic追加</h3>
              <ul className="space-y-3">
                {boosters.traffic.map((b) => (
                  <li key={b.label} className="flex justify-between text-sm">
                    <span className="text-gray-700">{b.label}</span>
                    <span className="font-bold text-gray-900">{b.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* オファー */}
            <div className="bg-white rounded-2xl shadow-md border border-orange-200 p-5">
              <h3 className="text-base font-semibold text-orange-700 mb-4">オファー追加</h3>
              <ul className="space-y-3">
                {boosters.offer.map((b) => (
                  <li key={b.label} className="flex justify-between text-sm">
                    <span className="text-gray-700">{b.label}</span>
                    <span className="font-bold text-gray-900">{b.price}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* 追跡 */}
            <div className="bg-white rounded-2xl shadow-md border border-orange-200 p-5">
              <h3 className="text-base font-semibold text-orange-700 mb-4">追跡追加</h3>
              <ul className="space-y-3">
                {boosters.tracking.map((b) => (
                  <li key={b.label} className="flex justify-between text-sm">
                    <span className="text-gray-700">{b.label}</span>
                    <span className="font-bold text-gray-900">{b.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
