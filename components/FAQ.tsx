import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "AIチャット返信の精度はどの程度ですか？",
      answer:
        "テストユーザーからは「思った以上に正確・丁寧な文章が生成される」と好評です。単なる直訳ではなく、バイヤーの意図や感情に寄り添った回答が期待できます。ただし、AIが意図せず不適切な文言を入れる可能性もあるため、送信前の確認は必要です。",
    },
    {
      question: "メールマーケティング機能は、eBayの規約に違反しませんか？",
      answer:
        "あくまでも「適切なフォローアップ」「既存取引のあるバイヤーへの案内」の範囲内で使用することを推奨しています。過剰に大量のメールを送信するとeBayのガイドライン違反となる可能性があるため、適切な使用が求められます。",
    },
    {
      question: "為替連動の価格調整は完全に自動化されていますか？",
      answer:
        "現在は、eBayの出品リストをCSVでアップロードし、為替レートの変動に応じて価格を自動計算する仕組みです。将来的には、APIを活用してより自動化された仕組みを目指しています。ただし、仕入れ価格の自動連動には課題があり、段階的に改善を進めています。",
    },
    {
      question: "税務管理機能は、どの程度カスタマイズ可能ですか？",
      answer:
        "基本的な売上・経費管理、利益計算機能を提供していますが、セラーごとに必要な税務処理が異なるため、完全なカスタマイズは難しい状況です。今後、ユーザーからのフィードバックを基に機能を拡張していく予定です。インボイス制度対応や、経理ソフトとの連携も検討中です。",
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">よくあるご質問</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

