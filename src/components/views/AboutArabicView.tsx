import React from 'react';
import { Globe, Award, BookOpen, Compass, Shield, Sparkles } from 'lucide-react';

export const AboutArabicView: React.FC<{ onNavigateHome: () => void }> = ({ onNavigateHome }) => {
  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-16">

        {/* Header Banner */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-bold shadow-blue-glow">
            <Sparkles className="w-4 h-4" />
            <span>التراث والثقافة العربية للسيارات</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-black bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent leading-tight">
            عراقة الثقافة العربية ورؤية صقر في قطاع السيارات
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            تتبنى منصة صقر (SAQR World) الهوية العربية الأصيلة في قطاع التنقل والنقل الفاخر، جامعَةً بين قيم الضيافة، الأصالة، والتقنيات الحديثة لخدمة عشاق السيارات في المملكة العربية السعودية والمنطقة العربية.
          </p>
        </div>

        {/* Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="glass-card p-8 rounded-3xl space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all"></div>
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-2xl font-bold shadow-lg">
              <Globe className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-white">الهوية والثقافة المرتبطة بالسيارات في العالم العربي</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              تعكس السيارات في الثقافة العربية المعاصرة رمزاً للترحيب، الكرم، والتواصل الإنساني عبر الصحاري والمدن الحديثة. تكرس "صقر" جهودها لتوفير طرازات تلبي تطلعات الشغوفين بالتميز والفخامة.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all"></div>
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-2xl font-bold shadow-lg">
              <Compass className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-white">مهمة صقر في المنطقة</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              ريادة سوق السيارات من خلال معايير جودة لا تُضاهى، ودعم البنية التحتية الذكية، وتمكين العملاء من استكشاف أحدث الابتكارات العالمية بلمسة عربية أصيلة.
            </p>
          </div>

          <div className="glass-card p-8 rounded-3xl space-y-4 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/25 transition-all"></div>
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 text-2xl font-bold shadow-lg">
              <BookOpen className="w-7 h-7" />
            </div>
            <h3 className="text-xl font-black text-white">المعرفة والمصادر المتخصصة</h3>
            <p className="text-slate-400 text-sm leading-relaxed">
              توفير مكتبة غنية من المقالات والدراسات والمراجع الموجهة للباحثين والمحبين للثقافة المرورية والصناعة الميكانيكية باللغة العربية الفصحى.
            </p>
          </div>

        </div>

        {/* Cultural Vision Section */}
        <div className="glass-card p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-blue-500/30">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-blue-600/10 pointer-events-none"></div>
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <span className="text-blue-400 font-black text-xs uppercase tracking-widest">رؤية 2030 والتطوير الإقليمي</span>
              <h2 className="text-3xl font-black text-white">السيارات كجسر نحو مستقبل مستدام وذكي</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                تتماشى استراتيجية "صقر" مع النهضة التنموية الكبرى في المملكة العربية السعودية والمنطقة. نحن نؤمن بأن قطاع السيارات ليس مجرد وسائل نقل، بل هو ركيزة أساسية لجودة الحياة، السفر الآمن، والابتكار التقني.
              </p>
              <button
                onClick={onNavigateHome}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/30 transition-all"
              >
                استكشف أسطول صقر الآن
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-navy-900/90 p-6 rounded-2xl border border-blue-500/20 text-center space-y-2">
                <div className="text-3xl font-black text-blue-400">+100%</div>
                <div className="text-xs text-slate-400 font-bold">التزام بالهوية واللغة العربية</div>
              </div>
              <div className="bg-navy-900/90 p-6 rounded-2xl border border-blue-500/20 text-center space-y-2">
                <div className="text-3xl font-black text-blue-400">VIP</div>
                <div className="text-xs text-slate-400 font-bold">خدمات ضيافة وعناية فائقة</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
