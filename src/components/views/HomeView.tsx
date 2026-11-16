import React from 'react';
import { HeroSection } from '../home/HeroSection';
import { QuickAssistance } from '../home/QuickAssistance';
import { CarsGrid } from '../home/CarsGrid';
import { ServicesSection } from '../home/ServicesSection';
import { OffersBanner } from '../home/OffersBanner';
import { Car } from '../../types/car';

interface HomeViewProps {
  onExploreClick: () => void;
  onOpenTestDrive: () => void;
  onOpenService: (action: any) => void;
  onSelectCar: (car: Car) => void;
  onBookCar: (car: Car) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onExploreClick,
  onOpenTestDrive,
  onOpenService,
  onSelectCar,
  onBookCar,
  searchQuery,
  onSearchChange,
}) => {
  return (
    <>
      <HeroSection
        onExploreClick={onExploreClick}
        onOpenTestDrive={onOpenTestDrive}
      />
      <QuickAssistance
        onOpenService={onOpenService}
      />
      <CarsGrid
        onSelectCar={onSelectCar}
        onBookCar={onBookCar}
        searchQuery={searchQuery}
        onSearchChange={onSearchChange}
      />
      <ServicesSection
        onOpenService={onOpenService}
      />
      <OffersBanner onBookClick={onExploreClick} />
    </>
  );
};
