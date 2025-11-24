import type { Node } from '@xyflow/react';

export type NodeType = 'start' | 'service' | 'decision' | 'end';

export interface BaseNodeData extends Record<string, unknown> {
  label: string;
  description?: string;
}

export type WorkflowNode<TNodeType extends NodeType = NodeType> = Node<BaseNodeData, TNodeType>;
