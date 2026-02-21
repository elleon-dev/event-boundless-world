import {useState} from "react";
import {Menu, X} from "lucide-react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import logo from "@/assets/logo.png";
import lightLogo from "@/assets/light logo.png";
import { useLocation } from "react-router-dom";

const navLinks = [
  "Reuniones",
  "Bodas",
  "Destinos",
  "Profesionales",
  "Agencias de Viajes",
  "Ofertas",
];

const profileNav = {
  label: "Perfil",
  to: "/perfil",
};

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="relative z-50">
      {/* Top bar */}
      {/*<div className="bg-brown-dark text-primary-foreground text-xs py-1.5">*/}
      {/*  <div className="container flex justify-between items-center">*/}
      {/*    <div className="flex items-center gap-4">*/}
      {/*      <a href="tel:+51984123456" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">*/}
      {/*        <Phone className="w-3 h-3" />*/}
      {/*        <span className="hidden sm:inline">+51 984 123 456</span>*/}
      {/*      </a>*/}
      {/*      <a href="mailto:info@bodasperu.com" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">*/}
      {/*        <Mail className="w-3 h-3" />*/}
      {/*        <span className="hidden sm:inline">info@bodasperu.com</span>*/}
      {/*      </a>*/}
      {/*    </div>*/}
      {/*    <div className="flex items-center gap-3">*/}
      {/*      <a href="#" aria-label="Facebook"><Facebook className="w-3.5 h-3.5" /></a>*/}
      {/*      <a href="#" aria-label="Instagram"><Instagram className="w-3.5 h-3.5" /></a>*/}
      {/*      <a href="#" aria-label="YouTube"><Youtube className="w-3.5 h-3.5" /></a>*/}
      {/*    </div>*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Main nav */}
      <nav className="absolute top-0 w-full">
        <div className="container flex items-center justify-between py-3">
          <a href="/" className="flex-shrink-0">
            <img src={isHome ? lightLogo : logo} alt="Eventos sin Fronteras" className="h-[7em]" />
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-5">
            {/*{navLinks.map((link) => (*/}
            {/*  <a*/}
            {/*    key={link}*/}
            {/*    href="#"*/}
            {/*    className="text-sm font-medium text-foreground hover:text-primary transition-colors"*/}
            {/*  >*/}
            {/*    {link}*/}
            {/*  </a>*/}
            {/*))}*/}
            {/*<a*/}
            {/*  href="#contacto"*/}
            {/*  className="ml-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-brown-dark transition-colors"*/}
            {/*>*/}
            {/*  Ponte en contacto*/}
            {/*</a>*/}
            {/* Perfil de usuario */}
            <div className="ml-4 flex items-center gap-2">
              <button
                className="ml-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:bg-brown-dark transition-colors"
                type="button"
              >
                Conviértete en proveedor
              </button>
              <a href={profileNav.to} aria-label="Ir a perfil">
                <Avatar>
                  <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Usuario" />
                  <AvatarFallback>US</AvatarFallback>
                </Avatar>
              </a>
            </div>
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
            {/* Perfil de usuario móvil */}
            <div className="mt-4 flex justify-center">
              <a href={profileNav.to} aria-label="Ir a perfil">
                <Avatar>
                  <AvatarImage src="https://randomuser.me/api/portraits/men/32.jpg" alt="Usuario" />
                  <AvatarFallback>US</AvatarFallback>
                </Avatar>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;