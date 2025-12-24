import { Mail, Phone, MapPin, Instagram } from "lucide-react";
import logoBsc from "@/assets/logo-bsc.png";

const ICON_COLOR = "text-[#14532d]"; // hijau tua
const ICON_BG = "bg-[#14532d]/10";

const MAIL_LINK =
  "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=busalime@info.com";

const INSTAGRAM_LINK = "https://www.instagram.com/busalime"; // ganti kalau beda

const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-black">
      <div className="container-section py-8 md:py-16">
        {/* ================= MOBILE ================= */}
        <div className="md:hidden space-y-6">
          {/* Logo & Description */}
          <div className="text-center">
            <img
              src={logoBsc}
              alt="PT. Busalime Sukses Cemerlang"
              className="h-12 w-auto mx-auto mb-3"
            />
            <p className="text-gray-700 text-sm">
              Cairan pencuci piring dengan aroma jeruk nipis segar
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center gap-2 text-sm">
            <a
              href="tel:0211234567"
              className="flex items-center gap-2 text-gray-700"
            >
              <Phone className={`w-4 h-4 ${ICON_COLOR}`} />
              <span>(021) 123-4567</span>
            </a>
            <a
              href={MAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-700"
            >
              <Mail className={`w-4 h-4 ${ICON_COLOR}`} />
              <span>busalime@info.com</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3">
            <a
              href={INSTAGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full ${ICON_BG} flex items-center justify-center hover:bg-[#14532d]/20 transition`}
            >
              <Instagram className={`w-4 h-4 ${ICON_COLOR}`} />
            </a>

            <a
              href={MAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-9 h-9 rounded-full ${ICON_BG} flex items-center justify-center hover:bg-[#14532d]/20 transition`}
            >
              <Mail className={`w-4 h-4 ${ICON_COLOR}`} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-gray-200 pt-4">
            <p className="text-gray-500 text-xs">
              © {new Date().getFullYear()} PT. Busalime Sukses Cemerlang
            </p>
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <img
                src={logoBsc}
                alt="PT. Busalime Sukses Cemerlang"
                className="h-12 w-auto mb-3"
              />
              <p className="text-gray-700 text-sm leading-relaxed">
                PT. Busalime Sukses Cemerlang
              </p>
            </div>

            {/* Menu */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-black">Menu</h4>
              <ul className="space-y-2">
                {[
                  { label: "Beranda", href: "#" },
                  { label: "Tentang Kami", href: "#about" },
                  { label: "Produk", href: "#products" },
                  { label: "E-Commerce", href: "#ecommerce" },
                ].map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-black text-sm transition"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontak */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-black">Kontak</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex gap-3">
                  <MapPin className={`w-4 h-4 mt-0.5 ${ICON_COLOR}`} />
                  <span className="text-gray-700">Indramayu, Indonesia</span>
                </li>
                <li className="flex gap-3">
                  <Phone className={`w-4 h-4 ${ICON_COLOR}`} />
                  <span className="text-gray-700">(021) 123-4567</span>
                </li>
                <li className="flex gap-3">
                  <Mail className={`w-4 h-4 ${ICON_COLOR}`} />
                  <span className="text-gray-700">busalime@info.com</span>
                </li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-black">Ikuti Kami</h4>
              <div className="flex gap-3">
                <a
                  href={MAIL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-9 h-9 rounded-full
                    bg-[#14532d]
                    flex items-center justify-center
                    hover:bg-[#166534]
                    transition-all duration-200
                  "
                >
                  <Mail className="w-4 h-4 text-white" />
                </a>

                <a
                  href={INSTAGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    w-9 h-9 rounded-full
                    bg-[#14532d]
                    flex items-center justify-center
                    hover:bg-[#166534]
                    transition-all duration-200
                  "
                >
                  <Instagram className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div className="border-t border-gray-200 mt-10 pt-6 text-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} PT. Busalime Sukses Cemerlang. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
