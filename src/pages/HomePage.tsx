import React from 'react';
import { PageId } from '../types';
import {
  CHURCH_INFO,
  CORE_MEETINGS,
  CHURCH_PILLARS,
} from '../data/churchData';
import { useLanguage } from '../context/LanguageContext';
import {
  MapPin,
  Radio,
  Clock,
  ArrowRight,
  Heart,
  Video,
  ExternalLink,
  Sparkles,
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenPrayerModal,
}) => {
  const { t } = useLanguage();

  return (
    <div className="space-y-16 lg:space-y-24 pb-16">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 border border-rose-200/80 rounded-full text-xs font-semibold text-rose-700">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              <span>{t('Comunidad Cristiana en Bogotá', 'Christian Community in Bogotá')}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-display tracking-tight text-slate-900 leading-[1.15] text-balance">
              {t('Un lugar para encontrarte con ', 'A place to encounter ')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-amber-600">
                {t('Dios', 'God')}
              </span>{' '}
              {t('y transformar tu vida', 'and transform your life')}
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
              {t(
                "En nuestra iglesia, creemos firmemente en el poder de la formación y el crecimiento espiritual. El botón 'Ruta de Crecimiento' es tu puerta de entrada a un viaje transformador. Aquí, te presentamos los diversos niveles de formación disponibles en nuestra casa, diseñados para equiparte con las herramientas esenciales que necesitas para ser un líder en el servicio a Dios y a los demás. Si anhelas crecer en tu fe, descubrir tu propósito y contribuir al ministerio de la iglesia, ¡has llegado al lugar adecuado!",
                "In our church, we firmly believe in the power of spiritual formation and growth. The 'Growth Track' button is your gateway to a transformative journey. Here, we present the different levels of training available in our house, designed to equip you with the essential tools you need to become a leader in serving God and others. If you long to grow in your faith, discover your purpose, and contribute to the ministry of the church, you have come to the right place!"
              )}
            </p>

            {/* Quick action buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onNavigate('ruta-de-crecimiento')}
                className="px-6 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center gap-2"
              >
                <span>{t('Ruta de Crecimiento', 'Growth Track')}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => onNavigate('en-vivo')}
                className="px-5 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-xl text-sm font-semibold transition-all shadow-sm flex items-center gap-2"
              >
                <Radio className="w-4 h-4 text-rose-600" />
                <span>{t('En Vivo', 'Live')}</span>
              </button>

              <button
                onClick={onOpenPrayerModal}
                className="px-5 py-3.5 bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200/60 rounded-xl text-sm font-semibold transition-all"
              >
                {t('Pedir Oración', 'Request Prayer')}
              </button>
            </div>

            {/* 3 Quick operational badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-200/80">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-stone-100/70 border border-stone-200">
                <Clock className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-slate-900 block">
                    {t('Domingos 10:30 a. m.', 'Sundays 10:30 a. m.')}
                  </span>
                  <span className="text-[11px] text-slate-500">
                    {t('Reunión General familiar', 'Family General Service')}
                  </span>
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
                  <span className="text-xs font-bold text-slate-900 block">
                    {t('Presencial y En Vivo', 'In-Person & Live')}
                  </span>
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
                alt={t(
                  'Alabanza y congregación en En el Lugar Santísimo',
                  'Worship and congregation at En el Lugar Santísimo'
                )}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1.5">
                <span className="text-[11px] uppercase tracking-wider text-rose-300 font-semibold">
                  En el Lugar Santísimo · Bogotá
                </span>
                <p className="font-serif italic text-sm sm:text-base text-stone-100 leading-relaxed">
                  {t(
                    'Prepárate para iniciar un emocionante viaje hacia un servicio significativo y un compromiso más profundo con la obra de Nuestro Dios.',
                    'Get ready to begin an exciting journey toward meaningful service and a deeper commitment to the work of Our God.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
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

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => onNavigate('ruta-de-crecimiento')}
              className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-md"
            >
              {t('Ruta de Crecimiento', 'Growth Track')}
            </button>
            <button
              onClick={() => onNavigate('sos')}
              className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-stone-200 font-semibold text-sm rounded-xl border border-slate-700 transition-colors"
            >
              {t('Solicitar orientación', 'Request Guidance')}
            </button>
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

        {/* Palabra Profética Highlight Card */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6 max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-100 pb-6">
            <div className="space-y-1.5">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">
                {t('Palabra Profética', 'Prophetic Word')}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 tracking-tight">
                {t(
                  'PALABRA PROFÉTICA AÑO HEBREO 5785-5786 (2025-2026)',
                  'PROPHETIC WORD HEBREW YEAR 5785-5786 (2025-2026)'
                )}
              </h3>
            </div>
            <span className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200 text-slate-800 shrink-0 self-start md:self-center">
              {t('Basada en Zacarías 4:1-14', 'Based on Zechariah 4:1-14')}
            </span>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <h4 className="text-lg font-bold font-display text-slate-900">
                {t(
                  '1. Un año para recordar quién es el único Dios.',
                  '1. A year to remember who the one true God is.'
                )}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong className="font-serif italic text-slate-900">
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

            <div className="pt-5 border-t border-slate-100 space-y-2">
              <h4 className="text-lg font-bold font-display text-slate-900">
                {t(
                  '2. El candelabro de oro y la plenitud del Espíritu.',
                  '2. The golden lampstand and the fullness of the Spirit.'
                )}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t(
                  'El candelabro de oro con siete lámparas, Dios encendiendo Su iglesia para brillar con la plenitud de su Espíritu en medio de la oscuridad. El aceite fresco de los olivos fluirá continuamente proveyendo abundancia de vino y aceite del Espíritu Santo, no faltará el aceite en este nuevo ciclo. Este es un año para caminar en Fe en la luz del Espíritu y llevar su resplandor a las naciones siendo portadores de promesas porque, el Dios cumplidor de promesas irá adelante de nosotros, somos los escogidos nacidos de la promesa para mostrar su Gloria.',
                  'The golden lampstand with seven lamps: God igniting His church to shine with the fullness of His Spirit in the midst of darkness. Fresh olive oil will flow continuously, providing abundance of new wine and oil of the Holy Spirit; oil will not run out in this new cycle. This is a year to walk by faith in the light of the Spirit and carry His radiance to the nations as bearers of promises, because the promise-keeping God goes before us—we are the chosen ones born of the promise to display His Glory.'
                )}
              </p>
            </div>

            <div className="pt-5 border-t border-slate-100 space-y-2">
              <h4 className="text-lg font-bold font-display text-slate-900">
                {t(
                  '3. Un nuevo ciclo familiar y ministerial.',
                  '3. A new family and ministry cycle.'
                )}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t(
                  'El Señor despierta a las familias y las trae del exilio para completar su propósito eterno. Tiempo de caminar en los sueños de Dios obedecer su voz y moverse en su voluntad perfecta. Los montes de oposición son allanados y convertidos en polvo todos los obstáculos. El soplo de Dios hará y el Ángel dice, no será con fuerza ni con poder humano, sino con su Espíritu, dice el Señor de los ejércitos.',
                  'The Lord awakens families and brings them back from exile to complete His eternal purpose. A time to walk in God’s dreams, obey His voice, and move in His perfect will. Mountains of opposition are leveled and every obstacle turned to dust. The breath of God will act, and the Angel declares: not by might nor by human power, but by My Spirit, says the Lord of Hosts.'
                )}
              </p>
            </div>

            <div className="pt-5 border-t border-slate-100 space-y-2">
              <h4 className="text-lg font-bold font-display text-slate-900">
                {t('4. La obra será completada.', '4. The work will be completed.')}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t(
                  'Así como Zorobabel puso el fundamento del templo y también colocó la piedra final, el Señor te recuerda hoy: ',
                  'Just as Zerubbabel laid the foundation of the temple and also set the capstone, the Lord reminds you today: '
                )}
                <em className="font-serif text-slate-900">
                  {t(
                    '“La obra que Yo comencé, Yo mismo la terminaré.”',
                    '“The work that I began, I Myself will finish.”'
                  )}
                </em>{' '}
                {t(
                  'Los que despreciaron los pequeños comienzos de esta casa verán con gozo la obra terminada. El grito de victoria será: ',
                  'Those who despised the small beginnings of this house will rejoice to see the finished work. The shout of victory will be: '
                )}
                <em className="font-serif text-slate-900">
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

            <div className="pt-5 border-t border-slate-100 space-y-2">
              <h4 className="text-lg font-bold font-display text-slate-900">
                {t('5. Gracia de Dios.', '5. Grace of God.')}
              </h4>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {t(
                  'El favor de Dios estará con nosotros, no temeremos a nada ni a nadie y por causa de su nombre, levantamos bandera y multitudes correrán hacia nosotros. Se levantarán generaciones que dirán: ',
                  'God’s favor will be with us; we will fear nothing and no one, and for His name’s sake we raise a banner and multitudes will run toward us. Generations will rise saying: '
                )}
                <em className="font-serif text-slate-900">
                  {t('“Solo al Señor serviremos.”', '“We will serve only the Lord.”')}
                </em>{' '}
                {t(
                  'y queremos estar con ustedes. Fuimos llamados por Dios no por los hombres. Nacidos para servir. Los Ángeles de Dios estarán a nuestro servicio, nos acompañarán y ayudarán siempre con todos los que amamos.',
                  'and we want to be with you. We were called by God, not by men. Born to serve. The Angels of God will be at our service, accompanying and helping us always with everyone we love.'
                )}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
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
                  {t('PILAR', 'PILLAR')} {pillar.number}
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

        <div className="text-center pt-2">
          <button
            onClick={() => onNavigate('ruta-de-crecimiento')}
            className="inline-flex items-center gap-2 text-sm font-bold text-slate-900 hover:text-rose-600 border-b border-slate-900 hover:border-rose-600 pb-1 transition-all"
          >
            <span>{t('Descubre la Ruta de Crecimiento', 'Discover our Growth Track')}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. EN VIVO DESTACADO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-800 bg-slate-950 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-6 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-semibold border border-rose-500/30">
                <Radio className="w-3.5 h-3.5 animate-pulse text-rose-400" />
                <span>{t('Estamos en VIVO cada Domingo', 'We are LIVE every Sunday')}</span>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-widest block">
                  {t('Información & Transmisiones', 'Info & Broadcasts')}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display text-white">
                  {t('Desde la facilidad de tu hogar', 'From the comfort of your home')}
                </h3>
              </div>

              <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                <strong className="text-white">{t('Servicio Domingo:', 'Sunday Service:')}</strong>{' '}
                {t(
                  'Conéctate en vivo y vive cada reunión desde la comodidad de tu hogar si estás fuera de Bogotá o en imposibilidad de asistir físicamente.',
                  'Connect live and experience every gathering from home if you are outside Bogotá or unable to attend in person.'
                )}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('en-vivo')}
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-md flex items-center gap-2"
                >
                  <Video className="w-4 h-4" />
                  <span>{t('Ver servicio en vivo', 'Watch Live Service')}</span>
                </button>

                <a
                  href={CHURCH_INFO.googleMeetMorningPrayer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-slate-900 hover:bg-slate-800 text-stone-200 border border-slate-700 font-semibold text-sm rounded-xl transition-colors flex items-center gap-2"
                >
                  <span>{t('Google Meet (Oración 7 AM)', 'Google Meet (7 AM Prayer)')}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative aspect-[16/10] lg:h-full">
              <img
                src={CHURCH_INFO.images.devotional}
                alt={t('Devocional y transmisión dominical', 'Devotional and Sunday broadcast')}
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
            {t('Sé parte de la familia', 'Be Part of the Family')}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
            {t('Siempre hay un siguiente paso', 'There Is Always a Next Step')}
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            {t(
              'No importa dónde estés en tu caminar con Dios. Queremos acompañarte para que sigas creciendo, fortaleciendo tu fe y descubriendo el propósito que Él tiene para tu vida.',
              'No matter where you are in your walk with God, we want to walk alongside you so you continue growing, strengthening your faith, and discovering His purpose for your life.'
            )}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('grupos-de-vida')}
              className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-sm"
            >
              {t('Grupos de vida', 'Life Groups')}
            </button>
            <button
              onClick={() => onNavigate('sos')}
              className="px-6 py-3 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 font-semibold text-sm rounded-xl transition-colors"
            >
              {t('S.O.S / Contáctanos', 'S.O.S / Contact Us')}
            </button>
          </div>
        </div>
      </section>

      {/* 6. ENCUENTROS & SERVICIOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-semibold text-rose-600 uppercase tracking-widest">
              {t('Participa · Encuentros & Servicio', 'Get Involved · Gatherings & Service')}
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900 tracking-tight">
              {t('Tu fe también se vive participando', 'Faith Is Also Lived Through Participation')}
            </h2>
            <p className="text-slate-600 text-sm">
              {t(
                'Durante la semana contamos con diferentes espacios para reunirnos, buscar la presencia de Dios y fortalecer nuestra relación con Él.',
                'Throughout the week we offer several gatherings to meet, seek God’s presence, and strengthen our relationship with Him.'
              )}
            </p>
          </div>

          <button
            onClick={() => onNavigate('info')}
            className="text-sm font-semibold text-rose-600 hover:text-rose-700 flex items-center gap-1 shrink-0"
          >
            <span>{t('Ver calendario completo', 'View Full Calendar')}</span>
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
                    <span>{t('Entrar a Google Meet', 'Join Google Meet')}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ) : (
                  <button
                    onClick={() => onNavigate('info')}
                    className="text-xs font-semibold text-slate-900 hover:text-rose-600 flex items-center gap-1"
                  >
                    <span>{t('Ver detalles y mapa', 'View details & map')}</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. LIVES SAVED PROJECT: BOCACHICA TE NECESITA -> REDIRECTS TO OFFICIAL DONATE URL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white overflow-hidden border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-6">
              <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider">
                <Heart className="w-4 h-4 fill-current" />
                <span>Lives Saved Project · {t('Obra Humanitaria', 'Humanitarian Outreach')}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold font-display text-white">
                {t('Bocachica te necesita', 'Bocachica Needs You')}
              </h2>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {t(
                  'Impulsa la educación, bienestar y oportunidades de avance a la población infantil y familias vulnerables de la isla de Bocachica.',
                  'Empower education, wellbeing, and advancement opportunities for vulnerable children and families on the island of Bocachica.'
                )}
              </p>

              <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
                {t(
                  'Mediante voluntariado, donaciones o apadrinamientos puedes aportar a la misión, donde cada peso e intención cuenta para cambiar realidades y crear oportunidades reales de futuro.',
                  'Through volunteering, donations, or sponsorships you can contribute to the mission, where every contribution helps transform realities and create real opportunities for the future.'
                )}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={CHURCH_INFO.donateSponsorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-xl transition-colors shadow-md flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>{t('Dona / Quiero donar', 'Donate Now')}</span>
                </a>

                <a
                  href={CHURCH_INFO.donateSponsorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-slate-800 hover:bg-slate-700 text-stone-200 border border-slate-700 font-semibold text-sm rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <span>{t('Apoyo Social', 'Social Outreach')}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] lg:h-full">
              <img
                src={CHURCH_INFO.images.bocachica}
                alt={t('Niños beneficiarios de Bocachica te necesita', 'Children supported in Bocachica')}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent lg:hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* 8. NO ESTÁS SOLO: S.O.S ACOMPAÑAMIENTO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <span className="text-xs font-semibold text-rose-600 uppercase tracking-widest block">
          {t('Estamos para ti', 'We Are Here For You')}
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
          {t('No estás solo', 'You Are Not Alone')}
        </h2>
        <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
          {t(
            'Todos necesitamos ser escuchados y acompañados. Queremos ofrecerte un espacio para recibir consejos, orientación desde la Palabra de Dios y oración. Estamos aquí para caminar contigo.',
            'Everyone needs to be heard and supported. We want to offer you a safe space to receive guidance from God’s Word and prayer. We are here to walk alongside you.'
          )}
        </p>

        <div className="pt-2">
          <button
            onClick={() => onNavigate('sos')}
            className="px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-sm rounded-xl transition-all shadow-md hover:shadow-lg inline-flex items-center gap-2"
          >
            <span>{t('Recibe acompañamiento (S.O.S)', 'Receive Support (S.O.S)')}</span>
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
                alt={t('Comunidad de fe En el Lugar Santísimo', 'En el Lugar Santísimo faith community')}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 space-y-5">
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                {t('¡Hay un lugar para ti!', 'There Is a Place For You!')}
              </h3>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {t(
                  'Dios quiere que te acerques a Él y que lo busques. Esperamos que pueda ser junto a nuestra familia. Ven, conócenos y comparte con nosotros este domingo.',
                  'God wants you to draw near to Him and seek Him. We hope you can do so together with our family. Come, meet us, and share this Sunday with us.'
                )}
              </p>

              <blockquote className="p-4 rounded-xl bg-white border border-stone-200 font-serif italic text-sm text-slate-800">
                {t(
                  '«Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.»',
                  '“For where two or three gather in my name, there am I with them.”'
                )}
                <footer className="text-xs font-sans text-rose-600 font-bold not-italic mt-1">
                  — {t('Mateo 18:20', 'Matthew 18:20')}
                </footer>
              </blockquote>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onNavigate('info')}
                  className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  {t('Ver ubicación y parqueadero', 'View location & parking')}
                </button>
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-white hover:bg-stone-50 border border-stone-300 text-slate-800 text-xs font-semibold rounded-xl transition-colors"
                >
                  {t('Escribir al WhatsApp de la iglesia', 'Message church WhatsApp')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
