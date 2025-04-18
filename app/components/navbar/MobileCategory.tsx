"use client"
import Link from "next/link";
import { kategoriList, KategoriType } from "../home/Kategori";

const MobileCategory = () => {
  return (
    <ul className="space-y-3 text-gray-700">
      {kategoriList.map((kategori: KategoriType, index) => (
        <li 
          key={index} 
          className={`hover:text-pink-500 ${kategori.highlight ? "font-medium text-pink-500" : ""}`}
        >
          <Link href={kategori.path}>{kategori.name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MobileCategory;