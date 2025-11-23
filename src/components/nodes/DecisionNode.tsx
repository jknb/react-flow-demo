import { memo } from 'react';
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { GitBranch } from 'lucide-react';

type DecisionNode = Node<{ label: string }, 'decision'>;

const DecisionNode = ({ data }: NodeProps<DecisionNode>) => {
  return (
    <div className="px-4 py-3 shadow-lg rounded-xl bg-white border-2 border-amber-500 min-w-[180px] transition-all hover:shadow-amber-500/20">
      <Handle
        type="target"
        position={Position.Top}
        className="w-4 h-4 bg-amber-500 border-2 border-white shadow-sm hover:w-5 hover:h-5 transition-all"
      />
      <div className="flex items-center gap-3 mb-3">
        <div className="rounded-lg w-10 h-10 flex items-center justify-center bg-amber-100 text-amber-600 shadow-inner">
          <GitBranch size={20} />
        </div>
        <div>
          <div className="text-sm font-bold text-slate-800">{data.label || 'Decision'}</div>
          <div className="text-[10px] text-slate-500 font-medium uppercase tracking-wide">
            Condition
          </div>
        </div>
      </div>

      <div className="flex justify-between px-1">
        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
          True
        </span>
        <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
          False
        </span>
      </div>

      <Handle
        type="source"
        position={Position.Bottom}
        id="true"
        className="w-4 h-4 bg-emerald-500 border-2 border-white shadow-sm left-[23%] hover:w-5 hover:h-5 transition-all"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="false"
        className="w-4 h-4 bg-rose-500 border-2 border-white shadow-sm left-[77%] hover:w-5 hover:h-5 transition-all"
      />
    </div>
  );
};

export default memo(DecisionNode);
