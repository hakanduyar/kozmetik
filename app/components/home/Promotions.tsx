import Heading from "../general/Heading";
import Image from "next/image";
const imageUrls = [
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&q=80&w=240&h=240",
  "https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&fit=crop&q=80&w=240&h=240",
  "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&q=80&w=240&h=240",
  "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80&w=240&h=240"
];

const Promotions = () => {
  const promotions = [
    {
      id: 1,
      title: "Sezon Sonu İndirim",
      discount: "%40'a varan",
      category: "Makyaj Ürünleri",
      image: imageUrls[0]
    },
    {
      id: 2,
      title: "Yeni Üyelere Özel",
      discount: "%25 İndirim",
      category: "Tüm Ürünlerde",
      image: imageUrls[1]
    },
    {
      id: 3,
      title: "Hafta Sonu Fırsatı",
      discount: "2 Al 1 Öde",
      category: "Cilt Bakım Serileri",
      image: imageUrls[2]
    },
    {
      id: 4,
      title: "Süper Fiyat",
      discount: "149₺'den Başlayan",
      category: "Parfümler",
      image: imageUrls[3] 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 bg-gray-50">
      <Heading text="Kampanyalar" />
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {promotions.map(promo => (
          <div 
            key={promo.id}
            className="bg-white rounded-lg overflow-hidden shadow hover:shadow-md transition-shadow duration-300 cursor-pointer border border-gray-100"
          >
            <div className="relative h-40 bg-pink-50 flex items-center justify-center">
              <div className="relative h-32 w-32">
                <Image 
                  src={promo.image}
                  alt={promo.title}
                  fill
                  sizes="(max-width: 640px) 50vw, 25vw"
                  className="object-contain"
                  priority={true} 
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-pink-500 py-1 px-2">
                <p className="text-white text-xs font-medium text-center">{promo.discount}</p>
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-sm font-bold text-gray-800 mb-1">{promo.title}</h3>
              <p className="text-xs text-gray-600">{promo.category}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <button className="bg-black hover:bg-gray-900 text-white px-6 py-2 rounded-lg transition-colors duration-300 font-medium">
          Tüm Kampanyaları Keşfet
        </button>
      </div>
    </div>
  );
};

export default Promotions;