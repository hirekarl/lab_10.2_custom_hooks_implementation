import { useCallback, useEffect, useState } from "react"
import type { PaginationState } from "../types"

export default function usePagination(
  totalItems: number,
  initialItemsPerPage: number = 10,
  initialPage: number = 1
): [PaginationState, React.Dispatch<React.SetStateAction<PaginationState>>] {
  const initialTotalPages = Math.ceil(totalItems / initialItemsPerPage)

  const [state, setState] = useState<PaginationState>({
    currentPage: initialPage,
    itemsPerPage: initialItemsPerPage,
    totalPages: initialTotalPages,
    startIndex: 0,
    endIndex: 0,
    itemsOnCurrentPage: 0,
    setPage: () => {},
    nextPage: () => {},
    prevPage: () => {},
    canNextPage: false,
    canPrevPage: false,
  })

  const { totalPages } = state

  const goToNextPage = useCallback((): void => {
    setState((prevState) => {
      const nextPage = prevState.currentPage + 1
      if (nextPage <= totalPages) {
        return { ...prevState, currentPage: nextPage }
      }
      return prevState
    })
  }, [totalPages])

  const goToPrevPage = useCallback((): void => {
    setState((prevState) => {
      const prevPage = prevState.currentPage - 1
      if (prevPage >= 1) {
        return { ...prevState, currentPage: prevPage }
      }
      return prevState
    })
  }, [])

  const goToPageNumber = useCallback(
    (pageNumber: number): void => {
      if (pageNumber >= 1 && pageNumber <= totalPages) {
        setState((prevState) => ({
          ...prevState,
          currentPage: pageNumber,
        }))
      }
    },
    [totalPages]
  )

  useEffect(() => {
    const newTotalPages = Math.ceil(totalItems / state.itemsPerPage)
    const newStartIndex = state.itemsPerPage * (state.currentPage - 1)
    const newCurrentPage =
      state.currentPage > newTotalPages ? newTotalPages : state.currentPage
    const newEndIndex =
      state.currentPage < newTotalPages
        ? state.currentPage * state.itemsPerPage - 1
        : totalItems - 1
    const newItemsOnCurrentPage =
      state.currentPage === newTotalPages
        ? totalItems - state.itemsPerPage * (state.currentPage - 1)
        : state.itemsPerPage
    const newCanNextPage = state.currentPage < newTotalPages
    const newCanPrevPage = state.currentPage > 1

    setState((prevState) => ({
      ...prevState,
      totalPages: newTotalPages,
      startIndex: newStartIndex,
      currentPage: newCurrentPage,
      endIndex: newEndIndex,
      itemsOnCurrentPage: newItemsOnCurrentPage,
      canNextPage: newCanNextPage,
      canPrevPage: newCanPrevPage,
      setPage: goToPageNumber,
      nextPage: goToNextPage,
      prevPage: goToPrevPage,
    }))
  }, [
    state.currentPage,
    state.itemsPerPage,
    totalItems,
    totalPages,
    goToNextPage,
    goToPrevPage,
    goToPageNumber,
  ])

  return [state, setState]
}
