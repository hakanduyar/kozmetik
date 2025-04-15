"use client"
import textClip from "@/utils/TextClip";
import { Rating } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Featured = ({ product }: { product: any }) => {
const router = useRouter()

    let productRating = product?.reviews?.reduce((acc: number, item: any) => acc + item.rating, 0) /product?.reviews?.length
  return (
    <div onClick={() => router.push(`product/${product.id}`)} className="w-[240px] cursor-pointer flex flex-col flex-1 shadow-lg p-2 rounded-lg">
      <div className="relative h-[150px]">
        <Image src={product.image} fill alt="" className="object-contain" />
      </div>
      <div className="text-center mt-2 space-y-1">
        <div>
          <p className="truncate w-full sm:w-[200px] mx-auto text-gray-800 text-sm">
            {textClip(product.name)}
          </p>
        </div>
        <Rating name="read-only" value={productRating} readOnly />
        <div className="text-pink-500 font-bold text-lg md:text-xl">
          {product.price} ₺
        </div>
      </div>
    </div>
  );
};

export default Featured;
