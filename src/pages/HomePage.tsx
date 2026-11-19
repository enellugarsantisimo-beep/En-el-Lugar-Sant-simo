import React from 'react';
import { PageId } from '../types';
import { HOME_SECTION_DATA } from '../data/churchData';
import { useLanguage } from '../context/LanguageContext';
import { motion, useMotionValue, useSpring } from 'motion/react';
import {
  MapPin,
  Radio,
  Clock,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

interface InteractiveParallaxCardProps {
  imageSrc: string;
  imageAlt: string;
  overlayClassName?: string;
  containerClassName?: string;
  children: React.ReactNode;
}

const InteractiveParallaxCard: React.FC<InteractiveParallaxCardProps> = ({
  imageSrc,
  imageAlt,
  overlayClassName = 'bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/60',
  containerClassName = '',
  children,
}) => {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const rawScale = useMotionValue(1.03);

  const springConfig = { stiffness: 130, damping: 20, mass: 0.45 };
  const x = useSpring(rawX, springConfig);
  const y = useSpring(rawY, springConfig);
  const scale = useSpring(rawScale, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const normX = (e.clientX - rect.left) / rect.width - 0.5;
    const normY = (e.clientY - rect.top) / rect.height - 0.5;
    rawX.set(-normX * 38);
    rawY.set(-normY * 28);
    rawScale.set(1.09);
  };

  const handleMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
    rawScale.set(1.03);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden ${containerClassName}`}
    >
      <motion.img
        src={imageSrc}
        alt={imageAlt}
        referrerPolicy="no-referrer"
        style={{ x, y, scale }}
        className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none will-change-transform"
      />
      <div className={`absolute inset-0 pointer-events-none ${overlayClassName}`} />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenPrayerModal,
}) => {
  const { lang, t } = useLanguage();

  return (
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. HERO SECTION (IMAGEN DE FONDO CON MOVIMIENTO AL PASAR EL CURSOR) */}
      <section className="relative pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <InteractiveParallaxCard
          imageSrc={HOME_SECTION_DATA.heroBackgroundImage}
          imageAlt={
            lang === 'es'
              ? HOME_SECTION_DATA.heroBackgroundAltEs
              : HOME_SECTION_DATA.heroBackgroundAltEn
          }
          overlayClassName="bg-gradient-to-r from-slate-950/90 via-slate-950/75 to-slate-950/55 after:content-[''] after:absolute after:inset-0 after:bg-gradient-to-t after:from-slate-950/85 after:via-transparent after:to-slate-950/40"
          containerClassName="rounded-3xl shadow-2xl border border-slate-800 bg-slate-950"
        >
          {/* Editable Hero Copy & Actions Overlaid on Background */}
          <div className="p-6 sm:p-10 lg:p-16 space-y-7 max-w-4xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-semibold text-rose-200">
              <span className="w-2 h-2 rounded-full bg-rose-500" />
              <span>
                {lang === 'es'
                  ? HOME_SECTION_DATA.eyebrowEs
                  : HOME_SECTION_DATA.eyebrowEn}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-white leading-[1.12] text-balance drop-shadow-sm">
              {lang === 'es'
                ? HOME_SECTION_DATA.titleStartEs
                : HOME_SECTION_DATA.titleStartEn}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-300">
                {lang === 'es'
                  ? HOME_SECTION_DATA.titleHighlightEs
                  : HOME_SECTION_DATA.titleHighlightEn}
              </span>
              {lang === 'es'
                ? HOME_SECTION_DATA.titleEndEs
                : HOME_SECTION_DATA.titleEndEn}
            </h1>

            <p className="text-sm sm:text-lg text-stone-100/95 leading-relaxed max-w-3xl">
              {lang === 'es'
                ? HOME_SECTION_DATA.introEs
                : HOME_SECTION_DATA.introEn}
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={() => onNavigate('ruta-de-crecimiento')}
                className="px-6 py-3.5 bg-rose-600 hover:bg-rose-500 text-white rounded-xl text-sm font-semibold transition-all shadow-lg flex items-center gap-2 cursor-pointer"
              >
                <span>{t('Ruta de Crecimiento', 'Growth Track')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={() => onNavigate('en-vivo')}
                className="px-5 py-3.5 bg-white/95 hover:bg-white text-slate-900 rounded-xl text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <Radio className="w-4 h-4 text-rose-600" />
                <span>{t('En Vivo', 'Live')}</span>
              </button>

              <button
                type="button"
                onClick={onOpenPrayerModal}
                className="px-5 py-3.5 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 rounded-xl text-sm font-semibold transition-all cursor-pointer"
              >
                {t('Pedir Oración', 'Request Prayer')}
              </button>
            </div>

            {/* 3 Quick operational badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-white/15">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/15">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">
                    {t('Domingos 10:30 a. m.', 'Sundays 10:30 a. m.')}
                  </span>
                  <span className="text-[11px] text-stone-300">
                    {t('Reunión General familiar', 'Family General Service')}
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/15">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">Av. Calle 24 #72b–30</span>
                  <span className="text-[11px] text-stone-300">Bogotá, Colombia</span>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-950/60 backdrop-blur-md border border-white/15">
                <Radio className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-white block">
                    {t('Presencial y En Vivo', 'In-Person & Live')}
                  </span>
                  <span className="text-[11px] text-stone-300">YouTube y TikTok</span>
                </div>
              </div>
            </div>
          </div>
        </InteractiveParallaxCard>
      </section>

      {/* 2. NUESTRA MISIÓN */}
      <section className="relative bg-slate-900 text-white py-16 lg:py-20 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t('Propósito de Casa', 'Our House Purpose')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white">
            {t('NUESTRA MISIÓN', 'OUR MISSION')}
          </h2>

          <div className="space-y-4 text-stone-300 text-base sm:text-lg leading-relaxed font-light">
            <p>
              {t(
                'Nuestra misión es encontrar y llevar a las personas a un encuentro íntimo y reconciliación genuina con el Padre y consigo mismos. Esto lo haremos a través del discipulado y formación, mediante el cual conduciremos al nuevo hijo e hija a la estatura del Señor Jesucristo, en carácter, verdad y amor.',
                'Our mission is to find and lead people into an intimate encounter and genuine reconciliation with the Father and with themselves. We do this through discipleship and training, guiding each new son and daughter to the stature of the Lord Jesus Christ in character, truth, and love.'
              )}
            </p>
            <p>
              {t(
                'Nuestra meta es ayudarte a ser más como Jesucristo, viviendo con autenticidad, verdad y amor en tu vida diaria. Nos apasiona compartir la maravillosa presencia del Espíritu Santo e infundir una gran pasión por ella a través de una adoración profunda y sincera.',
                'Our goal is to help you become more like Jesus Christ, living with authenticity, truth, and love in your daily life. We are passionate about sharing the wonderful presence of the Holy Spirit and inspiring a deep passion for Him through sincere and heartfelt worship.'
              )}
            </p>
            <p className="font-medium text-white">
              {t(
                'En nuestra comunidad, nos centramos en la Biblia, en Jesucristo y en cumplir la Gran Comisión a través de misiones significativas para expandir el Reino de Dios. ¡Únete a nosotros en esta travesía espiritual llena de amor y propósito!',
                'In our community, we focus on the Bible, on Jesus Christ, and on fulfilling the Great Commission through meaningful missions to expand the Kingdom of God. Join us on this spiritual journey full of love and purpose!'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 3. NUESTRA VISIÓN Y PALABRA PROFÉTICA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-semibold text-rose-600 uppercase tracking-widest">
            {t('Hacia donde vamos', 'Where We Are Going')}
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900 tracking-tight">
            {t('NUESTRA VISIÓN', 'OUR VISION')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            {t(
              'Soñamos con expandirnos y conquistar nuestra ciudad, nación y el mundo para Cristo, llevando el avivamiento del Espíritu Santo a través de la adoración sincera, el crecimiento en la Palabra y el uso de los dones espirituales. Visualizamos una comunidad comprometida en formar y equipar al cuerpo de Cristo, avanzando en el propósito eterno de Dios. Nuestro anhelo es cumplir la Gran Comisión, haciendo discípulos en todas las naciones, bautizándolos y enseñándoles a vivir conforme a los principios del Reino de Dios, transformando vidas y generaciones para Su gloria.',
              'We dream of expanding and winning our city, nation, and the world for Christ, bringing the revival of the Holy Spirit through sincere worship, growth in the Word, and the use of spiritual gifts. We envision a community committed to training and equipping the body of Christ, advancing in God’s eternal purpose. Our longing is to fulfill the Great Commission, making disciples in all nations, baptizing them, and teaching them to live according to the principles of the Kingdom of God, transforming lives and generations for His glory.'
            )}
          </p>
        </div>

        {/* Palabra Profética Highlight Card (Puntos 1 al 5 con imagen interactiva de fondo) */}
        <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-xl max-w-5xl mx-auto bg-white">
          <InteractiveParallaxCard
            imageSrc={HOME_SECTION_DATA.propheticBackgroundImage}
            imageAlt={
              lang === 'es'
                ? HOME_SECTION_DATA.propheticBackgroundAltEs
                : HOME_SECTION_DATA.propheticBackgroundAltEn
            }
            overlayClassName="bg-gradient-to-b from-slate-950/85 via-slate-950/75 to-slate-950/88"
            containerClassName="bg-slate-950 text-white"
          >
            <div className="p-8 sm:p-10 space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/15 pb-6">
                <div className="space-y-1.5">
                  <span className="text-xs font-bold text-rose-400 uppercase tracking-widest block">
                    {t('Palabra Profética', 'Prophetic Word')}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold font-display text-white tracking-tight">
                    {t(
                      'PALABRA PROFÉTICA AÑO HEBREO 5785-5786 (2025-2026)',
                      'PROPHETIC WORD HEBREW YEAR 5785-5786 (2025-2026)'
                    )}
                  </h3>
                </div>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 shrink-0 self-start md:self-center">
                  {t('Basada en Zacarías 4:1-14', 'Based on Zechariah 4:1-14')}
                </span>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h4 className="text-lg font-bold font-display text-white">
                    {t(
                      '1. Un año para recordar quién es el único Dios.',
                      '1. A year to remember who the one true God is.'
                    )}
                  </h4>
                  <p className="text-sm sm:text-base text-stone-100/95 leading-relaxed">
                    <strong className="font-serif italic text-amber-200">
                      {t(
                        '“Un año para recordar que solo hay un Dios y un Señor.”',
                        '“A year to remember that there is only one God and one Lord.”'
                      )}
                    </strong>{' '}
                    {t(
                      'La tierra misma dará testimonio con sus sacudidas, para derribar la altivez de los hombres, y muchos levantarán la mirada al cielo, reconociendo que solo del Señor viene la ayuda. Él es el Creador que sostiene el mundo con su amor desde el principio, y ese amor es para salvación.',
                      'The earth itself will bear witness with its shaking, to bring down human pride, and many will lift their eyes to heaven, recognizing that help comes only from the Lord. He is the Creator who sustains the world with His love from the beginning, and that love brings salvation.'
                    )}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/15 space-y-2">
                  <h4 className="text-lg font-bold font-display text-white">
                    {t(
                      '2. El candelabro de oro y la plenitud del Espíritu.',
                      '2. The golden lampstand and the fullness of the Spirit.'
                    )}
                  </h4>
                  <p className="text-sm sm:text-base text-stone-100/95 leading-relaxed">
                    {t(
                      'El candelabro de oro con siete lámparas, Dios encendiendo Su iglesia para brillar con la plenitud de su Espíritu en medio de la oscuridad. El aceite fresco de los olivos fluirá continuamente proveyendo abundancia de vino y aceite del Espíritu Santo, no faltará el aceite en este nuevo ciclo. Este es un año para caminar en Fe en la luz del Espíritu y llevar su resplandor a las naciones siendo portadores de promesas porque, el Dios cumplidor de promesas irá adelante de nosotros, somos los escogidos nacidos de la promesa para mostrar su Gloria.',
                      'The golden lampstand with seven lamps: God igniting His church to shine with the fullness of His Spirit in the midst of darkness. Fresh olive oil will flow continuously, providing abundance of new wine and oil of the Holy Spirit; oil will not run out in this new cycle. This is a year to walk by faith in the light of the Spirit and carry His radiance to the nations as bearers of promises, because the promise-keeping God goes before us—we are the chosen ones born of the promise to display His Glory.'
                    )}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/15 space-y-2">
                  <h4 className="text-lg font-bold font-display text-white">
                    {t(
                      '3. Un nuevo ciclo familiar y ministerial.',
                      '3. A new family and ministry cycle.'
                    )}
                  </h4>
                  <p className="text-sm sm:text-base text-stone-100/95 leading-relaxed">
                    {t(
                      'El Señor despierta a las familias y las trae del exilio para completar su propósito eterno. Tiempo de caminar en los sueños de Dios obedecer su voz y moverse en su voluntad perfecta. Los montes de oposición son allanados y convertidos en polvo todos los obstáculos. El soplo de Dios hará y el Ángel dice, no será con fuerza ni con poder humano, sino con su Espíritu, dice el Señor de los ejércitos.',
                      'The Lord awakens families and brings them back from exile to complete His eternal purpose. A time to walk in God’s dreams, obey His voice, and move in His perfect will. Mountains of opposition are leveled and every obstacle turned to dust. The breath of God will act, and the Angel declares: not by might nor by human power, but by My Spirit, says the Lord of Hosts.'
                    )}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/15 space-y-2">
                  <h4 className="text-lg font-bold font-display text-white">
                    {t('4. La obra será completada.', '4. The work will be completed.')}
                  </h4>
                  <p className="text-sm sm:text-base text-stone-100/95 leading-relaxed">
                    {t(
                      'Así como Zorobabel puso el fundamento del templo y también colocó la piedra final, el Señor te recuerda hoy: ',
                      'Just as Zerubbabel laid the foundation of the temple and also set the capstone, the Lord reminds you today: '
                    )}
                    <em className="font-serif text-amber-200">
                      {t(
                        '“La obra que Yo comencé, Yo mismo la terminaré.”',
                        '“The work that I began, I Myself will finish.”'
                      )}
                    </em>{' '}
                    {t(
                      'Los que despreciaron los pequeños comienzos de esta casa verán con gozo la obra terminada. El grito de victoria será: ',
                      'Those who despised the small beginnings of this house will rejoice to see the finished work. The shout of victory will be: '
                    )}
                    <em className="font-serif text-amber-200">
                      {t(
                        '«Gritos de alabanza por su belleza.»',
                        '“Shouts of praise for its beauty.”'
                      )}
                    </em>{' '}
                    {t(
                      'Lo que parecía imposible será posible. No con manos humanas sino con espíritu renovado alineados en su gloria por el Espíritu Santo.',
                      'What seemed impossible will become possible. Not by human hands, but with a renewed spirit aligned with His glory by the Holy Spirit.'
                    )}
                  </p>
                </div>

                <div className="pt-5 border-t border-white/15 space-y-2">
                  <h4 className="text-lg font-bold font-display text-white">
                    {t('5. Gracia de Dios.', '5. Grace of God.')}
                  </h4>
                  <p className="text-sm sm:text-base text-stone-100/95 leading-relaxed">
                    {t(
                      'El favor de Dios estará con nosotros, no temeremos a nada ni a nadie y por causa de su nombre, levantamos bandera y multitudes correrán hacia nosotros. Se levantarán generaciones que dirán: ',
                      'God’s favor will be with us; we will fear nothing and no one, and for His name’s sake we raise a banner and multitudes will run toward us. Generations will rise saying: '
                    )}
                    <em className="font-serif text-amber-200">
                      {t('“Solo al Señor serviremos.”', '“We will serve only the Lord.”')}
                    </em>{' '}
                    {t(
                      'y queremos estar con ustedes. Fuimos llamados por Dios no por los hombres. Nacidos para servir. Los Ángeles de Dios estarán a nuestro servicio, nos acompañarán y ayudarán siempre con todos los que amamos.',
                      'and we want to be with you. We were called by God, not by men. Born to serve. The Angels of God will be at our service, accompanying and helping us always with everyone we love.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </InteractiveParallaxCard>

          <div className="p-6 sm:p-8 bg-stone-50 border-t border-stone-200 space-y-2">
            <h4 className="text-base sm:text-lg font-bold font-display text-rose-700">
              {t('Declaración Final.', 'Final Declaration.')}
            </h4>
            <div className="text-sm sm:text-base text-slate-800 leading-relaxed space-y-1">
              <p>
                {t(
                  'Este aniversario abre un nuevo tiempo para la iglesia.',
                  'This anniversary opens a new season for the church.'
                )}
              </p>
              <p>
                {t(
                  'El Espíritu Santo está encendiendo el candelabro de oro, llenando con su aceite fresco, iluminando con su gloria y completando la obra. No será por la fuerza ni por el poder humano, ',
                  'The Holy Spirit is lighting the golden lampstand, filling with fresh oil, illuminating with His glory, and completing the work. Not by might nor by human power, '
                )}
                <strong className="text-slate-950">
                  {t('¡SINO POR SU ESPÍRITU!', 'BUT BY HIS SPIRIT!')}
                </strong>
              </p>
              <p className="font-semibold text-rose-700 pt-1">
                {t(
                  '¡Un año de gracia, abundancia y victoria en Cristo Jesús!',
                  'A year of grace, abundance, and victory in Christ Jesus!'
                )}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
