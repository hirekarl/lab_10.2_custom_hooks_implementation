export interface PaginationState {
    currentPage: number
    totalPages: number
    startIndex: number
    endIndex: number
    itemsOnCurrentPage: number
    setPage: (pageNumber: number) => void
    nextPage: () => void
    prevPage: () => void
    canNextPage: boolean
    canPrevPage: boolean
  }
