import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { PrayerRequestModal } from './components/common/PrayerRequestModal';
import { WhatsAppFloat } from './components/common/WhatsAppFloat';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CommunityPage } from './pages/CommunityPage';
import { LiveContentPage } from './pages/LiveContentPage';
import { EventsInfoPage } from './pages/EventsInfoPage';
import { ContactCarePage } from './pages/ContactCarePage';
import { DonatePage } from './pages/DonatePage';

function AppContent() {
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    switch (hash) {
      case 'grupos-de-vida':
      case 'comunidad':
        return 'grupos-de-vida';
      case 'en-vivo':
      case 'envivo':
      case 'contenido':
        return 'en-vivo';
      case 'multimedia':
        return 'multimedia';
      case 'ruta-de-crecimiento':
      case 'conocenos':
        return 'ruta-de-crecimiento';
      case 'info':
      case 'eventos':
      case 'informacion':
        return 'info';
      case 'sos':
      case 's.o.s':
      case 'contacto':
      case 'acompanamiento':
        return 'sos';
      case 'dona':
      case 'donaciones':
      case 'donate':
        return 'dona';
      case 'nosotros':
      case 'inicio':
      default:
        return 'nosotros';
    }
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [isPrayerModalOpen, setIsPrayerModalOpen] = useState(false);

  // Sync hash routing on popstate / hashchange
  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash();
      setCurrentPage(page);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = `#/${page}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'ruta-de-crecimiento':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
      case 'grupos-de-vida':
        return (
          <CommunityPage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
      case 'en-vivo':
        return (
          <LiveContentPage
            mode="en-vivo"
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
      case 'multimedia':
        return (
          <LiveContentPage
            mode="multimedia"
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
      case 'info':
        return (
          <EventsInfoPage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
      case 'sos':
        return (
          <ContactCarePage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
      case 'dona':
        return (
          <DonatePage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
      case 'nosotros':
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50 text-slate-800 antialiased selection:bg-rose-500 selection:text-white">
      {/* Top Navigation Bar */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
      />

      {/* Main Independent Page View */}
      <main className="flex-1 w-full">
        {renderCurrentPage()}
      </main>

      {/* Universal Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
      />

      {/* Floating WhatsApp Action */}
      <WhatsAppFloat />

      {/* Global Prayer Request Modal */}
      <PrayerRequestModal
        isOpen={isPrayerModalOpen}
        onClose={() => setIsPrayerModalOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
