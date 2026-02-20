import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = ["Resumen", "Bodas", "Destinos", "Profesionales", "Agencias de Viaje", "Clientes"];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground text-sm py-1.5">
        <div className="container flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="tel:+5114567890" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Phone className="w-3 h-3" />
              <span className="hidden sm:inline">+51 (1) 456-7890</span>
            </a>
            <a href="mailto:info@eventossinfronteras.com" className="flex items-center gap-1 hover:opacity-80 transition-opacity">
              <Mail className="w-3 h-3" />
              <span className="hidden sm:inline">info@eventossinfronteras.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="bg-card/95 backdrop-blur-md shadow-sm">
        <div className="container flex items-center justify-between py-3">
          <a href="/" className="flex-shrink-0">
            <img src={logo} alt="Eventos sin Fronteras" className="h-12" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contacto"
              className="ml-2 px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Contáctanos
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
                className="block text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {link}
              </a>
            ))}
            <a
              href="#contacto"
              className="inline-block px-5 py-2 rounded-full bg-accent text-accent-foreground text-sm font-semibold"
            >
              Contáctanos
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
