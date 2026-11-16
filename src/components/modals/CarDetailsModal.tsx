import React, { useState } from 'react';
import { Car } from '../../types/car';
import { X, Star, Settings, Fuel, Users, CheckCircle2, Sparkles } from 'lucide-react';

interface CarDetailsModalProps {
  car: Car | null;
  onClose: () => void;
  onBook: (car: Car) => void;
}

export const CarDetailsModal: React.FC<CarDetailsModalProps> = ({ car, onClose, onBook }) => {
  if (!car) return null;

  const [activeImage, setActiveImage] = useState(car.image);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-navy-900/95 backdrop-blur-xl border border-blue-500/30 rounded-3xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in duration-200">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-navy-950 text-slate-300 hover:text-white hover:bg-navy-850 border border-blue-500/30 transition-colors"
        >
          <X className="w-5 h-5 text-blue-400" />
        </button>

        {/* Modal Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2">

          {/* Images Gallery */}
          <div className="p-6 bg-navy-950 flex flex-col justify-between">
            <div className="relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-blue-500/20 shadow-inner">
              <img src={activeImage} alt={car.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 right-4 bg-navy-950/90 px-3.5 py-1.5 rounded-full text-blue-400 text-xs font-bold border border-blue-500/30 flex items-center gap-1.5 backdrop-blur-xl">
                <div className="w-3.5 h-3.5 rounded bg-blue-500 text-white flex items-center justify-center font-bold text-[9px]">S</div>
                <span>{car.brand}</span>
              </div>
            </div>

            {car.gallery && car.gallery.length > 1 && (
              <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
                {car.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(img)}
                    className={`w-20 h-16 rounded-xl overflow-hidden border-2 transition-all shrink-0 ${activeImage === img ? 'border-blue-400 scale-105 shadow-md shadow-blue-500/20' : 'border-navy-850 opacity-60'}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details & Specifications */}
          <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">

            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-blue-400 text-xs font-bold px-3.5 py-1.5 bg-blue-500/15 rounded-full border border-blue-500/30 flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5 text-blue-400" />
                  {car.category}
                </span>
                <div className="flex items-center gap-1 text-white text-xs font-bold">
                  <Star className="w-4 h-4 text-blue-400 fill-blue-400" />
                  <span>{car.rating}</span>
                  <span className="text-slate-400">({car.reviewsCount} تقييم)</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-3xl font-black text-white">{car.name}</h2>
              <p className="text-slate-300 text-sm mt-3 leading-relaxed">{car.description}</p>
            </div>

            {/* Specs Badges */}
            <div className="grid grid-cols-3 gap-3 py-4 border-y border-blue-500/20 text-center">
              <div className="bg-navy-950 p-3 rounded-2xl border border-blue-500/10">
                <Settings className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                <span className="text-xs text-slate-300 font-medium block">{car.transmission}</span>
              </div>
              <div className="bg-navy-950 p-3 rounded-2xl border border-blue-500/10">
                <Fuel className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                <span className="text-xs text-slate-300 font-medium block">{car.fuelType}</span>
              </div>
              <div className="bg-navy-950 p-3 rounded-2xl border border-blue-500/10">
                <Users className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                <span className="text-xs text-slate-300 font-medium block">{car.seats} مقاعد</span>
              </div>
            </div>

            {/* Features List */}
            <div>
              <h4 className="text-white font-bold text-sm mb-3">المميزات والمواصفات الفاخرة:</h4>
              <div className="grid grid-cols-2 gap-2.5">
                {car.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing & CTA */}
            <div className="pt-4 border-t border-blue-500/20 flex items-center justify-between">
              <div>
                <span className="text-xs text-slate-400 block font-medium">السعر اليومي الشامل</span>
                <span className="text-2xl font-black text-blue-400">{car.pricePerDay} <span className="text-xs text-slate-300 font-normal">ريال / يوم</span></span>
              </div>

              <button
                onClick={() => {
                  onClose();
                  onBook(car);
                }}
                className="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-black px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-500/30 transition-all"
              >
                <div className="w-4 h-4 rounded bg-white text-blue-600 flex items-center justify-center font-bold text-[10px]">S</div>
                <span>حجز السيارة الآن</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
