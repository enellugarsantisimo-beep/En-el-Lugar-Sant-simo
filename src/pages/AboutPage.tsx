import React, { useState } from 'react';
import { PageId } from '../types';
import { useLanguage } from '../context/LanguageContext';
import { Compass, Sparkles, ArrowUpRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (page: PageId) => void;
  onOpenPrayerModal: () => void;
}

interface GrowthStepNode {
  number: number;
  title: string;
  titleColorClass: string;
  numberColorClass: string;
  glowClass: string;
  tooltip?: string;
  offsetClass: string;
  sideBadge?: string;
  isFirstStepLink?: boolean;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigate,
}) => {
  const { t } = useLanguage();
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);
  const [pinnedStep, setPinnedStep] = useState<number | null>(null);

  const activeStep = hoveredStep ?? pinnedStep;

  // Ordered 9 -> 1 across all devices (ascending staircase from bottom-left 1 to top-right 9).
  const growthSteps: GrowthStepNode[] = [
    {
      number: 9,
      title: t('ESCUELA MINISTERIAL CON ÉNFASIS MISIONERO', 'MINISTRY SCHOOL WITH MISSIONAL EMPHASIS'),
      numberColorClass: 'text-purple-600',
      titleColorClass: 'text-purple-500',
      glowClass: 'hover:border-purple-500/60 hover:shadow-[0_0_28px_rgba(147,51,234,0.3)]',
      tooltip: t(
        'La persona podrá continuar su formación en un instituto bíblico mientras desarrollamos nuestra escuela ministerial.',
        'Participants can continue their training at a Bible institute while we develop our ministry school.'
      ),
      offsetClass: 'ml-[24%] sm:ml-[36%] lg:ml-[56%]',
    },
    {
      number: 8,
      title: t('FORMACIÓN DE LÍDERES', 'LEADERSHIP TRAINING'),
      numberColorClass: 'text-indigo-600',
      titleColorClass: 'text-indigo-500',
      glowClass: 'hover:border-indigo-500/60 hover:shadow-[0_0_28px_rgba(79,70,229,0.3)]',
      tooltip: t(
        'Para preparar líderes de Grupos de Vida, enseñándoles a ministrar según los doce pasos y liderar su grupo.',
        'To prepare Life Group leaders, teaching them to minister through the twelve steps and lead their group.'
      ),
      offsetClass: 'ml-[21%] sm:ml-[31.5%] lg:ml-[49%]',
    },
    {
      number: 7,
      title: t('ENCUENTRO SERVIDORES', 'SERVANTS ENCOUNTER'),
      numberColorClass: 'text-lime-500',
      titleColorClass: 'text-lime-500',
      glowClass: 'hover:border-lime-500/60 hover:shadow-[0_0_28px_rgba(132,204,22,0.3)]',
      tooltip: t(
        'Para sanar y empoderar a líderes, equipándolos con dones para su misión en la iglesia y el mundo.',
        'To heal and empower leaders, equipping them with spiritual gifts for their mission in the church and the world.'
      ),
      offsetClass: 'ml-[18%] sm:ml-[27%] lg:ml-[42%]',
    },
    {
      number: 6,
      title: t('ESCUELA DE SERVIDORES', 'SCHOOL OF SERVANTS'),
      numberColorClass: 'text-fuchsia-600',
      titleColorClass: 'text-fuchsia-500',
      glowClass: 'hover:border-fuchsia-500/60 hover:shadow-[0_0_28px_rgba(192,38,211,0.3)]',
      tooltip: t(
        'Formación y equipamiento para servidores comprometidos con la misión.',
        'Training and equipping for servants committed to the mission.'
      ),
      offsetClass: 'ml-[15%] sm:ml-[22.5%] lg:ml-[35%]',
      sideBadge: t('EL QUE SIRVE QUE SIRVA', 'LET THE ONE WHO SERVES, SERVE'),
    },
    {
      number: 5,
      title: t('NIVEL 1 Y 2', 'LEVEL 1 & 2'),
      numberColorClass: 'text-pink-500',
      titleColorClass: 'text-pink-500',
      glowClass: 'hover:border-pink-500/60 hover:shadow-[0_0_28px_rgba(236,72,153,0.3)]',
      tooltip: t(
        'Formación bíblica y práctica para alcanzar la madurez cristiana, enfocada en doctrina, relación con Dios, oración, adoración y dirección divina.',
        'Biblical and practical training to reach Christian maturity, focused on doctrine, relationship with God, prayer, worship, and divine guidance.'
      ),
      offsetClass: 'ml-[12%] sm:ml-[18%] lg:ml-[28%]',
    },
    {
      number: 4,
      title: t('12 PASOS SANIDAD INTERIOR', '12 STEPS INNER HEALING'),
      numberColorClass: 'text-white',
      titleColorClass: 'text-white',
      glowClass: 'hover:border-white/50 hover:shadow-[0_0_28px_rgba(255,255,255,0.22)]',
      tooltip: t(
        'Para fortalecer la sanidad y el bienestar espiritual de los miembros.',
        'To strengthen the spiritual healing and wellbeing of members.'
      ),
      offsetClass: 'ml-[9%] sm:ml-[13.5%] lg:ml-[21%]',
    },
    {
      number: 3,
      title: t('¿AHORA QUÉ? 1 Y 2', 'WHAT NOW? 1 & 2'),
      numberColorClass: 'text-yellow-400',
      titleColorClass: 'text-yellow-400',
      glowClass: 'hover:border-yellow-400/60 hover:shadow-[0_0_28px_rgba(250,204,21,0.3)]',
      tooltip: t(
        'Son dos lecciones que enseñan nuestra identidad como hijos de Dios y las disciplinas cristianas, estas las tomamos para estar preparados para el encuentro.',
        'Two lessons teaching our identity as children of God and Christian disciplines, preparing us for the encounter retreat.'
      ),
      offsetClass: 'ml-[6%] sm:ml-[9%] lg:ml-[14%]',
    },
    {
      number: 2,
      title: t('ENCUENTRO DE NUEVOS CREYENTES Y BAUTISMOS', 'NEW BELIEVERS ENCOUNTER & BAPTISMS'),
      numberColorClass: 'text-red-500',
      titleColorClass: 'text-red-500',
      glowClass: 'hover:border-red-500/60 hover:shadow-[0_0_28px_rgba(239,68,68,0.3)]',
      tooltip: t(
        'Este retiro confronta y libera de obstáculos espirituales, culminando con el Bautismo y la llenura del Espíritu Santo, guiando a los participantes hacia una vida cristiana plena.',
        'This retreat confronts and frees participants from spiritual obstacles, culminating in Baptism and the filling of the Holy Spirit, guiding them into a full Christian life.'
      ),
      offsetClass: 'ml-[3%] sm:ml-[4.5%] lg:ml-[7%]',
    },
    {
      number: 1,
      title: t('GRUPOS DE VIDA', 'LIFE GROUPS'),
      numberColorClass: 'text-lime-400',
      titleColorClass: 'text-lime-400',
      glowClass: 'hover:border-lime-400/60 hover:shadow-[0_0_28px_rgba(163,230,53,0.3)]',
      offsetClass: 'ml-0',
      isFirstStepLink: true,
    },
  ];

  return (
    <div className="space-y-12 lg:space-y-16 pb-20">
      {/* 1. INDEPENDENT PAGE HERO & BREADCRUMBS */}
      <section className="bg-gradient-to-b from-stone-100 to-white pt-8 pb-12 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <nav className="flex items-center gap-2 text-xs text-slate-500">
            <button
              onClick={() => onNavigate('nosotros')}
              className="hover:text-slate-900 transition-colors"
            >
              {t('Nosotros', 'About Us')}
            </button>
            <span>/</span>
            <span className="text-rose-600 font-semibold">
              {t('Ruta de Crecimiento', 'Growth Track')}
            </span>
          </nav>

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-rose-600 uppercase tracking-widest">
              <Compass className="w-4 h-4" />
              <span>{t('Ruta de Crecimiento', 'Growth Track')}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold font-display text-slate-900 tracking-tight leading-tight">
              {t(
                'Tu camino de formación y propósito en Cristo',
                'Your Path of Formation & Purpose in Christ'
              )}
            </h1>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              {t(
                'Conoce los 9 niveles de nuestra Ruta de Crecimiento. Pasa el cursor (o toca en móvil) sobre el ícono blanco (i) de cada escalón para descubrir su propósito.',
                'Explore the 9 steps of our Growth Track. Hover over (or tap on mobile) the white (i) icon on each step to discover its purpose.'
              )}
            </p>
          </div>
        </div>
      </section>

      {/* 2. ASCENDING INTERACTIVE STAIRCASE PATHWAY (1 -> 9) */}
      <section className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div
          className="relative rounded-3xl bg-gradient-to-br from-slate-950 via-blue-950/85 to-black border border-slate-800 shadow-2xl p-3.5 sm:p-10 lg:p-14"
          onClick={(e) => {
            if (e.target === e.currentTarget) setPinnedStep(null);
          }}
        >
          {/* Ambient glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

          {/* Header inside stage */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-6 sm:pb-8 mb-6 sm:mb-8 border-b border-white/10 relative z-10">
            <div className="flex items-center gap-2 text-xs font-semibold text-sky-300 uppercase tracking-widest">
              <Sparkles className="w-4 h-4" />
              <span>{t('Escalera de Formación · 9 Niveles', 'Formation Stairway · 9 Levels')}</span>
            </div>
            <span className="text-xs text-slate-400">
              {t(
                'Pasa el cursor sobre el ícono blanco (i) para ver la descripción',
                'Hover over the white (i) icon to view the description'
              )}
            </span>
          </div>

          {/* Staircase Nodes: ascending 1 (bottom-left) -> 9 (top-right) across ALL devices */}
          <div className="flex flex-col gap-2.5 sm:gap-3.5 lg:gap-4 relative z-10">
            {growthSteps.map((step) => {
              const isTooltipOpen = activeStep === step.number && Boolean(step.tooltip);

              return (
                <div
                  key={step.number}
                  className={`relative flex flex-row items-center gap-1.5 sm:gap-4 transition-all duration-300 ${
                    step.offsetClass
                  } ${isTooltipOpen ? 'z-30' : 'z-10'}`}
                >
                  {/* Step Card */}
                  <div
                    className={`relative w-[62%] sm:w-[270px] md:w-[320px] lg:w-[340px] shrink-0 bg-black/95 rounded-xl sm:rounded-2xl px-2.5 py-2 sm:px-5 sm:py-4 border border-white/15 shadow-[0_0_22px_rgba(255,255,255,0.12)] transition-all duration-300 flex items-center justify-between gap-2 sm:gap-4 ${step.glowClass}`}
                  >
                    {/* Number + Title */}
                    {step.isFirstStepLink ? (
                      <button
                        type="button"
                        onClick={() => onNavigate('grupos-de-vida')}
                        className="flex items-center gap-2 sm:gap-4 text-left group/link w-full cursor-pointer"
                      >
                        <span
                          className={`text-2xl sm:text-5xl lg:text-6xl font-black italic font-display leading-none select-none shrink-0 ${step.numberColorClass}`}
                        >
                          {step.number}
                        </span>
                        <div className="flex items-center justify-between w-full gap-1 sm:gap-2">
                          <span
                            className={`text-[11px] sm:text-base lg:text-lg font-extrabold italic font-display uppercase tracking-tight leading-tight ${step.titleColorClass}`}
                          >
                            {step.title}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-lime-400 opacity-75 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform shrink-0" />
                        </div>
                      </button>
                    ) : (
                      <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                        <span
                          className={`text-2xl sm:text-5xl lg:text-6xl font-black italic font-display leading-none select-none shrink-0 ${step.numberColorClass}`}
                        >
                          {step.number}
                        </span>
                        <h2
                          className={`text-[9.5px] sm:text-xs md:text-sm font-extrabold italic font-display uppercase tracking-wide leading-tight sm:leading-snug ${step.titleColorClass}`}
                        >
                          {step.title}
                        </h2>
                      </div>
                    )}

                    {/* White Circular (i) Icon with Interactive Hover/Focus/Tap Tooltip */}
                    {step.tooltip && (
                      <div
                        className="relative shrink-0"
                        onMouseEnter={() => setHoveredStep(step.number)}
                        onMouseLeave={() => setHoveredStep(null)}
                      >
                        <button
                          type="button"
                          onFocus={() => setHoveredStep(step.number)}
                          onBlur={() => setHoveredStep(null)}
                          onClick={() =>
                            setPinnedStep((prev) => (prev === step.number ? null : step.number))
                          }
                          aria-label={t(
                            `Información de ${step.title}`,
                            `Info for ${step.title}`
                          )}
                          aria-expanded={isTooltipOpen}
                          className={`w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white text-black font-serif font-extrabold text-[11px] sm:text-sm flex items-center justify-center shadow-md transition-transform duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-sky-400 ${
                            isTooltipOpen ? 'scale-110 ring-2 ring-sky-400' : 'hover:scale-110'
                          }`}
                        >
                          i
                        </button>

                        {/* Floating Dark Tooltip Card */}
                        {isTooltipOpen && (
                          <div
                            role="tooltip"
                            className={`absolute bottom-full ${
                              step.number <= 4 ? 'right-[-52px]' : 'right-0'
                            } sm:right-auto sm:left-1/2 sm:-translate-x-1/2 mb-3 w-56 sm:w-72 p-3.5 sm:p-4 rounded-xl bg-neutral-800/95 backdrop-blur-md text-white text-xs sm:text-[13px] leading-relaxed font-normal normal-case not-italic shadow-2xl border border-white/15 z-50 text-center animate-in fade-in zoom-in-95 duration-150`}
                          >
                            <p>{step.tooltip}</p>
                            {/* Bottom pointer arrow */}
                            <div className="hidden sm:block absolute top-full left-1/2 -translate-x-1/2 w-3 h-3 bg-neutral-800/95 border-r border-b border-white/15 rotate-45 -mt-1.5" />
                            <div
                              className={`sm:hidden absolute top-full ${
                                step.number <= 4 ? 'right-[56px]' : 'right-2'
                              } w-3 h-3 bg-neutral-800/95 border-r border-b border-white/15 rotate-45 -mt-1.5`}
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Optional Side Badge ("EL QUE SIRVE QUE SIRVA" next to Step 6) */}
                  {step.sideBadge && (
                    <div className="w-[21%] min-w-[64px] sm:w-32 shrink-0 bg-black/95 rounded-xl sm:rounded-2xl px-1.5 py-2 sm:px-4 sm:py-4 border border-white/15 shadow-[0_0_22px_rgba(255,255,255,0.12)] flex items-center justify-center text-center">
                      <span className="text-white font-black italic font-display text-[8.5px] sm:text-sm md:text-base uppercase tracking-wide leading-tight">
                        {step.sideBadge}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
