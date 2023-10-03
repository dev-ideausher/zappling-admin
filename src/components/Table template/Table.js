import React, { useMemo } from "react";
import { GlobalFilter } from "./GlobalFilter";

import { useTable, useGlobalFilter, usePagination } from "react-table";

const Table = ({ tableData, tableColumns }) => {
  const columns = useMemo(() => tableColumns, []);

  const data = useMemo(() => tableData, []);

  const tableInstance = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    prepareRow,
    state,
    setGlobalFilter,
  } = tableInstance;

  const { globalFilter, pageIndex } = state;

  return (
    <>
      {/* <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} /> */}

      <div className="col-12">
        <table {...getTableProps()}>
          <thead className="col-12 header-table">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <div className="mb-1"></div>
          <tbody {...getTableBodyProps()} className="col-12 mb-2">
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr className="col-12 mb-5 table-row" {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <>
                        <td className="tRow" {...cell.getCellProps()}>
                          {cell.render("Cell")}{" "}
                        </td>
                      </>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="tableFooters">
        {/* <div className="pageInfo">
            {"\u00a0"} Go to page number : {"\u00a0"}
            <input
              type="number"
              default={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
            />
          </div> */}
        <div className="tableButtons">
          {/* <button
              className="jumpButton"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              {" "}
              Go to first page
            </button> */}
          {/* <button
                className="tableNav"
                disabled={!canPreviousPage}
                onClick={() => previousPage()}
              >
                <img src={chevLeftRed} />
              </button>
              <p className="pageNumber">
                {" "}
                {"\u00a0"}
                Showing page {pageIndex + 1}
                {"\u00a0"}of {pageOptions.length}
              </p>
              <button
                className="tableNav"
                disabled={!canNextPage}
                onClick={() => nextPage()}
              >
                <img src={chevRightRed} />
              </button> */}
          {/* <button
              className="jumpButton"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              Go to last page
            </button> */}
        </div>
      </div>
    </>
  );
};

export default Table;
