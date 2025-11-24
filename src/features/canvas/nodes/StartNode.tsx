import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { Play } from 'lucide-react';
import NodeLayout from './NodeLayout';
import type { WorkflowNode } from '../../../types';

const StartNode = ({ data }: NodeProps<WorkflowNode<'start'>>) => {
  return (
    <NodeLayout
      title={data.label || 'Start'}
      category="Entry"
      icon={Play}
      color="emerald"
      handles={
        <Handle
          type="source"
          position={Position.Bottom}
          className="w-4 h-4 bg-emerald-500 border-2 border-white shadow-sm hover:w-5 hover:h-5 transition-all"
        />
      }
    />
  );
};

export default memo(StartNode);
