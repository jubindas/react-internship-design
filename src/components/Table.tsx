import React from 'react';
import { useTable } from 'react-table';
import data from '../data/dummyData'; // Make sure this is your data file

const Table = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: '#',
        accessor: (_, index) => index + 1,
        id: 'rowNumber',
        Cell: ({ value }) => (
          <div className="w-8 h-full flex items-center justify-center text-gray-500 text-sm font-normal">
            {value}
          </div>
        ),
      },
      {
        Header: 'Job Request',
        accessor: 'jobRequest',
      },
      {
        Header: 'Submitted',
        accessor: 'submitted',
      },
      {
        Header: 'Status',
        accessor: 'status',
        Cell: ({ value }) => {
          const statusMap = {
            'In-process': 'bg-yellow-100 text-yellow-800',
            'Need to start': 'bg-blue-100 text-blue-800',
            Complete: 'bg-green-100 text-green-800',
            Blocked: 'bg-red-100 text-red-800',
          };
          return (
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium ${statusMap[value] || 'bg-gray-100 text-gray-800'}`}
            >
              {value}
            </span>
          );
        },
      },
      {
        Header: 'Submitter',
        accessor: 'submitter',
      },
      {
        Header: 'URL',
        accessor: 'url',
        Cell: ({ value }) => (
          <a
            href={`https://${value}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline text-xs"
          >
            {value}
          </a>
        ),
      },
      {
        Header: 'Assigned',
        accessor: 'assigned',
      },
      {
        Header: 'Priority',
        accessor: 'priority',
        Cell: ({ value }) => {
          const priorityMap = {
            High: 'text-red-600 font-semibold',
            Medium: 'text-yellow-600 font-semibold',
            Low: 'text-blue-600 font-semibold',
          };
          return <span className={`${priorityMap[value] || ''}`}>{value}</span>;
        },
      },
      {
        Header: 'Due Date',
        accessor: 'dueDate',
      },
      {
        Header: 'Est. Value',
        accessor: 'value',
        Cell: ({ value }) => <span>{value}</span>,
      },
    ],
    [],
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <div className="overflow-x-auto p-6 bg-white rounded-lg shadow border border-gray-200">
      <table {...getTableProps()} className="min-w-full text-sm border-separate border-spacing-0">
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              className="bg-gray-100 text-gray-700 text-xs uppercase"
            >
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  className={`${column.id === 'rowNumber' ? 'w-8 text-center' : ''} px-4 py-3 font-semibold text-left border-b border-gray-200`}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()} className="text-gray-900">
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="border-b border-gray-100 hover:bg-gray-50">
                {row.cells.map((cell) => (
                  <td
                    {...cell.getCellProps()}
                    className={`${cell.column.id === 'rowNumber' ? 'w-8 text-center' : ''} px-4 py-3 align-middle border-b border-gray-100 whitespace-nowrap`}
                  >
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
