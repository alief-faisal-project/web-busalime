import lemonYellow from "@/assets/lemon-yellow.png";
import charcoalRight from "@/assets/charcoal-right.png";
import produkImg from "@/assets/produk.png";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Decorative Elements */}
      <img
        src={lemonYellow}
        alt=""
        className="absolute left-0 top-20 w-16 md:w-24 opacity-70 animate-float"
        aria-hidden="true"
      />
      <img
        src={charcoalRight}
        alt=""
        className="absolute right-0 bottom-10 w-32 md:w-48 opacity-80"
        aria-hidden="true"
      />

      <div className="container-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side - hidden on mobile, visible on lg */}
          <div className="hidden lg:flex justify-center lg:order-1">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full absolute -z-10 blur-3xl" />
              <img
                src={produkImg}
                alt="Busalime Cairan Pencuci Piring"
                className="w-64 md:w-80 h-auto drop-shadow-2xl animate-float"
              />
            </div>
          </div>

          {/* Content Side - shown on all sizes, appears first on mobile */}
          <div className="order-1 lg:order-2">
            <h2 className="section-title">Tentang Busalime</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Busalime hadir sebagai pilihan terbaik cairan pencuci piring untuk
              keluarga Indonesia. Dengan formula khusus dan aroma jeruk nipis
              yang menyegarkan, Busalime membantu membersihkan peralatan dapur
              Anda dengan mudah dan efektif.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Diperkaya dengan bahan-bahan berkualitas tinggi, Busalime tidak
              hanya membersihkan lemak membandel tapi juga menjaga kelembutan
              tangan Anda. Pilihan tepat untuk keluarga yang peduli kebersihan
              dan kesehatan.
            </p>
            <a
              href="#products"
              className="btn-primary inline-flex items-center gap-2 hover:gap-3 transition-all"
            >
              Lihat Produk Busalime
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
