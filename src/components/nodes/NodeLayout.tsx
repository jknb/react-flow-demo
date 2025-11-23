import React, { memo } from 'react';
import type { LucideIcon } from 'lucide-react';

interface NodeLayoutProps {
  title: string;
  category: string;
  icon: LucideIcon;
  color: 'indigo' | 'emerald' | 'amber' | 'rose';
  children?: React.ReactNode;
  handles?: React.ReactNode;
}

const colorStyles = {
  indigo: {
    border: 'border-indigo-500',
    shadow: 'hover:shadow-indigo-500/20',
    iconBg: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    handle: 'bg-indigo-500',
  },
  emerald: {
    border: 'border-emerald-500',
    shadow: 'hover:shadow-emerald-500/20',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
    handle: 'bg-emerald-500',
  },
  amber: {
    border: 'border-amber-500',
    shadow: 'hover:shadow-amber-500/20',
    iconBg: 'bg-amber-100',
    iconColor: 'text-amber-600',
    handle: 'bg-amber-500',
  },
  rose: {
    border: 'border-rose-500',
    shadow: 'hover:shadow-rose-500/20',
    iconBg: 'bg-rose-100',
    iconColor: 'text-rose-600',
    handle: 'bg-rose-500',
  },
};

const NodeLayout = ({ title, category, icon: Icon, color, children, handles }: NodeLayoutProps) => {
  const styles = colorStyles[color];

  return (
    <div
      className={`px-4 py-3 shadow-lg rounded-xl bg-white border-2 ${styles.border} min-w-[180px] transition-all ${styles.shadow}`}
    >
      {handles}
      <div className="flex items-center gap-3">
        <div
          className={`rounded-lg w-10 h-10 flex items-center justify-center ${styles.iconBg} ${styles.iconColor} shadow-inner`}
        >
          <Icon size={20} />
        </div>
        <div>
          <div className="text-sm font-bold text-slate-800">{title}</div>
          <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">
            {category}
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};

export default memo(NodeLayout);
