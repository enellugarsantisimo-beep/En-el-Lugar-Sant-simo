import React, { useState } from 'react';
import { PageId, PastoralCareRequest } from '../types';
import { SOS_SECTION_DATA } from '../data/churchData';
import { useLanguage } from '../context/LanguageContext';
import { RedVinylDisc, BibleEmergencyArt } from '../components/common/SosArtwork';
import {
  Phone,
  Lock,
  Send,
  CheckCircle,
  MessageCircle,
  Copy,
  Check,
} from 'lucide-react';

interface ContactCarePageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

export const ContactCarePage: React.FC<ContactCarePageProps> = ({
  onNavigate,
}) => {
  const { lang, t } = useLanguage();
  const [formData, setFormData] = useState<PastoralCareRequest>({
    fullName: '',
    phone: '',
    email: '',
    reason: 'Oración',
    message: '',
    preferredContact: 'WhatsApp',
    isConfidential: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(SOS_SECTION_DATA.helplineNumber);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2200);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappDirectUrl = `https://wa.me/${SOS_SECTION_DATA.helplineClean}?text=${encodeURIComponent(
    t(
      'Hola, necesito oración y acompañamiento en la Línea de ayuda S.O.S.',
      'Hello, I need prayer and support via the S.O.S Help Line.'
    )
  )}`;

  const formWhatsappUrl = `https://wa.me/${SOS_SECTION_DATA.prayerDispatchClean}?text=${encodeURIComponent(
    `🆘 *S.O.S - ${formData.reason}*\n• ${t('Nombre', 'Name')}: ${formData.fullName}\n• ${t(
      'Teléfono',
      'Phone'
    )}: ${formData.phone}${formData.email ? `\n• ${t('Correo', 'Email')}: ${formData.email}` : ''}\n• ${t('Petición', 'Request')}: ${formData.message}`
  )}`;

  const isReadyToSend =
    formData.fullName.trim().length > 0 &&
    formData.phone.trim().length > 0 &&
    formData.message.trim().length > 0;

  return (
    <div className="space-y-12 lg:space-y-16 pb-20">
      {/* 1. BREADCRUMB + S.O.S HERO SHOWCASE (SEPARATED IMAGES + 100% EDITABLE TEXTS) */}
      <section className="bg-stone-100 pt-8 pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <button
              type="button"
              onClick={() => onNavigate('nosotros')}
              className="hover:text-slate-900 transition-colors cursor-pointer"
            >
              {t('Nosotros', 'About Us')}
            </button>
            <span>/</span>
            <span className="text-rose-600 font-semibold">S.O.S</span>
          </nav>

          {/* Dark Editorial S.O.S Hero Banner matching user design with fully separated layers */}
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-blue-950 via-slate-950 to-black text-white shadow-2xl border border-slate-800 min-h-[520px] sm:min-h-[560px] flex flex-col justify-between p-6 sm:p-10 lg:p-14">
            {/* Optional independent background image slot */}
            {SOS_SECTION_DATA.visuals.backgroundImage && (
              <img
                src={SOS_SECTION_DATA.visuals.backgroundImage}
                alt={
                  lang === 'es'
                    ? SOS_SECTION_DATA.visuals.backgroundImageAltEs
                    : SOS_SECTION_DATA.visuals.backgroundImageAltEn
                }
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover opacity-35 pointer-events-none"
              />
            )}

            {/* Ambient navy radial glow */}
            <div
              aria-hidden="true"
              className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-blue-700/25 blur-3xl pointer-events-none"
            />

            {/* Independent Graphic Layer: Large Red Vinyl Disc (Right) */}
            <div
              aria-hidden="true"
              className="block absolute -right-5 sm:right-4 lg:right-12 top-4 sm:top-1/2 sm:-translate-y-1/2 w-28 h-28 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-[370px] lg:h-[370px] pointer-events-none z-0 opacity-95"
            >
              <RedVinylDisc
                customImage={SOS_SECTION_DATA.visuals.largeVinylImage || undefined}
                className="w-full h-full"
              />
            </div>

            {/* Independent Graphic Layer: Small Red Vinyl Disc + Bible & Push Button (Bottom-Left) */}
            <div
              aria-hidden="true"
              className="flex items-center justify-center absolute -left-3 sm:left-8 lg:left-24 bottom-2 sm:bottom-6 lg:bottom-8 w-28 h-28 sm:w-44 sm:h-44 md:w-52 md:h-52 lg:w-64 lg:h-64 pointer-events-none z-0 opacity-100"
            >
              <RedVinylDisc
                customImage={SOS_SECTION_DATA.visuals.smallVinylImage || undefined}
                className="w-24 h-24 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-56 lg:h-56"
              />
              <BibleEmergencyArt
                customImage={SOS_SECTION_DATA.visuals.bibleButtonImage || undefined}
                className="absolute w-20 h-20 sm:w-32 sm:h-32 md:w-36 md:h-36 lg:w-44 lg:h-44 translate-y-1 sm:translate-y-2"
              />
            </div>

            {/* Editable Top Prompt Text */}
            <div className="relative z-10 pr-24 sm:pr-0">
              <p className="text-sm sm:text-lg lg:text-xl font-medium text-white/95 tracking-tight max-w-2xl">
                {lang === 'es'
                  ? SOS_SECTION_DATA.topPromptEs
                  : SOS_SECTION_DATA.topPromptEn}
              </p>
            </div>

            {/* Center Editable Typography + Interactive Helpline Badge + Scripture Note */}
            <div className="relative z-10 my-auto pt-10 pb-24 sm:py-8 flex flex-col items-center md:items-start md:pl-20 lg:pl-44 space-y-6">
              {/* Row 1: S.O.S Display Title + Interactive Helpline Sticker */}
              <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                <h1
                  className="font-display font-black italic text-6xl sm:text-7xl lg:text-8xl tracking-tight text-white select-text leading-none"
                  style={{
                    textShadow: '4px 5px 0px #5c1916, 7px 9px 18px rgba(0,0,0,0.85)',
                  }}
                >
                  {SOS_SECTION_DATA.title}
                </h1>

                {/* Editable White/Yellow Helpline Card */}
                <div className="relative bg-white text-slate-950 shadow-2xl border border-stone-200 min-w-[255px] sm:min-w-[285px] transform -rotate-1 hover:rotate-0 transition-transform">
                  {/* Top Phone Row (Clickable WhatsApp Link) */}
                  <a
                    href={whatsappDirectUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 pt-3 pb-2 hover:bg-stone-50 transition-colors"
                  >
                    <span className="w-5 h-5 rounded-full bg-slate-900 text-white flex items-center justify-center shrink-0">
                      <Phone className="w-3 h-3" />
                    </span>
                    <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-slate-900">
                      {SOS_SECTION_DATA.helplineNumber}
                    </span>
                  </a>

                  {/* Bottom Yellow Strip + Diagonal Red NEW Badge */}
                  <div className="relative bg-amber-300 px-4 py-1.5 flex items-center justify-center overflow-hidden">
                    <span className="absolute -left-2 bottom-0.5 -rotate-12 bg-red-600 text-white text-[9px] font-black uppercase tracking-wider px-2.5 py-0.5 shadow-sm">
                      {lang === 'es'
                        ? SOS_SECTION_DATA.helplineBadgeEs
                        : SOS_SECTION_DATA.helplineBadgeEn}
                    </span>
                    <span className="text-xs sm:text-sm font-bold italic text-slate-900 pl-7 pr-1 whitespace-nowrap">
                      {lang === 'es'
                        ? SOS_SECTION_DATA.helplineLabelEs
                        : SOS_SECTION_DATA.helplineLabelEn}
                    </span>
                  </div>
                </div>
              </div>

              {/* Row 2: Editable Scripture Note Card (Isaiah 43:19) */}
              <div className="relative sm:ml-16 lg:ml-24 max-w-xs w-full bg-stone-100 text-slate-900 shadow-2xl border border-stone-200">
                <div className="px-5 pt-4 pb-3 text-center space-y-1">
                  <p className="text-sm sm:text-base font-bold italic text-slate-900 leading-snug">
                    {lang === 'es'
                      ? SOS_SECTION_DATA.scriptureLine1Es
                      : SOS_SECTION_DATA.scriptureLine1En}
                    <br />
                    {lang === 'es'
                      ? SOS_SECTION_DATA.scriptureLine2Es
                      : SOS_SECTION_DATA.scriptureLine2En}
                  </p>
                  <p className="text-xs sm:text-sm font-semibold text-slate-700 pt-1">
                    {lang === 'es'
                      ? SOS_SECTION_DATA.scriptureRefEs
                      : SOS_SECTION_DATA.scriptureRefEn}
                  </p>
                </div>

                {/* Yellow & black chevron strip + smiley badge */}
                <div className="relative h-3 bg-amber-400 border-t border-amber-500/50 overflow-hidden flex items-center">
                  <div
                    aria-hidden="true"
                    className="w-full h-full opacity-80"
                    style={{
                      backgroundImage:
                        'repeating-linear-gradient(120deg, #1e293b 0px, #1e293b 6px, transparent 6px, transparent 14px)',
                    }}
                  />
                </div>

                {/* Cheerful Yellow Smiley Sticker Accent */}
                <svg
                  viewBox="0 0 36 36"
                  aria-hidden="true"
                  className="w-8 h-8 absolute -right-3 -bottom-2.5 rotate-12 drop-shadow-md pointer-events-none"
                >
                  <circle cx="18" cy="18" r="16" fill="#fde047" stroke="#ca8a04" strokeWidth="1.5" />
                  <ellipse cx="13" cy="14" rx="1.6" ry="2.6" fill="#1e293b" />
                  <ellipse cx="23" cy="14" rx="1.6" ry="2.6" fill="#1e293b" />
                  <path
                    d="M11 21 Q18 27 25 21"
                    fill="none"
                    stroke="#1e293b"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Quick Direct Action Buttons (WhatsApp & Copy Helpline) */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                <a
                  href={whatsappDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl shadow-lg transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('Escribir por WhatsApp ahora', 'Message on WhatsApp now')}</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopyPhone}
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span className="text-emerald-300">
                        {t('Número copiado', 'Number copied')}
                      </span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>{t('Copiar línea', 'Copy helpline')}</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. FORMULARIO CONFIDENCIAL S.O.S (CONEXIÓN DIRECTA CON LA LÍNEA DE AYUDA) */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              S.O.S · {t('Oración Confidencial', 'Confidential Prayer')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              {lang === 'es'
                ? SOS_SECTION_DATA.formTitleEs
                : SOS_SECTION_DATA.formTitleEn}
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
              {lang === 'es'
                ? SOS_SECTION_DATA.formSubtitleEs
                : SOS_SECTION_DATA.formSubtitleEn}
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold font-display text-emerald-950">
                {t(
                  '¡Tu petición ha sido registrada!',
                  'Your prayer request has been received!'
                )}
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                {t(
                  `Nuestro equipo de oración intercederá por ti y te contactará por ${formData.preferredContact}. También puedes enviar tu mensaje directamente a nuestra Línea de ayuda S.O.S por WhatsApp.`,
                  `Our prayer team will pray with you and reach out via ${formData.preferredContact}. You can also send this message directly to our S.O.S Help Line on WhatsApp.`
                )}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                <a
                  href={formWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t('Enviar también por WhatsApp', 'Also send via WhatsApp')}</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      reason: 'Oración',
                      message: '',
                      preferredContact: 'WhatsApp',
                      isConfidential: true,
                    });
                  }}
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold cursor-pointer"
                >
                  {t('Enviar otra petición', 'Send another request')}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('Tu nombre completo', 'Your full name')}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={t('Nombre y apellido', 'First and last name')}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('Teléfono celular / WhatsApp', 'Mobile / WhatsApp number')}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+57 300 000 0000"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('Correo electrónico (Opcional)', 'Email address (Optional)')}
                  </label>
                  <input
                    type="email"
                    placeholder="correo@ejemplo.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    {t('Motivo de oración', 'Prayer topic')}
                  </label>
                  <select
                    value={formData.reason}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        reason: e.target.value as PastoralCareRequest['reason'],
                      })
                    }
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                  >
                    <option value="Oración">
                      {t('Petición de oración', 'Prayer request')}
                    </option>
                    <option value="Consejería familiar">
                      {t('Consejería familiar o matrimonial', 'Family or marriage counseling')}
                    </option>
                    <option value="Duelo / Pérdida">
                      {t('Duelo o pérdida reciente', 'Grief or recent loss')}
                    </option>
                    <option value="Orientación espiritual">
                      {t('Orientación espiritual', 'Spiritual guidance')}
                    </option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  {t('Tu mensaje o petición', 'Your message or prayer need')}
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t(
                    'Escríbenos con confianza el tema por el cual deseas que oremos...',
                    'Share openly what you would like us to pray with you about...'
                  )}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-2 text-xs text-slate-600">
                <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>
                  {t(
                    'Tu petición será tratada con absoluta reserva por el equipo pastoral de En el Lugar Santísimo.',
                    'Your request will be handled in strict confidence by the pastoral team at En el Lugar Santísimo.'
                  )}
                </span>
              </div>

              {isReadyToSend ? (
                <a
                  href={formWhatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setSubmitted(true)}
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>
                    {t(
                      `Enviar por WhatsApp (${SOS_SECTION_DATA.prayerDispatchNumber})`,
                      `Send via WhatsApp (${SOS_SECTION_DATA.prayerDispatchNumber})`
                    )}
                  </span>
                </a>
              ) : (
                <button
                  type="submit"
                  className="w-full py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm rounded-xl shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>
                    {t(
                      `Enviar por WhatsApp (${SOS_SECTION_DATA.prayerDispatchNumber})`,
                      `Send via WhatsApp (${SOS_SECTION_DATA.prayerDispatchNumber})`
                    )}
                  </span>
                </button>
              )}
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
