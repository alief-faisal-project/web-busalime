import { useState } from "react";
import { Mail, X, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const DARK_GREEN = "#14532d";
const DARK_GREEN_HOVER = "#166534";

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Phone,
      label: "Telepon",
      value: "08123456789",
      href: "tel:08123456789",
    },
    {
      icon: Mail,
      label: "Email",
      value: "busalime@info.com",
      href: "mailto:busalime@info.com",
    },
    {
      icon: MapPin,
      label: "Alamat",
      value: "Indramayu, Indonesia",
      href: "#",
    },
    {
      icon: Clock,
      label: "Jam Operasional",
      value: "Senin - Sabtu, 08:00 - 17:00",
      href: "#",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const to = "busalime@info.com";
    const subject = formData.subject || "";
    const body = `Nama: ${formData.name}
Email: ${formData.email}
Subjek: ${formData.subject}

${formData.message}`;

    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
      to
    )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.open(gmailLink, "_blank", "noopener,noreferrer");

    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsOpen(false);

    toast.success("Membuka Gmail...");
  };

  return (
    <>
      {/* FLOATING BUTTON */}
      <button
        onClick={() => setIsOpen(true)}
        className="
          fixed right-4 bottom-12 sm:bottom-6 sm:right-6 z-50
          flex items-center gap-2
          bg-[#14532d]
          text-white
          px-4 py-3
          rounded-full
          shadow-lg
          hover:bg-[#166534]
          hover:scale-105
          transition-all
        "
      >
        <Mail className="w-5 h-5 text-white" />
        <span className="hidden sm:inline font-semibold text-sm">
          Contact Us
        </span>
      </button>

      {/* OVERLAY */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          {/* MODAL */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-background rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto animate-scale-in"
          >
            {/* HEADER */}
            <div className="flex items-center justify-between p-4 md:p-6 border-b">
              <h2 className="text-xl md:text-2xl font-bold">Hubungi Kami</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 rounded-full bg-secondary hover:bg-secondary/80 flex items-center justify-center"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* CONTENT */}
            <div className="p-4 md:p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* LEFT */}
              <div className="space-y-4">
                <h3 className="font-bold text-lg">Informasi Kontak</h3>

                {contactInfo.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#14532d] flex items-center justify-center">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-xs opacity-70">{item.label}</p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </a>
                ))}
              </div>

              {/* RIGHT */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-bold text-lg">Kirim Pesan</h3>

                <input
                  required
                  placeholder="Nama"
                  className="input"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />

                <input
                  required
                  type="email"
                  placeholder="Email"
                  className="input"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />

                <input
                  required
                  placeholder="Subjek"
                  className="input"
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                />

                <textarea
                  required
                  rows={4}
                  placeholder="Pesan"
                  className="input resize-none"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />

                {/* SUBMIT BUTTON */}
                <button
                  type="submit"
                  className="
                    inline-flex items-center gap-2
                    bg-[#14532d]
                    text-white
                    px-6 py-2.5
                    rounded-xl
                    font-semibold
                    shadow-md
                    hover:bg-[#166534]
                    hover:shadow-lg
                    active:scale-95
                    transition-all duration-200
                  "
                >
                  <Send className="w-4 h-4 text-white" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* INPUT STYLE */}
      <style>{`
        .input {
          width: 100%;
          padding: 10px 14px;
          border-radius: 12px;
          border: 1px solid hsl(var(--border));
          background: hsl(var(--background));
          font-size: 14px;
          outline: none;
        }
        .input:focus {
          border-color: hsl(var(--primary));
          box-shadow: 0 0 0 2px hsl(var(--primary) / 0.15);
        }
      `}</style>
    </>
  );
};

export default WhatsAppButton;
