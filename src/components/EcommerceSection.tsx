import { useState, useRef, useEffect } from "react";
import { ShoppingBag } from "lucide-react";
import shopeeLogo from "@/assets/shopee-logo.png";
import tokopediaLogo from "@/assets/tokopedia-logo.png";
import ecommerceBg from "@/assets/ecommercesection.png";

const EcommerceSection = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // close when click outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section
      id="ecommerce"
      className="relative py-20 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${ecommerceBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* overlay */}
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 container-section">
        {/* HEADER */}
        <div className="text-center mb-14 text-white">
          <h2 className="section-title text-white">
            Temukan Kami di E-Commerce!
          </h2>
          <p className="text-white/90 max-w-2xl mx-auto">
            Dapatkan produk Busalime di official store e-commerce favorit Anda.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-white/15 backdrop-blur-md rounded-2xl p-8 md:p-12 text-center text-white shadow-xl border border-white/30">
          <ShoppingBag className="w-12 h-12 mx-auto mb-4 opacity-90" />

          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Belanja Sekarang!
          </h3>

          <p className="opacity-90 mb-6 max-w-lg mx-auto">
            Dapatkan promo menarik dengan berbelanja di official store kami.
          </p>

          {/* BUTTON AREA */}
          <div ref={wrapperRef} className="flex justify-center">
            {!open ? (
              /* KUNJUNGI OFFICIAL STORE (DARK GREEN) */
              <button
                onClick={() => setOpen(true)}
                className="
                  uiverse-btn
                  bg-[#14532d]
                  text-white
                  hover:bg-[#166534]
                "
              >
                <ShoppingBag className="w-5 h-5 text-white" />
                Kunjungi Official Store
              </button>
            ) : (
              /* SHOPEE & TOKOPEDIA (WHITE) */
              <div className="flex gap-4 animate-swap">
                <a
                  href="https://shopee.co.id"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uiverse-btn bg-white text-black"
                >
                  <img src={shopeeLogo} className="w-6 h-6" />
                  <span className="text-[#FF6E3A] font-semibold">Shopee</span>
                </a>

                <a
                  href="https://tokopedia.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="uiverse-btn bg-white text-black"
                >
                  <img src={tokopediaLogo} className="w-6 h-6" />
                  <span className="text-[#00A44A] font-semibold">
                    Tokopedia
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* STYLE */}
      <style>{`
        .uiverse-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 999px;
          font-weight: 700;
          transition: all 0.25s ease;
          box-shadow: 0 10px 25px rgba(0,0,0,0.15);
        }

        .uiverse-btn:hover {
          transform: translateY(-2px);
          filter: brightness(0.97);
        }

        .uiverse-btn:active {
          transform: scale(0.96);
        }

        @keyframes swap {
          from {
            opacity: 0;
            transform: scale(0.95);
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

export default EcommerceSection;
