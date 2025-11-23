import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';
import { GitBranch } from 'lucide-react';

const DecisionNode = ({ data }: NodeProps) => {
  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-orange-500 min-w-[150px]">
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-orange-500"
      />
      <div className="flex items-center justify-center mb-2">
        <div className="rounded-full w-8 h-8 flex items-center justify-center bg-orange-100 text-orange-500 mr-2">
          <GitBranch size={16} />
        </div>
        <div className="text-sm font-bold text-gray-700">
          {data.label || 'Decision'}
        </div>
      </div>
      
      <div className="flex justify-between text-[10px] text-gray-500 px-2">
        <span>True</span>
        <span>False</span>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="true"
        className="w-3 h-3 bg-green-500 left-[30%]"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="false"
        className="w-3 h-3 bg-red-500 left-[70%]"
      />
    </div>
  );
};

export default memo(DecisionNode);
