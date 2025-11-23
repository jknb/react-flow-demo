import { memo } from 'react';
import { Handle, Position, type NodeProps } from 'reactflow';
import { Settings } from 'lucide-react';

const ServiceNode = ({ data }: NodeProps) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-xl bg-white border-2 border-indigo-500 min-w-[180px] transition-all hover:shadow-indigo-500/20">
      <Handle
        type="target"
        position={Position.Top}
        className="w-3 h-3 bg-indigo-500 border-2 border-white shadow-sm"
      />
      <div className="flex items-center gap-3">
        <div className="rounded-lg w-10 h-10 flex items-center justify-center bg-indigo-100 text-indigo-600 shadow-inner">
          <Settings size={20} />
        </div>
        <div>
          <div className="text-sm font-bold text-slate-800">
            {data.label || 'Service'}
          </div>
          <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">Action</div>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-3 h-3 bg-indigo-500 border-2 border-white shadow-sm"
      />
    </div>
  );
};

export default memo(ServiceNode);
