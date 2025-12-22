import heroBanner from '@/assets/banner-hero.jpg';
import heroBannerMobile from '@/assets/banner-hero-mobile.jpg';

const HeroBanner = () => {
  return (
    <section className="relative w-full mt-12">
      {/* Desktop Banner */}
      <div className="hidden md:block">
        <img
          src={heroBanner}
          alt="Busalime - Cairan Pencuci Piring dengan Aroma Jeruk Nipis"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>

      {/* Mobile Banner */}
      <div className="md:hidden">
        <img
          src={heroBannerMobile}
          alt="Busalime - Cairan Pencuci Piring dengan Aroma Jeruk Nipis"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
