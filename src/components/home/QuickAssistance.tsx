import React from 'react';
import { Calculator, MapPin, Wrench, CreditCard } from 'lucide-react';

interface QuickAssistanceProps {
  onOpenService: (actionType: 'test-drive' | 'quote' | 'showroom' | 'maintenance' | 'financing') => void;
}

export const QuickAssistance: React.FC<QuickAssistanceProps> = ({ onOpenService }) => {
  return (
    <div className="relative z-25 max-w-6xl mx-auto px-4 -mt-16 mb-16">
      <div className="bg-navy-900/90 backdrop-blur-xl border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl shadow-blue-500/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">

          {/* Heading */}
          <div className="flex items-center gap-4 text-right">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-500/30 shrink-0">
              S
            </div>
            <div>
              <h3 className="text-xl font-black text-white">خدمات عملاء صقر الفورية (VIP)</h3>
              <p className="text-xs text-blue-400 font-semibold tracking-wide mt-0.5">اختر الخدمة الفورية للبدء بكل راحة ورفاهية</p>
            </div>
          </div>

          {/* Quick Action Pill Buttons */}
          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto justify-end">
            <button
              onClick={() => onOpenService('quote')}
              className="flex items-center gap-2 bg-navy-950 hover:bg-navy-850 text-slate-200 hover:text-blue-400 border border-blue-500/20 hover:border-blue-500/50 px-4 py-3.5 rounded-2xl text-xs font-bold transition-all shadow-sm"
            >
              <Calculator className="w-4 h-4 text-blue-400" />
              <span>طلب عرض سعر خاص</span>
            </button>

            <button
              onClick={() => onOpenService('showroom')}
              className="flex items-center gap-2 bg-navy-950 hover:bg-navy-850 text-slate-200 hover:text-blue-400 border border-blue-500/20 hover:border-blue-500/50 px-4 py-3.5 rounded-2xl text-xs font-bold transition-all shadow-sm"
            >
              <MapPin className="w-4 h-4 text-blue-400" />
              <span>ابحث عن صالة عرض</span>
            </button>

            <button
              onClick={() => onOpenService('maintenance')}
              className="flex items-center gap-2 bg-navy-950 hover:bg-navy-850 text-slate-200 hover:text-blue-400 border border-blue-500/20 hover:border-blue-500/50 px-4 py-3.5 rounded-2xl text-xs font-bold transition-all shadow-sm"
            >
              <Wrench className="w-4 h-4 text-blue-400" />
              <span>حجز صيانة VIP</span>
            </button>

            <button
              onClick={() => onOpenService('financing')}
              className="flex items-center gap-2 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-5 py-3.5 rounded-2xl text-xs font-black transition-all shadow-lg shadow-blue-500/30"
            >
              <CreditCard className="w-4 h-4" />
              <span>تمويل صقر 0%</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
