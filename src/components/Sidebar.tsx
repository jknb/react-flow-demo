import React from 'react';
import { Circle, Square, Play, GitBranch } from 'lucide-react';

const Sidebar = () => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4 flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-700 mb-2">Nodes</h2>
      <div className="flex flex-col gap-3">
        <div
          className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg cursor-move hover:border-blue-500 hover:shadow-sm transition-all"
          onDragStart={(event) => onDragStart(event, 'start')}
          draggable
        >
          <Play className="w-5 h-5 text-green-500" />
          <span className="text-sm font-medium text-gray-600">Start Node</span>
        </div>
        <div
          className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg cursor-move hover:border-blue-500 hover:shadow-sm transition-all"
          onDragStart={(event) => onDragStart(event, 'service')}
          draggable
        >
          <Square className="w-5 h-5 text-blue-500" />
          <span className="text-sm font-medium text-gray-600">Service Node</span>
        </div>
        <div
          className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg cursor-move hover:border-blue-500 hover:shadow-sm transition-all"
          onDragStart={(event) => onDragStart(event, 'decision')}
          draggable
        >
          <GitBranch className="w-5 h-5 text-orange-500" />
          <span className="text-sm font-medium text-gray-600">Decision Node</span>
        </div>
        <div
          className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg cursor-move hover:border-blue-500 hover:shadow-sm transition-all"
          onDragStart={(event) => onDragStart(event, 'end')}
          draggable
        >
          <Circle className="w-5 h-5 text-red-500" />
          <span className="text-sm font-medium text-gray-600">End Node</span>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
