import React from 'react';
import { Circle, Square, Play, GitBranch, GripVertical, type LucideIcon } from 'lucide-react';
import { colorStyles, getNodeColor } from './constants';
import type { NodeType } from '../../types';

interface SidebarItem {
  type: NodeType;
  label: string;
  icon: LucideIcon;
  description: string;
}

const sidebarItems: SidebarItem[] = [
  {
    type: 'start',
    label: 'Start Node',
    icon: Play,
    description: 'Entry point',
  },
  {
    type: 'service',
    label: 'Service Node',
    icon: Square,
    description: 'Execute action',
  },
  {
    type: 'decision',
    label: 'Decision Node',
    icon: GitBranch,
    description: 'Branch flow',
  },
  {
    type: 'end',
    label: 'End Node',
    icon: Circle,
    description: 'Terminate flow',
  },
];

const Sidebar = () => {
  const onDragStart = (event: React.DragEvent, nodeType: NodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="w-72 bg-white border-r border-slate-200 p-6 flex flex-col gap-6 shadow-sm z-10">
      <div>
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">
          Node Palette
        </h2>
        <div className="flex flex-col gap-3">
          {sidebarItems.map((item) => {
            const color = getNodeColor(item.type);
            const styles = colorStyles[color];

            return (
              <div
                key={item.type}
                className={`group flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-move hover:${styles.border} hover:shadow-md transition-all duration-200`}
                onDragStart={(event) => onDragStart(event, item.type)}
                draggable
              >
                <div
                  className={`p-2 rounded-lg ${styles.iconBg.replace('bg-', 'group-hover:bg-')} transition-colors`}
                >
                  <item.icon className={`w-5 h-5 ${styles.iconColor}`} />
                </div>
                <div className="grow">
                  <span
                    className={`text-sm font-medium text-slate-700 ${styles.iconColor.replace('text-', 'group-hover:text-').replace('600', '700')} transition-colors`}
                  >
                    {item.label}
                  </span>
                  <p className="text-xs text-slate-400">{item.description}</p>
                </div>
                <GripVertical className="w-4 h-4 text-slate-300" />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-auto p-4 bg-slate-50 rounded-xl border border-slate-100">
        <p className="text-xs text-slate-500 leading-relaxed">
          Drag nodes from this palette to the canvas to build your workflow.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
