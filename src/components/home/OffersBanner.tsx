import React from 'react';
import { Sparkles, Percent } from 'lucide-react';

interface OffersBannerProps {
  onBookClick: () => void;
}

export const OffersBanner: React.FC<OffersBannerProps> = ({ onBookClick }) => {
  return (
    <section id="offers" className="py-20 bg-navy-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-navy-900 via-navy-850 to-navy-900 border border-blue-500/40 p-8 sm:p-14 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">

          {/* Background Decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/15 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

            <div className="lg:col-span-8 space-y-5 text-right">
              <div className="inline-flex items-center gap-2 bg-navy-950/80 border border-blue-500/30 px-5 py-2 rounded-full text-blue-400 text-sm font-bold backdrop-blur-xl">
                <Percent className="w-4 h-4 text-blue-400" />
                <span>عروض التمويل الحصرية من صقر - مرابحة 0%</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
                امتلك سيارة أحلامك اليوم مع برامج التمويل الحصرية ونسبة مرابحة <span className="bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent">0% حصرياً</span> من SAQR للسيارات
              </h2>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
                باقات تمويلية ميسرة بالتعاون مع كبرى المصارف السعودية، تشمل صيانة مجانية، وتأمين شامل، وخدمة التوصيل الفاخر حتى باب منزلك.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-lg-end">
              <button
                onClick={onBookClick}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-black px-8 py-5 rounded-2xl shadow-xl shadow-blue-500/30 transition-all transform hover:-translate-y-1 text-base tracking-wide"
              >
                <Sparkles className="w-5 h-5" />
                <span>احصل على عرض صقر</span>
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
