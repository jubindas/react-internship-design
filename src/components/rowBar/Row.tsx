import { FaEyeSlash, FaSort, FaFilter, FaExpand, FaDownload, FaUpload, FaShareAlt } from 'react-icons/fa';

function Row() {
  return (
    <div className="flex justify-between items-center px-4 py-2 bg-white border-b text-sm text-gray-700">

      {/* Left Controls */}
      <div className="flex items-center gap-6">
        <span className="cursor-pointer hover:underline">Tool bar ⏵</span>

        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <FaEyeSlash className="text-xs" />
          <span>Hide fields</span>
        </div>

        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <FaSort className="text-xs" />
          <span>Sort</span>
        </div>

        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <FaFilter className="text-xs" />
          <span>Filter</span>
        </div>

        <div className="flex items-center gap-1 cursor-pointer hover:text-black">
          <FaExpand className="text-xs" />
          <span>Cell view</span>
        </div>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-2">
        <button className="flex items-center gap-1 border px-3 py-1 rounded hover:bg-gray-100">
          <FaDownload className="text-xs" />
          Import
        </button>

        <button className="flex items-center gap-1 border px-3 py-1 rounded hover:bg-gray-100">
          <FaUpload className="text-xs" />
          Export
        </button>

        <button className="flex items-center gap-1 border px-3 py-1 rounded hover:bg-gray-100">
          <FaShareAlt className="text-xs" />
          Share
        </button>

        <button className="bg-green-700 text-white px-4 py-1.5 rounded hover:bg-green-800">
          + New Action
        </button>
      </div>
    </div>
  );
}

export default Row;
