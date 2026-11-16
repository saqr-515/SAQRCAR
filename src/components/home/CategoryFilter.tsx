import React from 'react';
import { CarCategory } from '../../types/car';
import { Shield, Zap, Sparkles, Layers } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: CarCategory;
  onSelectCategory: (category: CarCategory) => void;
}

const categories: { name: CarCategory; icon: React.ReactNode }[] = [
  { name: 'الكل', icon: <Layers className="w-4 h-4" /> },
  { name: 'السيدان', icon: <div className="w-4 h-4 rounded bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold text-[10px]">S</div> },
  { name: 'السيارات متعددة الاستخدامات SUV', icon: <Shield className="w-4 h-4" /> },
  { name: 'الهجينة HEV', icon: <Zap className="w-4 h-4" /> },
  { name: 'العائلية والفخمة', icon: <Sparkles className="w-4 h-4" /> },
];

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ selectedCategory, onSelectCategory }) => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto pb-2 pt-1 no-scrollbar">
      {categories.map((cat) => {
        const isSelected = selectedCategory === cat.name;
        return (
          <button
            key={cat.name}
            onClick={() => onSelectCategory(cat.name)}
            className={`flex items-center gap-2.5 px-6 py-3.5 rounded-2xl font-bold text-sm whitespace-nowrap transition-all shadow-md ${
              isSelected
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-blue-500/30 transform scale-105'
                : 'bg-navy-950 text-slate-300 hover:bg-navy-850 hover:text-white border border-blue-500/20'
            }`}
          >
            {cat.icon}
            <span>{cat.name}</span>
          </button>
        );
      })}
    </div>
  );
};
