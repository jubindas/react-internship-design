import React from 'react';
import { useTable } from 'react-table';
import data from '../data/dummyData';

const Table = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Submitter',
        accessor: 'submitter',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Submitted',
        accessor: 'submitted',
      },
      {
        Header: 'Job Request',
        accessor: 'jobRequest',
      },
      {
        Header: 'URL',
        accessor: 'url',
        Cell: ({ value }: any) => <a href={`https://${value}`} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">{value}</a>,
      },
      {
        Header: 'Assigned',
        accessor: 'assigned',
      },
      {
        Header: 'Priority',
        accessor: 'priority',
      },
      {
        Header: 'Due Date',
        accessor: 'dueDate',
      },
      {
        Header: 'Est. Value',
        accessor: 'value',
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div className="overflow-x-auto">
      <table {...getTableProps()} className="min-w-full bg-white rounded shadow-md">
        <thead>
          {headerGroups.map(headerGroup => {
            const { key: groupKey, ...groupProps } = headerGroup.getHeaderGroupProps();
            return (
              <tr key={groupKey} {...groupProps} className="bg-gray-200">
                {headerGroup.headers.map(column => {
                  const { key: colKey, ...colProps } = column.getHeaderProps();
                  return (
                    <th key={colKey} {...colProps} className="p-3 text-left font-semibold text-sm text-gray-700">
                      {column.render('Header')}
                    </th>
                  );
                })}
              </tr>
            );
          })}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            const { key: rowKey, ...rowProps } = row.getRowProps();
            return (
              <tr key={rowKey} {...rowProps} className="border-t hover:bg-gray-50">
                {row.cells.map(cell => {
                  const { key: cellKey, ...cellProps } = cell.getCellProps();
                  return (
                    <td key={cellKey} {...cellProps} className="p-3 text-sm text-gray-800">
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;