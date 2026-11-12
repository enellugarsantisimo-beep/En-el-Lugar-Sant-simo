import React, { useState } from 'react';
import { PageId } from '../../types';
import { CHURCH_INFO } from '../../data/churchData';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowUp,
  Heart,
  Youtube,
  Shield,
  FileText,
  X,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenDonationModal: () => void;
  onOpenPrayerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenDonationModal,
  onOpenPrayerModal,
}) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'data' | null>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-900 mt-auto">
      {/* Upper footer banner with scripture */}
      <div className="bg-slate-900/80 border-b border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left max-w-2xl">
            <p className="font-serif italic text-lg sm:text-xl text-stone-200">
              «Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.»
            </p>
            <span className="text-xs text-rose-400 font-medium tracking-wider uppercase mt-1 block">
              Mateo 18:20
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenPrayerModal}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-stone-200 transition-colors border border-slate-700"
            >
              Pedir Oración
            </button>
            <button
              onClick={onOpenDonationModal}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-rose-600 hover:bg-rose-700 text-white transition-colors flex items-center gap-1.5"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>Proyecto Bocachica</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Essence */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-600 flex items-center justify-center text-white font-bold text-lg font-display">
                LS
              </div>
              <div>
                <h3 className="font-display font-bold text-xl text-white tracking-tight">
                  En el Lugar Santísimo
                </h3>
                <span className="text-xs text-stone-400">Comunidad Cristiana Bogotá</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Un lugar para encontrarte con Dios, crecer en tu fe y compartir Su amor. Creemos que cada encuentro genuino con el Padre transforma la vida, la familia y la sociedad.
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                Follow Us / Conéctate
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={CHURCH_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-500/50 transition-colors"
                  aria-label="Canal de YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={CHURCH_INFO.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                  aria-label="Perfil de TikTok"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
                <a
                  href={`https://wa.me/${CHURCH_INFO.phoneClean}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-emerald-400 hover:border-emerald-400/50 transition-colors"
                  aria-label="WhatsApp Directo"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${CHURCH_INFO.email}`}
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-colors"
                  aria-label="Correo Electrónico"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Navegación Páginas Independientes */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Navegación
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('inicio')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('conocenos')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  Conócenos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('comunidad')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  Nuestra comunidad
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('en-vivo')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  Contenido y en VIVOS
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('eventos')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  Información y Eventos
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('apoyo-social')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  Apoyo Social (Bocachica)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contacto')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  Acompañamiento & Contactar
                </button>
              </li>
            </ul>
          </div>

          {/* Horarios & Encuentros */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Encuentros Semanales
            </span>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="border-l border-rose-500/50 pl-3 py-0.5">
                <span className="font-semibold text-white block">Reunión General</span>
                <span>Domingos 10:30 a. m.</span>
                <span className="text-slate-500 block text-[11px]">Presencial y En VIVO</span>
              </div>
              <div className="border-l border-amber-500/50 pl-3 py-0.5">
                <span className="font-semibold text-white block">Ayuno Congregacional</span>
                <span>Sábados 10:00 a. m. – 12:00 p. m.</span>
                <span className="text-slate-500 block text-[11px]">Presencial y Virtual</span>
              </div>
              <div className="border-l border-sky-500/50 pl-3 py-0.5">
                <span className="font-semibold text-white block">Oración de la Mañana</span>
                <span>Martes a Viernes 7:00 a. m.</span>
                <span className="text-slate-500 block text-[11px]">Vía Google Meet</span>
              </div>
            </div>
          </div>

          {/* Contacto & Visítanos */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              Contáctanos & Visítanos
            </span>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href={`https://wa.me/${CHURCH_INFO.phoneClean}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>+57 3054351398</span>
              </a>

              <a
                href={`mailto:${CHURCH_INFO.email}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span className="truncate">{CHURCH_INFO.email}</span>
              </a>

              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white block font-medium">Sede Principal:</span>
                  <span>Av. Calle 24 #72b–30</span>
                  <span className="block text-slate-500">Bogotá, Colombia</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('eventos')}
                  className="text-xs text-rose-400 hover:text-rose-300 font-medium underline underline-offset-4"
                >
                  Ver mapa y cómo llegar →
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lower legal bar */}
        <div className="pt-10 mt-10 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 En el Lugar Santísimo. Todos los derechos reservados.</p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              Política de privacidad
            </button>
            <span>|</span>
            <button
              onClick={() => setLegalModal('data')}
              className="hover:text-slate-300 transition-colors"
            >
              Tratamiento de datos personales
            </button>
            <span>|</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Arriba</span>
            </button>
          </div>
        </div>
      </div>

      {/* Privacy / Data Protection Modal */}
      {legalModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-lg w-full max-h-[85vh] flex flex-col shadow-2xl overflow-hidden text-slate-800">
            <div className="p-5 border-b border-slate-200 flex items-center justify-between bg-stone-50">
              <div className="flex items-center gap-2">
                {legalModal === 'privacy' ? (
                  <Shield className="w-5 h-5 text-rose-600" />
                ) : (
                  <FileText className="w-5 h-5 text-rose-600" />
                )}
                <h4 className="font-bold text-slate-900 font-display">
                  {legalModal === 'privacy'
                    ? 'Política de Privacidad'
                    : 'Tratamiento de Datos Personales (Ley 1581 de 2012)'}
                </h4>
              </div>
              <button
                onClick={() => setLegalModal(null)}
                className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/50"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto text-sm space-y-4 text-slate-600 leading-relaxed">
              {legalModal === 'privacy' ? (
                <>
                  <p>
                    En <strong>En el Lugar Santísimo</strong> valoramos y protegemos la privacidad y confidencialidad de cada miembro, visitante y colaborador.
                  </p>
                  <p>
                    <strong>1. Peticiones de Oración:</strong> Todas las peticiones compartidas a través de nuestros formularios o canales de acompañamiento pastoral son tratadas con estricta reserva espiritual por el equipo ministerial asignado.
                  </p>
                  <p>
                    <strong>2. Donaciones y Aportes:</strong> Los datos relacionados con contribuciones al proyecto social Bocachica o fondos ministeriales no son comercializados con terceros y se emplean únicamente con fines de certificación y rendición de cuentas.
                  </p>
                  <p>
                    <strong>3. Canales Digitales:</strong> No recopilamos datos personales sensibles sin su expreso consentimiento. Puede solicitar la actualización o supresión de sus datos en cualquier momento escribiendo a <em>Enellugarsantisim@gmail.com</em>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Dando cumplimiento a la Ley Estatutaria 1581 de 2012 y su Decreto Reglamentario 1377 de 2013 de la República de Colombia, la comunidad cristiana <strong>En el Lugar Santísimo</strong> informa que los datos personales recolectados en este portal serán tratados conforme a los principios de legalidad, finalidad y libertad.
                  </p>
                  <p>
                    <strong>Finalidad:</strong> Envío de información eclesiástica, devocionales, confirmación de actividades juveniles y familiares, coordinación del voluntariado Bocachica y respuesta a requerimientos de consejería pastoral.
                  </p>
                  <p>
                    <strong>Derechos del Titular:</strong> Conocer, actualizar y rectificar sus datos personales frente a los responsables del tratamiento; revocar la autorización o solicitar la supresión del dato cuando no se respeten los principios constitucionales.
                  </p>
                </>
              )}
            </div>

            <div className="p-4 border-t border-slate-200 bg-stone-50 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
              >
                Entendido y Cerrar
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
