"use client"
import { useState } from "react";
import Logo from "./Logo";
import HamburgerMenu from "./HamburgerMenu";
import { RxCross2 } from "react-icons/rx";
import { IoMdSearch } from "react-icons/io";
import { IoPersonOutline } from "react-icons/io5";
import { PiHeartStraight } from "react-icons/pi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Link from "next/link";
import { kategoriList, KategoriType } from "../home/Kategori";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="bg-white text-black py-2 text-center text-xs">
        <p>75 TL Üzeri Kargo Bedava | Aynı Gün Teslimat | Kapıda Ödeme</p>
      </div>

      <div className="max-w-7xl mx-auto px-2 md:px-4">
        <div className="flex items-center h-14 md:h-16">
          <div className="flex md:hidden mr-2" onClick={toggleMenu}>
            <HamburgerMenu />
          </div>

          <div className="mr-3 md:mr-6">
            <Logo />
          </div>

          <div className="flex-1 relative mx-1 md:mx-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Aradığınız ürün, kategori veya markayı yazınız"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-md px-3 py-1.5 md:py-2 w-full text-sm focus:outline-none focus:ring-1 focus:ring-pink-400 focus:border-pink-400"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-pink-500">
                <IoMdSearch size={20} />
              </button>
            </div>
          </div>

          <div className="flex items-center ml-1 md:ml-4 space-x-1 md:space-x-5">
            <Link href="/account" className="hidden sm:flex flex-col items-center text-gray-700 hover:text-pink-500 text-xs md:text-sm">
              <IoPersonOutline size={20} className="mb-0.5" />
              <span>Hesabım</span>
            </Link>

            <Link href="/favorites" className="hidden sm:flex flex-col items-center text-gray-700 hover:text-pink-500 text-xs md:text-sm">
              <PiHeartStraight size={20} className="mb-0.5" />
              <span>Favoriler</span>
            </Link>

            <Link href="/cart" className="flex flex-col items-center text-gray-700 hover:text-pink-500 text-xs md:text-sm relative">
              <AiOutlineShoppingCart size={22} className="mb-0.5" />
              <span>Sepetim</span>
              <span className="absolute -top-2 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-2 md:px-4 overflow-x-auto">
          <div className="flex items-center space-x-1 md:space-x-6 py-2 text-xs md:text-sm whitespace-nowrap">
            {kategoriList.map((kategori: KategoriType, index) => (
              <Link 
                href={kategori.path} 
                key={index} 
                className={`px-2 py-1 hover:text-pink-500 relative group ${
                  kategori.highlight ? "font-semibold text-pink-500" : "text-gray-800"
                }`}
              >
                {kategori.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-200"></span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={toggleMenu}></div>
          <div className="relative w-4/5 max-w-sm bg-white h-full shadow-xl overflow-y-auto">
            <div className="flex items-center justify-between p-4 border-b bg-pink-50">
              <div className="flex items-center space-x-2">
                <IoPersonOutline size={20} className="text-pink-500" />
                <span className="font-medium">Hesabım</span>
              </div>
              <button className="text-gray-500" onClick={toggleMenu}>
                <RxCross2 size={24} />
              </button>
            </div>
            
            <div className="p-4">
              <div className="mb-6">
                <div className="flex justify-between mb-4">
                  <Link href="/login" className="bg-pink-500 text-white py-2 px-4 rounded-md text-sm font-medium w-[48%] text-center">
                    Giriş Yap
                  </Link>
                  <Link href="/register" className="border border-pink-500 text-pink-500 py-2 px-4 rounded-md text-sm font-medium w-[48%] text-center">
                    Üye Ol
                  </Link>
                </div>
                <Link href="/favorites" className="flex items-center space-x-2 py-2">
                  <PiHeartStraight size={18} />
                  <span>Favorilerim</span>
                </Link>
                <Link href="/orders" className="flex items-center space-x-2 py-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                  </svg>
                  <span>Siparişlerim</span>
                </Link>
              </div>
              
              <h3 className="font-semibold text-lg mb-2">Kategoriler</h3>
              <ul className="space-y-2">
                {kategoriList.map((kategori: KategoriType, index) => (
                  <li key={index}>
                    <Link 
                      href={kategori.path} 
                      className={`block py-2 border-b border-gray-100 ${
                        kategori.highlight ? "text-pink-500 font-medium" : ""
                      }`}
                    >
                      {kategori.name}
                    </Link>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-gray-200">
                <h3 className="font-semibold mb-2">Yardım & Destek</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="py-1">Sıkça Sorulan Sorular</div>
                  <div className="py-1">İletişim</div>
                  <div className="py-1">Hakkımızda</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;