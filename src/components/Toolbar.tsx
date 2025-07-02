
const actions = ['Import', 'Export', 'Share', 'New', 'Action'];
const tools = ['Hide Fields', 'Sort', 'Filter', 'Cell View'];

const Toolbar = () => {
  return (
    <div className="flex justify-between mb-4 flex-wrap gap-2">
      <div className="flex gap-2">
        {actions.map((action) => (
          <button
            key={action}
            onClick={() => console.log(`${action} clicked`)}
            className="px-3 py-1 bg-white text-gray-800 border border-gray-300 rounded shadow-sm hover:bg-gray-50"
          >
            {action}
          </button>
        ))}
      </div>
      <div className="flex gap-2">
        {tools.map((tool) => (
          <button
            key={tool}
            onClick={() => console.log(`${tool} clicked`)}
            className="px-3 py-1 bg-white text-gray-800 border border-gray-300 rounded shadow-sm hover:bg-gray-50"
          >
            {tool}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Toolbar;