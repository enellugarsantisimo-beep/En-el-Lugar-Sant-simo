import React, { useState } from 'react';
import { PageId } from '../types';
import {
  CHURCH_INFO,
  DONATION_TIERS,
} from '../data/churchData';
import {
  Heart,
  BookOpen,
  Apple,
  Stethoscope,
  Smile,
  ShieldCheck,
  CheckCircle,
  Users,
  Send,
  Sparkles,
  ArrowRight,
  TrendingUp,
} from 'lucide-react';

interface SocialOutreachPageProps {
  onNavigate: (page: PageId) => void;
  onOpenDonationModal: (tierId?: string) => void;
  onOpenPrayerModal: () => void;
}

export const SocialOutreachPage: React.FC<SocialOutreachPageProps> = ({
  onNavigate,
  onOpenDonationModal,
  onOpenPrayerModal,
}) => {
  const [calculatorAmount, setCalculatorAmount] = useState<number>(50000);
  const [volName, setVolName] = useState('');
  const [volPhone, setVolPhone] = useState('');
  const [volEmail, setVolEmail] = useState('');
  const [volSkill, setVolSkill] = useState('Educación y Talleres Infantiles');
  const [volMessage, setVolMessage] = useState('');
  const [volSubmitted, setVolSubmitted] = useState(false);

  const getImpactDescription = (amount: number) => {
    if (amount < 35000) {
      return 'Garantiza suplementos alimenticios y meriendas saludables para 1 niño en la isla durante una semana de clases.';
    } else if (amount < 90000) {
      return 'Proporciona un kit escolar completo con cuadernos, lápices, colores y libros de lectura pedagógicos para un estudiante de Bocachica.';
    } else if (amount < 200000) {
      return 'Financia el apadrinamiento educativo integral por un mes completo: alimentación, apoyo escolar personalizado y seguimiento en valores.';
    } else {
      return 'Sustenta la adquisición de medicamentos pediátricos, pruebas básicas de salud y atención médica en las brigadas humanitarias periódicas.';
    }
  };

  const handleVolunteerSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setVolSubmitted(true);
  };

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
            <span className="text-rose-600 font-semibold">Apoyo Social · Bocachica</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold rounded-full">
                <Heart className="w-3.5 h-3.5 fill-current" />
                <span>Lives Saved Project · Misión Social</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
                Bocachica te necesita: Amor en acción
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
                Impulsa la <strong>educación, bienestar y oportunidades de avance</strong> a la población vulnerable de Bocachica. Mediante voluntariado, donaciones o apadrinamientos puedes aportar a la misión, donde cada peso e intención cuenta para cambiar realidades y crear oportunidades.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <button
                  onClick={() => onOpenDonationModal()}
                  className="px-6 py-3.5 bg-rose-600 hover:bg-rose-700 text-white rounded-xl text-sm font-semibold transition-all shadow-md flex items-center gap-2"
                >
                  <Heart className="w-4 h-4 fill-current" />
                  <span>Quiero donar ahora</span>
                </button>

                <a
                  href="#voluntariado"
                  className="px-5 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-sm font-semibold transition-all"
                >
                  Ser voluntario
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] relative">
              <img
                src={CHURCH_INFO.images.bocachica}
                alt="Niños sonriendo en talleres de lectura en Bocachica"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
                <p className="text-white text-xs sm:text-sm font-serif italic">
                  «De cierto os digo que en cuanto lo hicisteis a uno de estos mis hermanos más pequeños, a mí lo hicisteis.» — Mateo 25:40
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. REALIDAD Y LÍNEAS DE ACCIÓN EN BOCACHICA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
            ¿Por qué Bocachica?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display text-slate-900">
            Nuestras cuatro líneas de intervención comunitaria
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Ubicada en la Isla de Tierrabomba, Bocachica enfrenta retos históricos de acceso a agua potable, infraestructura educativa y recursos de salud. Nuestro compromiso va más allá del asistencialismo; construimos dignidad y esperanza con raíces bíblicas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 font-display">
                01. Educación & Refuerzo
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Entrega de kits escolares anuales, dotación de bibliotecas comunitarias y acompañamiento pedagógico en lectura y matemáticas.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-rose-600 block pt-2">
              +180 niños beneficiados por año
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
                <Apple className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 font-display">
                02. Nutrición & Meriendas
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Aseguramiento de raciones alimentarias balanceadas para niños en edad escolar que asisten a las jornadas de refuerzo y talleres.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-rose-600 block pt-2">
              Meriendas balanceadas cada semana
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center">
                <Stethoscope className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 font-display">
                03. Salud y Odontología
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Brigadas médicas y odontológicas voluntarias con profesionales de la congregación, entrega de medicamentos y kits de higiene oral.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-rose-600 block pt-2">
              Jornadas trimestrales in situ
            </span>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
                <Smile className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-base text-slate-900 font-display">
                04. Valores & Familia
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Escuela de padres, prevención de violencia intrafamiliar y discipulado en principios bíblicos para fortalecer los hogares de la isla.
              </p>
            </div>
            <span className="text-[11px] font-semibold text-rose-600 block pt-2">
              Talleres y campamentos formativos
            </span>
          </div>
        </div>
      </section>

      {/* 3. CALCULADORA INTERACTIVA DE IMPACTO */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-2xl border border-slate-800 space-y-8">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-rose-400 uppercase tracking-widest">
              Transparencia y Significado
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Calcula el impacto real de tu aporte
            </h2>
            <p className="text-xs sm:text-sm text-stone-300">
              Descubre con exactitud en qué se traduce tu aporte monetario para los niños y familias de Bocachica.
            </p>
          </div>

          {/* Amount buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {[25000, 50000, 120000, 250000].map((amt) => (
              <button
                key={amt}
                onClick={() => setCalculatorAmount(amt)}
                className={`py-3 px-2 rounded-xl font-mono text-xs font-bold transition-all border ${
                  calculatorAmount === amt
                    ? 'bg-rose-600 text-white border-rose-500 shadow-md ring-2 ring-rose-400/50'
                    : 'bg-slate-800 text-stone-300 border-slate-700 hover:bg-slate-700'
                }`}
              >
                ${amt.toLocaleString('es-CO')} COP
              </button>
            ))}
          </div>

          {/* Dynamic Impact Display Box */}
          <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-wider text-rose-300 font-bold">
                Tu aporte de ${calculatorAmount.toLocaleString('es-CO')} COP:
              </span>
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5" /> 100% Destinado a la obra
              </span>
            </div>
            <p className="text-base sm:text-lg font-display text-white font-medium leading-relaxed">
              {getImpactDescription(calculatorAmount)}
            </p>
          </div>

          <div className="text-center pt-2">
            <button
              onClick={() => onOpenDonationModal()}
              className="px-8 py-3.5 bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs rounded-xl shadow-lg transition-colors inline-flex items-center gap-2"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Realizar este aporte ahora</span>
            </button>
          </div>
        </div>
      </section>

      {/* 4. META DE LA CAMPAÑA ACTUAL (PROGRESO) */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-rose-600 uppercase tracking-widest block">
                Campaña Vigente 2026
              </span>
              <h3 className="text-xl font-bold font-display text-slate-900">
                Meta: 300 Kits Escolares & Nutricionales para Bocachica
              </h3>
            </div>
            <div className="text-right">
              <span className="text-2xl font-bold font-mono text-slate-900">78%</span>
              <span className="text-xs text-slate-500 block">234 kits completados</span>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full bg-slate-100 rounded-full h-3.5 overflow-hidden p-0.5 border border-slate-200">
            <div
              className="bg-gradient-to-r from-rose-500 to-amber-500 h-full rounded-full transition-all duration-1000"
              style={{ width: '78%' }}
            />
          </div>

          <div className="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1">
            <span>Faltan 66 kits para alcanzar la cobertura de toda la escuela local</span>
            <button
              onClick={() => onOpenDonationModal('tier-2')}
              className="font-bold text-rose-600 hover:text-rose-700 underline"
            >
              Completar un kit por $50.000 COP →
            </button>
          </div>
        </div>
      </section>

      {/* 5. FORMULARIO DE POSTULACIÓN DE VOLUNTARIADO */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6" id="voluntariado">
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-widest">
              Manos para la Misión
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold font-display text-slate-900">
              Inscríbete como Voluntario Social
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">
              ¿Tienes vocación pedagógica, médica, logística o simplemente el deseo de servir con tus manos? Te invitamos a sumarte a nuestras brigadas en Bocachica y Bogotá.
            </p>
          </div>

          {volSubmitted ? (
            <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-200 text-center space-y-3">
              <CheckCircle className="w-10 h-10 text-emerald-600 mx-auto" />
              <h4 className="font-bold text-base text-emerald-900">
                ¡Gracias por tu disposición a servir!
              </h4>
              <p className="text-xs text-emerald-700 leading-relaxed max-w-md mx-auto">
                Hemos recibido tus datos. El equipo de coordinación de Lives Saved Project se pondrá en contacto contigo para convocarte a la próxima reunión preparatoria.
              </p>
              <button
                onClick={() => setVolSubmitted(false)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold"
              >
                Enviar otra postulación
              </button>
            </div>
          ) : (
            <form onSubmit={handleVolunteerSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Tu nombre y apellidos"
                    value={volName}
                    onChange={(e) => setVolName(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    WhatsApp / Teléfono
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+57 300 000 0000"
                    value={volPhone}
                    onChange={(e) => setVolPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@correo.com"
                    value={volEmail}
                    onChange={(e) => setVolEmail(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Área de apoyo preferida
                  </label>
                  <select
                    value={volSkill}
                    onChange={(e) => setVolSkill(e.target.value)}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 bg-white"
                  >
                    <option value="Educación y Talleres Infantiles">Educación y Talleres Infantiles</option>
                    <option value="Salud, Medicina y Odontología">Salud, Medicina y Odontología</option>
                    <option value="Logística, Bodega y Empaque de Kits">Logística, Bodega y Empaque de Kits</option>
                    <option value="Recreación, Música y Deportes">Recreación, Música y Deportes</option>
                    <option value="Apoyo General y Acompañamiento">Apoyo General y Acompañamiento</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">
                  Breve mensaje o experiencia previa (Opcional)
                </label>
                <textarea
                  rows={3}
                  value={volMessage}
                  onChange={(e) => setVolMessage(e.target.value)}
                  placeholder="Cuéntanos un poco sobre ti y tus motivaciones para servir..."
                  className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-xl shadow-sm transition-colors flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Registrar mi postulación como voluntario</span>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};
