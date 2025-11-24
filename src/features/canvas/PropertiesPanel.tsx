import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { updateNode, deleteNode, selectSelectedNode } from '../../store/slices/workflow';
import { Settings, Trash2 } from 'lucide-react';
import type { Node } from '@xyflow/react';
import type { BaseNodeData } from '../../types';
import { colorStyles, getNodeColor } from './constants';

const NodeProperties = ({ node }: { node: Node }) => {
  const dispatch = useAppDispatch();
  const data = node.data as BaseNodeData;
  const [label, setLabel] = useState(data.label || '');
  const [description, setDescription] = useState(data.description || '');
  const [error, setError] = useState('');

  const handleLabelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLabel(value);

    if (value.trim() === '') {
      setError('Label cannot be empty');
    } else {
      setError('');
      dispatch(updateNode({ id: node.id, data: { label: value } }));
    }
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setDescription(value);
    dispatch(updateNode({ id: node.id, data: { description: value } }));
  };

  const handleDelete = () => {
    dispatch(deleteNode(node.id));
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Label
        </label>
        <input
          type="text"
          value={label}
          onChange={handleLabelChange}
          className={`w-full px-3 py-2 bg-slate-50 border ${error ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200' : 'border-slate-200 focus:border-indigo-500 focus:ring-indigo-200'} rounded-lg text-sm text-slate-700 outline-none focus:ring-2 transition-all`}
          placeholder="Enter node label"
        />
        {error && (
          <p className="mt-1 text-xs text-rose-500 font-medium flex items-center gap-1">{error}</p>
        )}
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
          Description
        </label>
        <textarea
          value={description}
          onChange={handleDescriptionChange}
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 focus:border-indigo-500 focus:ring-indigo-200 rounded-lg text-sm text-slate-700 outline-none focus:ring-2 transition-all resize-none h-24"
          placeholder="Enter description"
        />
      </div>

      <div className="pt-4 border-t border-slate-100">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            Metadata
          </h3>
          <button
            onClick={handleDelete}
            className="p-2 text-slate-400 hover:text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
            title="Delete Node"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">ID</span>
            <p className="text-xs text-slate-600 font-mono mt-1 truncate" title={node.id}>
              {node.id}
            </p>
          </div>
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">
              Type
            </span>
            <p className="text-xs text-slate-600 font-mono mt-1 capitalize">{node.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const PropertiesPanel = () => {
  const selectedNode = useAppSelector(selectSelectedNode);

  if (!selectedNode) {
    return (
      <div className="w-80 bg-white border-l border-slate-200 p-6 shadow-sm z-10">
        <div className="h-full flex flex-col items-center justify-center text-slate-400 text-center">
          <Settings className="w-12 h-12 mb-4 opacity-20" />
          <p className="text-sm font-medium">Select a node to edit properties</p>
        </div>
      </div>
    );
  }

  const color = getNodeColor(selectedNode.type);
  const styles = colorStyles[color];

  return (
    <div className="w-80 bg-white border-l border-slate-200 p-6 shadow-sm z-10 overflow-y-auto">
      <div className="flex items-center gap-3 mb-6 pb-6 border-b border-slate-100">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${styles.iconBg}`}>
          <Settings className={`w-5 h-5 ${styles.iconColor}`} />
        </div>
        <div>
          <h2 className="text-lg font-bold text-slate-800">Properties</h2>
          <p className="text-xs text-slate-500">Edit node configuration</p>
        </div>
      </div>

      <NodeProperties key={selectedNode.id} node={selectedNode} />
    </div>
  );
};

export default PropertiesPanel;
