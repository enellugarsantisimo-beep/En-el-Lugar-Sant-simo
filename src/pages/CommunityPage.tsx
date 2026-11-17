import React, { useState } from 'react';
import { PageId, Ministry } from '../types';
import {
  CHURCH_INFO,
  CELL_GROUPS,
  MINISTRIES_LIST,
  TESTIMONIALS_DATA,
} from '../data/churchData';
import { useLanguage } from '../context/LanguageContext';
import {
  Users,
  MapPin,
  Clock,
  MessageCircle,
  Smile,
  Flame,
  HeartHandshake,
  Music,
  Coffee,
  HandHeart,
  Check,
  Send,
  ChevronRight,
  Sparkles,
} from 'lucide-react';

interface CommunityPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

export const CommunityPage: React.FC<CommunityPageProps> = ({
  onNavigate,
  onOpenPrayerModal,
}) => {
  const { t } = useLanguage();
  const [selectedZone, setSelectedZone] = useState<string>('Todas');
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
              onClick={() => onNavigate('nosotros')}
              className="hover:text-slate-900 transition-colors"
            >
              {t('Nosotros', 'About Us')}
            </button>
            <span>/</span>
            <span className="text-rose-600 font-semibold">
              {t('Grupos de vida', 'Life Groups')}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                {t('Grupos de vida · Comunidad y Liderazgo', 'Life Groups · Community & Leadership')}
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                {t(
                  'No fuiste creado para vivir la fe en soledad',
                  'You Were Not Created to Live Faith Alone'
                )}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {t(
                  'Caminamos juntos bajo dirección pastoral, fortaleciendo a jóvenes, adultos y matrimonios conforme al diseño y la Palabra de Dios.',
                  'We walk together under pastoral leadership, strengthening youth, adults, and marriages according to God’s design and Word.'
                )}
              </p>
            </div>

            <div className="lg:col-span-4 rounded-2xl overflow-hidden aspect-[4/3] shadow-md border border-slate-200">
              <img
                src={CHURCH_INFO.images.community}
                alt={t('Comunidad en compañerismo', 'Community fellowship')}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. DIRECCIÓN PASTORAL (CONTENIDO DE LA IMAGEN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-900 text-white overflow-hidden border border-slate-800 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 space-y-5">
              <div className="space-y-1.5">
                <div className="inline-flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t('PASTORAS YURI ARENAS Y CECILIA CUERVO', 'PASTORS YURI ARENAS AND CECILIA CUERVO')}</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-display text-white tracking-tight">
                  {t('DIRECCIÓN PASTORAL', 'PASTORAL LEADERSHIP')}
                </h2>
              </div>

              <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
                {t(
                  'Desde la partida de nuestro Pastor y Fundador Elberto Guzmán, la dirección de nuestra congregación fue asumida por nuestra Pastora Yuri junto con el apoyo de su madre la Pastora Cecilia. Juntas se han propuesto continuar hacia adelante con la obra del Señor, enfocadas en la guía y promesas que Dios ha dado a nuestra congregación. Siendo diligentes, obrando en obediencia, sabiduría y bajo la palabra de Dios para direccionar al equipo de líderes y servidores hacia el camino que nos lleve a ver el cumplimiento de las palabras de Dios.',
                  'Since the passing of our Pastor and Founder Elberto Guzmán, the leadership of our congregation has been assumed by our Pastor Yuri together with the support of her mother, Pastor Cecilia. Together they have purposed to press forward with the work of the Lord, focused on the guidance and promises God has given our congregation—being diligent, acting in obedience, wisdom, and under the Word of God to direct the team of leaders and servants toward the path that leads to the fulfillment of God’s promises.'
                )}
              </p>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onOpenPrayerModal}
                  className="px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  {t('Solicitar Oración Pastoral', 'Request Pastoral Prayer')}
                </button>
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-stone-200 border border-slate-700 text-xs font-semibold rounded-xl transition-colors inline-flex items-center gap-1.5"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 relative aspect-[4/3] lg:h-full">
              <img
                src={CHURCH_INFO.images.worship}
                alt={t('Dirección Pastoral - Pastoras Yuri Arenas y Cecilia Cuervo', 'Pastoral Leadership')}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-transparent to-transparent lg:block hidden" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. GRUPO DE JÓVENES & GRUPO DE PAREJAS (CONTENIDO DE LA IMAGEN) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Grupo de Jóvenes */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 aspect-[4/3] lg:h-full">
              <img
                src={CHURCH_INFO.images.community}
                alt={t('Grupo de Jóvenes - Viviendo para Cristo', 'Youth Group')}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-amber-600 uppercase tracking-widest block">
                  {t('VIVIENDO PARA CRISTO, IMPACTANDO AL MUNDO', 'LIVING FOR CHRIST, IMPACTING THE WORLD')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  {t('GRUPO DE JÓVENES', 'YOUTH GROUP')}
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t(
                  'Nuestro grupo de jóvenes es un espacio para conectar, crecer y descubrir el propósito que Dios tiene para nuestras vidas. Queremos inspirar a una generación apasionada por Cristo que haga la diferencia en su comunidad y más allá. Desde los 16 hasta los 26 años, Adultos de 26 hasta los 36 años.',
                  'Our youth group is a space to connect, grow, and discover the purpose God has for our lives. We want to inspire a generation passionate for Christ that makes a difference in their community and beyond. Ages 16 to 26, and Young Adults from 26 to 36 years old.'
                )}
              </p>

              <div className="flex flex-wrap gap-3 pt-2 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200 font-semibold text-slate-800">
                  {t('Jóvenes: 16 a 26 años', 'Youth: Ages 16–26')}
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-stone-100 border border-stone-200 font-semibold text-slate-800">
                  {t('Adultos Jóvenes: 26 a 36 años', 'Young Adults: Ages 26–36')}
                </span>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                    'Hola, quiero recibir información para unirme al Grupo de Jóvenes.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{t('Unirme al Grupo de Jóvenes', 'Join Youth Group')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grupo de Parejas */}
        <div className="rounded-3xl bg-stone-100 border border-stone-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-4 order-2 lg:order-1">
              <div className="space-y-1">
                <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">
                  {t(
                    'FORTALECIENDO MATRIMONIOS BAJO EL DISEÑO DE DIOS',
                    'STRENGTHENING MARRIAGES UNDER GOD’S DESIGN'
                  )}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  {t('GRUPO DE PAREJAS', 'COUPLES GROUP')}
                </h2>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {t(
                  'En nuestro grupo de parejas, creemos que el matrimonio es un regalo de Dios y un reflejo de Su amor por nosotros. Nuestro propósito es fortalecer las relaciones matrimoniales, construir una comunidad sólida de parejas y crecer juntos en nuestra fe.',
                  'In our couples group, we believe marriage is a gift from God and a reflection of His love for us. Our purpose is to strengthen marital relationships, build a solid community of couples, and grow together in our faith.'
                )}
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                    'Hola, queremos recibir información sobre el Grupo de Parejas.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <HeartHandshake className="w-4 h-4" />
                  <span>{t('Conectar con el Grupo de Parejas', 'Connect with Couples Group')}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[4/3] lg:h-full order-1 lg:order-2">
              <img
                src={CHURCH_INFO.images.devotional}
                alt={t('Grupo de Parejas - Fortaleciendo matrimonios', 'Couples Group')}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 4. GRUPOS DE CONEXIÓN EN BOGOTÁ Y VIRTUAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8" id="grupos-conexion">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              {t('Células y Círculos de Fe', 'Home Cells & Circles of Faith')}
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900">
              {t('Grupos de Conexión en Hogares', 'Home Connection Groups')}
            </h2>
            <p className="text-slate-600 text-sm">
              {t(
                'Nos reunimos en diferentes sectores de Bogotá y de forma virtual para estudiar la Biblia, orar y compartir una taza de café en confianza.',
                'We gather across different sectors of Bogotá and virtually to study the Bible, pray, and share fellowship.'
              )}
            </p>
          </div>

          <a
            href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=Hola,%20quisiera%20unirme%20a%20un%20Grupo%20de%20Conexi%C3%B3n.`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5 shrink-0"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{t('Consultar por WhatsApp', 'Ask via WhatsApp')}</span>
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
              {zone === 'Todas' ? t('Todas', 'All') : zone}
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
                    <span>{t('Sector:', 'Area:')} {group.neighborhood}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-medium text-slate-800">{group.dayAndTime}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-500">
                    <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{t('Anfitriones:', 'Hosts:')} {group.host}</span>
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
                  <span>{t('Quiero unirme a este grupo', 'Join this group')}</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. MINISTERIOS ACTIVOS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            {t('Servicio y Dones', 'Service & Gifts')}
          </span>
          <h2 className="text-3xl font-bold font-display text-slate-900">
            {t('Ministerios donde puedes servir y crecer', 'Ministries Where You Can Serve & Grow')}
          </h2>
          <p className="text-slate-600 text-sm">
            {t(
              'Cada miembro tiene un lugar especial en el cuerpo de Cristo. Descubre las áreas activas en nuestra congregación.',
              'Every member has a special place in the body of Christ. Discover active service areas in our church.'
            )}
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
                    {t('Horario habitual:', 'Schedule:')} {min.schedule}
                  </div>
                  <div className="text-[11px] text-slate-500">
                    {t('Liderazgo:', 'Leadership:')} {min.leader}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100">
                <button
                  onClick={() => setSelectedMinistryForVolunteer(min)}
                  className="w-full py-2 bg-stone-100 hover:bg-stone-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors"
                >
                  {t(`Quiero servir en ${min.name}`, `Serve in ${min.name}`)}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. MURO DE TESTIMONIOS Y ENVÍO */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              {t('Vidas Restauradas', 'Restored Lives')}
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900">
              {t('Historias de lo que Dios está haciendo', 'Stories of What God Is Doing')}
            </h2>
            <p className="text-slate-600 text-sm">
              {t(
                'La gloria siempre es para Él. Estos son algunos testimonios de transformación en nuestra comunidad.',
                'All glory belongs to Him. These are some testimonies of transformation in our community.'
              )}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((item) => (
              <div
                key={item.id}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <p className="font-serif italic text-sm text-slate-800 leading-relaxed">
                    «{item.excerpt}»
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.fullStory}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block">{item.author}</span>
                    <span className="text-slate-500 text-[11px]">{item.area}</span>
                  </div>
                  <span className="text-slate-400 text-[11px]">{item.timeAgo}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Testimonial Submission Form */}
          <div className="max-w-xl mx-auto bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-md space-y-4">
            <h3 className="font-bold font-display text-lg text-slate-900 text-center">
              {t('¿Dios ha hecho algo especial en tu vida?', 'Has God done something special in your life?')}
            </h3>
            <p className="text-xs text-slate-600 text-center">
              {t(
                'Comparte tu testimonio para edificar y llenar de esperanza la fe de otros hermanos.',
                'Share your testimony to build up and bring hope to the faith of others.'
              )}
            </p>

            {testimonySubmitted ? (
              <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2 text-emerald-800">
                <Check className="w-6 h-6 mx-auto text-emerald-600" />
                <p className="font-bold text-sm">{t('¡Gracias por tu testimonio!', 'Thank you for your testimony!')}</p>
                <p className="text-xs text-emerald-700">
                  {t(
                    'Ha sido recibido con bendición por el equipo ministerial para glorificar a Dios.',
                    'It has been received with joy by our pastoral team to glorify God.'
                  )}
                </p>
              </div>
            ) : (
              <form onSubmit={handleTestimonySubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder={t('Tu nombre completo', 'Your full name')}
                    value={testimonyAuthor}
                    onChange={(e) => setTestimonyAuthor(e.target.value)}
                    className="px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                  <input
                    type="text"
                    placeholder={t('Área (ej. Familia, Salud, Jóvenes)', 'Area (e.g. Family, Health, Youth)')}
                    value={testimonyArea}
                    onChange={(e) => setTestimonyArea(e.target.value)}
                    className="px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
                <textarea
                  required
                  rows={3}
                  placeholder={t('Cuéntanos brevemente tu experiencia...', 'Briefly share your story...')}
                  value={testimonyStory}
                  onChange={(e) => setTestimonyStory(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{t('Enviar testimonio a la iglesia', 'Submit testimony to church')}</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Volunteer Modal */}
      {selectedMinistryForVolunteer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl space-y-4 border border-slate-200">
            <h4 className="font-bold font-display text-lg text-slate-900">
              {t(`Servir en ${selectedMinistryForVolunteer.name}`, `Serve in ${selectedMinistryForVolunteer.name}`)}
            </h4>
            <p className="text-xs text-slate-600">
              {t(
                'Nos pondremos en contacto contigo para coordinar una breve charla inductiva con los pastores y coordinadores del área.',
                'We will contact you to schedule a brief orientation chat with our pastors and area coordinators.'
              )}
            </p>

            {volunteerSuccess ? (
              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center space-y-2">
                <Check className="w-6 h-6 text-emerald-600 mx-auto" />
                <p className="text-xs font-bold text-emerald-800">
                  {t('¡Postulación enviada con éxito!', 'Application sent successfully!')}
                </p>
                <button
                  onClick={() => {
                    setVolunteerSuccess(false);
                    setSelectedMinistryForVolunteer(null);
                  }}
                  className="px-4 py-1.5 bg-slate-900 text-white text-xs rounded-lg mt-2 font-medium"
                >
                  {t('Listo', 'Done')}
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
                  placeholder={t('Tu nombre completo', 'Your full name')}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <input
                  type="tel"
                  required
                  placeholder={t('Número de WhatsApp', 'WhatsApp number')}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <div className="flex items-center justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedMinistryForVolunteer(null)}
                    className="px-3 py-2 text-xs text-slate-500 hover:text-slate-800"
                  >
                    {t('Cancelar', 'Cancel')}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg"
                  >
                    {t('Enviar postulación', 'Submit application')}
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
