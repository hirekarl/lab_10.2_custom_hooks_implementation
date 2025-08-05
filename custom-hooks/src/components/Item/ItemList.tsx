import type { ItemListProps } from "../../types"
import usePagination from "../../hooks/usePagination"
import Item from "./Item"

export default function ItemList({
  totalItems,
  itemsPerPage,
  initialPage,
  items,
}: ItemListProps) {
  const state = usePagination(totalItems, itemsPerPage, initialPage)[0]
  const { startIndex, endIndex } = state

  const listItems = items
    .filter(
      (item) =>
        items.indexOf(item) >= startIndex && items.indexOf(item) < endIndex
    )
    .map((item) => <Item key={items.indexOf(item)} item={item} />)
  return <ol>{listItems}</ol>
}
