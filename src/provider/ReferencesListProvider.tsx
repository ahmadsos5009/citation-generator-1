import React, { useState } from "react"
import { CitationDocumentType } from "../types"

export const ReferencesListContext = React.createContext<{
  filters: CitationDocumentType[]
  setFilters: React.Dispatch<React.SetStateAction<CitationDocumentType[]>>
}>({
  filters: [],
  setFilters: () => {
    console.error("Unmounted")
  },
})

export const ReferencesListProvider: React.FC = ({ children }) => {
  const [filters, setFilters] = useState<CitationDocumentType[]>([
    CitationDocumentType.JOURNAL,
  ])

  return (
    <ReferencesListContext.Provider
      value={{
        filters,
        setFilters,
      }}
    >
      {children}
    </ReferencesListContext.Provider>
  )
}
