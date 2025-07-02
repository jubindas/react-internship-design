import { FaBell, FaSearch } from 'react-icons/fa';

function TopBar() {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white border-b shadow-sm">

      {/* Left: Checkbox + Breadcrumbs */}
      <div className="flex items-center gap-2 text-sm text-gray-600">
        {/* Green Square (Checkbox-like) */}
        <div className="w-4 h-4 bg-green-300 rounded-sm border border-gray-400"></div>

        <div>
          Workspace &gt; Folder 2 &gt;{' '}
          <span className="font-semibold text-gray-800">Spreadsheet 3</span>
        </div>
      </div>

      {/* Right: Search + Notification + Profile */}
      <div className="flex items-center gap-4">

        {/* Search Box with Icon */}
        <div className="relative">
          <FaSearch className="absolute left-2 top-2.5 text-gray-400 text-sm" />
          <input
            type="text"
            placeholder="Search within sheet"
            className="pl-8 pr-2 py-1 border rounded text-sm focus:outline-none focus:ring-2 focus:ring-blue-200"
          />
        </div>

        {/* Notification Bell */}
        <div className="relative cursor-pointer">
          <FaBell className="text-gray-700 text-lg" />
          <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs rounded-full px-1.5">2</span>
        </div>

        {/* Profile Info */}
       {/* Profile Section (Styled Like Image) */}
<div className="flex items-center gap-3">
  <img
    src="https://i.pravatar.cc/40"
    alt="John Doe"
    className="w-10 h-10 rounded-full"
  />
  <div className="flex flex-col">
    <span className="text-sm font-semibold text-gray-900">John Doe</span>
    <span className="text-sm text-gray-500 truncate max-w-[100px]">john.doe@example.com</span>
  </div>
</div>

      </div>
    </div>
  );
}

export default TopBar;
