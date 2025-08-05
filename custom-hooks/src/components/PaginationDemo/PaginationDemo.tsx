import { useState } from "react"
import TopBar from "../TopBar/TopBar"
import ItemList from "../Item/ItemList"
import BottomBar from "../BottomBar/BottomBar"

export default function PaginationDemo() {
  const items: string[] = []
  for (let i = 1; i <= 123; i++) {
    items.push(`Item ${i}`)
  }

  const totalItems = items.length
  const [itemsPerPage, setItemsPerPage] = useState<number>(10)
  const initialPage = 1

  // const [pagination, setPagination] = usePagination(
  //   totalItems,
  //   itemsPerPage,
  //   initialPage
  // )
  // const {
  //   currentPage,
  //   totalPages,
  //   startIndex,
  //   endIndex,
  //   itemsOnCurrentPage,
  //   setPage,
  //   nextPage,
  //   prevPage,
  //   canNextPage,
  //   canPrevPage,
  // } = pagination

  return (
    <>
      <h2>Pagination Demo</h2>
      <TopBar
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        initialPage={initialPage}
      />
      <ItemList
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        initialPage={initialPage}
        items={items}
      />
      <BottomBar
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        initialPage={initialPage}
      />
    </>
  )
}
