import React, { useState } from 'react';
import { X, Calendar, MapPin, User, Phone, CheckCircle2 } from 'lucide-react';

interface ServiceModalProps {
  actionType: 'test-drive' | 'quote' | 'showroom' | 'maintenance' | 'financing' | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ actionType, onClose }) => {
  if (!actionType) return null;

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: '',
    location: 'فرع الرياض - طريق الملك فهد',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 2500);
  };

  const getTitle = () => {
    switch (actionType) {
      case 'test-drive': return 'حجز تجربة قيادة حصرية';
      case 'quote': return 'طلب عرض سعر وتمويل صقر';
      case 'showroom': return 'استعلام عن فروع صالات العرض';
      case 'maintenance': return 'حجز موعد صيانة VIP المتنقلة';
      case 'financing': return 'برامج التمويل الحصرية 0%';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-lg bg-navy-900/95 backdrop-blur-xl border border-blue-500/35 rounded-3xl shadow-2xl overflow-hidden my-8 p-6 sm:p-8 animate-in fade-in zoom-in duration-200">

        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-navy-950 text-slate-300 hover:text-white border border-blue-500/30 transition-colors"
        >
          <X className="w-5 h-5 text-blue-400" />
        </button>

        {isSubmitted ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">تم استلام طلبك بنجاح!</h3>
            <p className="text-slate-300 text-sm max-w-sm mx-auto leading-relaxed">
              شكراً لتواصلك مع SAQR للسيارات. سيقوم فريق خدمة العملاء بالتواصل معك خلال دقائق لإتمام كافة الترتيبات.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6 border-b border-blue-500/20 pb-4">
              <span className="text-blue-400 text-xs font-bold bg-blue-500/15 px-3.5 py-1.5 rounded-full border border-blue-500/30 inline-flex items-center gap-1.5 mb-2">
                <div className="w-3.5 h-3.5 rounded bg-blue-500 text-white flex items-center justify-center font-bold text-[9px]">S</div>
                كونكايرج صقر للسيارات
              </span>
              <h2 className="text-2xl font-black text-white">{getTitle()}</h2>
              <p className="text-slate-400 text-xs mt-1">الرجاء إدخال البيانات المطلوبة لنخدمكم بكل سرعة ورفاهية</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">الاسم الكريم</label>
                <div className="relative">
                  <User className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                  <input
                    type="text"
                    required
                    placeholder="أدخل اسمك الكامل"
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full bg-navy-950 border border-blue-500/25 text-white placeholder-slate-500 pr-10 pl-4 py-3.5 rounded-2xl text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/25 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">رقم الجوال</label>
                <div className="relative">
                  <Phone className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                  <input
                    type="tel"
                    required
                    placeholder="05xxxxxxxx"
                    dir="ltr"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-navy-950 border border-blue-500/25 text-white placeholder-slate-500 pr-4 pl-4 py-3.5 rounded-2xl text-sm text-right focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/25 transition-all shadow-inner"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">الفرع المفضل</label>
                  <div className="relative">
                    <MapPin className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full bg-navy-950 border border-blue-500/25 text-white pr-10 pl-4 py-3.5 rounded-2xl text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/25 transition-all shadow-inner"
                    >
                      <option value="فرع الرياض - طريق الملك فهد">فرع الرياض - طريق الملك فهد</option>
                      <option value="فرع جدة - كورنيش الشاطئ">فرع جدة - كورنيش الشاطئ</option>
                      <option value="فرع الظهران - الخبر">فرع الظهران - المنطقة الشرقية</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">الموعد المفضل</label>
                  <div className="relative">
                    <Calendar className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                    <input
                      type="date"
                      required
                      value={formData.date}
                      onChange={(e) => setFormData({...formData, date: e.target.value})}
                      className="w-full bg-navy-950 border border-blue-500/25 text-white pr-10 pl-4 py-3.5 rounded-2xl text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/25 transition-all shadow-inner"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">ملاحظات أو تفاصيل إضافية</label>
                <textarea
                  rows={3}
                  placeholder="اكتب تفاصيل طلبك أو موديل السيارة المعني..."
                  value={formData.notes}
                  onChange={(e) => setFormData({...formData, notes: e.target.value})}
                  className="w-full bg-navy-950 border border-blue-500/25 text-white placeholder-slate-500 p-4 rounded-2xl text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/25 transition-all shadow-inner"
                ></textarea>
              </div>

              <div className="pt-4 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-6 py-3.5 rounded-xl bg-navy-950 hover:bg-navy-850 text-white text-xs font-bold border border-blue-500/20 transition-all"
                >
                  إلغاء
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-black text-xs shadow-lg shadow-blue-500/30 transition-all"
                >
                  <div className="w-4 h-4 rounded bg-white text-blue-600 flex items-center justify-center font-bold text-[10px]">S</div>
                  <span>إرسال الطلب</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
