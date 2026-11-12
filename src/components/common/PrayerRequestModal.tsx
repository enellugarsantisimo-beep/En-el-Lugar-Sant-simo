import React, { useState } from 'react';
import { X, Check, Heart, Shield, Lock, Send } from 'lucide-react';
import { CHURCH_INFO } from '../../data/churchData';

interface PrayerRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrayerRequestModal: React.FC<PrayerRequestModalProps> = ({
  isOpen,
  onClose,
}) => {
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
            <span>Estamos contigo en oración</span>
          </div>
          <h3 className="text-xl font-bold font-display text-white">
            Presenta tu petición delante de Dios
          </h3>
          <p className="text-xs text-stone-300 mt-1">
            Nuestro equipo de intercesores y pastores ora por cada motivo en el ayuno congregacional y las oraciones de la mañana.
          </p>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center mx-auto border border-rose-200">
              <Check className="w-7 h-7" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 font-display">
              Tu petición ha sido recibida
            </h4>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs text-slate-600 space-y-2">
              <p className="font-serif italic text-sm text-slate-800">
                «Clama a mí, y yo te responderé, y te enseñaré cosas grandes y ocultas que tú no conoces.» — Jeremías 33:3
              </p>
              <p className="text-slate-500">
                Estaremos orando por ti. Si solicitaste acompañamiento, nos comunicaremos con total prudencia y respeto.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <a
                href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=Hola,%20acabo%20de%20enviar%20una%20petici%C3%B3n%20de%20oraci%C3%B3n%20y%20quisiera%20hablar%20con%20alguien.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Escribir por WhatsApp</span>
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="w-full sm:w-auto px-4 py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-xs font-semibold transition-colors"
              >
                Cerrar ventana
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto">
            {/* Category pills */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Motivo principal
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
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Request content */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                ¿En qué podemos orar por ti hoy?
              </label>
              <textarea
                required
                rows={4}
                value={requestText}
                onChange={(e) => setRequestText(e.target.value)}
                placeholder="Cuéntanos con libertad tu situación o motivo de gratitud..."
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
              />
            </div>

            {/* Name & Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  Tu nombre (o anónimo)
                </label>
                <input
                  type="text"
                  placeholder="Ej. Andrés o Anónimo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  WhatsApp o Correo
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
                  Petición confidencial (Solo leída por el equipo pastoral)
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
                  Me gustaría recibir una palabra de ánimo o mensaje pastoral
                </span>
              </label>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Enviar Motivo de Oración</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
