import { memo } from 'react';
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { GitBranch } from 'lucide-react';
import NodeLayout from './NodeLayout';
import type { BaseNodeData } from '../../types';

type DecisionNode = Node<BaseNodeData, 'decision'>;

const DecisionNode = ({ data }: NodeProps<DecisionNode>) => {
  return (
    <NodeLayout
      title={data.label || 'Decision'}
      category="Condition"
      icon={GitBranch}
      color="amber"
      handles={
        <>
          <Handle
            type="target"
            position={Position.Top}
            className="w-4 h-4 bg-amber-500 border-2 border-white shadow-sm hover:w-5 hover:h-5 transition-all"
          />
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
        </>
      }
    >
      <div className="flex justify-between px-1 mt-2">
        <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
          True
        </span>
        <span className="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full border border-rose-100">
          False
        </span>
      </div>
    </NodeLayout>
  );
};

export default memo(DecisionNode);
