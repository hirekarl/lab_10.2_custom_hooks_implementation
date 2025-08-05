import React from "react"
import type { TopBarProps } from "../../types"

export default function TopBar({
  totalItems,
  itemsPerPage,
  onChangeItemsPerPage,
}: TopBarProps) {
  function handleItemsPerPageSelectChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const newItemsPerPage = parseInt(event.target.value)
    onChangeItemsPerPage(newItemsPerPage)
  }

  return (
    <div className="d-flex justify-content-between align-items-center mb-3">
      <div className="input-group w-50">
        <label htmlFor="items-per-page-select" className="input-group-text">
          Items per page
        </label>
        <select
          id="items-per-page-select"
          className="form-select"
          onChange={handleItemsPerPageSelectChange}
          value={itemsPerPage}>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
          <option value="25">25</option>
        </select>
      </div>
      <div>Total Items: {totalItems}</div>
    </div>
  )
}
