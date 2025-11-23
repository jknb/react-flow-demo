import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import PropertiesPanel from './components/PropertiesPanel';
import { useAppSelector } from './store/hooks';
import { Download, Layers } from 'lucide-react';

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
    <div className="flex flex-col h-screen bg-slate-50">
      <header className="h-16 bg-white/80 backdrop-blur-md border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <Layers className="text-white w-5 h-5" />
          </div>
          <h1 className="text-xl font-bold text-slate-800 tracking-tight">Workflow Editor</h1>
        </div>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-all shadow-md shadow-indigo-500/20 active:scale-95"
        >
          <Download className="w-4 h-4" />
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
