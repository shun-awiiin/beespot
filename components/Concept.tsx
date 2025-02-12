"use client"

import React from "react";
import { InView } from "react-intersection-observer";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Concept() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-orange-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-orange-800 text-center mb-12">
          eBayビジネスを、もっとスマートに。
        </h2>
        <p className="text-lg md:text-xl text-gray-700 text-center mb-12">
          Beeは、AIを活用した問い合わせ対応、為替連動の価格調整、税務管理など、
          <br className="hidden md:block" />
          eBayセラーの業務をワンストップで効率化する最先端ソリューションです。
        </p>

        {/* チャット関連 */}
        <Section title="チャット関連">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<ChatIcon />}
              title="AIチャット返信"
              description="過去のチャット履歴を解析し、最適な返信を瞬時に自動生成。多言語対応でグローバルなお客様にも即レス対応。"
            />
            <FeatureCard
              icon={<TranslateIcon />}
              title="自動翻訳表示"
              description="多言語の問い合わせを即時日本語に翻訳。迅速な理解と対応で顧客満足度を向上。"
            />
            <FeatureCard
              icon={<RobotIcon />}
              title="自動応答システム"
              description="夜間や外出時も自動で初動対応。キーワードに基づく定型文で、24時間サポートを実現。"
            />
          </div>
        </Section>

        {/* マーケティング関連 */}
        <Section title="マーケティング関連">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<MailIcon />}
              title="DMマーケティング"
              description="取引データに基づくターゲットメールを一斉送信。セールス促進やリピート購入を効果的にサポート。"
            />
            <FeatureCard
              icon={<ListIcon />}
              title="バイヤーリスト管理"
              description="リピーターや個別対応が必要な顧客を一目で管理。ターゲットごとの最適なフォローアップが可能に。"
            />
            <FeatureCard
              icon={<TemplateIcon />}
              title="メッセージテンプレート"
              description="よく使う文面を保存し、ワンクリックで呼び出し。返信業務の手間を劇的に削減。"
            />
            <FeatureCard
              icon={<GlobeIcon />}
              title="DeepL翻訳連携"
              description="高精度なDeepL翻訳で、英語以外の問い合わせにもスムーズに対応。"
            />
          </div>
        </Section>

        {/* バックオフィス関連 */}
        <Section title="バックオフィス関連">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<CurrencyIcon />}
              title="リアルタイム為替対応"
              description="為替の変動に合わせ自動で価格調整。手動更新を排除し、輸出ビジネスの利益を守ります。"
            />
            <FeatureCard
              icon={<DocumentIcon />}
              title="税務管理＆帳簿自動化"
              description="売上・経費を一元管理し、正確な帳簿を自動生成。税務調査やインボイス制度にも安心です。"
            />
            <FeatureCard
              icon={<MobileIcon />}
              title="モバイル管理"
              description="専用アプリで、いつでもどこでも複数アカウントを簡単操作。リアルタイムでビジネス状況を把握。"
            />
            <FeatureCard
              icon={<BanIcon />}
              title="ブラックリスト管理"
              description="問題のある取引先を自動リスト化。取引前の警告システムでリスクを未然に防止。"
            />
          </div>
        </Section>
      </div>
    </section>
  );
}

// Section コンポーネント：テーマごとのグループを表現
function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-16">
      <h3 className="text-3xl font-bold text-orange-700 mb-6">{title}</h3>
      {children}
    </div>
  );
}

// FeatureCard コンポーネント（InView を用いたスクロール時アニメーション付き）
function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <InView triggerOnce={true} threshold={0.1}>
      {({ inView, ref }) => (
        <div
          ref={ref}
          className={`group bg-white p-8 rounded-xl shadow-lg border border-orange-200 transition-transform transform duration-300 
            ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
            hover:-translate-y-2 hover:shadow-2xl`}
        >
          <div className="flex items-center justify-center mb-4">
            <div className="p-3 bg-orange-100 rounded-full transition-transform duration-300 group-hover:rotate-12">
              {icon}
            </div>
          </div>
          <h4 className="text-xl font-bold text-orange-700 mb-2">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      )}
    </InView>
  );
}

/* --- 以下、各機能に対応するアイコンコンポーネント --- */

function ChatIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-orange-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-2-2H5a2 2 0 01-2-2V7a2 2 0 012-2h14a2 2 0 012 2v7a2 2 0 01-2 2h-4l-2 2z" />
    </svg>
  );
}

function CurrencyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-orange-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4
           4-1.79 4-4-1.79-4-4-4zm0 0V4m0 16v-4"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-orange-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-orange-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M9 12h6m-6 4h6M7 4h10a2 2 0 012 2v12a2 2 0 01-2 2H7a2 2 0 01-2-2V6a2 2 0 012-2z"
      />
    </svg>
  );
}

function MobileIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-orange-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <rect x="7" y="4" width="10" height="16" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 18h2" />
    </svg>
  );
}

function ListIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-orange-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function BanIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-orange-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TranslateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-orange-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7h12M3 11h9m-9 4h12m5-10v12" />
    </svg>
  );
}

function TemplateIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-orange-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18" />
    </svg>
  );
}

function RobotIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-orange-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 16v-1a7 7 0 0114 0v1" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-8 h-8 text-orange-600"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <circle cx="12" cy="12" r="10" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2 12h20" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a15.3 15.3 0 010 20" />
    </svg>
  );
}
