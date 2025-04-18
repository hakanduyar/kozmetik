"use client"
import Link from "next/link";

export const kategoriList = [
    {
      name: "Yeni Gelenler",
      path: "/category/yeni",
      highlight: true
    },
    {
      name: "Makyaj",
      path: "/category/makyaj"
    },
    {
      name: "Cilt Bakımı",
      path: "/category/cilt-bakimi"
    },
    {
      name: "Parfüm",
      path: "/category/parfum"
    },
    {
      name: "Saç Bakımı",
      path: "/category/sac-bakimi"
    },
    {
      name: "İndirim",
      path: "/indirim",
      highlight: true
    },
    {
      name: "Vücut Bakımı",
      path: "/category/vucut-bakimi"
    },
    {
      name: "Erkek Bakımı",
      path: "/category/erkek-bakimi"
    },
    {
      name: "Organik Ürünler",
      path: "/category/organik"
    },
    {
      name: "Manikür & Pedikür",
      path: "/category/manikur-pedikur"
    },
    {
      name: "Markalar",
      path: "/markalar"
    }
  ];

export interface KategoriType {
  name: string;
  path: string;
  highlight?: boolean;
}

const Kategori = () => {
  return (
    <div className="flex items-center space-x-1 md:space-x-6 py-2 text-xs md:text-sm overflow-x-auto whitespace-nowrap px-2 md:px-0">
      {kategoriList.map((kategori: KategoriType, index) => (
        <Link 
          href={kategori.path} 
          key={index} 
          className={`px-2 py-1 hover:text-orange-500 relative group ${
            kategori.highlight ? "font-semibold text-orange-500" : "text-gray-800"
          }`}
        >
          {kategori.name}
          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-500 group-hover:w-full transition-all duration-200"></span>
        </Link>
      ))}
    </div>
  );
};

export default Kategori;