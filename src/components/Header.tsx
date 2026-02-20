import { useState } from "react";
import { Menu, X, Phone, Mail, Facebook, Instagram, Youtube } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = ["Reuniones", "Bodas", "Destinos", "Profesionales", "Agencias de Viajes", "Ofertas"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-brown-dark text-primary-foreground text-xs py-1.5">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+51984123456" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">+51 984 123 456</span>
            </a>
            <a href="mailto:info@bodasperu.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">info@bodasperu.com</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <a href="#" aria-label="Facebook"><Facebook className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="Instagram"><Instagram className="w-3.5 h-3.5" /></a>
            <a href="#" aria-label="YouTube"><Youtube className="w-3.5 h-3.5" /></a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card/95 backdrop-blur-md shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <a href="/" className="flex-shrink-0">
            <img src={logo} alt="Eventos sin Fronteras" className="h-10" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-brown-dark transition-colors"
            >
              Ponte en contacto
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="lg:hidden bg-card border-t border-border px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="block text-sm font-medium text-foreground hover:text-primary transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contacto"
              className="inline-block px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold"
            >
              Ponte en contacto
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;