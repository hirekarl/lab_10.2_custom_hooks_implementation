import type { PaginationState } from "../types"

export default function usePagination(
  totalItems: number,
  itemsPerPage: number = 10,
  initialPage: number = 1
): PaginationState {
  console.log(totalItems)
  console.log(itemsPerPage)
  console.log(initialPage)

  return {
    currentPage: 0,
    totalPages: 0,
    startIndex: 0,
    endIndex: 0,
    itemsOnCurrentPage: 0,
    setPage: (pageNumber: number) => {
      console.log(pageNumber)
    },
    nextPage: () => {},
    prevPage: () => {},
    canNextPage: false,
    canPrevPage: false,
  }
}
