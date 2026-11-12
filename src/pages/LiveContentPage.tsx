import React, { useState, useEffect } from 'react';
import { PageId, Sermon, Devotional } from '../types';
import {
  CHURCH_INFO,
  SERMONS_ARCHIVE,
  DAILY_DEVOTIONALS,
} from '../data/churchData';
import {
  Radio,
  Video,
  Play,
  Volume2,
  ExternalLink,
  Search,
  BookOpen,
  Calendar,
  Clock,
  Download,
  Copy,
  Check,
  Share2,
  Save,
  MessageSquare,
  Sparkles,
  Youtube,
} from 'lucide-react';

interface LiveContentPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

export const LiveContentPage: React.FC<LiveContentPageProps> = ({
  onNavigate,
  onOpenPrayerModal,
}) => {
  const [selectedSeries, setSelectedSeries] = useState<string>('Todas');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeDevotionalDay, setActiveDevotionalDay] = useState<string>('Lunes');
  const [copiedMeet, setCopiedMeet] = useState(false);
  const [selectedSermonOutline, setSelectedSermonOutline] = useState<Sermon | null>(null);
  const [userNote, setUserNote] = useState<string>('');
  const [noteSaved, setNoteSaved] = useState(false);

  // Live chat simulation messages
  const [chatMessages, setChatMessages] = useState([
    { sender: 'Familia Morales', text: '¡Conectados desde Fontibón, Dios les bendiga!', time: '10:32' },
    { sender: 'Hna. Sandra P.', text: 'Amén, hermosa alabanza. Bendiciones al coro.', time: '10:35' },
    { sender: 'Javier G.', text: 'Orando por sanidad en los hogares.', time: '10:38' },
  ]);
  const [newChatText, setNewChatText] = useState('');

  // Load saved devotional note from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`devotional_note_${activeDevotionalDay}`);
    setUserNote(saved || '');
    setNoteSaved(false);
  }, [activeDevotionalDay]);

  const handleSaveNote = () => {
    localStorage.setItem(`devotional_note_${activeDevotionalDay}`, userNote);
    setNoteSaved(true);
    setTimeout(() => setNoteSaved(false), 2500);
  };

  const handleSendChat = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newChatText.trim()) return;
    setChatMessages((prev) => [
      ...prev,
      {
        sender: 'Tú',
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

  const seriesList = ['Todas', 'Caminando en lo Santísimo', 'Fundamentos de Fe', 'Corazón para los Demás'];

  const filteredSermons = SERMONS_ARCHIVE.filter((s) => {
    const matchSeries = selectedSeries === 'Todas' || s.series === selectedSeries;
    const matchQuery =
      s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.passage.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.preacher.toLowerCase().includes(searchQuery.toLowerCase());
    return matchSeries && matchQuery;
  });

  const activeDevotional = DAILY_DEVOTIONALS.find((d) => d.dayOfWeek === activeDevotionalDay) || DAILY_DEVOTIONALS[0];

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
            <span className="text-rose-600 font-semibold">Contenido y En VIVOS</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                Transmisión y Medios
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                Aliméntate de la Palabra en todo momento
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Conéctate en vivo a nuestras reuniones dominicales, únete a la sala de Google Meet de oración matutina y accede a la biblioteca de enseñanzas para edificar tu fe.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                Canales Oficiales
              </span>
              <div className="space-y-2 text-xs">
                <a
                  href={CHURCH_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-red-50 text-red-700 hover:bg-red-100 transition-colors font-medium"
                >
                  <span className="flex items-center gap-2">
                    <Youtube className="w-4 h-4" /> YouTube en VIVO
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
                    <Radio className="w-4 h-4 text-cyan-400" /> TikTok Transmisiones
                  </span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE STREAMING PLAYER & INTERACTIVE CHAT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-slate-950 text-white border border-slate-800 shadow-2xl overflow-hidden">
          {/* Stream header */}
          <div className="p-4 sm:p-6 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-4 bg-slate-900/60">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 px-3 py-1 bg-red-600 text-white text-xs font-bold rounded-full animate-pulse">
                <span className="w-2 h-2 rounded-full bg-white" />
                <span>EN VIVO</span>
              </div>
              <div>
                <h2 className="text-base sm:text-lg font-bold font-display text-white">
                  Servicio General Dominical · En el Lugar Santísimo
                </h2>
                <span className="text-xs text-slate-400">
                  Transmisión directa desde Bogotá · Domingos 10:30 a. m.
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={onOpenPrayerModal}
                className="px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white text-xs font-semibold rounded-lg transition-colors"
              >
                Petición de Oración en Vivo
              </button>
            </div>
          </div>

          {/* Stream Stage & Chat Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left: Player Stage */}
            <div className="lg:col-span-8 bg-black relative aspect-[16/9] flex items-center justify-center overflow-hidden group">
              <img
                src={CHURCH_INFO.images.worship}
                alt="Transmisión del servicio dominical"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

              {/* Center Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-rose-600/90 text-white flex items-center justify-center shadow-lg backdrop-blur-sm transform transition-transform group-hover:scale-110 cursor-pointer">
                  <Play className="w-7 h-7 ml-1 fill-current" />
                </div>
                <div className="bg-slate-900/80 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700 max-w-sm">
                  <span className="text-xs font-bold text-white block">
                    Transmisión activa cada domingo 10:30 a. m.
                  </span>
                  <span className="text-[11px] text-stone-300">
                    Haz clic para reproducir la última enseñanza o sintonizar en vivo
                  </span>
                </div>
              </div>

              {/* Player bottom status strip */}
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <Volume2 className="w-4 h-4 text-stone-400" />
                  <span>Audio HD Stereo</span>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={CHURCH_INFO.social.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors flex items-center gap-1"
                  >
                    <span>Ver en YouTube</span>
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
                  <span>Chat de la Congregación</span>
                </span>
                <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-950/60 px-2 py-0.5 rounded-full border border-emerald-800/60">
                  Activo
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
                  placeholder="Escribe un saludo o amén..."
                  value={newChatText}
                  onChange={(e) => setNewChatText(e.target.value)}
                  className="flex-1 px-3 py-1.5 bg-slate-900 border border-slate-700 rounded-lg text-xs text-white focus:outline-none focus:ring-1 focus:ring-rose-500 placeholder-slate-500"
                />
                <button
                  type="submit"
                  className="px-3 py-1.5 bg-rose-600 hover:bg-rose-700 text-white rounded-lg text-xs font-semibold"
                >
                  Enviar
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
                <span>Martes a Viernes · 7:00 a. m.</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold font-display text-white">
                Oración de la Mañana: Comienza el día en Su presencia
              </h2>

              <p className="text-sky-100 text-sm sm:text-base leading-relaxed max-w-2xl">
                Un espacio virtual íntimo para consagrar las primeras horas del día, entregando en las manos del Padre nuestros hogares, empleos, estudios y proyectos. No salgas a la batalla sin la armadura de la oración.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={CHURCH_INFO.googleMeetMorningPrayer}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-white hover:bg-sky-50 text-slate-950 font-bold text-xs rounded-xl transition-colors shadow-md flex items-center gap-2"
                >
                  <Video className="w-4 h-4 text-sky-700" />
                  <span>Unirme ahora en Google Meet</span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                </a>

                <button
                  onClick={handleCopyMeet}
                  className="px-4 py-3 bg-sky-950/80 hover:bg-sky-950 text-sky-200 border border-sky-700/80 font-semibold text-xs rounded-xl transition-colors flex items-center gap-1.5"
                >
                  {copiedMeet ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Enlace copiado al portapapeles</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Copiar enlace de Google Meet</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="lg:col-span-4 bg-sky-950/60 p-6 rounded-2xl border border-sky-700/50 space-y-3">
              <span className="text-xs font-mono text-sky-300 block font-bold">
                ENLACE DIRECTO MEET:
              </span>
              <p className="font-mono text-xs text-white bg-slate-950/70 p-3 rounded-lg border border-sky-800 break-all select-all">
                {CHURCH_INFO.googleMeetMorningPrayer}
              </p>
              <p className="text-[11px] text-sky-200/80">
                Puedes unirte desde el computador, tablet o celular sin necesidad de descargar aplicaciones complejas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BIBLIOTECA DE PRÉDICAS & SERIES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2 max-w-2xl">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              Alimento Espiritual
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900">
              Biblioteca de Prédicas y Enseñanzas
            </h2>
            <p className="text-slate-600 text-sm">
              Explora mensajes recientes organizados por series bíblicas, con bosquejos de estudio descargables para tus devocionales.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Buscar por pasaje o tema..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
            />
          </div>
        </div>

        {/* Series Filter Tabs */}
        <div className="flex flex-wrap items-center gap-1.5 p-1 bg-stone-100 rounded-xl max-w-2xl">
          {seriesList.map((series) => (
            <button
              key={series}
              onClick={() => setSelectedSeries(series)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                selectedSeries === series
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {series}
            </button>
          ))}
        </div>

        {/* Sermons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredSermons.map((sermon) => (
            <div
              key={sermon.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="text-rose-600 font-bold uppercase tracking-wider text-[11px]">
                    {sermon.series}
                  </span>
                  <span>{sermon.date}</span>
                </div>

                <h3 className="text-lg font-bold font-display text-slate-900">
                  {sermon.title}
                </h3>

                <div className="flex items-center gap-3 text-xs text-slate-600">
                  <span className="px-2 py-0.5 rounded-md bg-stone-100 border border-stone-200 font-semibold text-slate-800">
                    {sermon.passage}
                  </span>
                  <span>·</span>
                  <span>{sermon.preacher}</span>
                  <span>·</span>
                  <span>{sermon.duration}</span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {sermon.summary}
                </p>

                <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 space-y-1.5">
                  <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block">
                    Puntos clave del mensaje:
                  </span>
                  <ul className="text-xs text-slate-600 space-y-1">
                    {sermon.keyPoints.map((point, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-1.5 shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedSermonOutline(sermon)}
                  className="px-3.5 py-2 bg-stone-100 hover:bg-stone-200 text-slate-800 rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Ver bosquejo de estudio</span>
                </button>

                <a
                  href={CHURCH_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Escuchar</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. DEVOCIONALES DIARIOS INTERACTIVOS + LIBRETA DE NOTAS */}
      <section className="bg-stone-100 py-16 border-y border-stone-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              Aliento Diario
            </span>
            <h2 className="text-3xl font-bold font-display text-slate-900">
              Devocionales de la Semana
            </h2>
            <p className="text-slate-600 text-sm">
              Una porción bíblica diaria con aplicación práctica para que medites en la Palabra y tomes tus propias notas personales.
            </p>
          </div>

          {/* Days bar */}
          <div className="flex justify-center">
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-2xl border border-stone-200 shadow-sm">
              {['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'].map((day) => (
                <button
                  key={day}
                  onClick={() => setActiveDevotionalDay(day)}
                  className={`px-4 py-2 text-xs font-bold rounded-xl transition-colors ${
                    activeDevotionalDay === day
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-stone-50'
                  }`}
                >
                  {day}
                </button>
              ))}
            </div>
          </div>

          {/* Devotional Reader & Personal Notebook Split */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Devotional content */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-rose-600 uppercase">
                    DÍA: {activeDevotional.dayOfWeek}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
                    {activeDevotional.title}
                  </h3>
                </div>
                <span className="px-3 py-1 bg-stone-100 text-slate-800 text-xs font-semibold rounded-lg border border-stone-200">
                  {activeDevotional.passage}
                </span>
              </div>

              {/* Bible Verse Box */}
              <div className="p-5 rounded-2xl bg-stone-50 border border-stone-200">
                <p className="font-serif italic text-sm sm:text-base text-slate-800 leading-relaxed">
                  {activeDevotional.verseText}
                </p>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <div>
                  <h4 className="font-bold text-slate-900 uppercase text-xs tracking-wider mb-1">
                    Reflexión para hoy:
                  </h4>
                  <p>{activeDevotional.reflection}</p>
                </div>

                <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 text-amber-900 space-y-1">
                  <span className="font-bold text-xs uppercase tracking-wider block">
                    Desafío práctico del día:
                  </span>
                  <p className="text-xs">{activeDevotional.practicalChallenge}</p>
                </div>

                <div className="p-4 rounded-xl bg-rose-50/70 border border-rose-200 text-rose-950 space-y-1">
                  <span className="font-bold text-xs uppercase tracking-wider block text-rose-800">
                    Oración sugerida:
                  </span>
                  <p className="font-serif italic text-xs">{activeDevotional.prayer}</p>
                </div>
              </div>
            </div>

            {/* User Personal Notebook (Persisted to localStorage) */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-base font-display text-slate-900 flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-rose-600" />
                  <span>Mi libreta de notas</span>
                </h4>
                <span className="text-[11px] text-slate-400">Guardado local</span>
              </div>
              <p className="text-xs text-slate-500">
                ¿Qué te habló Dios a través de este pasaje? Escribe tus reflexiones y compromisos de hoy:
              </p>

              <textarea
                rows={8}
                value={userNote}
                onChange={(e) => setUserNote(e.target.value)}
                placeholder="Escribe aquí lo que Dios puso en tu corazón..."
                className="w-full p-3 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 bg-stone-50/50"
              />

              <div className="flex items-center justify-between pt-2">
                <span className="text-[11px] text-emerald-600 font-medium">
                  {noteSaved ? '✓ ¡Notas guardadas correctamente!' : ''}
                </span>
                <button
                  onClick={handleSaveNote}
                  className="px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors flex items-center gap-1.5"
                >
                  <Save className="w-3.5 h-3.5" />
                  <span>Guardar mis notas</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sermon Outline Modal */}
      {selectedSermonOutline && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-4 max-h-[85vh] overflow-y-auto border border-slate-200">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-xs font-bold text-rose-600 uppercase font-mono">
                  {selectedSermonOutline.series}
                </span>
                <h4 className="text-lg font-bold font-display text-slate-900 mt-0.5">
                  {selectedSermonOutline.title}
                </h4>
                <span className="text-xs text-slate-500">
                  {selectedSermonOutline.passage} · {selectedSermonOutline.preacher}
                </span>
              </div>
              <button
                onClick={() => setSelectedSermonOutline(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700"
              >
                ✕
              </button>
            </div>

            <div className="p-4 bg-stone-50 rounded-xl border border-stone-200 space-y-2 text-xs text-slate-700 leading-relaxed">
              <span className="font-bold text-slate-900 uppercase tracking-wider block">
                Resumen Expositivo:
              </span>
              <p>{selectedSermonOutline.summary}</p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">
                Bosquejo y División del Pasaje:
              </span>
              <div className="space-y-2 text-xs text-slate-700">
                {selectedSermonOutline.keyPoints.map((pt, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-start gap-2">
                    <span className="font-bold text-rose-600 font-mono">0{i + 1}.</span>
                    <span>{pt}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
              <span className="text-[11px] text-slate-400">En el Lugar Santísimo · Bogotá</span>
              <button
                onClick={() => setSelectedSermonOutline(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold"
              >
                Cerrar bosquejo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
