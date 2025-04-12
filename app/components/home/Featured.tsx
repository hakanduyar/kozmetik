import { Rating } from "@mui/material"
import Image from "next/image"

const Featured = ({product}: {product: any}) => {
  return (
    <div className="w-[240px] cursor-pointer flex flex-col flex-1 shadow-lg p-2 rounded-lg">
        <div className="relative h-[150px]">
            <Image src={product.image} fill alt="" className="object-contain"/>
        </div>
        <div className="text-center mt-2 space-y-1">
            <div>{product.name}</div>
            <Rating name="read-only" value={4} readOnly />
            <div className="text-pink-500 font-bold text-lg md:text-xl">{product.price} ₺</div>

        </div>
    </div>
  )
}

export default Featured