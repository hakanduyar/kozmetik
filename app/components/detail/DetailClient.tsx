"use client";

import Image from "next/image";
import PageContainer from "../containers/PageContainer";
import Counter from "../general/Counter";
import { useState } from "react";
import { Rating } from "@mui/material";
import Button from "../general/Button";
import Heading from "../general/Heading";
import Comment from "./Comment";
import useCart from "@/hooks/useCart";

export type CardProductProps = {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
  image: string;
  inStock: boolean;
};

const DetailClient = ({ product }: { product: any }) => {
  const { productCartQty, addToBasket } = useCart();
  const [cardProduct, setCardProduct] = useState<CardProductProps>({
    id: product.id,
    name: product.name,
    description: product.description,
    price: product.price,
    quantity: 1,
    image: product.image,
    inStock: product.inStock,
  });

  const increaseFunc = () => {
    if (cardProduct.quantity == 10) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity + 1 }));
  };

  const decreaseFunc = () => {
    if (cardProduct.quantity == 1) return;
    setCardProduct((prev) => ({ ...prev, quantity: prev.quantity - 1 }));
  };

  const handleAddToCart = () => {
    if (!product.inStock) return;
    addToBasket(cardProduct);
  };

  let productRating =
    product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /
    product?.reviews?.length;

  const isOnSale = product.originalPrice && product.originalPrice > product.price;
  const discountPercentage = isOnSale
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="my-6 md:my-10">
      <PageContainer>
        <div className="flex items-center text-xs text-gray-500 mb-4">
          <span className="hover:text-pink-500 cursor-pointer">Ana Sayfa</span>
          <span className="mx-1">/</span>
          <span className="hover:text-pink-500 cursor-pointer">Kozmetik</span>
          <span className="mx-1">/</span>
          <span className="text-gray-700">{product.name}</span>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-4 md:p-6">
          <div className="block md:flex gap-8 lg:gap-12">
            <div className="w-full md:w-2/5 mb-6 md:mb-0">
              <div className="relative">
                <div className="relative h-[300px] md:h-[400px] w-full bg-gray-50 rounded-lg">
                  <Image 
                    src={product.image} 
                    fill 
                    alt={product.name}
                    className="object-contain p-4" 
                    priority
                  />
                </div>
                
                {isOnSale && (
                  <div className="absolute top-4 left-4 bg-pink-500 text-white text-xs font-bold px-2 py-1 rounded">
                    %{discountPercentage} İndirim
                  </div>
                )}
                
                {!product.inStock && (
                  <div className="absolute top-4 right-4 bg-gray-700 text-white text-xs font-bold px-2 py-1 rounded">
                    Tükendi
                  </div>
                )}
              </div>

              <div className="hidden md:flex mt-4 gap-2 justify-center">
                <div className="h-16 w-16 border border-pink-200 rounded hover:border-pink-500 cursor-pointer">
                  <div className="relative h-full w-full">
                    <Image src={product.image} fill alt="" className="object-contain p-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-3/5 space-y-4">
              <div className="text-sm text-pink-500 font-medium hover:underline cursor-pointer">
                {product.brand || "Marka Adı"}
              </div>
              
              <h1 className="text-xl md:text-2xl font-medium text-gray-800">
                {product.name}
              </h1>
              
              <div className="flex items-center gap-2">
                <Rating
                  name="read-only"
                  value={productRating || 0}
                  readOnly
                  size="small"
                />
                <span className="text-sm text-gray-500">
                  ({product?.reviews?.length || 0} Değerlendirme)
                </span>
              </div>
              
              <div className="py-3 border-y border-gray-100">
                {isOnSale && (
                  <div className="text-sm text-gray-500 line-through mb-1">
                    {product.originalPrice}₺
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <div className="text-2xl md:text-3xl font-bold text-pink-500">
                    {product.price}₺
                  </div>
                  {isOnSale && (
                    <div className="bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded">
                      %{discountPercentage} indirim
                    </div>
                  )}
                </div>
              </div>
              
              <div className="text-gray-600 text-sm">
                {product?.description}
              </div>
              
              <div className="flex items-center gap-2 py-2">
                <div className="text-sm font-medium">Stok Durumu:</div>
                {product.inStock ? (
                  <div className="text-sm text-green-600 font-medium flex items-center">
                    <span className="relative flex h-2 w-2 mr-1">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    Stokta Mevcut
                  </div>
                ) : (
                  <div className="text-sm text-red-500 font-medium">
                    Stokta Bulunmuyor
                  </div>
                )}
              </div>
              
              <div className="pt-4">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Counter
                    increaseFunc={increaseFunc}
                    decreaseFunc={decreaseFunc}
                    cardProduct={cardProduct}
                  />
                  <Button 
                    text={product.inStock ? "Sepete Ekle" : "Gelince Haber Ver"} 
                    onClick={handleAddToCart} 
                    className="flex-1"
                    disabled={!product.inStock}
                  />
                </div>
              </div>
              
              <div className="flex items-center gap-3 mt-4 py-3 px-4 bg-gray-50 rounded-lg text-sm">
                <div className="text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                  </svg>
                </div>
                <div>
                  <div className="font-medium text-gray-700">Bugün Sipariş Verirseniz</div>
                  <div className="text-gray-500">24 saat içinde kargoya verilir</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-sm p-4 md:p-6">
          <Heading text="Müşteri Değerlendirmeleri" />
          
          <div className="flex flex-col md:flex-row gap-6 py-4 border-b border-gray-100 mb-6">
            <div className="md:w-1/4 flex flex-col items-center justify-center">
              <div className="text-4xl font-bold text-gray-800">{productRating?.toFixed(1) || "0.0"}</div>
              <Rating
                name="read-only"
                value={productRating || 0}
                readOnly
                size="medium"
              />
              <div className="text-sm text-gray-500 mt-1">{product?.reviews?.length || 0} değerlendirme</div>
            </div>
            
            <div className="md:w-3/4 flex-1">
            </div>
          </div>
          
          <div className="space-y-6">
            {product?.reviews?.length > 0 ? (
              product.reviews.map((prd: any) => (
                <Comment key={prd.id} prd={prd} />
              ))
            ) : (
              <div className="text-center py-8 text-gray-500">
                Bu ürün için henüz değerlendirme bulunmuyor.
              </div>
            )}
          </div>
        </div>
      </PageContainer>
    </div>
  );
};

export default DetailClient;