import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';
import { useAppSelector } from './store/hooks';

function App() {
  const { nodes, edges } = useAppSelector((state) => state.workflow);

  const handleExport = () => {
    const data = {
      nodes,
      edges,
    };
    const json = JSON.stringify(data, null, 2);
    console.log(json);
    alert('Workflow exported to console!');
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50">
      <header className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-4">
        <h1 className="text-xl font-bold text-gray-800">Workflow Editor</h1>
        <button
          onClick={handleExport}
          className="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Export JSON
        </button>
      </header>
      
      <div className="flex flex-grow overflow-hidden">
        <Sidebar />
        <Canvas />
        <PropertiesPanel />
      </div>
    </div>
  );
}

export default App;
