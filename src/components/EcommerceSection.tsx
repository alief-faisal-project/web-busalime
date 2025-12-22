import { ShoppingBag } from 'lucide-react';
import shopeeLogo from '@/assets/shopee-logo.png';
import tokopediaLogo from '@/assets/tokopedia-logo.png';

const ecommerceStores = [
  {
    name: 'Shopee',
    logo: shopeeLogo,
    url: 'https://shopee.co.id',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
  },
  {
    name: 'Tokopedia',
    logo: tokopediaLogo,
    url: 'https://tokopedia.com',
    bgColor: 'bg-green-50',
    borderColor: 'border-green-200',
  },
];

const EcommerceSection = () => {
  return (
    <section id="ecommerce" className="py-16 md:py-24">
      <div className="container-section">
        <div className="text-center mb-12">
          <h2 className="section-title">Temukan Kami di E-Commerce!</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Dapatkan produk Busalime yang kamu butuhkan di official store Busalime 
            di e-commerce kesayangan Anda.
          </p>
        </div>

        <div className="flex justify-center gap-6 md:gap-8 max-w-xl mx-auto">
          {ecommerceStores.map((store, index) => (
            <a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`ecommerce-btn ${store.bgColor} ${store.borderColor} flex-col items-center justify-center py-6 px-8 animate-fade-in`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={store.logo}
                alt={`Beli di ${store.name}`}
                className="h-12 md:h-14 w-auto object-contain"
              />
            </a>
          ))}
        </div>

        {/* CTA Box */}
        <div className="mt-12 bg-primary rounded-2xl p-8 md:p-12 text-center text-primary-foreground">
          <ShoppingBag className="w-12 h-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl md:text-3xl font-bold mb-3">
            Belanja Sekarang!
          </h3>
          <p className="opacity-90 mb-6 max-w-lg mx-auto">
            Dapatkan penawaran spesial dan promo menarik dengan berbelanja di official store kami.
          </p>
          <a
            href="https://tokopedia.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-background text-primary font-semibold px-6 py-3 rounded-full hover:bg-background/90 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            Kunjungi Official Store
          </a>
        </div>
      </div>
    </section>
  );
};

export default EcommerceSection;
