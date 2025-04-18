"use client"
import textClip from "@/utils/TextClip";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Featured = ({ product }: { product: any }) => {
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) / product?.reviews?.length;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation(); 
    console.log("Ürün sepete eklendi:", product.id);
  };

  return (
    <div 
      onClick={() => router.push(`product/${product.id}`)} 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-[240px] cursor-pointer flex flex-col bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden relative"
    >
      <div className="relative h-[180px] w-full bg-white p-4">
        <Image 
          src={product.image} 
          fill 
          alt={product.name} 
          className="object-contain transition-transform hover:scale-105 duration-300" 
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {!product.inStock && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
            Tükendi
          </div>
        )}
        
        {product.price < 100 && (
          <div className="absolute top-2 right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
            İndirim
          </div>
        )}
      </div>
      
      <div className="p-4 flex flex-col gap-2">
        <div className="text-xs text-gray-500 uppercase tracking-wider">{product.brand}</div>
        
        <h3 className="font-medium text-gray-800 line-clamp-2 h-12">
          {textClip(product.name, 40)}
        </h3>
        
        <div className="flex items-center">
          <Rating 
            name="read-only" 
            value={productRating || 0} 
            readOnly 
            size="small"
          />
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews?.length || 0})
          </span>
        </div>
        
        <div className="flex items-center justify-between mt-1">
          <div className="text-pink-600 font-bold text-lg">
            {product.price} ₺
          </div>
        </div>
      </div>

      <button 
        className={`absolute bottom-4 right-4 bg-pink-100 hover:bg-pink-200 text-pink-600 text-xs font-medium py-1 px-2 rounded-full transition-all duration-300 cursor-pointer ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        onClick={handleAddToCart}
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default Featured;