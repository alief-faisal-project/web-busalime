import { useState } from 'react';
import { Mail, X, Phone, MapPin, Clock, Send } from 'lucide-react';
import { toast } from 'sonner';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const contactInfo = [
    {
      icon: Phone,
      label: 'Telepon',
      value: '08123456789',
      href: 'tel:08123456789',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'busalime@info.com',
      href: 'mailto:busalime@info.com',
    },
    {
      icon: MapPin,
      label: 'Alamat',
      value: 'Indramayu, Indonesia',
      href: '#',
    },
    {
      icon: Clock,
      label: 'Jam Operasional',
      value: 'Senin - Sabtu, 08:00 - 17:00',
      href: '#',
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Pesan terkirim!');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
        aria-label="Hubungi Kami"
      >
        <Mail className="w-5 h-5" />
        <span className="font-semibold text-sm hidden sm:inline group-hover:inline transition-all">
          Contact Us
        </span>
      </button>

      {/* Contact Dialog Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-background rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto animate-scale-in">
            {/* Header */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b border-border">
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-foreground">Hubungi Kami</h2>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
              >
                <X className="w-5 h-5 text-foreground" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4 md:p-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                {/* Contact Info - Left Side */}
                <div className="space-y-4">
                  <h3 className="font-bold text-foreground text-lg">Informasi Kontak</h3>
                  <div className="space-y-3">
                    {contactInfo.map((item, index) => (
                      <a
                        key={index}
                        href={item.href}
                        className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors group"
                      >
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground">{item.label}</p>
                          <p className="text-sm font-medium text-foreground">{item.value}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

                {/* Contact Form - Right Side */}
                <div className="space-y-4">
                  <h3 className="font-bold text-foreground text-lg">Kirim Pesan</h3>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Nama
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-1.5">
                          Email
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          placeholder="name@example.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Subjek
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        required
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-1.5">
                        Pesan
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={4}
                        className="w-full px-4 py-2.5 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl font-medium transition-all duration-300 text-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Kirim Pesan</span>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WhatsAppButton;
