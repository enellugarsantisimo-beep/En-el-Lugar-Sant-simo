import React, { useState, useEffect } from 'react';
import { PageId } from './types';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { DonationModal } from './components/common/DonationModal';
import { PrayerRequestModal } from './components/common/PrayerRequestModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { CommunityPage } from './pages/CommunityPage';
import { LiveContentPage } from './pages/LiveContentPage';
import { EventsInfoPage } from './pages/EventsInfoPage';
import { SocialOutreachPage } from './pages/SocialOutreachPage';
import { ContactCarePage } from './pages/ContactCarePage';

export default function App() {
  const getPageFromHash = (): PageId => {
    const hash = window.location.hash.replace(/^#\/?/, '').toLowerCase();
    switch (hash) {
      case 'conocenos':
        return 'conocenos';
      case 'comunidad':
        return 'comunidad';
      case 'en-vivo':
      case 'envivo':
      case 'contenido':
        return 'en-vivo';
      case 'eventos':
      case 'informacion':
        return 'eventos';
      case 'apoyo-social':
      case 'bocachica':
      case 'social':
        return 'apoyo-social';
      case 'contacto':
      case 'acompanamiento':
        return 'contacto';
      case 'inicio':
      default:
        return 'inicio';
    }
  };

  const [currentPage, setCurrentPage] = useState<PageId>(getPageFromHash);
  const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
  const [donationTierId, setDonationTierId] = useState<string | undefined>(undefined);
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

  const handleOpenDonation = (tierId?: string) => {
    setDonationTierId(tierId);
    setIsDonationModalOpen(true);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'conocenos':
        return (
          <AboutPage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
      case 'comunidad':
        return (
          <CommunityPage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
      case 'en-vivo':
        return (
          <LiveContentPage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
      case 'eventos':
        return (
          <EventsInfoPage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
      case 'apoyo-social':
        return (
          <SocialOutreachPage
            onNavigate={handleNavigate}
            onOpenDonationModal={handleOpenDonation}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
      case 'contacto':
        return (
          <ContactCarePage
            onNavigate={handleNavigate}
            onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
          />
        );
      case 'inicio':
      default:
        return (
          <HomePage
            onNavigate={handleNavigate}
            onOpenDonationModal={() => handleOpenDonation()}
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
        onOpenDonationModal={() => handleOpenDonation()}
        onOpenPrayerModal={() => setIsPrayerModalOpen(true)}
      />

      {/* Global Interactive Modals */}
      <DonationModal
        isOpen={isDonationModalOpen}
        onClose={() => setIsDonationModalOpen(false)}
        defaultTierId={donationTierId}
      />

      <PrayerRequestModal
        isOpen={isPrayerModalOpen}
        onClose={() => setIsPrayerModalOpen(false)}
      />
    </div>
  );
}
