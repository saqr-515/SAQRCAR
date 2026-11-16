import React, { useState } from 'react';
import { X, Phone, CheckCircle2 } from 'lucide-react';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [phone, setPhone] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => {
      onClose();
      setIsSent(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/85 backdrop-blur-xl overflow-y-auto">
      <div className="relative w-full max-w-md bg-navy-900/95 backdrop-blur-xl border border-blue-500/35 rounded-3xl shadow-2xl overflow-hidden my-8 p-6 sm:p-8 animate-in fade-in zoom-in duration-200">

        <button
          onClick={onClose}
          className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-navy-950 text-slate-300 hover:text-white border border-blue-500/30 transition-colors"
        >
          <X className="w-5 h-5 text-blue-400" />
        </button>

        {isSent ? (
          <div className="text-center py-12 space-y-4">
            <div className="w-20 h-20 bg-emerald-500/10 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-black text-white">تم تسجيل الدخول بنجاح!</h3>
            <p className="text-slate-300 text-sm">مرحباً بك في بوابة حسابك لدى SAQR للسيارات.</p>
          </div>
        ) : (
          <div>
            <div className="mb-6 border-b border-blue-500/20 pb-4 text-center">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center mx-auto mb-3 text-white font-black text-2xl shadow-lg shadow-blue-500/20">
                S
              </div>
              <h2 className="text-2xl font-black text-white">حسابي / تسجيل الدخول</h2>
              <p className="text-slate-400 text-xs mt-1">ادخل رقم الجوال ليصلك رمز التحقق السريع</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">رقم الجوال الكريم</label>
                <div className="relative">
                  <Phone className="absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-blue-400" />
                  <input
                    type="tel"
                    required
                    placeholder="05xxxxxxxx"
                    dir="ltr"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-navy-950 border border-blue-500/25 text-white placeholder-slate-500 pr-10 pl-4 py-3.5 rounded-2xl text-sm text-right focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-500/25 transition-all shadow-inner"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-black text-sm shadow-lg shadow-blue-500/30 transition-all mt-4"
              >
                <div className="w-4 h-4 rounded bg-white text-blue-600 flex items-center justify-center font-bold text-[10px]">S</div>
                <span>إرسال رمز التحقق</span>
              </button>
            </form>
          </div>
        )}

      </div>
    </div>
  );
};
