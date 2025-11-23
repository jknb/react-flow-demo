import React from 'react';
import { Circle, Square, Play, GitBranch, GripVertical } from 'lucide-react';

const Sidebar = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="w-72 bg-white border-r border-slate-200 p-6 flex flex-col gap-6 shadow-sm z-10">
      <div>
        <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-4">Node Palette</h2>
        <div className="flex flex-col gap-3">
          <div
            className="group flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-move hover:border-emerald-500 hover:shadow-md hover:shadow-emerald-500/10 transition-all duration-200"
            onDragStart={(event) => onDragStart(event, 'start')}
            draggable
          >
            <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
              <Play className="w-5 h-5 text-emerald-600" />
            </div>
            <div className="flex-grow">
              <span className="text-sm font-medium text-slate-700 group-hover:text-emerald-700 transition-colors">Start Node</span>
              <p className="text-xs text-slate-400">Entry point</p>
            </div>
            <GripVertical className="w-4 h-4 text-slate-300" />
          </div>

          <div
            className="group flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-move hover:border-indigo-500 hover:shadow-md hover:shadow-indigo-500/10 transition-all duration-200"
            onDragStart={(event) => onDragStart(event, 'service')}
            draggable
          >
            <div className="p-2 bg-indigo-50 rounded-lg group-hover:bg-indigo-100 transition-colors">
              <Square className="w-5 h-5 text-indigo-600" />
            </div>
            <div className="flex-grow">
              <span className="text-sm font-medium text-slate-700 group-hover:text-indigo-700 transition-colors">Service Node</span>
              <p className="text-xs text-slate-400">Execute action</p>
            </div>
            <GripVertical className="w-4 h-4 text-slate-300" />
          </div>

          <div
            className="group flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-move hover:border-amber-500 hover:shadow-md hover:shadow-amber-500/10 transition-all duration-200"
            onDragStart={(event) => onDragStart(event, 'decision')}
            draggable
          >
            <div className="p-2 bg-amber-50 rounded-lg group-hover:bg-amber-100 transition-colors">
              <GitBranch className="w-5 h-5 text-amber-600" />
            </div>
            <div className="flex-grow">
              <span className="text-sm font-medium text-slate-700 group-hover:text-amber-700 transition-colors">Decision Node</span>
              <p className="text-xs text-slate-400">Branch flow</p>
            </div>
            <GripVertical className="w-4 h-4 text-slate-300" />
          </div>

          <div
            className="group flex items-center gap-3 p-3 bg-white border border-slate-200 rounded-xl cursor-move hover:border-rose-500 hover:shadow-md hover:shadow-rose-500/10 transition-all duration-200"
            onDragStart={(event) => onDragStart(event, 'end')}
            draggable
          >
            <div className="p-2 bg-rose-50 rounded-lg group-hover:bg-rose-100 transition-colors">
              <Circle className="w-5 h-5 text-rose-600" />
            </div>
            <div className="flex-grow">
              <span className="text-sm font-medium text-slate-700 group-hover:text-rose-700 transition-colors">End Node</span>
              <p className="text-xs text-slate-400">Terminate flow</p>
            </div>
            <GripVertical className="w-4 h-4 text-slate-300" />
          </div>
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
