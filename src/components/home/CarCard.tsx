import React from 'react';
import { Car } from '../../types/car';
import { Badge } from '../ui/Badge';
import { Users, Fuel, Settings, Star } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onSelect: (car: Car) => void;
  onBookNow: (car: Car) => void;
}

export const CarCard: React.FC<CarCardProps> = ({ car, onSelect, onBookNow }) => {
  return (
    <div className="bg-navy-900/90 backdrop-blur-xl rounded-3xl overflow-hidden border border-blue-500/20 shadow-xl hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500 flex flex-col group">

      {/* Image & Badges */}
      <div className="relative h-60 overflow-hidden cursor-pointer" onClick={() => onSelect(car)}>
        <img
          src={car.image}
          alt={car.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>

        <div className="absolute top-4 right-4 flex flex-col gap-2">
          {car.isFeatured && (
            <Badge variant="blue">
              <span className="w-2 h-2 rounded-full bg-blue-400 ml-1 inline-block"></span>
              إصدار صقر
            </Badge>
          )}
          {car.isNew && (
            <Badge variant="success">متوفر فوراً</Badge>
          )}
        </div>

        <div className="absolute bottom-4 right-4 left-4 flex items-center justify-between">
          <span className="bg-navy-950/90 backdrop-blur-xl text-blue-400 font-bold px-3.5 py-1.5 rounded-xl text-xs border border-blue-500/30">
            {car.category}
          </span>
          <div className="flex items-center gap-1 bg-navy-950/90 backdrop-blur-xl px-3 py-1.5 rounded-xl text-xs text-white border border-blue-500/20">
            <Star className="w-3.5 h-3.5 text-blue-400 fill-blue-400" />
            <span className="font-bold">{car.rating}</span>
            <span className="text-slate-400">({car.reviewsCount})</span>
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-blue-400 font-bold tracking-wider">{car.brand}</span>
            <span className="text-xs text-slate-400 font-medium">موديل {car.year}</span>
          </div>
          <h3
            onClick={() => onSelect(car)}
            className="text-xl font-black text-white hover:text-blue-400 cursor-pointer transition-colors line-clamp-1"
          >
            {car.name}
          </h3>
          <p className="text-slate-400 text-xs mt-2 line-clamp-2 leading-relaxed">{car.description}</p>
        </div>

        {/* Specs Grid */}
        <div className="grid grid-cols-3 gap-2 py-3.5 border-y border-blue-500/20 text-center">
          <div className="flex flex-col items-center justify-center p-2 bg-navy-950/90 rounded-2xl border border-blue-500/10">
            <Settings className="w-4 h-4 text-blue-400 mb-1" />
            <span className="text-[11px] text-slate-300 font-medium">{car.transmission}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-navy-950/90 rounded-2xl border border-blue-500/10">
            <Fuel className="w-4 h-4 text-blue-400 mb-1" />
            <span className="text-[11px] text-slate-300 font-medium">{car.fuelType}</span>
          </div>
          <div className="flex flex-col items-center justify-center p-2 bg-navy-950/90 rounded-2xl border border-blue-500/10">
            <Users className="w-4 h-4 text-blue-400 mb-1" />
            <span className="text-[11px] text-slate-300 font-medium">{car.seats} مقاعد</span>
          </div>
        </div>

        {/* Pricing & CTA */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <span className="text-[11px] text-slate-400 block font-medium">تبدأ من</span>
            <span className="text-xl font-black text-blue-400">{car.startingPrice.toLocaleString()} <span className="text-xs text-slate-300 font-normal">ر.س</span></span>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onSelect(car)}
              className="px-4 py-2.5 bg-navy-950 hover:bg-navy-850 text-slate-200 border border-blue-500/30 text-xs font-bold rounded-xl transition-all"
            >
              نظرة عامة
            </button>
            <button
              onClick={() => onBookNow(car)}
              className="px-4 py-2.5 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white text-xs font-black rounded-xl shadow-lg shadow-blue-500/30 transition-all"
            >
              حجز صقر
            </button>
          </div>
        </div>

      </div>

    </div>
  );
};
