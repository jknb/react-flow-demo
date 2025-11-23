import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Circle } from 'lucide-react';

const EndNode = () => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-red-500 min-w-[150px]">
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-red-500"
      />
      <div className="flex items-center">
        <div className="rounded-full w-8 h-8 flex items-center justify-center bg-red-100 text-red-500 mr-2">
          <Circle size={16} />
        </div>
        <div className="text-sm font-bold text-gray-700">End</div>
      </div>
    </div>
  );
};

export default memo(EndNode);
