import { FiEyeOff, FiFilter, FiShare2, FiDownload } from 'react-icons/fi';
import { TbSortAscending, TbGridDots } from 'react-icons/tb';
import { MdOutlineUpload } from 'react-icons/md';

const Toolbar = () => {
  const tools = [
    { label: 'Hide fields', icon: <FiEyeOff size={16} /> },
    { label: 'Sort', icon: <TbSortAscending size={16} /> },
    { label: 'Filter', icon: <FiFilter size={16} /> },
    { label: 'Cell view', icon: <TbGridDots size={16} /> },
  ];

  const actions = [
    { label: 'Import', icon: <FiDownload size={16} /> },
    { label: 'Export', icon: <TbSortAscending size={16} /> },
    { label: 'Share', icon: <FiShare2 size={16} /> },
  ];

  return (
    <div className="flex items-center justify-between px-4 py-2 bg-white border-b border-gray-200">
      {/* Left: Tools */}
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <span className="text-gray-500">Tool bar</span>
        <span className="text-gray-400">›</span>

        {tools.map((tool) => (
          <button
            key={tool.label}
            onClick={() => console.log(`${tool.label} clicked`)}
            className="flex items-center space-x-1 px-3 py-2 h-[36px] border border-gray-300 rounded-md bg-white text-xs text-gray-800 hover:bg-gray-100 shadow-sm"
          >
            {tool.icon}
            <span>{tool.label}</span>
          </button>
        ))}
      </div>

      {/* Right: Actions */}
      <div className="flex items-center space-x-2">
        {actions.map((action) => (
          <button
            key={action.label}
            onClick={() => console.log(`${action.label} clicked`)}
            className="flex items-center space-x-1 px-3 py-2 h-[36px] border border-gray-300 rounded-md bg-white text-xs text-gray-800 hover:bg-gray-100 shadow-sm"
          >
            {action.icon}
            <span>{action.label}</span>
          </button>
        ))}

        {/* New Action Button - Styled as per Figma */}
        <button
          onClick={() => console.log('New Action clicked')}
          className="flex items-center space-x-1 w-[150px] h-[36px] pl-6 pr-2 py-2 text-xs text-white bg-green-600 rounded-md hover:bg-green-700 shadow-sm"
        >
          <MdOutlineUpload size={16} />
          <span>New Action</span>
        </button>
      </div>
    </div>
  );
};

export default Toolbar;
