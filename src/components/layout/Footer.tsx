import React, { useState } from 'react';
import { PageId } from '../../types';
import { CHURCH_INFO } from '../../data/churchData';
import { useLanguage } from '../../context/LanguageContext';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUp,
  Heart,
  Youtube,
  Shield,
  FileText,
  X,
} from 'lucide-react';

interface FooterProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenPrayerModal,
}) => {
  const [legalModal, setLegalModal] = useState<'privacy' | 'data' | null>(null);
  const { t } = useLanguage();

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
              {t(
                '«Porque donde están dos o tres congregados en mi nombre, allí estoy yo en medio de ellos.»',
                '“For where two or three gather in my name, there am I with them.”'
              )}
            </p>
            <span className="text-xs text-rose-400 font-medium tracking-wider uppercase mt-1 block">
              {t('Mateo 18:20', 'Matthew 18:20')}
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenPrayerModal}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-stone-200 transition-colors border border-slate-700"
            >
              {t('Pedir Oración', 'Request Prayer')}
            </button>
            <button
              type="button"
              onClick={() => {
                onNavigate('dona');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-rose-600 hover:bg-rose-700 text-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Heart className="w-3.5 h-3.5 fill-current" />
              <span>{t('Dona', 'Donate')}</span>
            </button>
            <a
              href={CHURCH_INFO.donateSponsorUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold rounded-lg bg-slate-800 hover:bg-slate-700 text-stone-200 transition-colors border border-slate-700"
            >
              <span>{t('Apoyo Social', 'Social Outreach')}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand & Essence */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-start">
              <img
                src={CHURCH_INFO.logoWatermark}
                alt="En el Lugar Santísimo - Comunidad Cristiana"
                referrerPolicy="no-referrer"
                className="w-40 sm:w-44 h-auto object-contain shrink-0 -my-4"
              />
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {t(
                'Un lugar para encontrarte con Dios, crecer en tu fe y compartir Su amor. Creemos que cada encuentro genuino con el Padre transforma la vida, la familia y la sociedad.',
                'A place to encounter God, grow in your faith, and share His love. We believe every genuine encounter with the Father transforms lives, families, and society.'
              )}
            </p>

            {/* Social Icons */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block mb-3">
                {t('Síguenos / Conéctate', 'Follow Us / Connect')}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={CHURCH_INFO.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-red-500 hover:border-red-500/50 transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a
                  href={CHURCH_INFO.social.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-cyan-400 hover:border-cyan-400/50 transition-colors"
                  aria-label="TikTok"
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
                  aria-label="WhatsApp"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${CHURCH_INFO.email}`}
                  className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-blue-400 hover:border-blue-400/50 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* 9 Sections Navigation */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              {t('Secciones', 'Sections')}
            </span>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('nosotros')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {t('Nosotros', 'About Us')}
                </button>
              </li>
              <li>
                <a
                  href={CHURCH_INFO.donateSponsorUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {t('Apoyo Social', 'Social Outreach')}
                </a>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('grupos-de-vida')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {t('Grupos de vida', 'Life Groups')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('en-vivo')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {t('En Vivo', 'Live')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('multimedia')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {t('Multimedia', 'Media')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('ruta-de-crecimiento')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  {t('Ruta de Crecimiento', 'Growth Track')}
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('info')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  Info
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sos')}
                  className="hover:text-white transition-colors text-slate-400"
                >
                  S.O.S
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    onNavigate('dona');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-rose-400 transition-colors text-rose-500 font-semibold cursor-pointer"
                >
                  {t('Dona', 'Donate')}
                </button>
              </li>
            </ul>
          </div>

          {/* Horarios & Encuentros */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              {t('Encuentros Semanales', 'Weekly Gatherings')}
            </span>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="border-l border-rose-500/50 pl-3 py-0.5">
                <span className="font-semibold text-white block">
                  {t('Reunión General', 'General Service')}
                </span>
                <span>{t('Domingos 10:30 a. m.', 'Sundays 10:30 a. m.')}</span>
                <span className="text-slate-500 block text-[11px]">
                  {t('Presencial y En VIVO', 'In-Person & Live')}
                </span>
              </div>
              <div className="border-l border-amber-500/50 pl-3 py-0.5">
                <span className="font-semibold text-white block">
                  {t('Ayuno Congregacional', 'Congregational Fasting')}
                </span>
                <span>{t('Sábados 10:00 a. m. – 12:00 p. m.', 'Saturdays 10:00 a. m. – 12:00 p. m.')}</span>
                <span className="text-slate-500 block text-[11px]">
                  {t('Presencial y Virtual', 'In-Person & Virtual')}
                </span>
              </div>
              <div className="border-l border-sky-500/50 pl-3 py-0.5">
                <span className="font-semibold text-white block">
                  {t('Oración de la Mañana', 'Morning Prayer')}
                </span>
                <span>{t('Martes a Viernes 7:00 a. m.', 'Tue to Fri 7:00 a. m.')}</span>
                <span className="text-slate-500 block text-[11px]">
                  {t('Vía Google Meet', 'Via Google Meet')}
                </span>
              </div>
            </div>
          </div>

          {/* Contacto & Visítanos */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-white uppercase tracking-wider block">
              {t('Contáctanos & Visítanos', 'Contact & Visit Us')}
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
                  <span className="text-white block font-medium">
                    {t('Sede Principal:', 'Main Location:')}
                  </span>
                  <span>Av. Calle 24 #72b–30</span>
                  <span className="block text-slate-500">Bogotá, Colombia</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('info')}
                  className="text-xs text-rose-400 hover:text-rose-300 font-medium underline underline-offset-4"
                >
                  {t('Ver mapa y cómo llegar →', 'View map & directions →')}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Lower legal bar */}
        <div className="pt-10 mt-10 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            {t(
              '© 2026 En el Lugar Santísimo. Todos los derechos reservados.',
              '© 2026 En el Lugar Santísimo. All rights reserved.'
            )}
          </p>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setLegalModal('privacy')}
              className="hover:text-slate-300 transition-colors"
            >
              {t('Política de privacidad', 'Privacy Policy')}
            </button>
            <span>|</span>
            <button
              onClick={() => setLegalModal('data')}
              className="hover:text-slate-300 transition-colors"
            >
              {t('Tratamiento de datos personales', 'Personal Data Processing')}
            </button>
            <span>|</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md hover:bg-slate-900 hover:text-white transition-colors flex items-center gap-1 text-[11px]"
              aria-label={t('Volver arriba', 'Back to top')}
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{t('Arriba', 'Top')}</span>
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
                    ? t('Política de Privacidad', 'Privacy Policy')
                    : t(
                        'Tratamiento de Datos Personales (Ley 1581 de 2012)',
                        'Personal Data Processing (Law 1581 of 2012)'
                      )}
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
                    {t(
                      'En En el Lugar Santísimo valoramos y protegemos la privacidad y confidencialidad de cada miembro, visitante y colaborador.',
                      'At En el Lugar Santísimo we value and protect the privacy and confidentiality of every member, visitor, and volunteer.'
                    )}
                  </p>
                  <p>
                    {t(
                      '1. Peticiones de Oración: Todas las peticiones compartidas a través de nuestros formularios o canales de acompañamiento pastoral son tratadas con estricta reserva espiritual.',
                      '1. Prayer Requests: All requests shared through our forms or pastoral care channels are treated with strict spiritual confidentiality.'
                    )}
                  </p>
                  <p>
                    {t(
                      '2. Canales Digitales: Puede solicitar la actualización o supresión de sus datos en cualquier momento escribiendo a Enellugarsantisim@gmail.com.',
                      '2. Digital Channels: You may request the update or deletion of your data at any time by writing to Enellugarsantisim@gmail.com.'
                    )}
                  </p>
                </>
              ) : (
                <>
                  <p>
                    {t(
                      'Dando cumplimiento a la Ley Estatutaria 1581 de 2012 de Colombia, la comunidad cristiana En el Lugar Santísimo informa que los datos personales recolectados en este portal serán tratados conforme a los principios de legalidad, finalidad y libertad.',
                      'In compliance with Colombian Law 1581 of 2012, En el Lugar Santísimo Christian Community informs that personal data collected on this portal is processed according to legality, purpose, and freedom.'
                    )}
                  </p>
                </>
              )}
            </div>

            <div className="p-4 border-t border-slate-200 bg-stone-50 flex justify-end">
              <button
                onClick={() => setLegalModal(null)}
                className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
              >
                {t('Entendido y Cerrar', 'Got it & Close')}
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
