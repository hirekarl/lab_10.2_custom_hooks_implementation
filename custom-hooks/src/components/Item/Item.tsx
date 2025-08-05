import type { ItemProps } from "../../types"

export default function Item({ item }: ItemProps) {
  return (
    <li className="list-group-item">
      <small>{item}</small>
    </li>
  )
}
