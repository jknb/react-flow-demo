# React Flow Workflow Editor

A visual workflow editor built with React Flow v12, featuring custom nodes, state management, and an interactive canvas for building workflows.

## Features

- **Custom Node Types**: Action, Decision, and Start/End nodes with distinct styling
- **Editable Properties**: Edit node names, descriptions, and toggle active status via properties panel
- **State Management**: Redux Toolkit for managing nodes, edges, and selections
- **Feature-Based Architecture**: Organized codebase with reusable components
- **Export Functionality**: Export workflows as JSON

## Tech Stack

- **React 19** (RC) with TypeScript
- **React Flow v12** (`@xyflow/react`)
- **Redux Toolkit** for state management
- **Tailwind CSS v4** for styling
- **Vite** for build tooling
- **React Compiler** enabled for optimizations

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── features/canvas/    # Canvas-related components and logic
├── store/              # Redux store and slices
└── types.ts            # Shared TypeScript types
```
