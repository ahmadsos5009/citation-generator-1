import React, { useState } from "react"
import { CitationDocumentType } from "../types"

export const ReferencesListContext = React.createContext<{
  filters: CitationDocumentType[]
  setFilters: React.Dispatch<React.SetStateAction<CitationDocumentType[]>>
  selectedCitations: string[]
  setSelectedCitations: React.Dispatch<React.SetStateAction<string[]>>
}>({
  filters: [],
  selectedCitations: [],
  setFilters: () => {
    console.error("Unmounted")
  },
  setSelectedCitations: () => {
    console.error("Unmounted")
  },
})

export const ReferencesListProvider: React.FC = ({ children }) => {
  const [filters, setFilters] = useState<CitationDocumentType[]>([
    CitationDocumentType.JOURNAL,
  ])
  const [selectedCitations, setSelectedCitations] = useState<string[]>([])

  return (
    <ReferencesListContext.Provider
      value={{
        filters,
        setFilters,
        selectedCitations,
        setSelectedCitations,
      }}
    >
      {children}
    </ReferencesListContext.Provider>
  )
}
