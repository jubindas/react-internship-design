import React, { useState } from 'react';
import { FiLink, FiRefreshCw } from 'react-icons/fi';
import dummyData from '../data/dummyData'; // Adjust path if needed

const SheetTable = () => {
  const headers = [
    '#',
    'Job Request',
    'Submitted',
    'Status',
    'Submitter',
    'URL',
    'Assigned',
    'Priority',
    'Due Date',
    'Est. Value',
  ];

  const [tableData, setTableData] = useState(dummyData);
  const [editingCell, setEditingCell] = useState({ row: null, col: null });

  const handleCellClick = (rowIndex, colKey) => {
    setEditingCell({ row: rowIndex, col: colKey });
  };

  const handleInputChange = (e, rowIndex, colKey) => {
    const updated = [...tableData];
    updated[rowIndex][colKey] = e.target.value;
    setTableData(updated);
  };

  const handleBlur = () => setEditingCell({ row: null, col: null });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleBlur();
  };

  const statusClasses = {
    'In-process': 'bg-yellow-100 text-yellow-800',
    'Need to start': 'bg-blue-100 text-blue-800',
    Complete: 'bg-green-100 text-green-800',
    Blocked: 'bg-red-100 text-red-800',
  };

  const priorityClasses = {
    High: 'text-red-600 font-semibold',
    Medium: 'text-yellow-600 font-semibold',
    Low: 'text-blue-600 font-semibold',
  };

  return (
    <div className="overflow-auto border border-gray-200 rounded bg-white">
      {/* Top Section Bar */}
      <div className="flex items-center px-4 py-2 bg-gray-100 border-b border-gray-300 text-sm">
        <FiLink size={14} className="text-blue-500 mr-1" />
        <span className="font-medium text-gray-700">Q3 Financial Overview</span>
        <FiRefreshCw size={12} className="text-orange-500 ml-2 animate-spin-slow" />
      </div>

      {/* Colored Section Row */}
      <div className="flex border-b border-gray-300 text-xs font-medium">
        <div className="w-[32px] h-[32px]"></div> {/* Empty for # */}
        <div className="flex-1 bg-white h-[32px]"></div>{' '}
        {/* For first columns: Job Request, Submitted, Status, Submitter, URL */}
        <div className="bg-[#d8ede1] text-gray-700 w-[160px] h-[32px] flex items-center justify-center border-l border-gray-300">
          ABC
        </div>
        <div className="bg-[#e6e1f8] text-gray-700 w-[160px] h-[32px] flex items-center justify-center border-l border-gray-300">
          Answer a question
        </div>
        <div className="bg-[#fbe6dd] text-gray-700 w-[160px] h-[32px] flex items-center justify-center border-l border-gray-300">
          Extract
        </div>
        <div className="flex-1 bg-white h-[32px] border-l border-gray-300"></div>{' '}
        {/* Fill remaining space if needed */}
      </div>

      {/* Table */}
      <table className="border-collapse table-fixed w-full text-sm">
        <thead>
          <tr className="bg-gray-100 border-b border-gray-300 text-xs uppercase text-gray-600">
            {headers.map((header, idx) => (
              <th
                key={idx}
                className={`border-r border-gray-300 font-semibold text-center ${
                  header === '#' ? 'w-[32px] h-[32px]' : 'w-[160px] h-[40px]'
                }`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {tableData.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="hover:bg-gray-50 border-b border-gray-200"
              style={{ height: '40px' }}
            >
              <td
                className="border-r border-gray-200 w-[32px] h-[32px] text-center text-xs text-gray-400 font-medium align-middle"
                style={{ lineHeight: '32px' }}
              >
                {rowIndex + 1}
              </td>

              {Object.entries(row).map(([key, value], colIndex) => (
                <td
                  key={colIndex}
                  onClick={() => handleCellClick(rowIndex, key)}
                  className="border-r border-gray-200 w-[160px] h-[40px] text-center align-middle cursor-pointer text-xs"
                >
                  {editingCell.row === rowIndex && editingCell.col === key ? (
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => handleInputChange(e, rowIndex, key)}
                      onBlur={handleBlur}
                      onKeyDown={handleKeyDown}
                      autoFocus
                      className="w-full h-full px-1 text-center border-none outline-none text-xs"
                    />
                  ) : key === 'status' ? (
                    <span
                      className={`px-2 py-0.5 rounded-full text-xs ${
                        statusClasses[value] || 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {value}
                    </span>
                  ) : key === 'priority' ? (
                    <span className={`${priorityClasses[value] || ''}`}>{value}</span>
                  ) : key === 'url' ? (
                    <a
                      href={`https://${value}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline text-xs"
                    >
                      {value}
                    </a>
                  ) : (
                    <span className="text-xs">{value}</span>
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SheetTable;
