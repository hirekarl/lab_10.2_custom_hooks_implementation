import type { ItemProps } from "../../types"

export default function Item({ item }: ItemProps) {
  return <li className="list-group-item">{item}</li>
}
