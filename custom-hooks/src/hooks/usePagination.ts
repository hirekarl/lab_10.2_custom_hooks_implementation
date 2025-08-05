import { useCallback, useEffect, useState } from "react"
import type { PaginationState } from "../types"

export default function usePagination(
  totalItems: number,
  itemsPerPage: number = 10,
  initialPage: number = 1
) {
  const totalPages = Math.ceil(totalItems / itemsPerPage)

  const [state, setState] = useState<PaginationState>({
    currentPage: initialPage,
    totalPages,
    startIndex: 0,
    endIndex: 0,
    itemsOnCurrentPage: 0,
    setPage: () => {},
    nextPage: () => {},
    prevPage: () => {},
    canNextPage: false,
    canPrevPage: false,
  })

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
    const startIndex = itemsPerPage * (state.currentPage - 1)
    const endIndex =
      state.currentPage < totalPages
        ? state.currentPage * itemsPerPage - 1
        : totalItems - 1
    const itemsOnCurrentPage =
      state.currentPage === totalPages
        ? totalItems - itemsPerPage * (state.currentPage - 1)
        : itemsPerPage
    const canNextPage = state.currentPage < totalPages
    const canPrevPage = state.currentPage > 1

    setState((prevState) => ({
      ...prevState,
      startIndex,
      endIndex,
      itemsOnCurrentPage,
      canNextPage,
      canPrevPage,
      setPage: goToPageNumber,
      nextPage: goToNextPage,
      prevPage: goToPrevPage,
    }))
  }, [
    state.currentPage,
    itemsPerPage,
    totalItems,
    totalPages,
    goToNextPage,
    goToPrevPage,
    goToPageNumber,
  ])

  return [state, setState] as [
    PaginationState,
    React.Dispatch<React.SetStateAction<PaginationState>>
  ]
}
