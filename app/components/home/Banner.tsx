"use client"
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Banner: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  
  const banners = [
    {
      id: 1,
      src: "/Kozmetik-Banner.png",
      alt: "Kozmetik Ürünleri Banner",
      title: "Yeni Sezon Kozmetik",
      subtitle: "İndirimli fiyatlarla sınırlı süre",
      buttonText: "Keşfet",
      buttonLink: "/category/yeni",
      textColor: "text-white"
    },
    {
      id: 2,
      src: "/kozmetik_banner.jpg",
      alt: "Cilt Bakımı Banner",
      title: "Cildinize Özen Gösterin",
      subtitle: "Doğal içerikli cilt bakım ürünleri",
      buttonText: "İncele",
      buttonLink: "/category/cilt-bakimi",
      textColor: "text-white"
    },
    {
      id: 3,
      src: "/kisisel_bakim_banner-1.jpg",
      alt: "Kampanya Banner",
      title: "Bahar İndirimleri",
      subtitle: "Seçili ürünlerde %50'ye varan indirim",
      buttonText: "Fırsatları Gör",
      buttonLink: "/indirim",
      textColor: "text-white"
    }
  ];

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [currentSlide]);

  const startAutoPlay = () => {
    stopAutoPlay();
    autoPlayRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    }, 5000);
  };

  const stopAutoPlay = () => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    startAutoPlay();
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1));
    startAutoPlay();
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    stopAutoPlay();
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    
    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
    
    setTouchStart(null);
    setTouchEnd(null);
    startAutoPlay();
  };

  return (
    <div 
      className="relative w-full overflow-hidden rounded-lg"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative w-full h-36 sm:h-48 md:h-56 lg:h-64">
        <div className="relative w-full h-full">
          {banners.map((banner, index) => (
            <div 
              key={banner.id}
              className={`absolute top-0 left-0 w-full h-full transition-all duration-500 ease-in-out ${
                index === currentSlide 
                  ? "opacity-100 z-10" 
                  : "opacity-0 z-0"
              }`}
              aria-hidden={index !== currentSlide}
            >
              <div className="relative w-full h-full">
                <Image 
                  src={banner.src} 
                  alt={banner.alt}
                  fill
                  sizes="100vw"
                  priority={index === 0}
                  quality={85}
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />
              </div>
              
              <div className="absolute inset-0 flex flex-col justify-center px-4 sm:px-6 md:px-10 lg:px-16">
                <div className="max-w-md">
                  <h2 className={`text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ${banner.textColor} mb-1 md:mb-2 animate-fadeIn`}>
                    {banner.title}
                  </h2>
                  <p className={`text-xs sm:text-sm md:text-base ${banner.textColor} opacity-90 mb-2 md:mb-4 max-w-xs animate-fadeIn animation-delay-100`}>
                    {banner.subtitle}
                  </p>
                  <Link href={banner.buttonLink}>
                    <button className="bg-pink-500 hover:bg-pink-600 active:bg-pink-700 text-white text-xs sm:text-sm px-3 sm:px-4 py-1 sm:py-1.5 rounded-full transition-all duration-200 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 animate-fadeIn animation-delay-200">
                      {banner.buttonText}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-2 z-20">
          <button 
            className="bg-white/20 hover:bg-white/40 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
            onClick={prevSlide}
            aria-label="Önceki banner"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button 
            className="bg-white/20 hover:bg-white/40 text-white rounded-full w-6 h-6 sm:w-7 sm:h-7 flex items-center justify-center backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
            onClick={nextSlide}
            aria-label="Sonraki banner"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-4 sm:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
        
        <div className="absolute bottom-2 sm:bottom-3 left-1/2 -translate-x-1/2 flex space-x-1 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              className={`rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? "w-4 sm:w-5 h-1 bg-white" 
                  : "w-1 sm:w-1.5 h-1 bg-white/40 hover:bg-white/60"
              }`}
              onClick={() => {
                setCurrentSlide(index);
                startAutoPlay();
              }}
              aria-label={`Banner ${index + 1}`}
              aria-current={index === currentSlide}
            />
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out forwards;
        }
        .animation-delay-100 {
          animation-delay: 0.1s;
        }
        .animation-delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Banner;