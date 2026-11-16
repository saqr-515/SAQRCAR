import React from 'react';
import { servicesData } from '../../data/services';
import { Car, CreditCard, MapPin, Wrench, Sparkles, HeartHandshake } from 'lucide-react';

interface ServicesSectionProps {
  onOpenService: (actionType: 'test-drive' | 'quote' | 'showroom' | 'maintenance' | 'financing') => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Car':
        return <Car className="w-8 h-8 text-blue-400" />;
      case 'CreditCard':
        return <CreditCard className="w-8 h-8 text-blue-400" />;
      case 'MapPin':
        return <MapPin className="w-8 h-8 text-blue-400" />;
      case 'Wrench':
        return <Wrench className="w-8 h-8 text-blue-400" />;
      default:
        return <Sparkles className="w-8 h-8 text-blue-400" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-navy-900 relative overflow-hidden">
      {/* Background Blue Glow */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* "العميل أولاً" Philosophy Banner */}
        <div className="bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950 border border-blue-500/30 rounded-3xl p-8 sm:p-12 mb-20 shadow-2xl backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-10">
          <div className="space-y-4 text-right max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-navy-900/90 border border-blue-500/30 px-5 py-2 rounded-full text-blue-400 text-sm font-bold backdrop-blur-xl">
              <HeartHandshake className="w-4 h-4 text-blue-400" />
              <span>فلسفة خدمة العملاء "الضيف أولاً"</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white">نلتزم بخدمتكم بأرفع معايير الرفاهية والضيافة السعودية الأصيلة</h2>
            <p className="text-slate-300 text-base leading-relaxed">
              في صالة عرض SAQR، نؤمن بأن كل عميل هو ضيف عزيز يستحق تجربة استثنائية تبدأ منذ لحظة زيارته الأولى وتستمر طوال رحلة امتلاكه لسيارته عبر خدمات VIP الحصرية.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-5 w-full lg:w-auto shrink-0">
            <div className="bg-navy-950 p-6 rounded-3xl border border-blue-500/20 text-center shadow-lg">
              <span className="block text-3xl font-black text-blue-400">100%</span>
              <span className="text-xs text-slate-300 mt-1.5 block font-semibold">قطع غيار أصلية معتمدة</span>
            </div>
            <div className="bg-navy-950 p-6 rounded-3xl border border-blue-500/20 text-center shadow-lg">
              <span className="block text-3xl font-black text-blue-400">24/7</span>
              <span className="text-xs text-slate-300 mt-1.5 block font-semibold">دعم ومساعدة VIP</span>
            </div>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-navy-900/90 backdrop-blur-xl border border-blue-500/30 px-5 py-2 rounded-full text-blue-400 text-sm font-bold shadow-lg shadow-blue-500/10 mb-4">
            <div className="w-4 h-4 rounded bg-blue-600 flex items-center justify-center text-white font-bold text-[10px]">S</div>
            <span>خدمات الكونكايرج والعملاء المميزين</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white">باقة الخدمات المتكاملة لشركة صقر</h2>
          <p className="text-slate-300 text-base sm:text-lg mt-4 leading-relaxed">
            نوفر لك باقة شاملة من الخدمات الفاخرة المصممة خصيصاً لتوفير وقتك وجهدك وضمان راحتك المطلقة.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((srv) => (
            <div
              key={srv.id}
              onClick={() => onOpenService(srv.actionType as any)}
              className="bg-navy-950 p-8 rounded-3xl border border-blue-500/20 shadow-xl hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-300 group flex flex-col justify-between cursor-pointer transform hover:-translate-y-1.5"
            >
              <div>
                <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/10">
                  {getIcon(srv.iconName)}
                </div>
                <h3 className="text-xl font-black text-white mb-3">{srv.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{srv.description}</p>
              </div>

              <div className="pt-6 mt-6 border-t border-blue-500/20 flex items-center justify-between text-xs text-blue-400 font-bold">
                <span>اطلب الخدمة الآن</span>
                <span>←</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
