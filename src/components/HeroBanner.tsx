import heroBanner from "@/assets/banner-hero.jpg";
import heroBannerMobile from "@/assets/banner-hero-mobile.jpg";

const HeroBanner = () => {
  return (
    <section className="relative w-full mt-12 overflow-hidden">
      {/* Desktop Banner */}
      <div className="hidden md:block relative h-[80vh]">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
          style={{
            backgroundImage: `url(${heroBanner})`,
            backgroundAttachment: "fixed",
          }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 tracking-tight">
            Busalime
          </h1>

          <p className="text-white/90 text-base lg:text-lg max-w-2xl mb-8 leading-relaxed">
            Cairan pencuci piring dengan aroma jeruk nipis yang segar, efektif
            mengangkat lemak membandel, dan lembut di tangan. Solusi bersih
            maksimal untuk kebutuhan dapur sehari-hari.
          </p>

          {/* Glass Button */}
          <a
            href="#products"
            className="
              backdrop-blur-md bg-white/20
              border border-white/40
              text-white font-semibold
              px-8 py-3 rounded-2xl
              shadow-lg
              hover:bg-white/30 transition
            "
          >
            Lihat Produk
          </a>
        </div>
      </div>

      {/* Mobile Banner (NO TEXT, NO BUTTON) */}
      <div className="md:hidden">
        <img
          src={heroBannerMobile}
          alt="Busalime - Cairan Pencuci Piring Aroma Jeruk Nipis"
          className="w-full h-auto object-cover"
          loading="eager"
        />
      </div>
    </section>
  );
};

export default HeroBanner;
