import React, { useState } from 'react';
import { PageId } from '../types';
import { CHURCH_INFO, DONATE_SECTION_DATA } from '../data/churchData';
import { useLanguage } from '../context/LanguageContext';
import {
  Heart,
  Copy,
  Check,
  QrCode,
  Building2,
  Globe,
  MessageCircle,
  ExternalLink,
  HeartHandshake,
} from 'lucide-react';

interface DonatePageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal?: () => void;
}

export const DonatePage: React.FC<DonatePageProps> = ({
  onNavigate,
}) => {
  const { lang, t } = useLanguage();
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (key: string, value: string) => {
    navigator.clipboard.writeText(value);
    setCopiedKey(key);
    setTimeout(() => {
      setCopiedKey((prev) => (prev === key ? null : prev));
    }, 2200);
  };

  return (
    <div className="space-y-14 lg:space-y-20 pb-20">
      {/* 1. HERO & FULL DONATION PANEL (BACKGROUND IMAGE + EDITABLE TEXT OVERLAID) */}
      <section className="bg-gradient-to-b from-stone-100 to-white pt-8 pb-14 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <button
              onClick={() => onNavigate('nosotros')}
              className="hover:text-slate-900 transition-colors"
            >
              {t('Nosotros', 'About Us')}
            </button>
            <span>/</span>
            <span className="text-rose-600 font-semibold">{t('Dona', 'Donate')}</span>
          </nav>

          {/* Main Editable Banner Card with Background Image & All Donation Info Overlaid */}
          <div className="relative rounded-3xl overflow-hidden bg-slate-950 text-white border border-slate-800 shadow-2xl">
            {/* Independent Background Image (Swappable via DONATE_SECTION_DATA.backgroundImage) */}
            <img
              src={DONATE_SECTION_DATA.backgroundImage}
              alt={
                lang === 'es'
                  ? DONATE_SECTION_DATA.backgroundImageAltEs
                  : DONATE_SECTION_DATA.backgroundImageAltEn
              }
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-35"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/90 via-slate-950/80 to-indigo-950/85" />

            {/* Editable Content Overlaid on Top of the Background Image */}
            <div className="relative z-10 p-6 sm:p-10 lg:p-14 space-y-10">
              {/* Top Heading */}
              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b border-white/15 pb-8">
                <div className="space-y-3 max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/20 border border-rose-400/40 text-rose-300 text-xs font-semibold">
                    <Heart className="w-3.5 h-3.5 fill-current" />
                    <span>
                      {lang === 'es'
                        ? DONATE_SECTION_DATA.eyebrowEs
                        : DONATE_SECTION_DATA.eyebrowEn}
                    </span>
                  </div>

                  <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display tracking-tight text-white">
                    {lang === 'es'
                      ? DONATE_SECTION_DATA.headlineEs
                      : DONATE_SECTION_DATA.headlineEn}
                  </h1>

                  <p className="text-sm sm:text-base text-stone-300 leading-relaxed">
                    {lang === 'es'
                      ? DONATE_SECTION_DATA.descriptionEs
                      : DONATE_SECTION_DATA.descriptionEn}
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 shrink-0">
                  <a
                    href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
                      t(
                        'Hola, deseo compartir el comprobante de mi donación / ofrenda.',
                        'Hello, I would like to share my donation / offering receipt.'
                      )
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm rounded-xl transition-colors shadow-lg"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t('Enviar comprobante por WhatsApp', 'Send receipt via WhatsApp')}</span>
                  </a>
                </div>
              </div>

              {/* QR Image Card + 3 Editable Account Cards Overlaid on Background */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Left: Independent QR Code Card */}
                <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-center space-y-4">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-amber-300">
                    <QrCode className="w-4 h-4" />
                    <span>{t('Pago Rápido con QR', 'Fast QR Payment')}</span>
                  </div>

                  <div className="w-full max-w-[260px] rounded-2xl overflow-hidden bg-white p-2 shadow-xl">
                    <img
                      src={DONATE_SECTION_DATA.qrImage}
                      alt={
                        lang === 'es'
                          ? DONATE_SECTION_DATA.qrImageAltEs
                          : DONATE_SECTION_DATA.qrImageAltEn
                      }
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-contain rounded-xl"
                    />
                  </div>

                  <div className="space-y-1">
                    <p className="text-xs font-bold text-white">
                      {DONATE_SECTION_DATA.qrAccountTag}
                    </p>
                    <p className="text-[11px] text-stone-300">
                      {lang === 'es'
                        ? DONATE_SECTION_DATA.qrCaptionEs
                        : DONATE_SECTION_DATA.qrCaptionEn}
                    </p>
                  </div>
                </div>

                {/* Right: 3 Donation Accounts (Nequi/Bancolombia, Banco de Bogotá, Zelle USA) */}
                <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
                  {DONATE_SECTION_DATA.channels.map((channel) => {
                    const isCopied = copiedKey === channel.id;
                    return (
                      <div
                        key={channel.id}
                        className={`rounded-2xl border backdrop-blur-md p-6 flex flex-col justify-between space-y-5 shadow-lg ${channel.cardAccentClass}`}
                      >
                        <div className="space-y-4 text-center">
                          <div className="flex items-center justify-center gap-2 text-white">
                            {channel.id === 'zelle-usa' ? (
                              <Globe className="w-4 h-4 text-sky-300 shrink-0" />
                            ) : (
                              <Building2 className="w-4 h-4 text-rose-300 shrink-0" />
                            )}
                            <h2 className="text-base sm:text-lg font-extrabold font-display tracking-wide">
                              {lang === 'es' ? channel.titleEs : channel.titleEn}
                            </h2>
                          </div>

                          {channel.methodBadge && (
                            <div>
                              <span className="inline-block px-3.5 py-1 rounded-full bg-purple-600/80 border border-purple-300/40 text-white text-sm font-black tracking-wide">
                                {channel.methodBadge}
                              </span>
                            </div>
                          )}

                          {/* Account Number Pill */}
                          <div
                            className={`py-3 px-4 rounded-2xl border text-lg sm:text-xl font-extrabold font-mono tracking-wider ${channel.numberColorClass}`}
                          >
                            {channel.accountNumber}
                          </div>

                          <div className="space-y-1.5">
                            <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-amber-300">
                              {lang === 'es' ? channel.accountTypeEs : channel.accountTypeEn}
                            </span>

                            <p className="text-xs sm:text-sm font-semibold text-white leading-snug">
                              {lang === 'es' ? channel.holderEs : channel.holderEn}
                            </p>

                            {channel.taxId && (
                              <p className="text-xs font-mono text-stone-300 pt-0.5">
                                {channel.taxId}
                              </p>
                            )}
                          </div>
                        </div>

                        <button
                          type="button"
                          onClick={() => handleCopy(channel.id, channel.accountNumber)}
                          className="w-full py-2.5 px-4 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-xs font-semibold text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                        >
                          {isCopied ? (
                            <>
                              <Check className="w-3.5 h-3.5 text-emerald-400" />
                              <span className="text-emerald-300">
                                {t('Número copiado', 'Number copied')}
                              </span>
                            </>
                          ) : (
                            <>
                              <Copy className="w-3.5 h-3.5" />
                              <span>{t('Copiar número', 'Copy number')}</span>
                            </>
                          )}
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. APOYO SOCIAL */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-600 uppercase tracking-widest">
              <HeartHandshake className="w-4 h-4" />
              <span>{t('Apoyo Social · Lives Saved Project', 'Social Outreach · Lives Saved Project')}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-900">
              {lang === 'es'
                ? DONATE_SECTION_DATA.socialBannerTitleEs
                : DONATE_SECTION_DATA.socialBannerTitleEn}
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              {t(
                'También puedes apadrinar y apoyar directamente nuestros proyectos sociales e infantiles en Bocachica a través de nuestra plataforma oficial.',
                'You can also sponsor and directly support our social and children’s projects in Bocachica through our official platform.'
              )}
            </p>
          </div>

          <div className="shrink-0">
            <a
              href={CHURCH_INFO.donateSponsorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition-colors shadow-sm"
            >
              <span>
                {lang === 'es'
                  ? DONATE_SECTION_DATA.socialBannerCtaEs
                  : DONATE_SECTION_DATA.socialBannerCtaEn}
              </span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
