import React, { memo } from 'react';
import type { LucideIcon } from 'lucide-react';

import { colorStyles, type ColorType } from '../constants';

interface NodeLayoutProps {
  title: string;
  category: string;
  icon: LucideIcon;
  color: ColorType;
  children?: React.ReactNode;
  handles?: React.ReactNode;
}

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
