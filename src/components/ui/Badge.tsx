import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'royal' | 'success' | 'dark';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'blue', className = '' }) => {
  const variantStyles = {
    blue: 'bg-blue-500/10 text-blue-400 border border-blue-500/30',
    royal: 'bg-navy-800/80 text-slate-200 border border-navy-700',
    success: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30',
    dark: 'bg-slate-800 text-slate-300 border border-slate-700'
  };

  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${variantStyles[variant]} ${className}`}>
      {children}
    </span>
  );
};
