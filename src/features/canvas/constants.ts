import type { NodeType } from '../../types';

export const colorStyles = {
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

export type ColorType = keyof typeof colorStyles;

export const getNodeColor = (type: NodeType): ColorType => {
  switch (type) {
    case 'start':
      return 'emerald';
    case 'decision':
      return 'amber';
    case 'end':
      return 'rose';
    case 'service':
    default:
      return 'indigo';
  }
};
