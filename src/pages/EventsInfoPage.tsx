import React, { useState } from 'react';
import { PageId, EventItem } from '../types';
import {
  CHURCH_INFO,
  CORE_MEETINGS,
  CALENDAR_EVENTS,
} from '../data/churchData';
import {
  Calendar as CalendarIcon,
  Clock,
  MapPin,
  Car,
  Bus,
  CheckCircle,
  ExternalLink,
  Download,
  Navigation,
  Shield,
  Coffee,
  Heart,
  ChevronRight,
} from 'lucide-react';

interface EventsInfoPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

export const EventsInfoPage: React.FC<EventsInfoPageProps> = ({
  onNavigate,
  onOpenPrayerModal,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [calendarDownloaded, setCalendarDownloaded] = useState<string | null>(null);

  const categories = ['Todos', 'Servicio', 'Ayuno', 'Oración', 'Social', 'Especial'];

  const filteredEvents = selectedCategory === 'Todos'
    ? CALENDAR_EVENTS
    : CALENDAR_EVENTS.filter((e) => e.category === selectedCategory);

  const handleDownloadIcs = (event: EventItem) => {
    // Generate an authentic iCalendar (.ics) string and trigger download
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//En el Lugar Santisimo//Bogota Events//ES
CALSCALE:GREGORIAN
BEGIN:VEVENT
SUMMARY:${event.title} - En el Lugar Santisimo
DESCRIPTION:${event.description}
LOCATION:${event.location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `${event.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setCalendarDownloaded(event.id);
    setTimeout(() => setCalendarDownloaded(null), 3000);
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. INDEPENDENT PAGE HERO */}
      <section className="bg-gradient-to-b from-stone-100 to-white pt-8 pb-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:text-slate-900 transition-colors"
            >
              Inicio
            </button>
            <span>/</span>
            <span className="text-rose-600 font-semibold">Información y Eventos</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                Agenda & Ubicación
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                Planifica tu visita y acompáñanos cada semana
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Conoce los horarios de nuestros servicios presenciales en Bogotá, conexiones virtuales y actividades especiales diseñadas para edificar a cada miembro de la familia.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Dirección Principal
              </span>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 text-sm block">Av. Calle 24 #72b–30</strong>
                  <span className="text-xs text-slate-500">Modelia / Salitre Occidental · Bogotá</span>
                </div>
              </div>
              <div className="pt-2">
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(
                    'Av. Calle 24 #72b-30, Bogota, Colombia'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Abrir en Google Maps / Waze</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REUNIONES REGULARES DE LA SEMANA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            Ritmo Congregacional
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900">
            Nuestros Encuentros Principales
          </h2>
          <p className="text-slate-600 text-sm">
            Tiempos diseñados para la adoración, la intercesión y el crecimiento en fraternidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_MEETINGS.map((meeting) => (
            <div
              key={meeting.id}
              className="p-6 sm:p-7 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border ${meeting.badgeColor}`}>
                    {meeting.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-semibold">{meeting.day}</span>
                </div>

                <div>
                  <h3 className="text-xl font-bold font-display text-slate-900">
                    {meeting.title}
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">{meeting.subtitle}</p>
                </div>

                <div className="p-3.5 bg-stone-50 rounded-2xl border border-stone-200 text-xs space-y-1.5">
                  <div className="flex items-center gap-2 font-bold text-slate-900">
                    <Clock className="w-4 h-4 text-rose-600" />
                    <span>{meeting.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600">
                    <MapPin className="w-4 h-4 text-slate-400" />
                    <span className="truncate">{meeting.locationOrPlatform}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {meeting.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                {meeting.meetLink ? (
                  <a
                    href={meeting.meetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 bg-sky-600 hover:bg-sky-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Entrar a Google Meet</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={() => onNavigate('contacto')}
                    className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <span>Confirmar mi asistencia</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. CALENDARIO DE EVENTOS Y ACTIVIDADES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              Calendario General
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900">
              Próximas Actividades y Eventos
            </h2>
            <p className="text-slate-600 text-sm">
              Filtra por tipo de actividad y sincroniza los eventos directamente en tu calendario de Google o Apple.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-stone-100 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  selectedCategory === cat
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Events Table / Cards */}
        <div className="space-y-4">
          {filteredEvents.map((ev) => (
            <div
              key={ev.id}
              className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-slate-300 transition-colors"
            >
              <div className="space-y-2 max-w-2xl">
                <div className="flex items-center gap-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-rose-50 text-rose-700 border border-rose-200 font-mono text-[11px] font-bold">
                    {ev.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500">
                    {ev.dateStr}
                  </span>
                  <span>·</span>
                  <span className="text-xs font-bold text-slate-800">
                    {ev.timeStr}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-display text-slate-900">
                  {ev.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {ev.description}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>{ev.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => handleDownloadIcs(ev)}
                  className="px-4 py-2.5 bg-stone-100 hover:bg-stone-200 text-slate-800 rounded-xl text-xs font-semibold flex items-center gap-1.5 transition-colors"
                >
                  {calendarDownloaded === ev.id ? (
                    <>
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Agregado a Calendario</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Sincronizar .ICS</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MAPA DE UBICACIÓN & GUÍA DE TRANSPORTE EN BOGOTÁ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10" id="mapa-ubicacion">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            Ubicación Estratégica
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900">
            ¿Cómo llegar a nuestra sede?
          </h2>
          <p className="text-slate-600 text-sm">
            Estamos ubicados sobre la Av. Calle 24 en Bogotá, con fáciles vías de acceso desde la Av. Boyacá, Av. La Esperanza y Av. Calle 26.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Interactive Street Map Visualizer */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-200 shadow-md p-6 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-rose-600" />
                <span className="font-bold text-slate-900 text-sm">
                  Mapa de Llegada · Av. Calle 24 #72b–30, Bogotá
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-mono">Modelia / Salitre</span>
            </div>

            {/* Stylized vector map illustration */}
            <div className="relative rounded-2xl bg-stone-100 border border-stone-200 aspect-[16/10] overflow-hidden p-6 flex flex-col justify-between">
              {/* Street grid visual elements */}
              <div className="absolute inset-0 opacity-40 pointer-events-none">
                {/* Horizontal main avenue */}
                <div className="absolute top-1/2 left-0 right-0 h-10 bg-stone-300 transform -translate-y-1/2 flex items-center justify-center">
                  <span className="text-[10px] font-mono tracking-widest text-stone-600 uppercase font-bold">
                    AV. CALLE 24 (AV. LA ESPERANZA)
                  </span>
                </div>
                {/* Vertical avenue: Boyacá */}
                <div className="absolute top-0 bottom-0 left-1/4 w-12 bg-stone-300 flex items-center justify-center">
                  <span className="text-[10px] font-mono tracking-widest text-stone-600 uppercase font-bold -rotate-90">
                    AV. BOYACÁ
                  </span>
                </div>
                {/* Diagonal Calle 26 */}
                <div className="absolute -top-10 -right-10 w-96 h-10 bg-stone-300 rotate-45 flex items-center justify-center">
                  <span className="text-[9px] font-mono text-stone-600 uppercase font-bold">
                    AV. CALLE 26 / EL DORADO
                  </span>
                </div>
              </div>

              {/* Landmark badges */}
              <div className="relative z-10 flex justify-between items-start">
                <div className="bg-white/95 px-3 py-1.5 rounded-lg shadow-sm border border-stone-200 text-[10px] font-bold text-slate-700">
                  Hacia Aeropuerto El Dorado ✈
                </div>
                <div className="bg-white/95 px-3 py-1.5 rounded-lg shadow-sm border border-stone-200 text-[10px] font-bold text-slate-700">
                  Estación TransMilenio El Tiempo Maloka
                </div>
              </div>

              {/* Church Pin Centerpiece */}
              <div className="relative z-10 flex items-center justify-center">
                <div className="bg-slate-900 text-white p-3.5 rounded-2xl shadow-xl border-2 border-rose-500 text-center animate-bounce">
                  <div className="w-8 h-8 rounded-full bg-rose-600 text-white flex items-center justify-center mx-auto mb-1">
                    <MapPin className="w-4 h-4 fill-current" />
                  </div>
                  <span className="font-bold text-xs font-display block">
                    En el Lugar Santísimo
                  </span>
                  <span className="text-[10px] text-stone-300 block">
                    Av. Calle 24 #72b–30
                  </span>
                </div>
              </div>

              <div className="relative z-10 flex justify-between items-end">
                <div className="bg-white/95 px-3 py-1.5 rounded-lg shadow-sm border border-stone-200 text-[10px] font-bold text-slate-700">
                  Av. Boyacá / Éxito Salitre
                </div>
                <div className="bg-white/95 px-3 py-1.5 rounded-lg shadow-sm border border-stone-200 text-[10px] font-bold text-slate-700">
                  Hacia Terminal de Transportes Salitre
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs pt-1">
              <span className="text-slate-500">Coordenadas GPS: 4.6657° N, 74.1203° O</span>
              <a
                href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=Hola,%20estoy%20en%20camino%20a%20la%20iglesia%20y%20necesito%20indicaciones%20para%20llegar.`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-700 font-semibold hover:underline"
              >
                Pedir guía en vivo por WhatsApp →
              </a>
            </div>
          </div>

          {/* Transportation Options Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-rose-600 font-bold text-sm">
                <Bus className="w-4 h-4" />
                <span>En TransMilenio y SITP</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Toma la Troncal Calle 26 hasta la estación <strong>Av. Rojas</strong> o <strong>El Tiempo Maloka</strong>. Desde allí puedes tomar alimentador hacia Modelia o caminar 10 minutos en dirección occidente. Diversas rutas SITP paran justo frente a la Calle 24.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Car className="w-4 h-4 text-amber-600" />
                <span>En Vehículo Particular & Parqueadero</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Acceso fluido por la calzada occidental de la Av. Boyacá o directamente por la Calle 24. Disponemos de <strong>convenio de parqueadero vigilado</strong> contiguo a las instalaciones para tu tranquilidad.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2">
              <div className="flex items-center gap-2 text-slate-900 font-bold text-sm">
                <Shield className="w-4 h-4 text-emerald-600" />
                <span>Accesibilidad & Familia</span>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                El templo cuenta con <strong>rampas de acceso sin barreras arquitectónicas</strong> para personas mayores o en silla de ruedas, además de espacio reservado para coches de bebé y baño familiar.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
