import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { updateNode } from '../store/workflowSlice';

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
      <div className="w-64 bg-white border-l border-gray-200 p-4">
        <p className="text-gray-500 text-sm">Select a node to edit properties</p>
      </div>
    );
  }

  return (
    <div className="w-64 bg-white border-l border-gray-200 p-4 flex flex-col gap-4">
      <h2 className="text-lg font-semibold text-gray-700">Properties</h2>
      
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-600">
          {selectedNode.type === 'service' ? 'Service Name' : 'Label'}
        </label>
        <input
          type="text"
          value={serviceName}
          onChange={handleChange}
          className={`p-2 border rounded-md text-sm focus:outline-none focus:ring-2 ${
            error ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
          }`}
        />
        {error && <span className="text-xs text-red-500">{error}</span>}
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <p className="text-xs text-gray-400">ID: {selectedNode.id}</p>
        <p className="text-xs text-gray-400">Type: {selectedNode.type}</p>
      </div>
    </div>
  );
};

export default PropertiesPanel;
