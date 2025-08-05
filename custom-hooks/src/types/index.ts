export type PaginationState = {
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

export type UIProps = {
  totalItems: number
  itemsPerPage?: number
  initialPage?: number
}

export type Item = string

export type ItemProps = {
  key: number
  item: Item
}

export type ItemListProps = UIProps & {
  items: Item[]
}