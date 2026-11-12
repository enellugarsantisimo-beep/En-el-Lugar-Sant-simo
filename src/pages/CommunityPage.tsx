import React, { useState } from 'react';
import { PageId, CellGroup, Ministry } from '../types';
import {
  CHURCH_INFO,
  CELL_GROUPS,
  MINISTRIES_LIST,
  TESTIMONIALS_DATA,
} from '../data/churchData';
import {
  Users,
  MapPin,
  Clock,
  ArrowRight,
  MessageCircle,
  Heart,
  Smile,
  Flame,
  HeartHandshake,
  Music,
  Coffee,
  HandHeart,
  Check,
  Send,
  Sparkles,
  ChevronRight,
} from 'lucide-react';

interface CommunityPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({
  onNavigate,
  onOpenPrayerModal,
}) => {
  const [selectedZone, setSelectedZone] = useState<string>('Todas');
  const [activeStep, setActiveStep] = useState<number>(1);
  const [testimonyAuthor, setTestimonyAuthor] = useState('');
  const [testimonyArea, setTestimonyArea] = useState('');
  const [testimonyStory, setTestimonyStory] = useState('');
  const [testimonySubmitted, setTestimonySubmitted] = useState(false);
  const [selectedMinistryForVolunteer, setSelectedMinistryForVolunteer] = useState<Ministry | null>(null);
  const [volunteerSuccess, setVolunteerSuccess] = useState(false);

  const zones = ['Todas', 'Fontibón / Salitre', 'Calle 24 / Boyacá', 'Occidente', 'Norte', 'Virtual'];

  const filteredGroups = selectedZone === 'Todas'
    ? CELL_GROUPS
    : CELL_GROUPS.filter((g) => g.zone === selectedZone);

  const growthSteps = [
    {
      step: 1,
      title: 'Visítanos en la Reunión General',
      subtitle: 'Conoce la casa y el corazón de la iglesia',
      description: 'Asiste a cualquiera de nuestros servicios dominicales a las 10:30 a. m. en la Av. Calle 24 #72b-30. Tómate un café de bienvenida y experimenta la calidez de nuestra gente.',
      cta: 'Ver horarios de reunión',
      actionPage: 'eventos' as PageId,
    },
    {
      step: 2,
      title: 'Conéctate a un Grupo de Hogar',
      subtitle: 'Amistades sinceras y estudio cercano',
      description: 'La fe florece en círculos pequeños. En los grupos de conexión compartimos la mesa, oramos los unos por los otros y profundizamos las enseñanzas del domingo.',
      cta: 'Ver grupos disponibles abajo',
      actionPage: 'comunidad' as PageId,
    },
    {
      step: 3,
      title: 'Formación y Discipulado',
      subtitle: 'Cimentando tu vida en la Palabra',
      description: 'Participa en nuestros talleres bíblicos, ayunos congregacionales sabatinos y oraciones de la mañana para afianzar tus convicciones y carácter cristiano.',
      cta: 'Ir a contenidos y en vivo',
      actionPage: 'en-vivo' as PageId,
    },
    {
      step: 4,
      title: 'Sirve y Bendice a Otros',
      subtitle: 'Pon tus dones en acción',
      description: 'Dios te dio habilidades únicas. Súmate a nuestros ministerios de alabanza, niños, bienvenida o al proyecto social humanitario en Bocachica.',
      cta: 'Inscribirme como voluntario',
      actionPage: 'apoyo-social' as PageId,
    },
  ];

  const handleTestimonySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTestimonySubmitted(true);
  };

  const getMinistryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Smile':
        return <Smile className="w-5 h-5 text-amber-600" />;
      case 'Flame':
        return <Flame className="w-5 h-5 text-rose-600" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-pink-600" />;
      case 'Music':
        return <Music className="w-5 h-5 text-purple-600" />;
      case 'Coffee':
        return <Coffee className="w-5 h-5 text-amber-700" />;
      case 'HandHeart':
        return <HandHeart className="w-5 h-5 text-emerald-600" />;
      default:
        return <Users className="w-5 h-5 text-slate-700" />;
    }
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
            <span className="text-rose-600 font-semibold">Nuestra comunidad</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                Caminando Juntos
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                No fuiste creado para vivir la fe en soledad
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                En nuestra iglesia creemos en relaciones de pacto, apoyo mutuo en las dificultades y alegría compartida en las victorias. Conoce nuestros grupos, ministerios y espacios para florecer.
              </p>
            </div>

            <div className="lg:col-span-4 rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-slate-200">
              <img
                src={CHURCH_INFO.images.community}
                alt="Comunidad en compañerismo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. SIEMPRE HAY UN SIGUIENTE PASO: RUTA INTERACTIVA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            Tu Crecimiento
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900">
            Siempre hay un siguiente paso
          </h2>
          <p className="text-slate-600 text-sm">
            Sin importar en qué punto espiritual te encuentres hoy, Dios tiene preparado un nuevo nivel de bendición y madurez para ti.
          </p>
        </div>

        {/* Step Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {growthSteps.map((stepItem) => {
            const isCurrent = activeStep === stepItem.step;
            return (
              <button
                key={stepItem.step}
                onClick={() => setActiveStep(stepItem.step)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  isCurrent
                    ? 'border-rose-600 bg-rose-50/70 text-slate-900 shadow-sm ring-1 ring-rose-500'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-600'
                }`}
              >
                <span className="text-xs font-mono font-bold text-rose-600 block">
                  PASO 0{stepItem.step}
                </span>
                <span className="font-bold text-sm text-slate-900 block mt-1 line-clamp-1">
                  {stepItem.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Card */}
        {(() => {
          const current = growthSteps.find((s) => s.step === activeStep)!;
          return (
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Paso {current.step} de 4</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {current.title}
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                {current.description}
              </p>
              <div className="pt-2">
                <button
                  onClick={() => onNavigate(current.actionPage)}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-2"
                >
                  <span>{current.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          );
        })()}
      </section>

      {/* 3. GRUPOS DE CONEXIÓN EN BOGOTÁ Y VIRTUAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="grupos-conexion">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              Células y Círculos de Fe
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900">
              Grupos de Conexión en Hogares
            </h2>
            <p className="text-slate-600 text-sm">
              Nos reunimos en diferentes sectores de Bogotá y de forma virtual para estudiar la Biblia, orar y compartir una taza de café en confianza.
            </p>
          </div>

          <a
            href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=Hola,%20quisiera%20unirme%20a%20un%20Grupo%20de%20Conexi%C3%B3n.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Consultar por WhatsApp</span>
          </a>
        </div>

        {/* Zone Filter Buttons */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl max-w-xl">
          {zones.map((zone) => (
            <button
              key={zone}
              onClick={() => setSelectedZone(zone)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedZone === zone
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {zone}
            </button>
          ))}
        </div>

        {/* Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold text-rose-600 font-mono">
                    {group.zone}
                  </span>
                  <span
                    className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                      group.modality === 'Presencial'
                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                        : 'bg-sky-50 text-sky-700 border border-sky-200'
                    }`}
                  >
                    {group.modality}
                  </span>
                </div>

                <h3 className="text-base font-bold font-display text-slate-900">
                  {group.name}
                </h3>

                <div className="space-y-1.5 text-xs text-slate-600 pt-1">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Sector: {group.neighborhood}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-medium text-slate-800">{group.dayAndTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>Anfitriones: {group.host}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=Hola,%20quisiera%20asistir%20al%20${encodeURIComponent(
                    group.name
                  )}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Quiero unirme a este grupo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. MINISTERIOS ACTIVOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            Servicio y Dones
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900">
            Ministerios donde puedes servir y crecer
          </h2>
          <p className="text-slate-600 text-sm">
            Cada miembro tiene un lugar especial en el cuerpo de Cristo. Descubre las áreas activas en nuestra congregación.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MINISTRIES_LIST.map((min) => (
            <div
              key={min.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:border-slate-300 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center">
                    {getMinistryIcon(min.iconName)}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-slate-900 font-display">
                      {min.name}
                    </h3>
                    <span className="text-[11px] text-slate-500 font-medium">
                      {min.audience}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {min.summary}
                </p>

                <div className="space-y-1 text-xs text-slate-600 p-3 bg-stone-50 rounded-xl border border-stone-200">
                  <div className="font-semibold text-slate-800">
                    Horario habitual: {min.schedule}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Liderazgo: {min.leader}
                  </div>
                </div>

                <div className="space-y-1">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                    Actividades clave:
                  </span>
                  <ul className="text-xs text-slate-600 space-y-0.5">
                    {min.activities.slice(0, 3).map((act, i) => (
                      <li key={i} className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <button
                  onClick={() => setSelectedMinistryForVolunteer(min)}
                  className="w-full py-2 bg-stone-100 hover:bg-stone-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
                >
                  Quiero servir en {min.name}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MURO DE TESTIMONIOS Y ENVÍO */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              Vidas Restauradas
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900">
              Historias de lo que Dios está haciendo
            </h2>
            <p className="text-slate-600 text-sm">
              La gloria siempre es para Él. Estos son algunos testimonios de transformación en nuestra comunidad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <p className="font-serif italic text-sm text-slate-800 leading-relaxed">
                    «{t.excerpt}»
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {t.fullStory}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{t.author}</span>
                    <span className="text-slate-500 text-[11px]">{t.area}</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">{t.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Submission Form */}
          <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
            <h3 className="font-bold font-display text-lg text-slate-900 text-center">
              ¿Dios ha hecho algo especial en tu vida?
            </h3>
            <p className="text-xs text-slate-600 text-center">
              Comparte tu testimonio para edificar y llenar de esperanza la fe de otros hermanos.
            </p>

            {testimonySubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2 text-emerald-800">
                <Check className="w-6 h-6 mx-auto text-emerald-600" />
                <p className="font-bold text-sm">¡Gracias por tu testimonio!</p>
                <p className="text-xs text-emerald-700">
                  Ha sido recibido con bendición por el equipo ministerial para glorificar a Dios.
                </p>
              </div>
            ) : (
              <form onSubmit={handleTestimonySubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre completo"
                    value={testimonyAuthor}
                    onChange={(e) => setTestimonyAuthor(e.target.value)}
                    className="px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <input
                    type="text"
                    placeholder="Área (ej. Familia, Salud, Jóvenes)"
                    value={testimonyArea}
                    onChange={(e) => setTestimonyArea(e.target.value)}
                    className="px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder="Cuéntanos brevemente tu experiencia..."
                  value={testimonyStory}
                  onChange={(e) => setTestimonyStory(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar testimonio a la iglesia</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Volunteer Signup Modal for Ministry */}
      {selectedMinistryForVolunteer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200">
            <h4 className="font-bold font-display text-lg text-slate-900">
              Servir en {selectedMinistryForVolunteer.name}
            </h4>
            <p className="text-xs text-slate-600">
              Nos pondremos en contacto contigo para coordinar una breve charla inductiva con los pastores y coordinadores del área.
            </p>

            {volunteerSuccess ? (
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
                <Check className="w-6 h-6 text-emerald-600 mx-auto" />
                <p className="text-xs font-bold text-emerald-800">
                  ¡Postulación enviada con éxito!
                </p>
                <p className="text-[11px] text-emerald-700">
                  El coordinador de {selectedMinistryForVolunteer.name} te escribirá muy pronto.
                </p>
                <button
                  onClick={() => {
                    setVolunteerSuccess(false);
                    setSelectedMinistryForVolunteer(null);
                  }}
                  className="px-4 py-1.5 bg-slate-900 text-white text-xs rounded-lg mt-2 font-medium"
                >
                  Listo
                </button>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setVolunteerSuccess(true);
                }}
                className="space-y-3"
              >
                <input
                  type="text"
                  required
                  placeholder="Tu nombre completo"
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <input
                  type="tel"
                  required
                  placeholder="Número de WhatsApp"
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <textarea
                  rows={2}
                  placeholder="¿Por qué te gustaría servir en este ministerio? (Opcional)"
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMinistryForVolunteer(null)}
                    className="px-3 py-2 text-xs text-slate-500 hover:text-slate-800"
                  >
                    Cancelar
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg"
                  >
                    Enviar postulación
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
