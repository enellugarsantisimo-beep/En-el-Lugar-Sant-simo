import React, { useState } from 'react';
import { PageId, PastoralCareRequest } from '../types';
import { CHURCH_INFO } from '../data/churchData';
import {
  HeartHandshake,
  Phone,
  Mail,
  MapPin,
  Clock,
  Lock,
  Send,
  CheckCircle,
  MessageCircle,
  Copy,
  Check,
  Shield,
  Calendar,
} from 'lucide-react';

interface ContactCarePageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

export const ContactCarePage: React.FC<ContactCarePageProps> = ({
  onNavigate,
  onOpenPrayerModal,
}) => {
  const [formData, setFormData] = useState<PastoralCareRequest>({
    fullName: '',
    phone: '',
    email: '',
    reason: 'Orientación espiritual',
    message: '',
    preferredContact: 'WhatsApp',
    isConfidential: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CHURCH_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const biblicalComfortVerses = [
    {
      verse: '«Venid a mí todos los que estáis trabajados y cargados, y yo os haré descansar.»',
      ref: 'Mateo 11:28',
    },
    {
      verse: '«Cercano está Jehová a los quebrantados de corazón; y salva a los contritos de espíritu.»',
      ref: 'Salmo 34:18',
    },
    {
      verse: '«No temas, porque yo estoy contigo; no desmayes, porque yo soy tu Dios que te esfuerzo...»',
      ref: 'Isaías 41:10',
    },
  ];

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
            <span className="text-rose-600 font-semibold">Acompañamiento & Contactar</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
                Cuidado Pastoral y Cercanía
              </span>
              <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                No estás solo: Estamos aquí para caminar contigo
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Todos atravesamos momentos donde necesitamos ser escuchados, recibir una palabra oportuna de Dios y orar juntos. Nuestro equipo pastoral y de consejeros te ofrece un espacio confidencial y de acogida sin juzgarte.
              </p>
            </div>

            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider">
                <Clock className="w-4 h-4 text-rose-600" />
                <span>Horarios de Atención Pastoral</span>
              </div>
              <div className="text-xs text-slate-600 space-y-1">
                <p><strong>Lunes a Viernes:</strong> 9:00 am – 5:00 pm</p>
                <p><strong>Sábados (Ayuno):</strong> 10:00 am – 12:00 pm</p>
                <p><strong>Domingos:</strong> Antes y después de la reunión general</p>
              </div>
              <a
                href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=Hola,%20quisiera%20solicitar%20acompa%C3%B1amiento%20pastoral.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Abrir chat de WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 2. CANALES DIRECTOS DE CONTACTO */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 font-display">
              Línea Directa / WhatsApp
            </h3>
            <p className="text-xs text-slate-600">
              Escríbenos para peticiones de oración, orientación sobre horarios o asistencia a células.
            </p>
            <a
              href={`https://wa.me/${CHURCH_INFO.phoneClean}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm font-bold text-emerald-700 hover:text-emerald-800 block pt-1"
            >
              +57 3054351398
            </a>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Mail className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 font-display">
              Correo Electrónico
            </h3>
            <p className="text-xs text-slate-600">
              Para cartas formales, consultas sobre voluntariado o contacto con el liderazgo pastoral.
            </p>
            <div className="flex items-center justify-between pt-1">
              <span className="text-xs font-semibold text-slate-900 truncate">
                {CHURCH_INFO.email}
              </span>
              <button
                onClick={handleCopyEmail}
                className="text-xs text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
              >
                {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                <span>{copiedEmail ? 'Copiado' : 'Copiar'}</span>
              </button>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-base text-slate-900 font-display">
              Sede Presencial Bogotá
            </h3>
            <p className="text-xs text-slate-600">
              Av. Calle 24 #72b–30 (Modelia / Salitre Occidental), Bogotá, Colombia.
            </p>
            <button
              onClick={() => onNavigate('eventos')}
              className="text-xs font-bold text-rose-600 hover:text-rose-700 block pt-1 text-left"
            >
              Ver mapa y cómo llegar →
            </button>
          </div>
        </div>
      </section>

      {/* 3. FORMULARIO INTEGRAL DE ACOMPAÑAMIENTO PASTORAL */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              Solicitud Confidencial
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Formulario de Acompañamiento
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm max-w-lg mx-auto">
              Diligencia este formulario. Tu información será tratada con estricta reserva pastoral y un miembro de nuestro equipo se comunicará contigo con delicadeza.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-4">
              <CheckCircle className="w-12 h-12 text-emerald-600 mx-auto" />
              <h4 className="text-xl font-bold font-display text-emerald-950">
                ¡Tu solicitud ha sido entregada al equipo pastoral!
              </h4>
              <p className="text-xs sm:text-sm text-emerald-800 leading-relaxed max-w-md mx-auto">
                Nos pondremos en contacto contigo a través de <strong>{formData.preferredContact}</strong> en el transcurso de las próximas 24 horas. Recuerda que no estás solo: Dios tiene cuidado de ti.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      fullName: '',
                      phone: '',
                      email: '',
                      reason: 'Orientación espiritual',
                      message: '',
                      preferredContact: 'WhatsApp',
                      isConfidential: true,
                    });
                  }}
                  className="px-5 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-semibold"
                >
                  Enviar otra solicitud
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Tu nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nombre y apellido"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Teléfono celular / WhatsApp
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
                    Correo electrónico (Opcional)
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
                    Motivo principal
                  </label>
                  <select
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value as any })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                  >
                    <option value="Oración">Necesito oración urgente</option>
                    <option value="Consejería familiar">Consejería familiar o matrimonial</option>
                    <option value="Duelo / Pérdida">Duelo o pérdida reciente</option>
                    <option value="Orientación espiritual">Orientación espiritual / Dudas de fe</option>
                    <option value="Primera visita">Quiero visitar la iglesia y ser recibido</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Medio de contacto preferido
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['WhatsApp', 'Llamada', 'Reunión Presencial'] as const).map((m) => (
                    <button
                      type="button"
                      key={m}
                      onClick={() => setFormData({ ...formData, preferredContact: m })}
                      className={`py-2 text-xs font-medium rounded-lg border transition-colors ${
                        formData.preferredContact === m
                          ? 'bg-slate-900 text-white border-slate-900 font-bold'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50'
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Mensaje o detalle de la situación
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Escribe con confianza aquello en lo que necesitas apoyo o consejo..."
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200 flex items-center gap-2 text-xs text-slate-600">
                <Lock className="w-4 h-4 text-slate-400 shrink-0" />
                <span>
                  Tu mensaje será manejado con absoluta reserva por el equipo de pastores de En el Lugar Santísimo.
                </span>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-xl shadow-md transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Solicitar Acompañamiento</span>
              </button>
            </form>
          )}
        </div>
      </section>

      {/* 4. PALABRAS DE ESPERANZA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            Promesas Bíblicas
          </span>
          <h3 className="text-2xl font-bold font-display text-slate-900">
            Una palabra de paz para tu corazón hoy
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {biblicalComfortVerses.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-stone-100 border border-stone-200 space-y-3 flex flex-col justify-between"
            >
              <p className="font-serif italic text-xs sm:text-sm text-slate-800 leading-relaxed">
                {item.verse}
              </p>
              <span className="font-sans font-bold text-xs text-rose-600 block pt-1 border-t border-stone-200">
                {item.ref}
              </span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
