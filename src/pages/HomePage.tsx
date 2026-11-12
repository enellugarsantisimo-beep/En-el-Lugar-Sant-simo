import React from 'react';
import { PageId } from '../types';
import {
  CHURCH_INFO,
  CORE_MEETINGS,
  CHURCH_PILLARS,
} from '../data/churchData';
import {
  Calendar,
  MapPin,
  Radio,
  Clock,
  ArrowRight,
  Heart,
  Video,
  ExternalLink,
  Sparkles,
  Users,
  Compass,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonationModal: () => void;
  onOpenPrayerModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenDonationModal,
  onOpenPrayerModal,
}) => {
  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 border border-rose-200/80 rounded-full text-xs font-semibold text-rose-700">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              <span>Comunidad Cristiana en Bogotá</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-slate-900 leading-[1.15] text-balance">
              Un lugar para encontrarte con{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600">
                Dios
              </span>{' '}
              y transformar tu vida
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              En <strong className="text-rose-600 font-semibold">En el Lugar Santísimo</strong> creemos que cada encuentro con Dios puede marcar el comienzo de una nueva historia. Somos una comunidad que busca crecer en Su presencia, fortalecer la fe y compartir Su amor con los demás.
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('conocenos')}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>Quiero visitarlos</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('en-vivo')}
                className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl text-sm font-semibold transition-all shadow-sm flex items-center gap-2"
              >
                <Radio className="w-4 h-4 text-rose-600" />
                <span>Servicio en Vivo</span>
              </button>

              <button
                onClick={onOpenPrayerModal}
                className="px-5 py-3.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/60 rounded-xl text-sm font-semibold transition-all"
              >
                Pedir Oración
              </button>
            </div>

            {/* 3 Quick operational badges directly from PDF */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-100/70 border border-stone-200">
                <Clock className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Domingos 10:30 a. m.</span>
                  <span className="text-[11px] text-slate-500">Reunión General familiar</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-100/70 border border-stone-200">
                <MapPin className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Av. Calle 24 #72b–30</span>
                  <span className="text-[11px] text-slate-500">Bogotá, Colombia</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-100/70 border border-stone-200">
                <Radio className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">Presencial y En Vivo</span>
                  <span className="text-[11px] text-slate-500">YouTube y TikTok</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Hero Visual */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] lg:aspect-[3/4] group">
              <img
                src={CHURCH_INFO.images.worship}
                alt="Alabanza y congregación en En el Lugar Santísimo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-rose-300 font-semibold">
                  Auditorio Principal · Domingos 10:30 AM
                </span>
                <p className="font-serif italic text-base text-stone-100">
                  «Donde el Espíritu del Señor está, allí hay libertad.»
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. BIENVENIDA: HAY UN LUGAR PARA TI */}
      <section className="relative bg-slate-900 text-white py-16 lg:py-20 overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Bienvenida</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white">
            Hay un lugar para ti
          </h2>

          <div className="space-y-4 text-stone-300 text-base sm:text-lg leading-relaxed font-light">
            <p>
              No importa si estás comenzando tu camino de fe, si llevas tiempo caminando con Dios o si simplemente estás buscando un espacio para acercarte a Él.
            </p>
            <p>
              Queremos que encuentres una comunidad donde puedas conocer más de Su amor, crecer espiritualmente y compartir experiencias con otras personas.
            </p>
            <p className="font-medium text-white">
              En <span className="text-rose-400">En el Lugar Santísimo</span> queremos caminar contigo y acompañarte en cada etapa de tu crecimiento.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('conocenos')}
              className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-md"
            >
              Quiero visitarlos
            </button>
            <button
              onClick={() => onNavigate('contacto')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-stone-200 font-semibold text-sm rounded-xl border border-slate-700 transition-colors"
            >
              Solicitar orientación
            </button>
          </div>
        </div>
      </section>

      {/* 3. NUESTRA ESENCIA: UNA COMUNIDAD CON UN PROPÓSITO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <span className="text-xs font-semibold text-rose-600 uppercase tracking-widest">
            Nuestra esencia
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Una comunidad con un propósito
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Nuestro deseo es que cada persona tenga un <strong className="text-slate-900">encuentro genuino con Dios</strong>, experimente Su amor y descubra una vida transformada por Jesús. Creemos en una fe que no se queda solamente en palabras, sino que se refleja en nuestra manera de vivir, amar, servir y relacionarnos con los demás.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {CHURCH_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div className="space-y-3">
                <span className="text-xs font-bold text-rose-600 font-mono tracking-wider">
                  PILAR {pillar.number}
                </span>
                <h3 className="text-lg font-bold font-display text-slate-900 tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100">
                <p className="font-serif italic text-xs text-slate-500">
                  {pillar.biblicalFoundation}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center pt-8">
          <button
            onClick={() => onNavigate('conocenos')}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-rose-600 border-b border-slate-900 hover:border-rose-600 pb-1 transition-all"
          >
            <span>Descubre nuestro propósito a profundidad</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. EN VIVO DESTACADO: DESDE LA FACILIDAD DE TU HOGAR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-800 bg-slate-950 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-500/30">
                <Radio className="w-3.5 h-3.5 animate-pulse text-rose-400" />
                <span>Estamos en VIVO cada Domingo</span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest block">
                  Información & Transmisiones
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
                  Desde la facilidad de tu hogar
                </h3>
              </div>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                <strong className="text-white">Servicio Domingo:</strong> Conéctate en vivo y vive cada reunión desde la comodidad de tu hogar si estás fuera de Bogotá o en imposibilidad de asistir físicamente.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('en-vivo')}
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-md flex items-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  <span>Ver servicio en vivo</span>
                </button>

                <a
                  href={CHURCH_INFO.googleMeetMorningPrayer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-stone-200 border border-slate-700 font-semibold text-sm rounded-xl transition-colors flex items-center gap-2"
                >
                  <span>Google Meet (Oración 7 AM)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] lg:h-full">
              <img
                src={CHURCH_INFO.images.devotional}
                alt="Devocional y transmisión dominical"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/40 to-transparent lg:block hidden" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent lg:hidden block" />
            </div>
          </div>
        </div>
      </section>

      {/* 5. SIEMPRE HAY UN SIGUIENTE PASO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-stone-100 to-rose-50/50 border border-slate-200 text-center space-y-5">
          <span className="text-xs font-semibold text-rose-600 uppercase tracking-widest">
            Sé parte de la familia
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            Siempre hay un siguiente paso
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            No importa dónde estés en tu caminar con Dios. <strong className="text-slate-900">Queremos acompañarte</strong> para que sigas creciendo, fortaleciendo tu fe y descubriendo el propósito que Él tiene para tu vida.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('comunidad')}
              className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
            >
              Quiero comenzar
            </button>
            <button
              onClick={() => onNavigate('contacto')}
              className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-sm rounded-xl transition-colors"
            >
              Contáctanos
            </button>
          </div>
        </div>
      </section>

      {/* 6. ENCUENTROS & SERVICIOS (3 CARDS FROM PDF) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold text-rose-600 uppercase tracking-widest">
              Participa · Encuentros & Servicio
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
              Tu fe también se vive participando
            </h2>
            <p className="text-slate-600 text-sm">
              Durante la semana contamos con diferentes espacios para reunirnos, buscar la presencia de Dios y fortalecer nuestra relación con Él.
            </p>
          </div>

          <button
            onClick={() => onNavigate('eventos')}
            className="text-sm font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 shrink-0"
          >
            <span>Ver calendario completo</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CORE_MEETINGS.map((meeting) => (
            <div
              key={meeting.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-md border ${meeting.badgeColor}`}>
                    {meeting.tag}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {meeting.day}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg font-bold font-display text-slate-900">
                    {meeting.title}
                  </h3>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    {meeting.subtitle}
                  </span>
                </div>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 text-xs space-y-1">
                  <div className="flex items-center gap-1.5 font-bold text-slate-900">
                    <Clock className="w-3.5 h-3.5 text-rose-600" />
                    <span>{meeting.time}</span>
                  </div>
                  <div className="text-slate-600 text-[11px]">
                    {meeting.locationOrPlatform}
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {meeting.description}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 flex items-center justify-between">
                {meeting.meetLink ? (
                  <a
                    href={meeting.meetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-sky-700 hover:text-sky-800 flex items-center gap-1"
                  >
                    <span>Entrar a Google Meet</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <button
                    onClick={() => onNavigate('eventos')}
                    className="text-xs font-semibold text-slate-900 hover:text-rose-600 flex items-center gap-1"
                  >
                    <span>Ver detalles y mapa</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. LIVES SAVED PROJECT: BOCACHICA TE NECESITA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white overflow-hidden border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                <Heart className="w-4 h-4 fill-current" />
                <span>Lives Saved Project · Obra Humanitaria</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                Bocachica te necesita
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                Impulsa la <strong className="text-white">educación, bienestar y oportunidades de avance</strong> a la población infantil y familias vulnerables de la isla de Bocachica.
              </p>

              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                Mediante voluntariado, donaciones o apadrinamientos puedes aportar a la misión, donde cada peso e intención cuenta para cambiar realidades y crear oportunidades reales de futuro.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={onOpenDonationModal}
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-md flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Quiero donar</span>
                </button>

                <button
                  onClick={() => onNavigate('apoyo-social')}
                  className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-stone-200 border border-slate-700 font-semibold text-sm rounded-xl transition-colors"
                >
                  Más información
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] lg:h-full">
              <img
                src={CHURCH_INFO.images.bocachica}
                alt="Niños beneficiarios de Bocachica te necesita"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. NO ESTÁS SOLO: ACOMPAÑAMIENTO PASTORAL */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <span className="text-xs font-semibold text-rose-600 uppercase tracking-widest block">
          Estamos para ti
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
          No estás solo
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          Todos necesitamos ser escuchados y acompañados. Queremos ofrecerte un espacio para recibir consejos, orientación desde la Palabra de Dios y oración. Estamos aquí para caminar contigo.
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('contacto')}
            className="px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-xl transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
          >
            <span>Recibe acompañamiento</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 9. FAMILY INVITATION & SCRIPTURE BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-stone-100 border border-stone-200 p-8 sm:p-12 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-stone-300">
              <img
                src={CHURCH_INFO.images.community}
                alt="Comunidad de fe En el Lugar Santísimo"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                ¡Hay un lugar para ti!
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                Dios quiere que te acerques a Él y que lo busques. Esperamos que pueda ser junto a nuestra familia. Ven, conócenos y comparte con nosotros este domingo.
              </p>

              <blockquote className="p-4 rounded-xl bg-white border border-stone-200 font-serif italic text-sm text-slate-800">
                «Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.»
                <footer className="text-xs font-sans text-rose-600 font-bold not-italic mt-1">
                  — Mateo 18:20
                </footer>
              </blockquote>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('eventos')}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  Ver ubicación y parqueadero
                </button>
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white hover:bg-stone-50 border border-stone-300 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
                >
                  Escribir al WhatsApp de la iglesia
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
