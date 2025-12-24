import React, { useEffect, useRef, useState } from "react";
import { Sparkles, Leaf, BadgePercent } from "lucide-react";

// ...existing code...
const features = [
  {
    title: "Kualitas Terbaik",
    description: "Formula premium untuk hasil bersih maksimal",
    icon: Sparkles,
  },
  {
    title: "Aroma Segar",
    description: "Wangi jeruk nipis yang menyegarkan",
    icon: Leaf,
  },
  {
    title: "Hemat & Ekonomis",
    description: "Busa melimpah dengan sedikit sabun",
    icon: BadgePercent,
  },
];

const FeatureBar = () => {
  // new state & refs for mobile pagination
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const slideWidthRef = useRef<number>(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const computeSlideWidth = () => {
      const slides = Array.from(
        container.querySelectorAll("[data-slide]")
      ) as HTMLElement[];
      if (!slides.length) return;
      // If there are at least two slides, compute distance between starts to include gap
      if (slides.length >= 2) {
        const first = slides[0];
        const second = slides[1];
        slideWidthRef.current = second.offsetLeft - first.offsetLeft;
      } else {
        // fallback to offsetWidth
        slideWidthRef.current = slides[0].offsetWidth;
      }
    };

    computeSlideWidth();

    const onScroll = () => {
      const left = container.scrollLeft;
      const w = slideWidthRef.current || 1;
      const idx = Math.round(left / w);
      setActiveIndex(Math.max(0, Math.min(features.length - 1, idx)));
    };

    container.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", computeSlideWidth);

    // init
    onScroll();

    return () => {
      container.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", computeSlideWidth);
    };
  }, []);

  const scrollToIndex = (index: number) => {
    const container = scrollRef.current;
    if (!container) return;
    const slides = Array.from(
      container.querySelectorAll("[data-slide]")
    ) as HTMLElement[];
    const target = slides[index];
    if (target) {
      // scrollLeft to the child's offsetLeft so we align exactly
      container.scrollTo({ left: target.offsetLeft, behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  return (
    <section className="bg-secondary py-8 md:py-10">
      <div className="container-section">
        {/* Desktop: Grid layout */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="feature-card animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-background flex items-center justify-center border border-border">
                  <Icon className="w-5 h-5 text-foreground" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-lg mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mobile: Horizontal scroll */}
        <div className="md:hidden -mx-4 px-4">
          {/* added snap classes and extra bottom padding so dots tidak menutupi konten */}
          <div
            ref={scrollRef}
            className="overflow-x-auto scrollbar-hide pb-6 snap-x snap-mandatory"
          >
            <div className="flex gap-4 w-max">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    data-slide
                    // make each slide snap-start so scroll snaps one-per-item
                    className="flex-shrink-0 w-[260px] bg-background rounded-xl p-4 shadow-sm border border-border animate-fade-in snap-start"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-secondary flex items-center justify-center border border-border">
                        <Icon
                          className="w-5 h-5 text-foreground"
                          strokeWidth={1.5}
                        />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-sm">
                          {feature.title}
                        </h4>
                        <p className="text-muted-foreground text-xs">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pagination dots: kecil, di bawah bar, tidak menutupi konten */}
          <div className="flex items-center justify-center gap-3 mt-2">
            {features.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to feature ${idx + 1}`}
                onClick={() => scrollToIndex(idx)}
                className="focus:outline-none p-0"
              >
                {/* outer ring kecil */}
                <span
                  className={`inline-flex items-center justify-center rounded-full transition-colors ${
                    idx === activeIndex
                      ? "w-5 h-5 border border-green-800" // diturunkan dari border-2 ke border
                      : "w-5 h-5 border border-gray-100" // samakan ukuran untuk konsistensi
                  }`}
                  aria-hidden
                >
                  {/* inner dot lebih kecil */}
                  <span
                    className={`rounded-full transition-all ${
                      idx === activeIndex
                        ? "w-[10px] h-[10px] bg-green-800" // sedikit diperkecil agar ring tampak lebih tipis
                        : "w-[8px] h-[8px] bg-gray-200"
                    }`}
                  />
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureBar;
