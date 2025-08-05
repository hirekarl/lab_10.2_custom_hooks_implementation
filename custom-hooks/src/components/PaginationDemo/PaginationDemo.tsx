import TopBar from "../TopBar/TopBar"
import ItemList from "../Item/ItemList"
import BottomBar from "../BottomBar/BottomBar"
import usePagination from "../../hooks/usePagination"

export default function PaginationDemo() {
  const [pagination, setPagination] = usePagination(100)
  const {
    currentPage,
    totalPages,
    startIndex,
    endIndex,
    itemsOnCurrentPage,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = pagination

  return (
    <>
      <h2>Pagination Demo</h2>
      <ul>
        <li>Current Page: {currentPage}</li>
        <li>Total Pages: {totalPages}</li>
        <li>Start Index: {startIndex}</li>
        <li>End Index: {endIndex}</li>
        <li>Items on Current Page: {itemsOnCurrentPage}</li>
        <li>Can Next Page?: {String(canNextPage)}</li>
        <li>Can Prev Page?: {String(canPrevPage)}</li>
      </ul>
      <TopBar />
      <ItemList />
      <BottomBar />
    </>
  )
}
