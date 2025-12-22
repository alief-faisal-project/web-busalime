import { ShoppingBag } from "lucide-react";
import shopeeLogo from "@/assets/shopee-logo.png";
import tokopediaLogo from "@/assets/tokopedia-logo.png";

const ecommerceStores = [
  {
    name: "Shopee",
    logo: shopeeLogo,
    url: "https://shopee.co.id",
    bgColor: "bg-[#FFF4EE]",
    borderColor: "border-[#FF6E3A]",
    textColor: "text-[#FF6E3A]",
    badgeBg: "bg-[#FF6E3A]/10",
    showSubtitle: false,
  },
  {
    name: "Tokopedia",
    logo: tokopediaLogo,
    url: "https://tokopedia.com",
    bgColor: "bg-[#F3FFF6]",
    borderColor: "border-[#00A44A]",
    textColor: "text-[#00A44A]",
    badgeBg: "bg-[#00A44A]/10",
    showSubtitle: false,
  },
];

const EcommerceSection = () => {
  return (
    <section id="ecommerce" className="py-16 md:py-24">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-title">Temukan Kami di E-Commerce!</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dapatkan produk Busalime yang kamu butuhkan di official store
            Busalime di e-commerce Favorit Anda.
          </p>
        </div>

        <div className="flex justify-center gap-6 md:gap-8 max-w-xl mx-auto">
          {ecommerceStores.map((store, index) => (
            <a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`uiverse-btn group ${store.bgColor} ${store.borderColor} border rounded-full flex items-center gap-2 py-2 px-3 shadow-sm hover:shadow-md transform hover:-translate-y-0.5 transition-all w-auto md:w-auto`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <img
                src={store.logo}
                alt={`Beli di ${store.name}`}
                className="h-8 w-8 object-contain rounded-md icon"
              />

              <div className="text-left">
                <div className={`font-semibold text-base ${store.textColor}`}>
                  {store.name}
                </div>
                {store.showSubtitle !== false && (
                  <div className="text-xs md:text-sm text-muted-foreground">
                    Official Store
                  </div>
                )}
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <ShoppingBag className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Belanja Sekarang!
          </h3>
          <p className="opacity-90 mb-6 max-w-lg mx-auto">
            Dapatkan penawaran spesial dan promo menarik dengan berbelanja di
            official store kami.
          </p>
          <a
            href="https://tokopedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="uiverse-btn inline-flex items-center gap-2 bg-background text-primary font-semibold px-6 py-3 rounded-full hover:bg-background/90 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            Kunjungi Official Store
          </a>
        </div>
      </div>

      {/* Inline CSS to reproduce Uiverse effect (kept local to this component) */}
      <style>{`
        .uiverse-btn {
          cursor: pointer;
          font-weight: 700;
          transition: all 0.18s;
          padding: 10px 20px;
          border-radius: 100px;
          border: 1px solid transparent;
          display: inline-flex;
          align-items: center;
          font-size: 15px;
        }
        .uiverse-btn:hover {
          filter: brightness(0.98);
        }
        /* reduce gap between logo and text: smaller gap + smaller margin on icon */
        .uiverse-btn > svg,
        .uiverse-btn > .icon,
        .uiverse-btn img.icon {
          max-height: 34px;
          margin-right: 6px;
          transition: transform 0.18s ease-in-out;
        }
        .uiverse-btn:hover > svg,
        .uiverse-btn:hover > .icon,
        .uiverse-btn:hover img.icon {
          transform: translateX(4px);
        }
        .uiverse-btn:active {
          transform: scale(0.95);
        }
      `}</style>
    </section>
  );
};

export default EcommerceSection;
