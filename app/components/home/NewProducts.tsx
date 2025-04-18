import { products } from "@/utils/Products";
import Heading from "../general/Heading";
import Featured from "./Featured";

const NewProducts = () => {
  const newProducts = products.slice(0, 4); 

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-white">
      <Heading text="Yeni Gelen Ürünler" />
      
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-6 justify-items-center">
        {newProducts.map(product => (
          <Featured 
            key={product.id} 
            product={product}
          />
        ))}
      </div>
      
      {newProducts.length === 0 && (
        <div className="text-center py-10 text-gray-500">
          Henüz yeni ürün bulunmamaktadır.
        </div>
      )}
      
      <div className="mt-10 text-center">
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-medium">
          Tüm Yeni Ürünleri Gör
        </button>
      </div>
    </div>
  );
};

export default NewProducts;