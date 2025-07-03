import { FiSearch, FiBell } from 'react-icons/fi';

const Topbar = () => {
  return (
    <div className="w-full flex items-center justify-between px-4 py-2 h-[56px] bg-white border-b border-gray-200 shadow-sm">

      {/* Left: Breadcrumbs */}
      <div className="flex items-center space-x-2 text-sm text-gray-600">
        <div className="w-4 h-4 bg-green-500 rounded-sm"></div>
        <span className="text-gray-500">Workspace</span>
        <span className="text-gray-400">›</span>
        <span className="text-gray-500">Folder 2</span>
        <span className="text-gray-400">›</span>
        <span className="font-medium text-gray-700">Spreadsheet 3</span>
      <span className="text-gray-400 -mt-2">...</span>

      </div>

      {/* Right: Search, Notification, Profile */}
      <div className="flex items-center space-x-4">

        {/* Search Box */}
        <div className="flex items-center bg-gray-100 rounded px-2 py-1 text-sm text-gray-600 border border-gray-300 w-[200px]">
          <FiSearch size={14} className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="bg-transparent outline-none text-sm flex-1"
          />
        </div>

        {/* Notification */}
        <div className="relative cursor-pointer">
          <FiBell size={18} className="text-gray-600" />
          <div className="absolute top-0 right-0 w-2 h-2 bg-green-500 rounded-full"></div>
        </div>

        {/* Profile */}
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
            <img
              src="https://via.placeholder.com/32"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="hidden sm:flex flex-col text-xs leading-tight">
            <span className="text-gray-700 font-medium">John Doe</span>
            <span className="text-gray-500">john.doe@email.com</span>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Topbar;
