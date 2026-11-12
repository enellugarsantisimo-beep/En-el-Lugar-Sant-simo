import React, { useState } from 'react';
import { PageId } from '../types';
import { CHURCH_INFO, CHURCH_PILLARS } from '../data/churchData';
import {
  Heart,
  BookOpen,
  Users,
  Compass,
  CheckCircle2,
  HelpCircle,
  Clock,
  MapPin,
  ChevronRight,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenPrayerModal,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const faithStatements = [
    {
      title: 'Las Sagradas Escrituras',
      desc: 'Creemos que la Biblia es la Palabra inspirada e infalible de Dios, la norma suprema y suficiente para la fe, la doctrina y la vida diaria.',
      scripture: '2 Timoteo 3:16-17',
    },
    {
      title: 'Dios Trino y Eterno',
      desc: 'Creemos en un solo Dios vivo y verdadero, eterno y todopoderoso, subsistente en tres personas coeternas e iguales: el Padre, el Hijo y el Espíritu Santo.',
      scripture: 'Mateo 28:19',
    },
    {
      title: 'Jesucristo, Único Salvador',
      desc: 'Creemos en la deidad de Jesucristo, Su nacimiento virginal, Su vida sin pecado, Su muerte expiatoria en la cruz, Su resurrección corporal y Su regreso en gloria.',
      scripture: 'Hechos 4:12',
    },
    {
      title: 'Salvación por Gracia mediante la Fe',
      desc: 'La reconciliación con Dios no se obtiene por méritos humanos ni obras religiosas, sino únicamente por la gracia divina recibida a través de la fe en Jesús.',
      scripture: 'Efesios 2:8-9',
    },
    {
      title: 'La Iglesia como Cuerpo Vivo',
      desc: 'La iglesia es la asamblea de creyentes redimidos, llamada a congregarse en fraternidad, partir el pan, orar y llevar esperanza al mundo entero.',
      scripture: 'Hebreos 10:24-25',
    },
  ];

  const firstVisitQuestions = [
    {
      q: '¿Cómo debo vestir para asistir a la reunión?',
      a: 'Ven tal como eres. En En el Lugar Santísimo no tenemos código estricto de vestimenta. Algunas personas visten casual, otras más formales; lo verdaderamente importante es la disposición sincera del corazón delante de Dios.',
    },
    {
      q: '¿Tienen un espacio especial para los niños?',
      a: '¡Sí! Contamos con Santísimo Kids, un ministerio preparado con maestras capacitadas, material didáctico, seguridad y merienda para que tus hijos aprendan de Jesús mientras tú disfrutas la reunión general.',
    },
    {
      q: '¿Cuánto tiempo dura la Reunión General del domingo?',
      a: 'El servicio comienza a las 10:30 a. m. y tiene una duración aproximada de 1 hora y 45 minutos. Incluye un tiempo de alabanza y adoración congregacional, anuncios de familia y la enseñanza bíblica.',
    },
    {
      q: '¿Es obligatorio dar dinero o diezmar en mi primera visita?',
      a: 'Absolutamente no. Las ofrendas y diezmos son un acto voluntario de adoración y gratitud de quienes consideran esta su casa espiritual. Nunca habrá compromiso ni presión para ningún visitante.',
    },
    {
      q: '¿Hay parqueadero disponible?',
      a: 'Sí, disponemos de convenios y zonas de parqueo sobre la Av. Calle 24 y calles adyacentes vigiladas, además de fácil acceso en transporte público (SITP y TransMilenio Av. Rojas / El Tiempo Maloka).',
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. INDEPENDENT PAGE HERO & BREADCRUMBS */}
      <section className="bg-gradient-to-b from-stone-100 to-white pt-8 pb-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <button
              onClick={() => onNavigate('inicio')}
              className="hover:text-slate-900 transition-colors"
            >
              Inicio
            </button>
            <span>/</span>
            <span className="text-rose-600 font-semibold">Conócenos</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                Nuestra Identidad y Llamado
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                Una casa de oración y amor para toda la familia
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                En <strong>En el Lugar Santísimo</strong> somos una familia de fe plantada en Bogotá con la convicción de que nadie está demasiado lejos como para no ser alcanzado por el amor redentor de Jesús.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block uppercase">Nuestra Sede</span>
                  <span className="text-sm font-bold text-slate-900">Bogotá, Colombia</span>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                Av. Calle 24 #72b–30 (Modelia / Salitre). Puertas abiertas cada semana para recibirte.
              </p>
              <button
                onClick={() => onNavigate('eventos')}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
              >
                Planear mi visita
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. NUESTRA VISIÓN Y MISIÓN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block">
              Nuestra Misión
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Llevar a cada persona al corazón de Dios
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Guiar a hombres, mujeres, jóvenes y niños a experimentar un encuentro salvador y transformador con Jesucristo, equipándolos mediante la Palabra para influir positivamente en sus hogares, lugares de estudio, empresas y comunidades.
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-rose-50/70 border border-rose-200 text-slate-900 space-y-4 shadow-sm">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-widest block">
              Nuestra Visión
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Ser faro de esperanza y transformación
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              Consolidarnos como una comunidad espiritual de referencia en Bogotá y el territorio colombiano, reconocida por su genuina comunión con el Padre, la sólida formación de líderes con carácter piadoso y su generoso impacto humanitario en lugares necesitados como Bocachica.
            </p>
          </div>
        </div>
      </section>

      {/* 3. LOS 3 PILARES EN DETALLE */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            Columnas Fundamentales
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            Los tres pilares de nuestra vida comunitaria
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            No somos un programa de actividades vacías; cada servicio, grupo y esfuerzo se apoya firmemente en tres convicciones bíblicas.
          </p>
        </div>

        <div className="space-y-6">
          {CHURCH_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
            >
              <div className="lg:col-span-4 space-y-2">
                <span className="text-xs font-bold text-rose-600 font-mono tracking-wider">
                  PILAR {pillar.number}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-slate-500 uppercase tracking-wide">
                  {pillar.tagline}
                </p>
                <div className="pt-2">
                  <span className="inline-block p-3 rounded-xl bg-stone-50 border border-stone-200 text-xs font-serif italic text-slate-700">
                    {pillar.biblicalFoundation}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-8 space-y-4">
                <p className="text-sm text-slate-700 leading-relaxed">
                  {pillar.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                  {pillar.practicalApplication.map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 text-xs text-slate-600 bg-slate-50 p-2.5 rounded-xl border border-slate-100"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-rose-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. EN LO QUE CREEMOS: DECLARACIÓN DOCTRINAL */}
      <section className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">
              Fundamentos de Fe
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
              En lo que creemos
            </h2>
            <p className="text-stone-300 text-sm">
              Nuestra teología está anclada en el evangelio histórico y en la gracia incondicional revelada en Jesucristo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faithStatements.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80 space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-rose-400">
                    <ShieldCheck className="w-4 h-4" />
                    <h3 className="text-base font-bold text-white font-display">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-3 border-t border-slate-700">
                  <span className="font-serif italic text-xs text-rose-300">
                    {item.scripture}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GUÍA PARA TU PRIMERA VISITA (FAQ INTERACTIVO) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            ¿Primera vez con nosotros?
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900">
            Qué esperar en tu primera visita
          </h2>
          <p className="text-slate-600 text-sm">
            Sabemos que visitar una iglesia por primera vez puede generar inquietudes. Aquí te resolvemos las dudas más frecuentes para que vengas en total tranquilidad.
          </p>
        </div>

        <div className="space-y-3">
          {firstVisitQuestions.map((item, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-slate-200 bg-white overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-bold text-sm text-slate-900">
                    {item.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform ${
                      isOpen ? 'rotate-180 text-rose-600' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="p-6 rounded-2xl bg-rose-50 border border-rose-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-slate-900 text-sm">
              ¿Quieres avisarnos que vendrás este domingo?
            </h4>
            <p className="text-xs text-slate-600">
              Nuestro equipo de bienvenida te esperará en la entrada con un café caliente y te guiará con gusto.
            </p>
          </div>
          <button
            onClick={() => onNavigate('contacto')}
            className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-semibold shrink-0 transition-colors"
          >
            Avisar mi visita
          </button>
        </div>
      </section>
    </div>
  );
};
