import React, { useState } from "react"
import { CitationDocumentType } from "../types"

const FILTERS_ALL = [
  CitationDocumentType.JOURNAL,
  CitationDocumentType.BOOK,
  CitationDocumentType.REPORT,
  CitationDocumentType.WEBSITE,
]

export const ReferencesListContext = React.createContext<{
  filters: CitationDocumentType[]
  setFilters: React.Dispatch<React.SetStateAction<CitationDocumentType[]>>
  selectedCitations: string[]
  setSelectedCitations: React.Dispatch<React.SetStateAction<string[]>>
}>({
  filters: FILTERS_ALL,
  selectedCitations: [],
  setFilters: () => {
    console.error("Unmounted")
  },
  setSelectedCitations: () => {
    console.error("Unmounted")
  },
})

export const ReferencesListProvider: React.FC = ({ children }) => {
  const [filters, setFilters] = useState<CitationDocumentType[]>(FILTERS_ALL)
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
