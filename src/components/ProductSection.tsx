import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import produkImg from "@/assets/produk.png";
import lemonGreen from "@/assets/lemon-green.png";
import leafRight from "@/assets/leaf-right.png";

interface Product {
  id: number;
  name: string;
  size: string;
  description: string;
  shopeeUrl?: string; // ditambahkan untuk link Shopee
}

const products: Product[] = [
  {
    id: 1,
    name: "250ml",
    size: "250 ML",
    description: "Varian Jeruk Nipis",
    shopeeUrl: "https://shopee.co.id", // demo link
  },
  {
    id: 2,
    name: "450ml",
    size: "450 ML",
    description: "Varian Jeruk Nipis",
    shopeeUrl: "https://shopee.co.id", // demo link
  },
  {
    id: 3,
    name: "1000ml",
    size: "1000 ML",
    description: "Varian Jeruk Nipis",
    shopeeUrl: "https://shopee.co.id", // demo link
  },
];

const ProductSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 5000);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, []);

  const goToPrevious = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  const goToNext = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  const getProductPosition = (index: number) => {
    const diff = index - currentIndex;
    const normalizedDiff = (diff + products.length) % products.length;

    if (normalizedDiff === 0) return "center";
    if (normalizedDiff === 1) return "right";
    if (normalizedDiff === products.length - 1) return "left";
    return "hidden";
  };

  const currentProduct = products[currentIndex];

  return (
    <section
      id="products"
      className="py-16 md:py-24 bg-secondary relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <img
        src={lemonGreen}
        alt=""
        className="absolute left-10 top-10 w-12 md:w-16 opacity-60 hidden md:block"
        aria-hidden="true"
      />
      <img
        src={leafRight}
        alt=""
        className="absolute right-10 top-20 w-10 md:w-14 opacity-60 hidden md:block"
        aria-hidden="true"
      />

      <div className="container-section">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="section-title mb-3">Produk Kami</h2>
          <p className="text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
            Pilihan ukuran Busalime yang sesuai dengan kebutuhan Anda
          </p>
        </div>

        {/* Product Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div
            className="flex items-center justify-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Navigation Arrow - Left */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 md:-left-6 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-md flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Previous product"
            >
              <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
            </button>

            {/* Products Container */}
            <div className="relative h-[200px] md:h-[300px] lg:h-[350px] w-full flex items-center justify-center">
              {products.map((product, index) => {
                const position = getProductPosition(index);

                return (
                  <div
                    key={product.id}
                    onClick={() => {
                      if (autoPlayRef.current)
                        clearInterval(autoPlayRef.current);
                      // Jika klik pada produk yang sedang di tengah (center), buka link Shopee.
                      // Jika bukan, jadikan produk itu sebagai current (pindah ke tengah).
                      if (position === "center") {
                        if (product.shopeeUrl) {
                          window.open(
                            product.shopeeUrl,
                            "_blank",
                            "noopener,noreferrer"
                          );
                        }
                      } else {
                        setCurrentIndex(index);
                      }
                    }}
                    className={`absolute transition-all duration-700 ease-out cursor-pointer
                      ${
                        position === "center"
                          ? "z-20 scale-100 opacity-100"
                          : ""
                      }
                      ${
                        position === "left"
                          ? "z-10 -translate-x-16 md:-translate-x-28 lg:-translate-x-36 scale-[0.65] md:scale-75 opacity-30 grayscale-[30%]"
                          : ""
                      }
                      ${
                        position === "right"
                          ? "z-10 translate-x-16 md:translate-x-28 lg:translate-x-36 scale-[0.65] md:scale-75 opacity-30 grayscale-[30%]"
                          : ""
                      }
                      ${position === "hidden" ? "z-0 scale-50 opacity-0" : ""}
                    `}
                  >
                    <img
                      src={produkImg}
                      alt={product.name}
                      className="w-32 md:w-48 lg:w-56 h-auto drop-shadow-xl"
                    />
                  </div>
                );
              })}
            </div>

            {/* Navigation Arrow - Right */}
            <button
              onClick={goToNext}
              className="absolute right-0 md:-right-6 z-30 w-10 h-10 md:w-12 md:h-12 rounded-full bg-background shadow-md flex items-center justify-center hover:bg-secondary transition-colors"
              aria-label="Next product"
            >
              <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-foreground" />
            </button>
          </div>

          {/* Product Info */}
          <div className="text-center mt-6 md:mt-8">
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
              {currentProduct.name}
            </h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-md mx-auto">
              {currentProduct.description}
            </p>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (autoPlayRef.current) clearInterval(autoPlayRef.current);
                  setCurrentIndex(index);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? "bg-primary w-8"
                    : "bg-foreground/20 w-2.5 hover:bg-foreground/40"
                }`}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
