import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { updateNode } from '../store/workflowSlice';
import { Settings, Info } from 'lucide-react';

const PropertiesPanel = () => {
  const dispatch = useAppDispatch();
  const { nodes, selectedNodeId } = useAppSelector((state) => state.workflow);
  const selectedNode = nodes.find((n) => n.id === selectedNodeId);
  
  const [serviceName, setServiceName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (selectedNode) {
      setServiceName(selectedNode.data.label || '');
      setError('');
    }
  }, [selectedNode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setServiceName(value);
    
    if (selectedNode?.type === 'service' && !value.trim()) {
      setError('Service name is required');
    } else {
      setError('');
    }

    if (selectedNode) {
      dispatch(updateNode({
        id: selectedNode.id,
        data: { label: value }
      }));
    }
  };

  if (!selectedNode) {
    return (
      <div className="w-80 bg-white border-l border-slate-200 p-6 flex flex-col items-center justify-center text-center shadow-sm z-10">
        <div className="w-12 h-12 bg-slate-50 rounded-full flex items-center justify-center mb-4">
          <Settings className="w-6 h-6 text-slate-300" />
        </div>
        <p className="text-slate-500 text-sm font-medium">Select a node to edit properties</p>
      </div>
    );
  }

  return (
    <div className="w-80 bg-white border-l border-slate-200 p-6 flex flex-col gap-6 shadow-sm z-10">
      <div className="flex items-center gap-3 pb-4 border-b border-slate-100">
        <div className="w-8 h-8 bg-indigo-50 rounded-lg flex items-center justify-center">
          <Settings className="w-4 h-4 text-indigo-600" />
        </div>
        <h2 className="text-lg font-semibold text-slate-800">Properties</h2>
      </div>
      
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-slate-700">
          {selectedNode.type === 'service' ? 'Service Name' : 'Label'}
        </label>
        <input
          type="text"
          value={serviceName}
          onChange={handleChange}
          className={`w-full px-3 py-2 bg-slate-50 border rounded-lg text-sm transition-all outline-none ${
            error 
              ? 'border-rose-300 focus:border-rose-500 focus:ring-2 focus:ring-rose-100' 
              : 'border-slate-200 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100'
          }`}
          placeholder="Enter name..."
        />
        {error && <span className="text-xs text-rose-500 font-medium flex items-center gap-1">
          <Info className="w-3 h-3" /> {error}
        </span>}
      </div>

      <div className="mt-auto pt-4 border-t border-slate-100">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">ID</span>
            <p className="text-xs text-slate-600 font-mono mt-1 truncate" title={selectedNode.id}>{selectedNode.id}</p>
          </div>
          <div>
            <span className="text-xs text-slate-400 uppercase tracking-wider font-medium">Type</span>
            <p className="text-xs text-slate-600 font-mono mt-1 capitalize">{selectedNode.type}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertiesPanel;
