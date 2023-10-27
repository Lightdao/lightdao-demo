import React from 'react';
import Card from 'components/card';
import SearchIcon from 'components/icons/SearchIcon';
import { MdChevronRight, MdChevronLeft } from 'react-icons/md';
import Image from 'next/image';

import {
  PaginationState,
  createColumnHelper,
  useReactTable,
  ColumnFiltersState,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';

type RowObj = {
  name: string[];
  email: string;
  username: string;
  date: string;
  type: string;
  actions: any;
};

function CheckTable(props: { tableData: any }) {
  const { tableData } = props;
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  let defaultData = tableData;
  const [globalFilter, setGlobalFilter] = React.useState('');
  const createPages = (count: number) => {
    let arrPageCount = [];

    for (let i = 1; i <= count; i++) {
      arrPageCount.push(i);
    }

    return arrPageCount;
  };
  const columns = [
    columnHelper.accessor('name', {
      id: 'name',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          USER NAME
        </p>
      ),
      cell: (info: any) => (
        <div className="flex w-full items-center gap-[14px]">
          <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-blue-300">
            <Image
              width="2"
              height="20"
              className="h-full w-full rounded-full"
              src={info.getValue()[1]}
              alt=""
            />
          </div>
          <p className="font-medium text-navy-700 dark:text-white">
            {info.getValue()[0]}
          </p>
        </div>
      ),
    }),
    columnHelper.accessor('email', {
      id: 'email',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">EMAIL</p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('username', {
      id: 'username',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          USERNAME
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('date', {
      id: 'date',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          JOIN DATE
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('type', {
      id: 'type',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          USER TYPE
        </p>
      ),
      cell: (info) => (
        <p className="text-sm font-bold text-navy-700 dark:text-white">
          {info.getValue()}
        </p>
      ),
    }),
    columnHelper.accessor('actions', {
      id: 'actions',
      header: () => (
        <p className="text-sm font-bold text-gray-600 dark:text-white">
          ORDER ACTIONS
        </p>
      ),
      cell: (info) => (
        <p
          className="cursor-pointer font-medium text-brand-500 dark:text-brand-400"
          onClick={() => {
            console.log(info.getValue());
          }}
        >
          Edit user
        </p>
      ),
    }),
  ]; // eslint-disable-next-line
  const [data, setData] = React.useState(() => [...defaultData]);
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 6,
    });

  const pagination = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize],
  );
  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
      globalFilter,
      pagination,
    },
    onPaginationChange: setPagination,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
  });

  return (
    <Card extra={'w-full h-full sm:overflow-auto px-6'}>
      <div className="flex w-[400px] max-w-full items-center rounded-xl pt-[20px]">
        <div className="flex h-[38px] w-[400px] flex-grow items-center rounded-xl bg-lightPrimary text-sm text-gray-600 dark:!bg-navy-900 dark:text-white">
          <SearchIcon />
          <input
            value={globalFilter ?? ''}
            onChange={(e: any) => setGlobalFilter(e.target.value)}
            type="text"
            placeholder="Search...."
            className="block w-full rounded-full bg-lightPrimary text-base text-navy-700 outline-none dark:!bg-navy-900 dark:text-white"
          />
        </div>
      </div>

      <div className="mt-8 overflow-x-scroll xl:overflow-x-hidden">
        <table className="w-full">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id} className="!border-px !border-gray-400">
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      onClick={header.column.getToggleSortingHandler()}
                      className="cursor-pointer border-b border-gray-200 pb-2 pr-4 pt-4 text-start dark:border-white/30"
                    >
                      <div className="items-center justify-between text-xs text-gray-200">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                        {{
                          asc: '',
                          desc: '',
                        }[header.column.getIsSorted() as string] ?? null}
                      </div>
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table
              .getRowModel()
              .rows.slice(0, 7)
              .map((row) => {
                return (
                  <tr key={row.id}>
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          key={cell.id}
                          className="min-w-[150px] border-white/0 py-3  pr-4"
                        >
                          {flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext(),
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
          </tbody>
        </table>
        {/* pagination */}
        <div className="mt-2 flex h-20 w-full items-center justify-between px-6">
          {/* left side */}
          <div className="flex items-center gap-3">
            <p className="> Show rows per page text-sm text-gray-700">
              Showing 6 rows per page
            </p>
          </div>
          {/* right side */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
              className={`linear flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 p-2 text-lg text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200`}
            >
              <MdChevronLeft />
            </button>

            {createPages(table.getPageCount()).map((pageNumber, index) => {
              return (
                <button
                  className={`linear flex h-10 w-10 items-center justify-center rounded-full p-2 text-sm transition duration-200 ${
                    pageNumber === pageIndex + 1
                      ? 'bg-brand-500 text-white hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200'
                      : 'border-[1px] border-gray-400 bg-[transparent] dark:border-white dark:text-white'
                  }`}
                  onClick={() => table.setPageIndex(pageNumber - 1)}
                  key={index}
                >
                  {pageNumber}
                </button>
              );
            })}
            <button
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
              className={`linear flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 p-2 text-lg text-white transition duration-200 hover:bg-brand-600 active:bg-brand-700 dark:bg-brand-400 dark:text-white dark:hover:bg-brand-300 dark:active:bg-brand-200 `}
            >
              <MdChevronRight />
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default CheckTable;
const columnHelper = createColumnHelper<RowObj>();
