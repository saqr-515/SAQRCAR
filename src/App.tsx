import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HeroSection } from './components/home/HeroSection';
import { QuickAssistance } from './components/home/QuickAssistance';
import { CarsGrid } from './components/home/CarsGrid';
import { ServicesSection } from './components/home/ServicesSection';
import { OffersBanner } from './components/home/OffersBanner';
import { CarDetailsModal } from './components/modals/CarDetailsModal';
import { BookingModal } from './components/modals/BookingModal';
import { ServiceModal } from './components/modals/ServiceModal';
import { AuthModal } from './components/modals/AuthModal';
import { Car } from './types/car';

export function App() {
  const [selectedCarForDetails, setSelectedCarForDetails] = useState<Car | null>(null);
  const [selectedCarForBooking, setSelectedCarForBooking] = useState<Car | null>(null);
  const [activeServiceAction, setActiveServiceAction] = useState<'test-drive' | 'quote' | 'showroom' | 'maintenance' | 'financing' | null>(null);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleExploreClick = () => {
    const carsSection = document.getElementById('cars');
    if (carsSection) {
      carsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans" dir="rtl">
      {/* Navbar */}
      <Navbar
        onOpenAuth={() => setIsAuthOpen(true)}
        onOpenService={(action) => setActiveServiceAction(action)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onToggleTheme={() => {
          alert('وضع صقر الأزرق الداكن نشط بالفعل مع إضاءة العرض الاحترافية.');
        }}
      />

      {/* Main Content */}
      <main className="flex-1">
        <HeroSection
          onExploreClick={handleExploreClick}
          onOpenTestDrive={() => setActiveServiceAction('test-drive')}
        />
        <QuickAssistance
          onOpenService={(action) => setActiveServiceAction(action)}
        />
        <CarsGrid
          onSelectCar={(car) => setSelectedCarForDetails(car)}
          onBookCar={(car) => setSelectedCarForBooking(car)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <ServicesSection
          onOpenService={(action) => setActiveServiceAction(action)}
        />
        <OffersBanner onBookClick={handleExploreClick} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals */}
      <CarDetailsModal
        car={selectedCarForDetails}
        onClose={() => setSelectedCarForDetails(null)}
        onBook={(car) => setSelectedCarForBooking(car)}
      />

      <BookingModal
        car={selectedCarForBooking}
        onClose={() => setSelectedCarForBooking(null)}
        onSuccess={() => {
          setTimeout(() => {
            setSelectedCarForBooking(null);
          }, 2000);
        }}
      />

      <ServiceModal
        actionType={activeServiceAction}
        onClose={() => setActiveServiceAction(null)}
      />

      <AuthModal
        isOpen={isAuthOpen}
        onClose={() => setIsAuthOpen(false)}
      />
    </div>
  );
}

export default App;
