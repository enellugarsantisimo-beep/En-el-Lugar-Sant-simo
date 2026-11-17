import React, { useState } from 'react';
import { PageId } from '../types';
import { CHURCH_PILLARS } from '../data/churchData';
import { useLanguage } from '../context/LanguageContext';
import {
  Compass,
  CheckCircle2,
  ShieldCheck,
  ChevronDown,
  Sparkles,
  ArrowRight,
} from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
  onOpenPrayerModal,
}) => {
  const { t } = useLanguage();
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [activeStep, setActiveStep] = useState<number>(1);

  const growthSteps = [
    {
      step: 1,
      title: t('Visítanos en la Reunión General', 'Visit Us at the Sunday Gathering'),
      description: t(
        'Asiste a cualquiera de nuestros servicios dominicales a las 10:30 a. m. en la Av. Calle 24 #72b-30. Tómate un café de bienvenida y experimenta la calidez de nuestra casa.',
        'Join any of our Sunday services at 10:30 a. m. at Av. Calle 24 #72b-30. Enjoy a welcome coffee and experience the warmth of our house.'
      ),
      cta: t('Ver horarios de reunión', 'View meeting schedules'),
      actionPage: 'info' as PageId,
    },
    {
      step: 2,
      title: t('Conéctate a un Grupo de Vida', 'Connect to a Life Group'),
      description: t(
        'La fe florece en círculos pequeños. En los Grupos de vida compartimos la mesa, oramos los unos por los otros y profundizamos las enseñanzas del domingo.',
        'Faith flourishes in small circles. In Life Groups we share life together, pray for one another, and go deeper into Sunday teachings.'
      ),
      cta: t('Ir a Grupos de vida', 'Go to Life Groups'),
      actionPage: 'grupos-de-vida' as PageId,
    },
    {
      step: 3,
      title: t('Formación y Discipulado', 'Training & Discipleship'),
      description: t(
        'Participa en nuestros niveles de formación, ayunos congregacionales sabatinos y oraciones de la mañana para equiparte con herramientas esenciales en la Palabra.',
        'Participate in our training levels, Saturday congregational fasts, and morning prayers to equip yourself with essential tools in the Word.'
      ),
      cta: t('Ir a En Vivo y Oración', 'Go to Live & Prayer'),
      actionPage: 'en-vivo' as PageId,
    },
    {
      step: 4,
      title: t('Sirve y Bendice a Otros', 'Serve & Bless Others'),
      description: t(
        'Dios te dio habilidades únicas. Súmate a nuestros ministerios de alabanza, niños, bienvenida o al servicio misionero de nuestra congregación.',
        'God gave you unique gifts. Join our worship, kids, hospitality, or mission service teams.'
      ),
      cta: t('Solicitar ingreso al servicio (S.O.S)', 'Apply to serve (S.O.S)'),
      actionPage: 'sos' as PageId,
    },
  ];

  const faithStatements = [
    {
      title: t('Las Sagradas Escrituras', 'The Holy Scriptures'),
      desc: t(
        'Creemos que la Biblia es la Palabra inspirada e infalible de Dios, la norma suprema y suficiente para la fe, la doctrina y la vida diaria.',
        'We believe the Bible is the inspired and infallible Word of God, the supreme and sufficient standard for faith, doctrine, and daily living.'
      ),
      scripture: t('2 Timoteo 3:16-17', '2 Timothy 3:16-17'),
    },
    {
      title: t('Dios Trino y Eterno', 'The Triune & Eternal God'),
      desc: t(
        'Creemos en un solo Dios vivo y verdadero, eterno y todopoderoso, subsistente en tres personas coeternas e iguales: el Padre, el Hijo y el Espíritu Santo.',
        'We believe in one living and true God, eternal and almighty, subsisting in three coeternal and equal persons: the Father, the Son, and the Holy Spirit.'
      ),
      scripture: t('Mateo 28:19', 'Matthew 28:19'),
    },
    {
      title: t('Jesucristo, Único Salvador', 'Jesus Christ, Only Savior'),
      desc: t(
        'Creemos en la deidad de Jesucristo, Su nacimiento virginal, Su vida sin pecado, Su muerte expiatoria en la cruz, Su resurrección corporal y Su regreso en gloria.',
        'We believe in the deity of Jesus Christ, His virgin birth, sinless life, atoning death on the cross, bodily resurrection, and return in glory.'
      ),
      scripture: t('Hechos 4:12', 'Acts 4:12'),
    },
    {
      title: t('Salvación por Gracia mediante la Fe', 'Salvation by Grace Through Faith'),
      desc: t(
        'La reconciliación con Dios no se obtiene por méritos humanos ni obras religiosas, sino únicamente por la gracia divina recibida a través de la fe en Jesús.',
        'Reconciliation with God is not earned by human merit or religious works, but solely by divine grace received through faith in Jesus.'
      ),
      scripture: t('Efesios 2:8-9', 'Ephesios 2:8-9'),
    },
    {
      title: t('La Iglesia como Cuerpo Vivo', 'The Church as a Living Body'),
      desc: t(
        'La iglesia es la asamblea de creyentes redimidos, llamada a congregarse en fraternidad, partir el pan, orar y llevar esperanza al mundo entero.',
        'The church is the assembly of redeemed believers, called to gather in fellowship, break bread, pray, and carry hope to the world.'
      ),
      scripture: t('Hebreos 10:24-25', 'Hebrews 10:24-25'),
    },
  ];

  const firstVisitQuestions = [
    {
      q: t('¿Cómo debo vestir para asistir a la reunión?', 'How should I dress for the service?'),
      a: t(
        'Ven tal como eres. En En el Lugar Santísimo no tenemos código estricto de vestimenta. Lo verdaderamente importante es la disposición sincera del corazón delante de Dios.',
        'Come as you are. At En el Lugar Santísimo there is no strict dress code. What truly matters is a sincere heart before God.'
      ),
    },
    {
      q: t('¿Tienen un espacio especial para los niños?', 'Do you have a special program for children?'),
      a: t(
        '¡Sí! Contamos con Santísimo Kids, un ministerio preparado con maestras capacitadas, material didáctico y seguridad para que tus hijos aprendan de Jesús.',
        'Yes! We have Santísimo Kids, a dedicated ministry with trained teachers and safe spaces for children to learn about Jesus.'
      ),
    },
    {
      q: t('¿Cuánto tiempo dura la Reunión General del domingo?', 'How long is the Sunday General Service?'),
      a: t(
        'El servicio comienza a las 10:30 a. m. y tiene una duración aproximada de 1 hora y 45 minutos, incluyendo alabanza, adoración y la enseñanza bíblica.',
        'Service begins at 10:30 a. m. and lasts approximately 1 hour and 45 minutes, including praise, worship, and biblical teaching.'
      ),
    },
    {
      q: t('¿Hay parqueadero disponible?', 'Is parking available?'),
      a: t(
        'Sí, disponemos de convenios y zonas de parqueo sobre la Av. Calle 24 y calles adyacentes vigiladas, además de fácil acceso en SITP y TransMilenio.',
        'Yes, parking zones are available along Av. Calle 24 and nearby streets, along with easy public transit access.'
      ),
    },
  ];

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. INDEPENDENT PAGE HERO & BREADCRUMBS */}
      <section className="bg-gradient-to-b from-stone-100 to-white pt-8 pb-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <button
              onClick={() => onNavigate('nosotros')}
              className="hover:text-slate-900 transition-colors"
            >
              {t('Nosotros', 'About Us')}
            </button>
            <span>/</span>
            <span className="text-rose-600 font-semibold">
              {t('Ruta de Crecimiento', 'Growth Track')}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                {t('Formación y Discipulado', 'Training & Discipleship')}
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                {t(
                  'Ruta de Crecimiento: Tu viaje espiritual en nuestra casa',
                  'Growth Track: Your Spiritual Journey in Our House'
                )}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {t(
                  'En nuestra iglesia creemos firmemente en el poder de la formación y el crecimiento espiritual. Aquí te presentamos nuestros niveles de formación, pilares y fundamentos bíblicos.',
                  'In our church we firmly believe in spiritual training and growth. Explore our training steps, pillars, and biblical foundations.'
                )}
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block uppercase">
                    {t('Nuestra Sede', 'Our Location')}
                  </span>
                  <span className="text-sm font-bold text-slate-900">Bogotá, Colombia</span>
                </div>
              </div>
              <p className="text-xs text-slate-600">
                {t(
                  'Av. Calle 24 #72b–30 (Modelia / Salitre). Puertas abiertas cada semana para recibirte.',
                  'Av. Calle 24 #72b–30 (Modelia / Salitre). Open doors every week to welcome you.'
                )}
              </p>
              <button
                onClick={() => onNavigate('info')}
                className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
              >
                {t('Planear mi visita', 'Plan my visit')}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. INTERACTIVE 4-STEP GROWTH TRACK */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            {t('Niveles de Formación', 'Training Steps')}
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900">
            {t('Siempre hay un siguiente paso', 'There Is Always a Next Step')}
          </h2>
        </div>

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
                  {t('PASO', 'STEP')} 0{stepItem.step}
                </span>
                <span className="font-bold text-sm text-slate-900 block mt-1 line-clamp-1">
                  {stepItem.title}
                </span>
              </button>
            );
          })}
        </div>

        {(() => {
          const current = growthSteps.find((s) => s.step === activeStep)!;
          return (
            <div className="p-8 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>{t(`Paso ${current.step} de 4`, `Step ${current.step} of 4`)}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
                {current.title}
              </h3>
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                {current.description}
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={() => onNavigate(current.actionPage)}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-2"
                >
                  <span>{current.cta}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={onOpenPrayerModal}
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-stone-200 border border-slate-700 text-xs font-semibold rounded-xl transition-colors"
                >
                  {t('Pedir Oración', 'Request Prayer')}
                </button>
              </div>
            </div>
          );
        })()}
      </section>

      {/* 3. NUESTRA VISIÓN Y MISIÓN */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white space-y-4 shadow-xl">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block">
              {t('Nuestra Misión', 'Our Mission')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              {t('NUESTRA MISIÓN', 'OUR MISSION')}
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              {t(
                'Nuestra misión es encontrar y llevar a las personas a un encuentro íntimo y reconciliación genuina con el Padre y consigo mismos. Esto lo haremos a través del discipulado y formación, mediante el cual conduciremos al nuevo hijo e hija a la estatura del Señor Jesucristo, en carácter, verdad y amor. Nuestra meta es ayudarte a ser más como Jesucristo, viviendo con autenticidad, verdad y amor en tu vida diaria. Nos apasiona compartir la maravillosa presencia del Espíritu Santo e infundir una gran pasión por ella a través de una adoración profunda y sincera. En nuestra comunidad, nos centramos en la Biblia, en Jesucristo y en cumplir la Gran Comisión a través de misiones significativas para expandir el Reino de Dios. ¡Únete a nosotros en esta travesía espiritual llena de amor y propósito!',
                'Our mission is to find and lead people into an intimate encounter and genuine reconciliation with the Father and with themselves through discipleship and formation, helping you become more like Jesus Christ in character, truth, and love.'
              )}
            </p>
          </div>

          <div className="p-8 sm:p-10 rounded-3xl bg-rose-50/70 border border-rose-200 text-slate-900 space-y-4 shadow-sm">
            <span className="text-xs font-bold text-rose-700 uppercase tracking-widest block">
              {t('Nuestra Visión', 'Our Vision')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              {t('NUESTRA VISIÓN', 'OUR VISION')}
            </h2>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {t(
                'Soñamos con expandirnos y conquistar nuestra ciudad, nación y el mundo para Cristo, llevando el avivamiento del Espíritu Santo a través de la adoración sincera, el crecimiento en la Palabra y el uso de los dones espirituales. Visualizamos una comunidad comprometida en formar y equipar al cuerpo de Cristo, avanzando en el propósito eterno de Dios. Nuestro anhelo es cumplir la Gran Comisión, haciendo discípulos en todas las naciones, bautizándolos y enseñándoles a vivir conforme a los principios del Reino de Dios, transformando vidas y generaciones para Su gloria.',
                'We dream of expanding and winning our city, nation, and the world for Christ, bringing the revival of the Holy Spirit through sincere worship, growth in the Word, and spiritual gifts to transform lives and generations for His glory.'
              )}
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
            onClick={() => onNavigate('sos')}
            className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-xs font-semibold shrink-0 transition-colors"
          >
            {t('Avisar mi visita', 'Notify my visit')}
          </button>
        </div>
      </section>
    </div>
  );
};
