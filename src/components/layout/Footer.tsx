import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-navy-950 border-t border-blue-500/20 text-slate-300 pt-20 pb-12 relative overflow-hidden">
      {/* Background Blue Glow */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Left Column: SAQR logo, social icons, description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 via-blue-600 to-blue-800 flex items-center justify-center shadow-lg shadow-blue-500/30 text-white font-black text-xl">
                S
              </div>
              <div>
                <span className="text-xl font-black text-white">SAQR Cars</span>
                <span className="block text-[10px] text-slate-400 font-bold tracking-wider">SAQR Cars KSA</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Your gateway to automotive excellence with SAQR.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {/* Facebook Icon */}
              <a href="#facebook" aria-label="Facebook" className="w-10 h-10 rounded-xl bg-navy-900 hover:bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* Twitter Icon */}
              <a href="#twitter" aria-label="Twitter" className="w-10 h-10 rounded-xl bg-navy-900 hover:bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* YouTube Icon */}
              <a href="#youtube" aria-label="YouTube" className="w-10 h-10 rounded-xl bg-navy-900 hover:bg-blue-600/20 border border-blue-500/20 flex items-center justify-center text-blue-400 transition-colors">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Center Column 1 (Links): Education, Books Library, Religious Sciences, AI Tools */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-r-4 border-blue-500 pr-3">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#education" className="hover:text-blue-400 transition-colors">Education</a></li>
              <li><a href="#books-library" className="hover:text-blue-400 transition-colors">Books Library</a></li>
              <li><a href="#religious-sciences" className="hover:text-blue-400 transition-colors">Religious Sciences</a></li>
              <li><a href="#ai-tools" className="hover:text-blue-400 transition-colors">AI Tools</a></li>
            </ul>
          </div>

          {/* Center Column 2 (Links): About Arabic, About Us, Contact Us */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-r-4 border-blue-500 pr-3">Company Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#about-arabic" className="hover:text-blue-400 transition-colors">About Arabic</a></li>
              <li><a href="#about-us" className="hover:text-blue-400 transition-colors">About Us</a></li>
              <li><a href="#contact-us" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Right Column: Contact details */}
          <div>
            <h3 className="text-white font-bold text-lg mb-6 border-r-4 border-blue-500 pr-3">Contact Details</h3>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-400 shrink-0" />
                <span dir="ltr" className="font-bold text-white text-xs sm:text-sm">MOHAMMEDDEBES71@GMAIL.COM</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <span className="text-white">Palestine, Gaza</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-400 shrink-0" />
                <span dir="ltr" className="font-bold text-white">+972 595 059 323</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-500/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© 2026 Created By SAQR</p>
          <div className="flex items-center gap-6">
            <span className="text-slate-400 font-medium">SAQR Cars - All Rights Reserved</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
