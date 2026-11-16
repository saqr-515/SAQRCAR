import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowLeft, ChevronRight, ChevronLeft } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onOpenTestDrive: () => void;
}

const heroSlides = [
  {
    badge: 'إصدار صقر الحصري 2026',
    title: 'أيقونة الفخامة المطلقة',
    highlight: 'صقر كراون الجديدة كلياً',
    description: 'اكتشف قمة الهندسة الفاخرة والأداء الهجين المتطور، المصممة خصيصاً لتلبي تطلعات النخبة في صالة عرض SAQR.',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=1200&auto=format&fit=crop',
    price: 'تبدأ من 179,000 ر.س'
  },
  {
    badge: 'أسطورة الطرق الوعرة VIP 2027',
    title: 'السيادة والسيطرة المطلقة',
    highlight: 'صقر برادو الأسطورية',
    description: 'جاهزة لقهر أصعب التضاريس بأعلى معايير الأمان والفخامة والتقنيات الذكية المتقدمة لرحلات لا تُنسى.',
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?q=80&w=1200&auto=format&fit=crop',
    price: 'تبدأ من 199,000 ر.س'
  },
  {
    badge: 'الفخامة الفائقة لعام 2024',
    title: 'ملك الصحراء والمدن',
    highlight: 'صقر لاندكروزر VMX',
    description: 'الرمز الحقيقي للقوة والهيبة والاعتمادية التي ترافقك في كل مناسبة ورحلة عبر أرجاء الوطن الغالي.',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
    price: 'تبدأ من 245,000 ر.س'
  }
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onOpenTestDrive }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const slide = heroSlides[currentSlide];

  return (
    <div className="relative overflow-hidden bg-navy-950 py-24 lg:py-36">
      {/* Cinematic Ambient Blue Backlighting */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Right Text Content (RTL) */}
          <div className="lg:col-span-7 space-y-8 text-right">
            <div className="inline-flex items-center gap-2 bg-navy-900/90 border border-blue-500/30 px-5 py-2 rounded-full text-blue-400 text-sm font-bold shadow-lg shadow-blue-500/10 backdrop-blur-xl">
              <div className="w-5 h-5 rounded-lg bg-blue-600 flex items-center justify-center text-white font-black text-xs">S</div>
              <span>{slide.badge}</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.15]">
              {slide.title} <span className="block bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent mt-3">{slide.highlight}</span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl font-normal leading-relaxed max-w-2xl">
              {slide.description}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onExploreClick}
                className="flex items-center gap-3 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-black px-8 py-4 rounded-2xl shadow-xl shadow-blue-500/30 transition-all transform hover:-translate-y-1 text-base tracking-wide"
              >
                <span>استكشف أسطول صقر</span>
                <ArrowLeft className="w-5 h-5" />
              </button>

              <button
                onClick={onOpenTestDrive}
                className="flex items-center gap-2 bg-navy-900/95 hover:bg-navy-850 text-blue-400 font-bold px-8 py-4 rounded-2xl border border-blue-500/30 shadow-lg shadow-blue-500/10 backdrop-blur-xl transition-all text-base tracking-wide"
              >
                <Sparkles className="w-5 h-5 text-blue-400" />
                <span>حجز تجربة قيادة فاخرة</span>
              </button>
            </div>

            {/* Interactive Slider Navigation & Indicators */}
            <div className="flex items-center justify-between pt-6 border-t border-blue-500/20">
              <div className="flex items-center gap-2.5">
                {heroSlides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentSlide(idx)}
                    className={`h-2.5 rounded-full transition-all ${currentSlide === idx ? 'w-12 bg-gradient-to-r from-blue-500 to-blue-600' : 'w-2.5 bg-navy-900 border border-blue-500/20'}`}
                  />
                ))}
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={prevSlide}
                  className="p-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-blue-400 border border-blue-500/30 transition-all shadow-md"
                  aria-label="السابق"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-3 rounded-xl bg-navy-900 hover:bg-navy-850 text-blue-400 border border-blue-500/30 transition-all shadow-md"
                  aria-label="التالي"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
              </div>
            </div>

          </div>

          {/* Left Hero Image Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-3xl blur-xl opacity-30 animate-pulse"></div>
              <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl bg-navy-900/90 glass-card">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-[450px] object-cover transform hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 left-0 p-6 flex items-center justify-between backdrop-blur-xl bg-navy-950/90 border-t border-blue-500/20">
                  <div>
                    <span className="bg-blue-500/15 text-blue-400 border border-blue-500/30 text-xs font-black px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
                      إصدار محدود للضيوف النخبة
                    </span>
                    <h3 className="text-xl font-black text-white">{slide.title}</h3>
                  </div>
                  <div className="text-left">
                    <span className="text-xs text-slate-400 block">السعر الأساسي</span>
                    <span className="text-lg font-black text-blue-400">{slide.price}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
