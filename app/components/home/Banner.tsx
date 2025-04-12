"use client"
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Banner görselleri - bunlar sizin kendi görsellerinizle değiştirilmeli
  const banners = [
    {
      id: 1,
      src: "/Kozmetik-Banner.png",
      alt: "Kozmetik Ürünleri Banner",
      title: "Yeni Sezon Kozmetik Ürünleri",
      subtitle: "İndirimli fiyatlarla sınırlı süre için"
    },
    {
      id: 2,
      src: "/Cilt-Bakimi-Banner.png",
      alt: "Cilt Bakımı Banner",
      title: "Cildinize Özen Gösterin",
      subtitle: "Doğal içerikli cilt bakım ürünleri"
    },
    {
      id: 3,
      src: "/Kampanya-Banner.png",
      alt: "Kampanya Banner",
      title: "Büyük Bahar İndirimi",
      subtitle: "Seçili ürünlerde %50'ye varan indirimler"
    }
  ];

  // Otomatik kaydırma için
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [banners.length]);

  // Önceki slide'a geçiş
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  };

  // Sonraki slide'a geçiş
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-lg my-4">
      {/* Banner slider */}
      <div className="relative w-full h-full">
        {banners.map((banner, index) => (
          <div 
            key={banner.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
          >
            {/* Banner görsel */}
            <div className="relative w-full h-full">
              <Image 
                src={banner.src} 
                alt={banner.alt}
                fill
                sizes="100vw"
                priority={index === 0}
                className="object-cover object-center"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />
            </div>
            
            {/* Banner içerik */}
            <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 lg:px-16">
              <div className="max-w-lg">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2">{banner.title}</h2>
                <p className="text-sm md:text-base text-white/80 mb-6">{banner.subtitle}</p>
                <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-colors text-sm md:text-base">
                  İncele
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Navigasyon okları */}
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 md:p-3 text-white transition-colors z-10"
        onClick={prevSlide}
        aria-label="Önceki slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
        </svg>
      </button>
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 backdrop-blur-sm rounded-full p-2 md:p-3 text-white transition-colors z-10"
        onClick={nextSlide}
        aria-label="Sonraki slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
        </svg>
      </button>
      
      {/* Sayfa indikatörleri */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-white scale-110" 
                : "bg-white/40 hover:bg-white/60"
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;