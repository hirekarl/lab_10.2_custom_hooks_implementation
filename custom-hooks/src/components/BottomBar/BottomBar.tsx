import React from "react"
import type { BottomBarProps } from "../../types"

export default function BottomBar({
  currentPage,
  totalPages,
  itemsOnCurrentPage,
  canPrevPage,
  prevPage,
  canNextPage,
  nextPage,
  setPage,
  startIndex,
  endIndex,
}: BottomBarProps) {
  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  function handlePageChange(event: React.MouseEvent): void {
    const button = event.target as HTMLButtonElement
    const pageNumber = parseInt(button.dataset.id as string)
    setPage(pageNumber)
  }

  const pageButtons = pageNumbers.map((pageNumber) => {
    return (
      <button
        key={pageNumber}
        data-id={pageNumber}
        type="button"
        className={`btn btn-primary ${
          pageNumber === currentPage ? "active" : ""
        }`}
        onClick={handlePageChange}>
        {pageNumber}
      </button>
    )
  })

  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-1">
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={prevPage}
            disabled={!canPrevPage}>
            Previous
          </button>
        </div>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={nextPage}
            disabled={!canNextPage}>
            Next
          </button>
        </div>
      </div>
      <div className="d-flex justify-content-around mb-1">
        <div className="mb-3">
          Showing items {startIndex + 1} – {endIndex + 1} (Total on this page:{" "}
          {itemsOnCurrentPage})
        </div>
      </div>

      <div className="d-flex justify-content-around mb-1">
        <div className="btn-group">{pageButtons}</div>
      </div>
    </>
  )
}
