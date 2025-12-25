import { useState, useRef, useEffect } from "react";
import {
  ShoppingBag,
  ArrowDown,
  ArrowDownLeft,
  ArrowDownRight,
} from "lucide-react";
import heroBanner from "@/assets/banner-hero.jpg";
import heroBannerMobile from "@/assets/banner-hero-mobile.jpg";
import shopeeLogo from "@/assets/shopee-logo.png";
import tokopediaLogo from "@/assets/tokopedia-logo.png";

const HeroBanner = () => {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLDivElement>(null);

  // CLICK OUTSIDE
  useEffect(() => {
    const handler = (e: MouseEvent | TouchEvent) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, []);

  const StoreButtons = () => (
    <div ref={buttonRef} className="flex flex-col items-center">
      {!open ? (
        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpen(true);
          }}
          className="
            uiverse-btn
            bg-white text-black
            md:bg-white/20 md:text-white
            backdrop-blur-md
            border border-white/40
            hover:bg-white
            md:hover:bg-white/30
          "
        >
          <ShoppingBag className="w-5 h-5" />
          Kunjungi Official Store
        </button>
      ) : (
        <div className="flex gap-4 animate-swap justify-center">
          <a
            href="https://shopee.co.id"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="uiverse-btn bg-white text-black"
          >
            <img src={shopeeLogo} className="w-5 h-5" />
            <span className="text-[#FF6E3A] font-semibold">Shopee</span>
          </a>

          <a
            href="https://tokopedia.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="uiverse-btn bg-white text-black"
          >
            <img src={tokopediaLogo} className="w-5 h-5" />
            <span className="text-[#00A44A] font-semibold">Tokopedia</span>
          </a>
        </div>
      )}
    </div>
  );

  return (
    <section className="relative w-full mt-12 overflow-hidden">
      {/* DESKTOP */}
      <div className="hidden md:block relative h-[80vh]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Busalime</h1>

          <p className="text-white/90 max-w-2xl mb-8">
            Cairan pencuci piring aroma jeruk nipis yang segar, efektif
            mengangkat lemak membandel, dan lembut di tangan.
          </p>

          <StoreButtons />
        </div>
      </div>

      {/* MOBILE */}
      <div className="md:hidden relative">
        <img
          src={heroBannerMobile}
          alt="Busalime"
          className="w-full h-auto object-cover"
        />

        {/* GRADIENT OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/50" />

        {/* CENTER CTA */}
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center text-white">
          <p className="font-extrabold text-lg leading-snug mb-2 drop-shadow">
            TEMUKAN BUSALIME DI <br />
            E-COMMERCE FAVORIT ANDA
          </p>

          {/* ARROWS */}
          {!open ? (
            <ArrowDown className="w-7 h-7 animate-bounce mb-4 drop-shadow" />
          ) : (
            <div className="flex gap-10 mb-4 animate-swap">
              <ArrowDownLeft className="w-7 h-7 animate-pulse drop-shadow" />
              <ArrowDownRight className="w-7 h-7 animate-pulse drop-shadow" />
            </div>
          )}

          <StoreButtons />
        </div>
      </div>

      {/* STYLE */}
      <style>{`
        .uiverse-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border-radius: 999px;
          font-weight: 700;
          transition: all 0.25s ease;
          box-shadow: 0 10px 25px rgba(0,0,0,0.25);
          white-space: nowrap;
        }

        .uiverse-btn:hover {
          transform: translateY(-2px);
        }

        .uiverse-btn:active {
          transform: scale(0.96);
        }

        @keyframes swap {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        .animate-swap {
          animation: swap 0.25s ease-out;
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;
