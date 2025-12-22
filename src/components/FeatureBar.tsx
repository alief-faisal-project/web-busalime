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
      const first = container.querySelector(
        "[data-slide]"
      ) as HTMLElement | null;
      const style = getComputedStyle(container);
      const gap = parseFloat(style.columnGap || style.gap || "0");
      slideWidthRef.current = first ? first.offsetWidth + gap : 276;
    };

    computeSlideWidth();

    const onScroll = () => {
      const left = container.scrollLeft;
      const idx = Math.round(left / (slideWidthRef.current || 1));
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
    const left = index * (slideWidthRef.current || 0);
    container.scrollTo({ left, behavior: "smooth" });
    setActiveIndex(index);
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
          <div ref={scrollRef} className="overflow-x-auto scrollbar-hide pb-2">
            <div className="flex gap-4 w-max">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    data-slide
                    className="flex-shrink-0 w-[260px] bg-background rounded-xl p-4 shadow-sm border border-border animate-fade-in"
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
          <div className="flex items-center justify-center gap-2 mt-2">
            {features.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Go to feature ${idx + 1}`}
                onClick={() => scrollToIndex(idx)}
                className="focus:outline-none"
              >
                {/* kecil: outer ring + inner dot */}
                <span
                  className={`flex items-center justify-center rounded-full transition-colors ${
                    idx === activeIndex
                      ? "w-6 h-6 border-2 border-green-600"
                      : "w-6 h-6 border border-green-100"
                  }`}
                  aria-hidden
                >
                  <span
                    className={`rounded-full transition-all ${
                      idx === activeIndex
                        ? "w-[10px] h-[10px] bg-green-600"
                        : "w-[10px] h-[10px] bg-green-600"
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
