import { memo } from 'react';
import { Handle, Position } from 'reactflow';
import { Play } from 'lucide-react';

const StartNode = () => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-xl bg-white border-2 border-emerald-500 min-w-[150px] transition-all hover:shadow-emerald-500/20">
      <div className="flex items-center gap-3">
        <div className="rounded-lg w-10 h-10 flex items-center justify-center bg-emerald-100 text-emerald-600 shadow-inner">
          <Play size={20} />
        </div>
        <div>
          <div className="text-sm font-bold text-slate-800">Start</div>
          <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">
            Entry
          </div>
        </div>
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        className="w-4 h-4 bg-emerald-500 border-2 border-white shadow-sm hover:w-5 hover:h-5 transition-all"
      />
    </div>
  );
};

export default memo(StartNode);
