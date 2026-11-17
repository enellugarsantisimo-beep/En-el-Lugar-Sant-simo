import React, { useState } from 'react';
import { PageId } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import { useLanguage } from '../context/LanguageContext';
import {
  Volume2,
  ExternalLink,
  Clock,
  Copy,
  Check,
  MessageSquare,
  Youtube,
  Video,
  Sparkles,
} from 'lucide-react';

interface LiveContentPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
  mode?: 'en-vivo' | 'multimedia';
}

export const LiveContentPage: React.FC<LiveContentPageProps> = ({
  onNavigate,
  onOpenPrayerModal,
  mode = 'en-vivo',
}) => {
  const { t } = useLanguage();
  const [copiedMeet, setCopiedMeet] = useState(false);

  // Live chat simulation messages
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Familia Morales', text: '¡Conectados desde Fontibón, Dios les bendiga!', time: '10:32' },
    { sender: 'Hna. Sandra P.', text: 'Amén, hermosa alabanza. Bendiciones al coro.', time: '10:35' },
    { sender: 'Javier G.', text: 'Orando por sanidad en los hogares.', time: '10:38' },
  ]);
  const [newChatText, setNewChatText] = useState('');

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChatText.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      {
        sender: t('Tú', 'You'),
        text: newChatText,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      },
    ]);
    setNewChatText('');
  };

  const handleCopyMeet = () => {
    navigator.clipboard.writeText(CHURCH_INFO.googleMeetMorningPrayer);
    setCopiedMeet(true);
    setTimeout(() => setCopiedMeet(false), 2000);
  };

  const multimediaSections = [
    {
      id: 'predicas',
      title: t('PRÉDICAS', 'SERMONS'),
      description: t(
        'Aquí encontrarás todas nuestras prédicas.',
        'Here you will find all of our sermons.'
      ),
      embedUrl: 'https://www.youtube.com/embed/LnaaXwomqvk?rel=0',
      youtubeUrl: 'https://youtu.be/LnaaXwomqvk?si=H2p07ilKBO2Df5-a',
      videoTitle: 'PRÉDICA: CAMUFLADOS - PREDICADORA: NANCY CHAPARRO',
      accentClass: 'text-sky-600',
      cardClass: 'bg-white border-slate-200 text-slate-900',
      subtitleClass: 'text-slate-600',
      btnClass: 'bg-slate-900 hover:bg-slate-800 text-white',
      videoFirst: true,
    },
    {
      id: 'guiados-espiritu',
      title: t('GUIADOS POR EL ESPÍRITU SANTO', 'LED BY THE HOLY SPIRIT'),
      description: t(
        'Disfruta todos nuestros contenidos.',
        'Enjoy all of our content.'
      ),
      embedUrl: 'https://www.youtube.com/embed/OEIGISzV4OU?rel=0',
      youtubeUrl: 'https://youtu.be/OEIGISzV4OU?si=gd3SY7TZJ9wGTlLO',
      videoTitle: 'FE EN LA ADVERSIDAD - DIANA NAVAS - GUIADOS POR EL ESPÍRITU SANTO',
      accentClass: 'text-amber-500',
      cardClass: 'bg-slate-900 border-slate-800 text-white',
      subtitleClass: 'text-stone-300',
      btnClass: 'bg-rose-600 hover:bg-rose-700 text-white',
      videoFirst: false,
    },
    {
      id: 'sintonizate',
      title: t('SINTONÍZATE CON DIOS', 'TUNE IN WITH GOD'),
      description: t(
        'Todo nuestro contenido es inspirado por el Espíritu Santo.',
        'All of our content is inspired by the Holy Spirit.'
      ),
      embedUrl: 'https://www.youtube.com/embed/eg-hNXXplYE?rel=0',
      youtubeUrl: 'https://youtu.be/eg-hNXXplYE?si=5c-zpE-3z31eJ5R2',
      videoTitle: 'DIOS LO HARÁ - SINTONÍZATE Ep12 - SINTONÍZATE CON DIOS',
      accentClass: 'text-fuchsia-600',
      cardClass: 'bg-stone-100 border-stone-200 text-slate-900',
      subtitleClass: 'text-slate-700',
      btnClass: 'bg-slate-900 hover:bg-slate-800 text-white',
      videoFirst: true,
    },
  ];

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
              {mode === 'multimedia' ? t('Multimedia', 'Media') : t('En Vivo', 'Live')}
            </span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                {mode === 'multimedia'
                  ? t('Multimedia · Enseñanzas y Contenidos', 'Media · Teachings & Content')
                  : t('Transmisión en Directo', 'Live Broadcast')}
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                {mode === 'multimedia'
                  ? t('Contenido inspirado por el Espíritu Santo', 'Content Inspired by the Holy Spirit')
                  : t('Aliméntate de la Palabra en vivo', 'Be Nourished by the Word Live')}
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                {mode === 'multimedia'
                  ? t(
                      'Disfruta de nuestras prédicas, episodios de Guiados por el Espíritu Santo y Sintonízate con Dios.',
                      'Enjoy our sermons, Led by the Holy Spirit episodes, and Tune In with God series.'
                    )
                  : t(
                      'Conéctate en vivo a nuestras reuniones dominicales y únete a la sala de Google Meet de oración matutina desde cualquier lugar.',
                      'Join our Sunday services live and connect to our morning prayer room on Google Meet from anywhere.'
                    )}
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                {t('Canales Oficiales', 'Official Channels')}
              </span>
              <div className="space-y-2 text-xs">
                <a
                  href={CHURCH_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 transition-colors font-medium"
                >
                  <span className="flex items-center gap-2">
                    <Youtube className="w-4 h-4" /> {t('YouTube Oficial', 'Official YouTube')}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>

                <a
                  href={CHURCH_INFO.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900 text-white hover:bg-slate-800 transition-colors font-medium"
                >
                  <span className="flex items-center gap-2">
                    <span>{t('TikTok Transmisiones', 'TikTok Streams')}</span>
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {mode === 'en-vivo' && (
        <>
          {/* 2. LIVE STREAMING PLAYER & INTERACTIVE CHAT */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl overflow-hidden">
              {/* Stream header */}
              <div className="p-4 sm:p-6 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 bg-slate-900/60">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-white" />
                    <span>{t('EN VIVO', 'LIVE')}</span>
                  </div>
                  <div>
                    <h2 className="text-base sm:text-lg font-bold font-display text-white">
                      {t(
                        'FE SACRIFICIAL - EL FRUTO DE LA FE - GUIADOS POR EL ESPÍRITU SANTO - 12/02/2025',
                        'SACRIFICIAL FAITH - THE FRUIT OF FAITH - LED BY THE HOLY SPIRIT - 12/02/2025'
                      )}
                    </h2>
                    <span className="text-xs text-slate-400">
                      {t('En el Lugar Santísimo · Transmisión oficial', 'En el Lugar Santísimo · Official Broadcast')}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={onOpenPrayerModal}
                    className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg transition-colors"
                  >
                    {t('Petición de Oración en Vivo', 'Live Prayer Request')}
                  </button>
                </div>
              </div>

              {/* Stream Stage & Chat Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-12">
                {/* Left: Embedded YouTube Player Stage */}
                <div className="lg:col-span-8 bg-black flex flex-col">
                  <div className="relative aspect-[16/9] w-full bg-black">
                    <iframe
                      src={CHURCH_INFO.liveYoutubeEmbedUrl}
                      title="FE SACRIFICIAL - EL FRUTO DE LA FE - GUIADOS POR EL ESPÍRITU SANTO - 12/02/2025"
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>

                  {/* Player bottom status strip */}
                  <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 flex items-center justify-between text-xs text-stone-300">
                    <div className="flex items-center gap-2">
                      <Volume2 className="w-4 h-4 text-stone-400" />
                      <span>{t('Audio HD Stereo · En el Lugar Santísimo', 'HD Stereo Audio · En el Lugar Santísimo')}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <a
                        href={CHURCH_INFO.liveYoutubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-rose-400"
                      >
                        <span>{t('Abrir en YouTube', 'Open on YouTube')}</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right: Live Chat Box */}
                <div className="lg:col-span-4 bg-slate-900 flex flex-col h-72 lg:h-auto border-t lg:border-t-0 lg:border-l border-slate-800">
                  <div className="p-3 bg-slate-800/80 border-b border-slate-700/80 flex items-center justify-between">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <MessageSquare className="w-3.5 h-3.5 text-rose-400" />
                      <span>{t('Chat de la Congregación', 'Congregation Chat')}</span>
                    </span>
                    <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60">
                      {t('Activo', 'Active')}
                    </span>
                  </div>

                  {/* Chat history */}
                  <div className="flex-1 p-3 space-y-2.5 overflow-y-auto text-xs">
                    {chatMessages.map((msg, idx) => (
                      <div key={idx} className="bg-slate-800/60 p-2 rounded-lg border border-slate-700/60">
                        <div className="flex items-center justify-between mb-0.5">
                          <span className="font-bold text-rose-300 text-[11px]">{msg.sender}</span>
                          <span className="text-[10px] text-slate-500 font-mono">{msg.time}</span>
                        </div>
                        <p className="text-stone-200">{msg.text}</p>
                      </div>
                    ))}
                  </div>

                  {/* Chat Input */}
                  <form onSubmit={handleSendChat} className="p-3 border-t border-slate-800 bg-slate-950 flex gap-2">
                    <input
                      type="text"
                      placeholder={t('Escribe un saludo o amén...', 'Write a greeting or amen...')}
                      value={newChatText}
                      onChange={(e) => setNewChatText(e.target.value)}
                      className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-1 focus:ring-rose-500 placeholder-slate-500"
                    />
                    <button
                      type="submit"
                      className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold"
                    >
                      {t('Enviar', 'Send')}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          {/* 3. SALA VIRTUAL DE ORACIÓN MATUTINA (GOOGLE MEET) */}
          <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-sky-900 to-slate-900 text-white border border-sky-800/80 shadow-xl">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-8 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/20 text-sky-300 text-xs font-semibold border border-sky-400/30">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{t('Martes a Viernes · 7:00 a. m.', 'Tuesday to Friday · 7:00 AM')}</span>
                  </div>

                  <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
                    {t('Oración de la Mañana: Comienza el día en Su presencia', 'Morning Prayer: Start Your Day in His Presence')}
                  </h2>

                  <p className="text-sky-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                    {t(
                      'Un espacio virtual íntimo para consagrar las primeras horas del día, entregando en las manos del Padre nuestros hogares, empleos, estudios y proyectos. No salgas a la batalla sin la armadura de la oración.',
                      'An intimate virtual space to consecrate the first hours of your day, placing our homes, jobs, studies, and projects in the Father’s hands.'
                    )}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 pt-2">
                    <a
                      href={CHURCH_INFO.googleMeetMorningPrayer}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-white hover:bg-sky-50 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-md flex items-center gap-2"
                    >
                      <Video className="w-4 h-4 text-sky-700" />
                      <span>{t('Unirme ahora en Google Meet', 'Join now on Google Meet')}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                    </a>

                    <button
                      onClick={handleCopyMeet}
                      className="px-4 py-3 bg-sky-950/80 hover:bg-sky-950 text-sky-200 border border-sky-700/80 font-semibold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                    >
                      {copiedMeet ? (
                        <>
                          <Check className="w-4 h-4 text-emerald-400" />
                          <span>{t('Enlace copiado al portapapeles', 'Link copied to clipboard')}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>{t('Copiar enlace de Google Meet', 'Copy Google Meet link')}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                <div className="lg:col-span-4 bg-sky-950/60 p-6 rounded-2xl border border-sky-700/50 space-y-3">
                  <span className="text-xs font-mono text-sky-300 block font-bold">
                    {t('ENLACE DIRECTO MEET:', 'DIRECT MEET LINK:')}
                  </span>
                  <p className="font-mono text-xs text-white bg-slate-950/70 p-3 rounded-lg border border-sky-800 break-all select-all">
                    {CHURCH_INFO.googleMeetMorningPrayer}
                  </p>
                  <p className="text-[11px] text-sky-200/80">
                    {t(
                      'Puedes unirte desde el computador, tablet o celular sin necesidad de descargar aplicaciones complejas.',
                      'You can join from any computer, tablet, or smartphone without complex downloads.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {mode === 'multimedia' && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {multimediaSections.map((item) => (
            <div
              key={item.id}
              className={`rounded-3xl border shadow-sm overflow-hidden ${item.cardClass}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
                {/* Video Column */}
                <div
                  className={`lg:col-span-7 bg-black ${
                    item.videoFirst ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <div className="relative aspect-[16/9] w-full bg-black">
                    <iframe
                      src={item.embedUrl}
                      title={item.videoTitle}
                      className="absolute inset-0 w-full h-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    />
                  </div>
                </div>

                {/* Copy Column */}
                <div
                  className={`lg:col-span-5 p-8 sm:p-10 lg:p-12 space-y-5 text-center lg:text-left ${
                    item.videoFirst ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest ${item.accentClass}`}>
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>En el Lugar Santísimo</span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-display tracking-tight">
                    {item.title}
                  </h2>

                  <p className={`text-base sm:text-lg leading-relaxed ${item.subtitleClass}`}>
                    {item.description}
                  </p>

                  <div className="pt-2">
                    <a
                      href={item.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl transition-colors shadow-sm ${item.btnClass}`}
                    >
                      <Youtube className="w-4 h-4" />
                      <span>{t('Mirar en YouTube', 'Watch on YouTube')}</span>
                      <ExternalLink className="w-3.5 h-3.5 opacity-80" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </section>
      )}
    </div>
  );
};
