import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import logoBsc from '@/assets/logo-bsc.png';

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container-section py-8 md:py-16">
        {/* Mobile: Simple layout */}
        <div className="md:hidden space-y-6">
          {/* Logo & Description */}
          <div className="text-center">
            <img src={logoBsc} alt="PT. Busalime Sukses Cemerlang" className="h-12 w-auto mx-auto mb-3" />
            <p className="text-primary-foreground/80 text-sm">
              Cairan pencuci piring dengan aroma jeruk nipis segar
            </p>
          </div>

          {/* Contact Info - Compact */}
          <div className="flex flex-col items-center gap-2 text-sm">
            <a href="tel:0211234567" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
              <Phone className="w-4 h-4" />
              <span>(021) 123-4567</span>
            </a>
            <a href="mailto:info@busalime.id" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
              <Mail className="w-4 h-4" />
              <span>info@busalime.id</span>
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4 text-primary-foreground" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4 text-primary-foreground" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-4 h-4 text-primary-foreground" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center border-t border-primary-foreground/20 pt-4">
            <p className="text-primary-foreground/70 text-xs">
              © {new Date().getFullYear()} PT. Busalime Sukses Cemerlang
            </p>
          </div>
        </div>

        {/* Desktop: Full layout */}
        <div className="hidden md:block">
          <div className="grid grid-cols-4 gap-8">
            {/* Brand */}
            <div>
              <img src={logoBsc} alt="PT. Busalime Sukses Cemerlang" className="h-14 w-auto mb-4" />
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                PT.Busalime Sukses Cemerlang
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4">Menu</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                    Beranda
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a href="#products" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                    Produk
                  </a>
                </li>
                <li>
                  <a href="#ecommerce" className="text-primary-foreground/80 hover:text-primary-foreground text-sm transition-colors">
                    E-Commerce
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4">Kontak</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary-foreground" />
                  <span className="text-primary-foreground/80">
                    Jakarta, Indonesia
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Phone className="w-4 h-4 flex-shrink-0 text-primary-foreground" />
                  <span className="text-primary-foreground/80">
                    (021) 123-4567
                  </span>
                </li>
                <li className="flex items-center gap-3 text-sm">
                  <Mail className="w-4 h-4 flex-shrink-0 text-primary-foreground" />
                  <span className="text-primary-foreground/80">
                    info@busalime.id
                  </span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-bold text-lg mb-4">Ikuti Kami</h4>
              <div className="flex gap-3">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4 text-primary-foreground" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4 text-primary-foreground" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4 text-primary-foreground" />
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/20 mt-10 pt-6 text-center">
            <p className="text-primary-foreground/70 text-sm">
              © {new Date().getFullYear()} PT. Busalime Sukses Cemerlang. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
