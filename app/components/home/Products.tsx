import { products } from "@/utils/Products"
import Heading from "../general/Heading"
import Featured from "./Featured"

const Products = () => {
  return (
    <div>
        <Heading text="Öne Çıkan Ürünler"/>
        <div className="flex items-center flex-wrap gap-3 md:gap-10">
            {
                products.map(product => (
                    <Featured key={product.id} product={product}/>
                ))
            }
        </div>
    </div>
  )
}

export default Products