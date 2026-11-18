import React from 'react';
import { CHURCH_INFO } from '../../data/churchData';
import { useLanguage } from '../../context/LanguageContext';

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
      className="fixed bottom-5 right-5 z-40 group flex items-center justify-center w-14 h-14 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300/60"
      style={{
        background: 'radial-gradient(circle at 30% 25%, #5ef592 0%, #25D366 48%, #128C7E 100%)',
        boxShadow:
          '0 10px 25px -4px rgba(18, 140, 126, 0.55), 0 4px 10px rgba(0, 0, 0, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.45)',
      }}
    >
      {/* Subtle outer pulse ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-emerald-400/35 animate-ping opacity-40 pointer-events-none"
        style={{ animationDuration: '3s' }}
      />

      {/* Glossy top-left highlight */}
      <span
        aria-hidden="true"
        className="absolute top-1.5 left-2.5 w-5 h-2.5 rounded-full bg-white/45 blur-[1px] -rotate-12 pointer-events-none"
      />

      {/* Crisp Authentic WhatsApp Icon */}
      <svg
        viewBox="0 0 32 32"
        aria-hidden="true"
        className="relative z-10 w-8 h-8 text-white drop-shadow-[0_2px_3px_rgba(0,0,0,0.25)]"
        fill="currentColor"
      >
        <path d="M16.004 3.2c-7.058 0-12.8 5.742-12.8 12.8 0 2.256.592 4.46 1.716 6.404L3.1 28.8l6.544-1.716A12.752 12.752 0 0 0 16.004 28.8c7.058 0 12.8-5.742 12.8-12.8s-5.742-12.8-12.8-12.8Zm0 23.432a10.6 10.6 0 0 1-5.408-1.484l-.388-.23-3.884 1.02 1.036-3.788-.252-.402a10.586 10.586 0 0 1-1.624-5.748c0-5.854 4.764-10.618 10.62-10.618 5.854 0 10.618 4.764 10.618 10.618 0 5.856-4.764 10.632-10.618 10.632Zm5.822-7.952c-.32-.16-1.89-.934-2.184-1.04-.292-.106-.506-.16-.72.16-.214.32-.826 1.04-1.012 1.254-.186.212-.374.24-.694.08-.32-.16-1.35-.498-2.572-1.588-.95-.848-1.592-1.896-1.778-2.216-.186-.32-.02-.494.14-.652.144-.144.32-.374.48-.56.16-.188.212-.32.32-.534.106-.214.054-.4-.026-.56-.08-.16-.72-1.734-.986-2.374-.26-.624-.524-.54-.72-.55l-.614-.01c-.214 0-.56.08-.854.4-.292.32-1.12 1.094-1.12 2.668s1.146 3.094 1.306 3.308c.16.214 2.256 3.446 5.466 4.832.764.33 1.36.526 1.824.674.766.244 1.464.21 2.016.126.614-.092 1.89-.772 2.156-1.52.266-.746.266-1.386.186-1.52-.08-.132-.294-.212-.614-.372Z" />
      </svg>

      {/* Clean floating tooltip on hover */}
      <span className="pointer-events-none opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200 absolute right-16 bg-slate-900/95 text-white text-xs font-semibold px-3 py-1.5 rounded-full shadow-lg whitespace-nowrap border border-white/10">
        {t('Escríbenos por WhatsApp', 'Chat on WhatsApp')}
      </span>
    </a>
  );
};

