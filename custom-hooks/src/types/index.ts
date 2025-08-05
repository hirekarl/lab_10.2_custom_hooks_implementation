export type Pagination = {
  currentPage: number
  itemsPerPage: number
  totalPages: number
  startIndex: number
  endIndex: number
  itemsOnCurrentPage: number
  canNextPage: boolean
  nextPage: () => void
  canPrevPage: boolean
  prevPage: () => void
  setPage: (pageNumber: number) => void
}

export type Item = string

export type ItemProps = {
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
