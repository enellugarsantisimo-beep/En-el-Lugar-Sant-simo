import React from 'react';
import { PageId } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import { useLanguage } from '../context/LanguageContext';
import {
  MessageCircle,
  HeartHandshake,
  Sparkles,
  Users,
  Shield,
  Smile,
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

  return (
    <div className="space-y-16 lg:space-y-20 pb-20">
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
                  'Caminamos juntos bajo dirección pastoral, fortaleciendo a jóvenes, parejas, damas, hombres y niños conforme al diseño y la Palabra de Dios.',
                  'We walk together under pastoral leadership, strengthening youth, couples, women, men, and children according to God’s design and Word.'
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

      {/* 2. DIRECCIÓN PASTORAL */}
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

      {/* 3. GRUPOS DE VIDA: JÓVENES, PAREJAS, DAMAS, HOMBRES Y HOLY KIDS */}
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

              <div className="flex flex-wrap gap-3 pt-1 text-xs">
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

        {/* Grupo de Damas */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 aspect-[4/3] lg:h-full">
              <img
                src={CHURCH_INFO.images.community}
                alt={t('Grupo de Damas - Mujeres de Poder', 'Women’s Group')}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-fuchsia-600 uppercase tracking-widest block">
                  {t('MUJERES DE PODER', 'WOMEN OF POWER')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  {t('GRUPO DE DAMAS', 'WOMEN’S GROUP')}
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t(
                  'Nuestro grupo de damas es un espacio diseñado para mujeres que desean fortalecer su relación con Dios, crecer espiritualmente y conectarse con otras mujeres de fe. Juntas, buscamos glorificar a Dios en cada área de nuestras vidas y ser luz en nuestras familias, iglesias y comunidades.',
                  'Our women’s group is a space designed for women who want to strengthen their relationship with God, grow spiritually, and connect with other women of faith. Together, we seek to glorify God in every area of our lives and be a light in our families, churches, and communities.'
                )}
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                    'Hola, quiero recibir información sobre el Grupo de Damas.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors"
                >
                  <Users className="w-3.5 h-3.5 text-fuchsia-400" />
                  <span>{t('Unirme al Grupo de Damas', 'Join Women’s Group')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Grupo de Hombres */}
        <div className="rounded-3xl bg-stone-100 border border-stone-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-10 space-y-4 order-2 lg:order-1">
              <div className="space-y-1">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest block">
                  {t('HOMBRES DE VALOR', 'MEN OF VALOR')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  {t('GRUPO DE HOMBRES', 'MEN’S GROUP')}
                </h2>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {t(
                  'Nuestro grupo de hombres es un lugar donde encontramos dirección, compañerismo y crecimiento en nuestra fe. Nos esforzamos por ser hombres íntegros, líderes en nuestras familias, iglesias y comunidades, mientras buscamos seguir el ejemplo de Cristo en nuestras vidas.',
                  'Our men’s group is a place where we find direction, fellowship, and growth in our faith. We strive to be men of integrity, leaders in our families, churches, and communities, while seeking to follow the example of Christ in our lives.'
                )}
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                    'Hola, quiero recibir información sobre el Grupo de Hombres.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <Shield className="w-3.5 h-3.5 text-sky-400" />
                  <span>{t('Unirme al Grupo de Hombres', 'Join Men’s Group')}</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 aspect-[4/3] lg:h-full order-1 lg:order-2">
              <img
                src={CHURCH_INFO.images.devotional}
                alt={t('Grupo de Hombres - Hombres de valor', 'Men’s Group')}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Holy Kids */}
        <div className="rounded-3xl bg-white border border-slate-200 shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5 aspect-[4/3] lg:h-full">
              <img
                src={CHURCH_INFO.images.bocachica}
                alt={t('Holy Kids - Escuela Infantil', 'Holy Kids - Children’s School')}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="lg:col-span-7 p-8 sm:p-10 space-y-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest block">
                  {t('ESCUELA INFANTIL', 'CHILDREN’S MINISTRY')}
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
                  HOLY KIDS
                </h2>
              </div>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {t(
                  'HOLY KIDS es un espacio pensado para niños y niñas donde aprenden sobre el amor de Dios de manera divertida y creativa. A través de juegos, historias bíblicas y actividades, buscamos que los pequeños crezcan en la fe, desarrollen valores cristianos y sean una luz en sus hogares, su iglesia y su comunidad.',
                  'HOLY KIDS is a space designed for boys and girls where they learn about God’s love in a fun and creative way. Through games, Bible stories, and activities, we help little ones grow in faith, develop Christian values, and be a light in their homes, church, and community.'
                )}
              </p>

              <div className="pt-2">
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                    'Hola, quiero recibir información sobre Holy Kids (Escuela Infantil).'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold rounded-xl transition-colors shadow-sm"
                >
                  <Smile className="w-4 h-4" />
                  <span>{t('Más información de Holy Kids', 'Learn More About Holy Kids')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MENSAJE FINAL DE INVITACIÓN */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white border border-slate-800 shadow-lg">
          <p className="font-serif italic text-lg sm:text-2xl text-stone-100 leading-relaxed">
            {t(
              'Prepárate para iniciar un emocionante viaje hacia un servicio significativo y un compromiso más profundo con la obra de Nuestro Dios.',
              'Get ready to begin an exciting journey toward meaningful service and a deeper commitment to the work of Our God.'
            )}
          </p>
        </div>
      </section>
    </div>
  );
};
