import TopBar from "../TopBar/TopBar"
import ItemList from "../Item/ItemList"
import BottomBar from "../BottomBar/BottomBar"
import usePagination from "../../hooks/usePagination"
import { dukesMayoFacts } from "../../data/dukesMayoFacts"

export default function PaginationDemo() {
  const totalItems = dukesMayoFacts.length
  const initialItemsPerPage = 10
  const initialPage = 1

  const [state, setState] = usePagination(
    totalItems,
    initialItemsPerPage,
    initialPage
  )

  function handleChangeItemsPerPage(newItemsPerPage: number): void {
    setState((prevState) => ({
      ...prevState,
      itemsPerPage: newItemsPerPage,
    }))
  }

  const { itemsPerPage, startIndex, endIndex } = state

  return (
    <div className="container-fluid mb-3">
      <div className="row">
        <div className="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-sm-10 offset-sm-1 border rounded-3 p-3">
          <div className="text-center mb-3">
            <h2>Pagination Demo</h2>
          </div>
          <TopBar
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
            onChangeItemsPerPage={handleChangeItemsPerPage}
          />
          <ItemList
            startIndex={startIndex}
            endIndex={endIndex}
            items={dukesMayoFacts}
          />
          <BottomBar {...state} />
        </div>
      </div>
    </div>
  )
}
