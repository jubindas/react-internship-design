import { useState } from 'react';
import { FiLink, FiRefreshCw, FiPlus } from 'react-icons/fi';
import data from '../data/dummyData';
import type { TableRow } from '../data/dummyData';

const SheetTable = () => {
  const [tableData] = useState<TableRow[]>(data);

  const statusClasses: Record<TableRow['status'], string> = {
    'In-process': 'bg-yellow-100 text-yellow-800',
    'Need to start': 'bg-blue-100 text-blue-800',
    Complete: 'bg-green-100 text-green-800',
    Blocked: 'bg-red-100 text-red-800',
  };

  const priorityClasses: Record<TableRow['priority'], string> = {
    High: 'text-red-600 font-semibold',
    Medium: 'text-yellow-600 font-semibold',
    Low: 'text-blue-600 font-semibold',
  };

  return (
    <div className="overflow-auto border border-gray-300 rounded-md bg-white text-xs">
      <table className="table-fixed w-full border-collapse text-[11px]">
        <thead>
          <tr className="border-b border-gray-300 text-gray-700 font-medium text-xs h-[32px]">
            <th className="w-[32px] border-r border-gray-300"></th>
            <th colSpan={4} className="bg-[#f6f6f6] border-r border-gray-300 px-3 py-1.5 text-left">
              <div className="flex items-center">
                <FiLink size={14} className="text-blue-500 mr-1" />
                <span>Q3 Financial Overview</span>
                <FiRefreshCw size={12} className="text-orange-500 ml-2 animate-spin-slow" />
              </div>
            </th>
            <th className="w-[160px] border-r border-gray-300 bg-white"></th>
            <th className="w-[160px] border-r border-gray-300 bg-[#d8ede1] text-center">ABC</th>
            <th colSpan={2} className="border-r border-gray-300 bg-[#e6e1f8] text-center">
              Answer a question
            </th>
            <th className="w-[160px] border-r border-gray-300 bg-[#fbe6dd] text-center">Extract</th>
            <th className="w-[124px] border-r border-gray-300 bg-white text-center">
              <div className="flex items-center justify-center h-full">
                <FiPlus size={14} className="text-gray-400" />
              </div>
            </th>
          </tr>

          <tr className="bg-gray-100 border-b border-gray-300 uppercase text-gray-600 tracking-wide">
            <th className="w-[32px] h-[40px] border-r border-gray-300 text-center">#</th>
            <th className="w-[160px] h-[40px] border-r border-gray-300 text-center">Job Request</th>
            <th className="w-[160px] h-[40px] border-r border-gray-300 text-center">Submitted</th>
            <th className="w-[160px] h-[40px] border-r border-gray-300 text-center">Status</th>
            <th className="w-[160px] h-[40px] border-r border-gray-300 text-center">Submitter</th>
            <th className="w-[160px] h-[40px] border-r border-gray-300 text-center">URL</th>
            <th className="w-[160px] h-[40px] border-r border-gray-300 text-center">Assigned</th>
            <th className="w-[160px] h-[40px] border-r border-gray-300 text-center">Priority</th>
            <th className="w-[160px] h-[40px] border-r border-gray-300 text-center">Due Date</th>
            <th className="w-[160px] h-[40px] border-r border-gray-300 text-center">Est. Value</th>
            <th className="w-[124px] h-[40px] border-r border-gray-300 text-center"></th>
          </tr>
        </thead>

        <tbody>
          {tableData.map((row, index) => (
            <tr key={index} className="border-b border-gray-200 hover:bg-gray-50 h-[40px]">
              <td className="border-r border-gray-200 text-center text-gray-400">{index + 1}</td>
              <td className="border-r border-gray-200 text-center">{row.jobRequest}</td>
              <td className="border-r border-gray-200 text-center">{row.submitted}</td>
              <td className="border-r border-gray-200 text-center">
                <span className={`px-2 py-0.5 rounded-full ${statusClasses[row.status]}`}>
                  {row.status}
                </span>
              </td>
              <td className="border-r border-gray-200 text-center">{row.submitter}</td>
              <td className="border-r border-gray-200 text-center">{row.url}</td>
              <td className="border-r border-gray-200 text-center">{row.assigned}</td>
              <td className="border-r border-gray-200 text-center">
                <span className={priorityClasses[row.priority]}>{row.priority}</span>
              </td>
              <td className="border-r border-gray-200 text-center">{row.dueDate}</td>
              <td className="border-r border-gray-200 text-center">{row.value}</td>
              <td className="border-r border-gray-200 text-center w-[124px]"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SheetTable;
