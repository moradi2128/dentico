import React, { useEffect } from 'react'
import queryString from "query-string";
const PAGINATION_SIZE = 10
const Pagination = ({ totalPage, onPageClick, pageLocation }) => {
    return (
        <ol className="flex justify-center gap-4 text-xs font-medium my-8">
            {/* === prev Pagination  === */}
            <li>
                <div
                    onClick={() => pageLocation !== 1 && onPageClick(pageLocation - 1)}
                    className={`inline-flex h-${PAGINATION_SIZE} w-${PAGINATION_SIZE} items-center justify-center rounded-lg border border-gray-300 ${pageLocation !== 1 ? "cursor-pointer" : ""}`}
                >
                    <span className="sr-only">Prev Page</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 rtl:rotate-180"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </li>
            {/* === Pagination items === */}
            {
                Array.from({ length: totalPage }).map((_, i) =>
                    <li onClick={() => pageLocation !== (i + 1) && onPageClick(i + 1)} key={i}>
                        <span
                            className={`flex items-center justify-center h-${PAGINATION_SIZE} w-${PAGINATION_SIZE} rounded-lg border border-gray-300 text-center cursor-pointer ${pageLocation == (i + 1) ? "border-blue-600 bg-blue-600 text-white cursor-default" : ""}`}
                        >
                            {i + 1}
                        </span>
                    </li>
                )
            }
            {/* === next Pagination  === */}
            <li>
                <div
                    onClick={() => pageLocation !== totalPage && onPageClick(Number(pageLocation + 1))}
                    className={`inline-flex h-${PAGINATION_SIZE} w-${PAGINATION_SIZE} items-center justify-center rounded-lg border border-gray-300 ${pageLocation !== totalPage ? "cursor-pointer" : ""}`}
                >
                    <span className="sr-only">صفحه بعد</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 rtl:rotate-180"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                    >
                        <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                        />
                    </svg>
                </div>
            </li>
        </ol >

    )
}

export default Pagination
