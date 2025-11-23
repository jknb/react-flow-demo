import { memo } from 'react';
import { Handle, Position, type Node, type NodeProps } from '@xyflow/react';
import { Settings } from 'lucide-react';
import NodeLayout from './NodeLayout';
import type { BaseNodeData } from '../../types';

type ServiceNode = Node<BaseNodeData, 'service'>;

const ServiceNode = ({ data }: NodeProps<ServiceNode>) => {
  return (
    <NodeLayout
      title={data.label || 'Service'}
      category="Action"
      icon={Settings}
      color="indigo"
      handles={
        <>
          <Handle
            type="target"
            position={Position.Top}
            className="w-4 h-4 bg-indigo-500 border-2 border-white shadow-sm hover:w-5 hover:h-5 transition-all"
          />
          <Handle
            type="source"
            position={Position.Bottom}
            className="w-4 h-4 bg-indigo-500 border-2 border-white shadow-sm hover:w-5 hover:h-5 transition-all"
          />
        </>
      }
    />
  );
};

export default memo(ServiceNode);
