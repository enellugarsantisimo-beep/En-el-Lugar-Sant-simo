import React, { useState } from 'react';
import { X, Check, Heart, Shield, Lock, Send, MessageCircle } from 'lucide-react';
import { SOS_SECTION_DATA } from '../../data/churchData';
import { useLanguage } from '../../context/LanguageContext';

interface PrayerRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrayerRequestModal: React.FC<PrayerRequestModalProps> = ({
  isOpen,
  onClose,
}) => {
  const { t } = useLanguage();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [category, setCategory] = useState<'Salud' | 'Familia' | 'Finanzas' | 'Espiritual' | 'Paz / Ansiedad' | 'Agradecimiento'>('Salud');
  const [requestText, setRequestText] = useState('');
  const [isConfidential, setIsConfidential] = useState(true);
  const [wantFollowUp, setWantFollowUp] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isReadyToSend = requestText.trim().length > 0;

  const prayerWhatsappUrl = `https://wa.me/${SOS_SECTION_DATA.prayerDispatchClean}?text=${encodeURIComponent(
    `🙏 *${t('Petición de Oración', 'Prayer Request')} (${category})*\n• ${t(
      'Nombre',
      'Name'
    )}: ${name.trim() || t('Anónimo', 'Anonymous')}${
      contact.trim() ? `\n• ${t('Contacto', 'Contact')}: ${contact.trim()}` : ''
    }\n• ${t('Confidencial', 'Confidential')}: ${
      isConfidential ? t('Sí', 'Yes') : 'No'
    }\n• ${t('Petición', 'Request')}: ${requestText.trim()}`
  )}`;

  const categoryLabels: Record<string, string> = {
    Salud: t('Salud', 'Health'),
    Familia: t('Familia', 'Family'),
    Finanzas: t('Finanzas', 'Finances'),
    Espiritual: t('Espiritual', 'Spiritual'),
    'Paz / Ansiedad': t('Paz / Ansiedad', 'Peace / Anxiety'),
    Agradecimiento: t('Agradecimiento', 'Thanksgiving'),
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-lg w-full my-8 shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-slate-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Heart className="w-4 h-4 fill-current" />
            <span>{t('Estamos contigo en oración', 'We are praying with you')}</span>
          </div>
          <h3 className="text-xl font-bold font-display text-white">
            {t('Presenta tu petición delante de Dios', 'Bring Your Request Before God')}
          </h3>
          <p className="text-xs text-stone-300 mt-1">
            {t(
              'Nuestro equipo de intercesores y pastores ora por cada motivo en el ayuno congregacional y las oraciones de la mañana.',
              'Our intercessors and pastoral team pray over every request during congregational fasting and morning prayers.'
            )}
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-200">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 font-display">
              {t('Tu petición ha sido recibida', 'Your prayer request has been received')}
            </h4>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs text-slate-600 space-y-2">
              <p className="font-serif italic text-sm text-slate-800">
                {t(
                  '«Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.» — Jeremías 33:3',
                  '“Call to Me, and I will answer you, and show you great and mighty things, which you do not know.” — Jeremiah 33:3'
                )}
              </p>
              <p className="text-slate-500">
                {t(
                  'Estaremos orando por ti. Si solicitaste acompañamiento, nos comunicaremos con total prudencia y respeto.',
                  'We will be praying for you. If you requested pastoral follow-up, we will reach out with care and respect.'
                )}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={prayerWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>{t('Reenviar por WhatsApp', 'Resend via WhatsApp')}</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                {t('Cerrar ventana', 'Close')}
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            {/* Category pills */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                {t('Motivo principal', 'Primary topic')}
              </label>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Salud',
                  'Familia',
                  'Finanzas',
                  'Espiritual',
                  'Paz / Ansiedad',
                  'Agradecimiento',
                ].map((cat) => (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => setCategory(cat as any)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      category === cat
                        ? 'bg-rose-600 text-white shadow-sm'
                        : 'bg-stone-100 text-slate-700 hover:bg-stone-200'
                    }`}
                  >
                    {categoryLabels[cat]}
                  </button>
                ))}
              </div>
            </div>

            {/* Request content */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                {t('¿En qué podemos orar por ti hoy?', 'How can we pray for you today?')}
              </label>
              <textarea
                required
                rows={4}
                value={requestText}
                onChange={(e) => setRequestText(e.target.value)}
                placeholder={t('Cuéntanos con libertad tu situación o motivo de gratitud...', 'Share freely your situation or thanksgiving note...')}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
              />
            </div>

            {/* Name & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  {t('Tu nombre (o anónimo)', 'Your name (or anonymous)')}
                </label>
                <input
                  type="text"
                  placeholder={t('Ej. Andrés o Anónimo', 'E.g. Andrew or Anonymous')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  {t('WhatsApp o Correo', 'WhatsApp or Email')}
                </label>
                <input
                  type="text"
                  placeholder="+57 300 000 0000"
                  value={contact}
                  onChange={(e) => setContact(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
            </div>

            {/* Privacy toggles */}
            <div className="space-y-2 pt-1 border-t border-slate-100">
              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600">
                <input
                  type="checkbox"
                  checked={isConfidential}
                  onChange={(e) => setIsConfidential(e.target.checked)}
                  className="rounded text-rose-600 focus:ring-rose-500"
                />
                <span className="flex items-center gap-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  {t('Petición confidencial (Solo leída por el equipo pastoral)', 'Confidential request (Pastoral team only)')}
                </span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-xs text-slate-600">
                <input
                  type="checkbox"
                  checked={wantFollowUp}
                  onChange={(e) => setWantFollowUp(e.target.checked)}
                  className="rounded text-rose-600 focus:ring-rose-500"
                />
                <span className="flex items-center gap-1">
                  <Shield className="w-3.5 h-3.5 text-slate-400" />
                  {t('Me gustaría recibir una palabra de ánimo o mensaje pastoral', 'I would like to receive encouragement or a pastoral message')}
                </span>
              </label>
            </div>

            {isReadyToSend ? (
              <a
                href={prayerWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSubmitted(true)}
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>
                  {t(
                    `Enviar petición por WhatsApp (${SOS_SECTION_DATA.prayerDispatchNumber})`,
                    `Send prayer request via WhatsApp (${SOS_SECTION_DATA.prayerDispatchNumber})`
                  )}
                </span>
              </a>
            ) : (
              <button
                type="submit"
                className="w-full py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>
                  {t(
                    `Enviar petición por WhatsApp (${SOS_SECTION_DATA.prayerDispatchNumber})`,
                    `Send prayer request via WhatsApp (${SOS_SECTION_DATA.prayerDispatchNumber})`
                  )}
                </span>
              </button>
            )}
          </form>
        )}
      </div>
    </div>
  );
};
