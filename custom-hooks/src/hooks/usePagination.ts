import { useEffect, useState } from "react"
import type { PaginationState } from "../types"

export default function usePagination(
  totalItems: number,
  itemsPerPage: number = 10,
  initialPage: number = 1
): PaginationState {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const [currentPage, setCurrentPage] = useState<number>(initialPage)
  const [canNextPage, setCanNextPage] = useState<boolean>(false)
  const [canPrevPage, setCanPrevPage] = useState<boolean>(false)

  useEffect(() => {
    setCanPrevPage(currentPage > 1)
    setCanNextPage(currentPage < totalPages)
  }, [currentPage, totalPages])

  function goToPageNumber(pageNumber: number): void {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber)
    }
  }

  function goToNextPage(): void {
    if (canNextPage) setCurrentPage((prevCurrentPage) => prevCurrentPage + 1)
  }

  function goToPrevPage(): void {
    if (canPrevPage) setCurrentPage((prevCurrentPage) => prevCurrentPage - 1)
  }

  return {
    currentPage: currentPage,
    totalPages: totalPages,
    startIndex: 0,
    endIndex: 0,
    itemsOnCurrentPage: 0,
    setPage: goToPageNumber,
    nextPage: goToNextPage,
    prevPage: goToPrevPage,
    canNextPage: false,
    canPrevPage: false,
  }
}
