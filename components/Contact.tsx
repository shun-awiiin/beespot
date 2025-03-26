"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle,
  AlertCircle 
} from "lucide-react"

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('submitting')
    
    // ここで実際のフォーム送信処理を実装します
    // 例: API呼び出しなど
    
    setTimeout(() => {
      // デモのため成功を模擬
      setFormStatus('success')
      // フォームをリセット
      e.currentTarget.reset()
      
      // 5秒後に状態をidleに戻す
      setTimeout(() => setFormStatus('idle'), 5000)
    }, 1500)
  }
  
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-orange-800">お問い合わせ</h2> */}
        <p className="text-lg text-center mb-12 max-w-3xl mx-auto">
          Beeに関するご質問、導入のご相談、機能へのご要望など、お気軽にお問い合わせください。
          専門スタッフが丁寧にお答えします。
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* 左側: 連絡先情報 */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-700 mb-6">連絡先</h3>
              
              <div className="space-y-6">
                {/* <div className="flex items-start">
                  <Phone className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">電話番号</h4>
                    <p className="text-gray-600">03-1234-5678</p>
                    <p className="text-sm text-gray-500">平日 9:00 - 18:00</p>
                  </div>
                </div> */}
                
                <div className="flex items-start">
                  <Mail className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">メールアドレス</h4>
                    <p className="text-gray-600">info@bee-group.net                    </p>
                    <p className="text-sm text-gray-500">24時間受付</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">所在地</h4>
                    <p className="text-gray-600">〒101-0041</p>
                    <p className="text-gray-600">東京都千代田区神田須田町1-7-8</p>
                    <p className="text-gray-600">VORT秋葉原Ⅳ 2F</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="text-orange-500 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-800">営業時間</h4>
                    <p className="text-gray-600">平日: 9:00 - 18:00</p>
                    <p className="text-gray-600">土日祝: 休業</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* 右側: お問い合わせフォーム */}
          {/* <div className="lg:col-span-3">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border border-orange-200">
              <h3 className="text-2xl font-bold text-orange-700 mb-6">お問い合わせフォーム</h3>
              
              {formStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center text-green-700">
                  <CheckCircle className="mr-2 flex-shrink-0" />
                  <p>お問い合わせを受け付けました。担当者からのご連絡をお待ちください。</p>
                </div>
              )}
              
              {formStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center text-red-700">
                  <AlertCircle className="mr-2 flex-shrink-0" />
                  <p>送信中にエラーが発生しました。しばらく経ってからもう一度お試しください。</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      お名前 <span className="text-red-500">*</span>
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="山田 太郎"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      会社名
                    </label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="株式会社〇〇"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    メールアドレス <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your-email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    電話番号
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="03-1234-5678"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    お問い合わせ件名 <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    required
                    placeholder="Beeの導入について"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    お問い合わせ内容 <span className="text-red-500">*</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="お問い合わせの詳細をご記入ください"
                    className="resize-none"
                  />
                </div>
                
                <div className="text-sm text-gray-500">
                  <p>
                    <span className="text-red-500">*</span> は必須項目です
                  </p>
                </div>
                
                <div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-300"
                    disabled={formStatus === 'submitting'}
                  >
                    {formStatus === 'submitting' ? '送信中...' : 'お問い合わせを送信する'}
                  </Button>
                </div>
              </form>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
} 