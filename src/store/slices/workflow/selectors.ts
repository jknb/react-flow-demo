import { createSelector } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

// Base selectors
export const selectNodes = (state: RootState) => state.workflow.nodes;
export const selectEdges = (state: RootState) => state.workflow.edges;
export const selectSelectedNodeId = (state: RootState) => state.workflow.selectedNodeId;

// Memoized selectors
export const selectSelectedNode = createSelector(
  [selectNodes, selectSelectedNodeId],
  (nodes, selectedNodeId) => (selectedNodeId ? nodes.find((n) => n.id === selectedNodeId) : null)
);

// Selector for getting a specific node by ID
export const selectNodeById = (nodeId: string) =>
  createSelector([selectNodes], (nodes) => nodes.find((n) => n.id === nodeId));
