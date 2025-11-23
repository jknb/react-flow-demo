import { configureStore } from '@reduxjs/toolkit';
import { workflowReducer } from './slices/workflow';

export const store = configureStore({
  reducer: {
    workflow: workflowReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore React Flow's non-serializable values in nodes/edges
        ignoredActions: ['workflow/onNodesChange', 'workflow/onEdgesChange', 'workflow/addNode'],
        ignoredPaths: ['workflow.nodes', 'workflow.edges'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
