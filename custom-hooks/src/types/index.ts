export type PaginationState = {
  currentPage: number
  itemsPerPage: number
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

export type Item = string

export type ItemProps = {
  key: number
  item: Item
}

export type ItemListProps = {
  startIndex: number
  endIndex: number
  items: Item[]
}

export type TopBarProps = {
  totalItems: number
  itemsPerPage: number
  onChangeItemsPerPage: (newItemsPerPage: number) => void
}

export type BottomBarProps = {
  currentPage: number
  totalPages: number
  itemsPerPage: number
  itemsOnCurrentPage: number
  canPrevPage: boolean
  prevPage: () => void
  canNextPage: boolean
  nextPage: () => void
  setPage: (pageNumber: number) => void
  startIndex: number
  endIndex: number
}
