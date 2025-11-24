import { memo } from 'react';
import { Handle, Position, type NodeProps } from '@xyflow/react';
import { StopCircle } from 'lucide-react';
import NodeLayout from './NodeLayout';
import type { WorkflowNode } from '../../../types';

const EndNode = ({ data }: NodeProps<WorkflowNode<'end'>>) => {
  return (
    <NodeLayout
      title={data.label || 'End'}
      category="Exit"
      icon={StopCircle}
      color="rose"
      handles={
        <Handle
          type="target"
          position={Position.Top}
          className="w-4 h-4 bg-rose-500 border-2 border-white shadow-sm hover:w-5 hover:h-5 transition-all"
        />
      }
    />
  );
};

export default memo(EndNode);
