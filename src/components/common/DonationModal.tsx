import React, { useState } from 'react';
import { X, Check, Copy, Heart, ShieldCheck, Sparkles } from 'lucide-react';
import { DONATION_TIERS } from '../../data/churchData';

interface DonationModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTierId?: string;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  isOpen,
  onClose,
  defaultTierId,
}) => {
  const [selectedTier, setSelectedTier] = useState<string>(defaultTierId || 'tier-2');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [method, setMethod] = useState<'bancolombia' | 'nequi' | 'daviplata' | 'card'>('nequi');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [donorPhone, setDonorPhone] = useState('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen) return null;

  const activeTier = DONATION_TIERS.find((t) => t.id === selectedTier);
  const finalAmount = customAmount
    ? parseInt(customAmount, 10) || 0
    : activeTier?.amountCOP || 50000;

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  const handleProcessDonation = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm overflow-y-auto">
      <div className="bg-white rounded-2xl max-w-xl w-full my-8 shadow-2xl overflow-hidden border border-slate-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-800 to-rose-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
            <Heart className="w-4 h-4 fill-current" />
            <span>Lives Saved Project · Bocachica</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-bold font-display text-white">
            Tu generosidad cambia realidades
          </h3>
          <p className="text-xs sm:text-sm text-stone-200 mt-1 max-w-md">
            Cada aporte impulsa la educación, meriendas escolares y bienestar integral de los niños en la isla de Bocachica.
          </p>
        </div>

        {isSuccess ? (
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h4 className="text-xl font-bold text-slate-900 font-display">
              ¡Muchas gracias por sembrar con amor!
            </h4>
            <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
              Hemos registrado tu intención de donación por{' '}
              <strong className="text-slate-900 font-semibold">
                ${finalAmount.toLocaleString('es-CO')} COP
              </strong>
              . Tu aporte se traducirá directamente en cuadernos, meriendas y apoyo docente en Bocachica.
            </p>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs text-slate-600 text-left space-y-1 max-w-sm mx-auto">
              <div className="flex justify-between">
                <span>Referencia:</span>
                <span className="font-mono font-medium text-slate-900">
                  LS-{Math.floor(100000 + Math.random() * 900000)}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Destino:</span>
                <span className="text-slate-900 font-medium">Bocachica te necesita</span>
              </div>
              <div className="flex justify-between">
                <span>Canal:</span>
                <span className="uppercase text-slate-900 font-medium">{method}</span>
              </div>
            </div>
            <div className="pt-2">
              <button
                onClick={() => {
                  setIsSuccess(false);
                  onClose();
                }}
                className="px-6 py-2.5 bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs rounded-xl shadow-sm transition-colors"
              >
                Volver al portal
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleProcessDonation} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
            {/* Tier Selector */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Selecciona un nivel de aporte
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {DONATION_TIERS.map((tier) => {
                  const isSelected = selectedTier === tier.id && !customAmount;
                  return (
                    <button
                      type="button"
                      key={tier.id}
                      onClick={() => {
                        setSelectedTier(tier.id);
                        setCustomAmount('');
                      }}
                      className={`p-3 rounded-xl text-left border transition-all relative ${
                        isSelected
                          ? 'border-rose-600 bg-rose-50/70 text-slate-900 shadow-sm ring-1 ring-rose-500'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      {tier.isPopular && (
                        <span className="absolute -top-2 right-2 px-1.5 py-0.5 bg-rose-600 text-[10px] text-white font-semibold rounded-md flex items-center gap-0.5">
                          <Sparkles className="w-2.5 h-2.5" /> Popular
                        </span>
                      )}
                      <div className="font-bold text-sm text-slate-900">
                        ${tier.amountCOP.toLocaleString('es-CO')} COP
                      </div>
                      <div className="text-[11px] font-medium text-slate-600 mt-0.5 line-clamp-1">
                        {tier.label}
                      </div>
                      <div className="text-[10px] text-slate-500 mt-1 line-clamp-2">
                        {tier.impactDescription}
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Custom amount */}
              <div className="mt-3">
                <div className="relative">
                  <span className="absolute left-3 top-2.5 text-xs text-slate-400 font-semibold">
                    $ COP
                  </span>
                  <input
                    type="number"
                    min="10000"
                    step="5000"
                    placeholder="Otro monto voluntario (ej. 75000)"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedTier('');
                    }}
                    className="w-full pl-16 pr-4 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Método de aporte en Colombia
              </label>
              <div className="grid grid-cols-4 gap-2">
                {[
                  { id: 'nequi', label: 'Nequi', note: 'App móvil' },
                  { id: 'daviplata', label: 'Daviplata', note: 'App móvil' },
                  { id: 'bancolombia', label: 'Bancolombia', note: 'Ahorros' },
                  { id: 'card', label: 'Tarjeta', note: 'PSE / Débito' },
                ].map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => setMethod(item.id as any)}
                    className={`p-2.5 rounded-xl border text-center transition-all ${
                      method === item.id
                        ? 'border-slate-900 bg-slate-900 text-white shadow-sm'
                        : 'border-slate-200 bg-white text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    <span className="font-bold text-xs block">{item.label}</span>
                    <span
                      className={`text-[10px] ${
                        method === item.id ? 'text-slate-300' : 'text-slate-400'
                      }`}
                    >
                      {item.note}
                    </span>
                  </button>
                ))}
              </div>

              {/* Method Details Box */}
              <div className="mt-3 p-3.5 bg-stone-50 border border-stone-200 rounded-xl text-xs space-y-2">
                {method === 'nequi' && (
                  <div className="space-y-1.5">
                    <span className="font-semibold text-slate-800 block">
                      Transferencia directa a Nequi:
                    </span>
                    <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-200">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Número de cuenta Nequi:</span>
                        <span className="font-mono font-bold text-slate-900">305 435 1398</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy('3054351398', 'nequi')}
                        className="px-2.5 py-1 text-[11px] font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md flex items-center gap-1 transition-colors"
                      >
                        {copiedKey === 'nequi' ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" /> Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" /> Copiar
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-500">Titular: En el Lugar Santísimo - Proyecto Bocachica</p>
                  </div>
                )}

                {method === 'daviplata' && (
                  <div className="space-y-1.5">
                    <span className="font-semibold text-slate-800 block">
                      Transferencia directa a Daviplata:
                    </span>
                    <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-200">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Número de celular Daviplata:</span>
                        <span className="font-mono font-bold text-slate-900">305 435 1398</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy('3054351398', 'daviplata')}
                        className="px-2.5 py-1 text-[11px] font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md flex items-center gap-1 transition-colors"
                      >
                        {copiedKey === 'daviplata' ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" /> Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" /> Copiar
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}

                {method === 'bancolombia' && (
                  <div className="space-y-1.5">
                    <span className="font-semibold text-slate-800 block">
                      Cuenta de Ahorros Bancolombia:
                    </span>
                    <div className="flex items-center justify-between bg-white p-2 rounded-lg border border-slate-200">
                      <div>
                        <span className="text-[10px] text-slate-400 block">Cta. Ahorros Bancolombia:</span>
                        <span className="font-mono font-bold text-slate-900">108-724891-23</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy('10872489123', 'banco')}
                        className="px-2.5 py-1 text-[11px] font-medium bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md flex items-center gap-1 transition-colors"
                      >
                        {copiedKey === 'banco' ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-600" /> Copiado
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" /> Copiar
                          </>
                        )}
                      </button>
                    </div>
                    <p className="text-[11px] text-slate-500">Comunidad Cristiana En el Lugar Santísimo · NIT 901.428.115-4</p>
                  </div>
                )}

                {method === 'card' && (
                  <div className="space-y-1.5 text-[11px] text-slate-600">
                    <p>
                      Conexión segura mediante PSE y pasarela certificada de débito/crédito para donaciones institucionales.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Donor basic info */}
            <div className="space-y-3">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider">
                Datos del donante (Para certificado o soporte)
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Nombre completo"
                  value={donorName}
                  onChange={(e) => setDonorName(e.target.value)}
                  className="px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
                <input
                  type="email"
                  required
                  placeholder="Correo electrónico"
                  value={donorEmail}
                  onChange={(e) => setDonorEmail(e.target.value)}
                  className="px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <input
                type="tel"
                placeholder="Teléfono celular / WhatsApp (Opcional)"
                value={donorPhone}
                onChange={(e) => setDonorPhone(e.target.value)}
                className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
            </div>

            {/* Impact recap & submit */}
            <div className="p-3 rounded-xl bg-rose-50/60 border border-rose-200/60 flex items-center justify-between">
              <div>
                <span className="text-[11px] text-slate-500 block">Total a donar:</span>
                <span className="text-base font-bold text-slate-900 font-mono">
                  ${finalAmount.toLocaleString('es-CO')} COP
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-rose-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>100% Destinado a la labor</span>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Confirmar y Registrar Aporte</span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
