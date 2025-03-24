"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  
  // URLが変わったらモバイルメニューを閉じる
  useEffect(() => {
    setIsMenuOpen(false)
  }, [pathname])

  const isActive = (path: string) => {
    return pathname === path ? "text-orange-600 font-medium" : "text-gray-700"
  }

  return (
    <nav className="bg-white/90 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-orange-600">Bee</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="/features" 
              className={`${isActive('/features')} hover:text-orange-600 transition-colors`}
            >
              機能
            </Link>
            {/* <Link 
              href="/pricing" 
              className={`${isActive('/pricing')} hover:text-orange-600 transition-colors`}
            >
              料金
            </Link> */}
            <Link 
              href="/about" 
              className={`${isActive('/about')} hover:text-orange-600 transition-colors`}
            >
              会社情報
            </Link>
            <Link 
              href="/contact" 
              className={`${isActive('/contact')} hover:text-orange-600 transition-colors`}
            >
              お問い合わせ
            </Link>
            <Link href="https://bee-marketing.xyz/#/" target="_blank" rel="noopener noreferrer">
              <Button className="bg-orange-500 hover:bg-orange-600">
                無料で試す
              </Button>
            </Link>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              type="button"
              className="text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* モバイルメニュー */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link 
              href="/features" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/features')} hover:text-orange-600 hover:bg-orange-50`}
            >
              機能
            </Link>
            <Link 
              href="/pricing" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/pricing')} hover:text-orange-600 hover:bg-orange-50`}
            >
              料金
            </Link>
            <Link 
              href="/about" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about')} hover:text-orange-600 hover:bg-orange-50`}
            >
              会社情報
            </Link>
            <Link 
              href="/contact" 
              className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact')} hover:text-orange-600 hover:bg-orange-50`}
            >
              お問い合わせ
            </Link>
            <div className="pt-2">
              <Button className="w-full bg-orange-500 hover:bg-orange-600">
                無料で試す
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
} 