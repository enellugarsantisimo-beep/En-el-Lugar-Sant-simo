import React from 'react';
import { PageId } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import { useLanguage } from '../context/LanguageContext';
import {
  MapPin,
  Radio,
  Clock,
  ArrowRight,
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
    <div className="space-y-16 lg:space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-6 sm:pt-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Hero Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 border border-rose-200/80 rounded-full text-xs font-semibold text-rose-700">
              <span className="w-2 h-2 rounded-full bg-rose-600" />
              <span>{t('Nosotros · Comunidad Cristiana en Bogotá', 'About Us · Christian Community in Bogotá')}</span>
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
      </section>
    </div>
  );
};
