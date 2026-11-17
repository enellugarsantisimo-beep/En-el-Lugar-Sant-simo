import React from 'react';
import { CHURCH_INFO } from '../../data/churchData';
import { useLanguage } from '../../context/LanguageContext';
import { MessageCircle } from 'lucide-react';

export const WhatsAppFloat: React.FC = () => {
  const { t } = useLanguage();

  return (
    <a
      href={`https://wa.me/${CHURCH_INFO.phoneClean}?text=${encodeURIComponent(
        t(
          'Hola, me gustaría recibir más información sobre En el Lugar Santísimo.',
          'Hello, I would like to receive more information about En el Lugar Santísimo.'
        )
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t('Chatear por WhatsApp', 'Chat on WhatsApp')}
      title={t('Escríbenos por WhatsApp', 'Message us on WhatsApp')}
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white px-3.5 py-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400"
    >
      <MessageCircle className="w-6 h-6 fill-current shrink-0" />
      <span className="hidden sm:inline-block text-xs font-bold pr-1 whitespace-nowrap">
        WhatsApp
      </span>
    </a>
  );
};
