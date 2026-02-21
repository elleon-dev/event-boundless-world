
# Plan: Transformar el Banner en Buscador estilo Airbnb + Pagina de Resultados

## Resumen
Convertir el hero/banner actual en una experiencia de busqueda al estilo Airbnb, con un formulario de busqueda elegante centrado sobre la imagen de fondo. Al enviar el formulario, el usuario es redirigido a una pagina de resultados que muestra categorias como Reuniones, Bodas, Destinos, Profesionales, Agencias de Viajes, con algunas marcadas con ofertas.

## Cambios Principales

### 1. Redisenar el HeroSection con buscador estilo Airbnb
- Reemplazar el texto y botones actuales por un titulo centrado y un formulario de busqueda horizontal con campos:
  - **Que buscas?** (select: Bodas, Reuniones, Destinos, Profesionales, Agencias de Viaje)
  - **Donde?** (select o input con destinos)
  - **Cuando?** (input date)
  - **Invitados** (input numerico)
  - **Boton de busqueda** (icono de lupa, redondeado, color primario)
- El formulario tendra fondo blanco, bordes redondeados, sombra suave, dividido visualmente con separadores verticales (similar a la barra de Airbnb)
- En movil, los campos se apilaran verticalmente

### 2. Crear pagina de Resultados (`/resultados`)
- Nueva ruta en `App.tsx`
- Nueva pagina `src/pages/Resultados.tsx` que incluye:
  - Header y Footer existentes
  - Barra de filtros superiores (chips de categorias: Reuniones, Bodas, Destinos, Profesionales, Agencias de Viaje)
  - Grid de tarjetas de resultados con:
    - Imagen
    - Titulo y descripcion
    - Ubicacion
    - Precio (cuando aplique)
    - Badge de "Oferta" en algunos resultados (color dorado/accent)
    - Rating con estrellas
  - Datos estaticos/mock por ahora

### 3. Componentes nuevos a crear
- `src/components/SearchBar.tsx` - Barra de busqueda reutilizable estilo Airbnb
- `src/components/ResultCard.tsx` - Tarjeta de resultado individual
- `src/components/CategoryFilter.tsx` - Chips de filtro por categoria
- `src/pages/Resultados.tsx` - Pagina de resultados

### 4. Archivos a modificar
- `src/components/HeroSection.tsx` - Redisenar con el buscador centrado
- `src/App.tsx` - Agregar ruta `/resultados`

## Detalles Tecnicos

### SearchBar (barra de busqueda)
- Componente con `useNavigate` de react-router-dom para redirigir a `/resultados` con query params
- Diseño: contenedor blanco redondeado con `shadow-lg`, campos separados por bordes verticales, boton circular de busqueda color primario
- Responsive: horizontal en desktop, vertical en movil

### Pagina de Resultados
- Lee los query params para filtrar/mostrar los resultados
- Datos mock con ~12 items de diferentes categorias
- Algunas tarjetas tendran un badge "Oferta" con descuento
- Grid responsivo: 1 columna movil, 2 tablet, 3-4 desktop

### Estilos
- Se mantiene la paleta actual (marron/terracota/crema)
- Se aprovechan los componentes UI existentes (Card, Badge, Button)
- Las tarjetas de resultado tendran hover con sombra y escala sutil

### Flujo del usuario
1. Usuario llega al home y ve el banner con el buscador
2. Selecciona categoria, destino, fecha e invitados
3. Hace clic en buscar
4. Es redirigido a `/resultados?categoria=bodas&destino=cusco&fecha=2026-06-15&invitados=100`
5. Ve los resultados filtrados con tarjetas atractivas, algunas con ofertas destacadas
