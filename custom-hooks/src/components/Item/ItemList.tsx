import type { ItemListProps } from "../../types"
import Item from "./Item"

export default function ItemList({
  startIndex,
  endIndex,
  items,
}: ItemListProps) {
  const listItems = items
    .filter(
      (item) =>
        items.indexOf(item) >= startIndex && items.indexOf(item) <= endIndex
    )
    .map((item) => <Item key={items.indexOf(item)} item={item} />)
  return (
    <div style={{maxHeight: "50dvh", overflow: "auto"}} className="mb-3">
      <ol className="list-group mb-3">{listItems}</ol>
    </div>
  )
}
