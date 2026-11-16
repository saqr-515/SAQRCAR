import React, { useState } from 'react';
import { Car } from '../../types/car';
import { X, Calendar, MapPin, User, Phone, CheckCircle2 } from 'lucide-react';

interface BookingModalProps {
  car: Car | null;
  onClose: () => void;
  onSuccess: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ car, onClose, onSuccess }) => {
  if (!car) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    startDate: '',
    endDate: '',
    pickupLocation: 'فرع صقر الرئيسي - الرياض',
    notes: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onSuccess();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-navy-900/95 backdrop-blur-xl border border-blue-500/35 rounded-3xl shadow-2xl overflow-hidden my-8 p-6 sm:p-8 animate-in fade-in zoom-in duration-200">

        {/* Close Button */}
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
            <h3 className="text-2xl font-black text-white">تم تأكيد طلب الحجز بنجاح!</h3>
            <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
              شكراً لاختيارك SAQR للسيارات. سيتواصل معك أحد ممثلي خدمة العملاء خلال دقائق لتأكيد التفاصيل وموعد التوصيل.
            </p>
          </div>
        ) : (
          <div>
            <div className="mb-6 border-b border-blue-500/20 pb-4">
              <span className="text-blue-400 text-xs font-bold bg-blue-500/15 px-3.5 py-1.5 rounded-full border border-blue-500/30 inline-flex items-center gap-1.5 mb-2">
                <div className="w-3.5 h-3.5 rounded bg-blue-500 text-white flex items-center justify-center font-bold text-[9px]">S</div>
                حجز فوري من SAQR
              </span>
              <h2 className="text-2xl font-black text-white">حجز السيارة: {car.name}</h2>
              <p className="text-slate-400 text-xs mt-1">السعر اليومي الشامل: <span className="text-blue-400 font-bold">{car.pricePerDay} ريال</span></p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">تاريخ الاستلام</label>
                  <div className="relative">
                    <Calendar className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                    <input
                      type="date"
                      required
                      value={formData.startDate}
                      onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                      className="w-full bg-navy-950 border border-blue-500/25 text-white pr-10 pl-4 py-3.5 rounded-2xl text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/25 transition-all shadow-inner"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-300 mb-1.5">تاريخ الإرجاع</label>
                  <div className="relative">
                    <Calendar className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                    <input
                      type="date"
                      required
                      value={formData.endDate}
                      onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                      className="w-full bg-navy-950 border border-blue-500/25 text-white pr-10 pl-4 py-3.5 rounded-2xl text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/25 transition-all shadow-inner"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">فرع الاستلام أو التوصيل</label>
                <div className="relative">
                  <MapPin className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                  <select
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({...formData, pickupLocation: e.target.value})}
                    className="w-full bg-navy-950 border border-blue-500/25 text-white pr-10 pl-4 py-3.5 rounded-2xl text-sm focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/25 transition-all shadow-inner"
                  >
                    <option value="فرع الرياض الرئيسي - طريق الملك فهد">فرع الرياض الرئيسي - طريق الملك فهد</option>
                    <option value="فرع جدة النموذجي - الكورنيش">فرع جدة النموذجي - الكورنيش</option>
                    <option value="توصيل VIP مجاني للمنزل / الفندق">توصيل VIP مجاني للمنزل / الفندق</option>
                    <option value="فرع الظهران - الخبر">فرع الظهران - المنطقة الشرقية</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">ملاحظات أو طلبات خاصة (اختياري)</label>
                <textarea
                  rows={3}
                  placeholder="أي طلبات خاصة..."
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
                  <span>تأكيد الحجز الآن</span>
                </button>
              </div>

            </form>
          </div>
        )}

      </div>
    </div>
  );
};
