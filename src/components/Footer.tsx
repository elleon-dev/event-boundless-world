import { Facebook, Instagram } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-14">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <img src={logo} alt="Eventos sin Fronteras" className="h-10 mb-4 brightness-0 invert" />
            <p className="text-sm text-primary-foreground/70">
              Creamos bodas destino en los lugares más hermosos del Perú.
              Vive una experiencia única e irrepetible.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Eventos sin Fronteras</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Sobre nosotros</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Destinos</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Servicios</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Testimonios</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Planes Matrimoniales</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Paquetes</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Destinos</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Bodas íntimas</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-3">Contacto</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>+51 (1) 456-7890</li>
              <li>info@eventossinfronteras.com</li>
              <li>Lima, Perú</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs text-primary-foreground/50">
          © 2026 Eventos sin Fronteras. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
