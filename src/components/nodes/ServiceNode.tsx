import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';
import { Square } from 'lucide-react';

const ServiceNode = ({ data }: NodeProps) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-blue-500 min-w-[150px]">
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-blue-500"
      />
      <div className="flex items-center">
        <div className="rounded-full w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-500 mr-2">
          <Square size={16} />
        </div>
        <div className="text-sm font-bold text-gray-700">
          {data.label || 'Service'}
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-blue-500"
      />
    </div>
  );
};

export default memo(ServiceNode);
