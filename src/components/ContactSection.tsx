import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    nombre: "", apellido: "", email: "", telefono: "",
    tipoEvento: "", destino: "", fechaAprox: "", numInvitados: "",
    mensaje: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("¡Gracias! Nos pondremos en contacto contigo pronto.");
  };

  return (
    <section id="contacto" className="py-20 bg-background">
      <div className="container max-w-3xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display italic font-bold text-primary mb-4">
            Comienza a Planear tu Boda
          </h2>
          <p className="text-muted-foreground">
            Estaremos encantados de hacer realidad la boda de tus sueños.
            Contáctanos hoy y comienza a planear un día mágico e irrepetible.
          </p>
        </div>

        <div className="bg-card rounded-xl shadow-md p-6 md:p-10 border border-border">
          <h3 className="text-lg font-display italic font-semibold text-primary mb-6">Solicita tu Consulta Gratuita</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input name="apellido" placeholder="Apellido" value={formData.apellido} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select name="tipoEvento" value={formData.tipoEvento} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Tipo de evento</option>
                <option>Boda</option>
                <option>Pedida de mano</option>
                <option>Renovación de votos</option>
                <option>Luna de miel</option>
                <option>Otro</option>
              </select>
              <select name="destino" value={formData.destino} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                <option value="">Destino de interés</option>
                <option>Cusco</option>
                <option>Valle Sagrado</option>
                <option>Arequipa</option>
                <option>Lima</option>
                <option>Playas del Norte</option>
              </select>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input name="fechaAprox" type="date" placeholder="Fecha aproximada" value={formData.fechaAprox} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
              <input name="numInvitados" placeholder="Número de invitados" value={formData.numInvitados} onChange={handleChange}
                className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <textarea name="mensaje" rows={4} placeholder="Cuéntanos sobre tu evento soñado..." value={formData.mensaje} onChange={handleChange}
              className="w-full px-4 py-2.5 rounded-lg border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-ring resize-none" />
            <button type="submit" className="w-full py-3 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:bg-brown-dark transition-colors">
              Enviar Solicitud
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;