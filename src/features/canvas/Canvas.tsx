import React, { useCallback, useRef } from 'react';
import {
  ReactFlow,
  ReactFlowProvider,
  Controls,
  Background,
  type Connection,
  type Node,
  useReactFlow,
  type NodeChange,
  type EdgeChange,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  addNode,
  onNodesChange,
  onEdgesChange,
  onConnect,
  setSelectedNodeId,
  selectNodes,
  selectEdges,
} from '../../store/slices/workflow';

import StartNode from './nodes/StartNode';
import ServiceNode from './nodes/ServiceNode';
import DecisionNode from './nodes/DecisionNode';
import EndNode from './nodes/EndNode';

const nodeTypes = {
  start: StartNode,
  service: ServiceNode,
  decision: DecisionNode,
  end: EndNode,
};

const CanvasContent = () => {
  const reactFlowWrapper = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const nodes = useAppSelector(selectNodes);
  const edges = useAppSelector(selectEdges);

  const reactFlowInstance = useReactFlow();

  const onDragOver = useCallback((event: React.DragEvent) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'move';
  }, []);

  const onDrop = useCallback(
    (event: React.DragEvent) => {
      event.preventDefault();

      const type = event.dataTransfer.getData('application/reactflow');

      // check if the dropped element is valid
      if (typeof type === 'undefined' || !type) {
        return;
      }

      const position = reactFlowInstance?.screenToFlowPosition({
        x: event.clientX,
        y: event.clientY,
      });

      const newNode: Node = {
        id: `${type}-${Date.now()}`,
        type,
        position: position || { x: 0, y: 0 },
        data: { label: `${type} node` },
      };

      dispatch(addNode(newNode));
    },
    [reactFlowInstance, dispatch]
  );

  const handleNodesChange = useCallback(
    (changes: NodeChange[]) => dispatch(onNodesChange(changes)),
    [dispatch]
  );

  const handleEdgesChange = useCallback(
    (changes: EdgeChange[]) => dispatch(onEdgesChange(changes)),
    [dispatch]
  );

  const handleConnect = useCallback(
    (connection: Connection) => dispatch(onConnect(connection)),
    [dispatch]
  );

  const onNodeClick = useCallback(
    (_event: React.MouseEvent, node: Node) => {
      dispatch(setSelectedNodeId(node.id));
    },
    [dispatch]
  );

  const onPaneClick = useCallback(() => {
    dispatch(setSelectedNodeId(null));
  }, [dispatch]);

  return (
    <div className="grow h-full" ref={reactFlowWrapper}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={handleNodesChange}
        onEdgesChange={handleEdgesChange}
        onConnect={handleConnect}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeClick={onNodeClick}
        onPaneClick={onPaneClick}
        nodeTypes={nodeTypes}
        fitViewOptions={{ padding: 0.2, maxZoom: 1 }}
      >
        <Controls className="bg-white border border-slate-200 shadow-sm rounded-lg overflow-hidden" />
        <Background color="#94a3b8" gap={20} size={1} />
      </ReactFlow>
    </div>
  );
};

const Canvas = () => (
  <ReactFlowProvider>
    <CanvasContent />
  </ReactFlowProvider>
);

export default Canvas;
