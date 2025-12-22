import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logoImg from '@/assets/logo-busalime.png';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#');

  const navItems = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang Busalime', href: '#about' },
    { name: 'Produk', href: '#products' },
    { name: 'E-commerce', href: '#ecommerce' },
    { name: 'Kontak', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['contact', 'ecommerce', 'products', 'about'];
      let found = '';
      
      // Check if we're at the bottom of the page (for contact/footer section)
      const scrollPosition = window.scrollY + window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;
      
      if (pageHeight - scrollPosition < 100) {
        found = '#contact';
      } else {
        for (const sectionId of sections) {
          const element = document.getElementById(sectionId);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom > 100) {
              found = `#${sectionId}`;
              break;
            }
          }
        }
      }
      
      setActiveSection(found || '#');
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 bg-background z-50 shadow-sm">
      <nav className="container-section">
        <div className="flex items-center justify-between h-12">
          {/* Logo */}
          <a href="#" className="flex items-center flex-shrink-0">
            <img 
              src={logoImg} 
              alt="Busalime" 
              className="h-12 w-auto object-contain"
            />
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            <div className="flex items-center gap-6 lg:gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative text-foreground/80 hover:text-primary font-medium text-sm transition-colors group
                    ${activeSection === item.href ? 'text-primary' : ''}
                  `}
                >
                  {item.name}
                  <span 
                    className={`absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left
                      ${activeSection === item.href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
                    `}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Spacer for balance */}
          <div className="hidden md:block w-[100px]" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-12 left-0 right-0 bg-background border-t border-border shadow-lg animate-fade-in">
            <div className="flex flex-col py-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`px-6 py-2 text-foreground/80 hover:text-primary hover:bg-secondary text-sm font-medium transition-colors
                    ${activeSection === item.href ? 'text-primary border-l-2 border-primary' : ''}
                  `}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
