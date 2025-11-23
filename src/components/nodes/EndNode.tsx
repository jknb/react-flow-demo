import { memo } from 'react';
import { Handle, Position } from '@xyflow/react';
import { StopCircle } from 'lucide-react';

const EndNode = () => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-xl bg-white border-2 border-rose-500 min-w-[150px] transition-all hover:shadow-rose-500/20">
      <Handle
        type="target"
        position={Position.Top}
        className="w-4 h-4 bg-rose-500 border-2 border-white shadow-sm hover:w-5 hover:h-5 transition-all"
      />
      <div className="flex items-center gap-3">
        <div className="rounded-lg w-10 h-10 flex items-center justify-center bg-rose-100 text-rose-600 shadow-inner">
          <StopCircle size={20} />
        </div>
        <div>
          <div className="text-sm font-bold text-slate-800">End</div>
          <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">Exit</div>
        </div>
      </div>
    </div>
  );
};

export default memo(EndNode);
