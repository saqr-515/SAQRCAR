import React, { useState } from 'react';
import { carsData } from '../../data/cars';
import { Car, CarCategory } from '../../types/car';
import { CategoryFilter } from './CategoryFilter';
import { CarCard } from './CarCard';
import { Search, Car as CarIcon } from 'lucide-react';

interface CarsGridProps {
  onSelectCar: (car: Car) => void;
  onBookCar: (car: Car) => void;
  searchQuery?: string;
  onSearchChange?: (query: string) => void;
}

export const CarsGrid: React.FC<CarsGridProps> = ({
  onSelectCar,
  onBookCar,
  searchQuery,
  onSearchChange
}) => {
  const [selectedCategory, setSelectedCategory] = useState<CarCategory>('الكل');
  const [internalSearchQuery, setInternalSearchQuery] = useState('');

  const currentSearch = searchQuery !== undefined ? searchQuery : internalSearchQuery;
  const handleSearchChange = onSearchChange || setInternalSearchQuery;

  const filteredCars = carsData.filter((car) => {
    const matchesCategory = selectedCategory === 'الكل' || car.category === selectedCategory;
    const matchesSearch = car.name.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          car.brand.toLowerCase().includes(currentSearch.toLowerCase()) ||
                          car.description.toLowerCase().includes(currentSearch.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="cars" className="py-24 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-900/90 backdrop-blur-xl border border-blue-500/30 px-5 py-2 rounded-full text-blue-400 text-sm font-bold shadow-lg shadow-blue-500/10 mb-4">
            <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">S</div>
            <span>معرض أسطول صقر الفاخر</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">الطرازات المتوفرة للنخبة لعام 2024 - 2027</h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            استعرض أحدث طرازات السيدان الفاخرة، سيارات الدفع الرباعي، والسيارات الهجينة المجهزة بأرفع مستويات الراحة والهيبة والأمان.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="bg-navy-900/90 backdrop-blur-xl p-6 sm:p-8 rounded-3xl border border-blue-500/30 shadow-2xl mb-12 space-y-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">

            {/* Search Input */}
            <div className="relative w-full md:w-[420px]">
              <Search className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-blue-400" />
              <input
                type="text"
                placeholder="ابحث باسم الطراز (كراون، برادو، لاندكروزر...)"
                value={currentSearch}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full bg-navy-950 border border-blue-500/25 text-white placeholder-slate-500 pr-12 pl-4 py-4 rounded-2xl focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/25 transition-colors text-sm shadow-inner"
              />
            </div>

            {/* Results Count */}
            <div className="flex items-center gap-2.5 text-blue-400 text-sm font-bold bg-blue-500/10 px-5 py-3 rounded-2xl border border-blue-500/20">
              <CarIcon className="w-5 h-5 text-blue-400" />
              <span>متوفر فوراً: {filteredCars.length} سيارة فاخرة</span>
            </div>

          </div>

          {/* Category Filter */}
          <CategoryFilter
            selectedCategory={selectedCategory}
            onSelectCategory={setSelectedCategory}
          />
        </div>

        {/* Cars Grid */}
        {filteredCars.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredCars.map((car) => (
              <CarCard
                key={car.id}
                car={car}
                onSelect={onSelectCar}
                onBookNow={onBookCar}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-navy-900/50 backdrop-blur-xl rounded-3xl border border-blue-500/20">
            <CarIcon className="w-16 h-16 text-blue-400/50 mx-auto mb-4 animate-bounce" />
            <h3 className="text-xl font-bold text-white">لا توجد نتائج مطابقة لبحثكم</h3>
            <p className="text-slate-400 text-sm mt-2">جرب البحث بكلمات أخرى أو اختر فئة مختلفة.</p>
          </div>
        )}

      </div>
    </section>
  );
};
