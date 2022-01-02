import React, { Dispatch, Reducer, useEffect, useReducer, useState } from "react"
import { Citation, CitationStyle, DBCitations, CitationDocumentType } from "../types"
import {
  deleteCitation,
  getDBCitations,
  storeCitation,
} from "../components/utilities/DB"
import {
  clearJournalFields,
  fillJournalFields,
} from "../components/utilities/html_fields"

type DBState = { value: DBCitations; format: CitationStyle; event?: CustomEvent }

export const DBContext = React.createContext<{
  state: DBState
  dispatch: Dispatch<IDBAction>
  format: CitationStyle
  showCitationsList: boolean | undefined
  setShowCitationsList: Dispatch<React.SetStateAction<boolean | undefined>>
}>({
  // @ts-ignore
  state: { value: {}, format: undefined },
  dispatch: () => {
    console.error("Unmounted")
  },
})

interface IDBAction {
  type: "save" | "delete" | "edit" | "initialize"
  citationDocument: CitationDocumentType
  citation?: Citation
  citationID?: string
  dbCitations?: DBCitations
}

const reducer = (state: DBState, action: IDBAction): DBState => {
  const { type, citationDocument, citation, citationID, dbCitations } = action
  switch (type) {
    case "save":
      if (!citation) return state
      return {
        ...state,
        value: storeCitation(citation, citationDocument, state.format),
      }
    case "delete":
      if (!citationID) return state
      return {
        ...state,
        value: deleteCitation(citationID, citationDocument, state.format),
      }
    case "edit": {
      if (!citationID) return state
      const dbCitation = getDBCitations(state.format)
      if (dbCitation[citationDocument][citationID]) {
        clearJournalFields()
        fillJournalFields(dbCitation[citationDocument][citationID])
      }
      return state
    }
    case "initialize":
      if (!dbCitations) return state
      return { ...state, value: dbCitations }
    default:
      throw new Error()
  }
}

export const DBProvider: React.FC<{
  format: CitationStyle
  citationDocument: CitationDocumentType
}> = ({ format, children, citationDocument }) => {
  const [showCitationsList, setShowCitationsList] = useState<boolean | undefined>(
    true,
  )

  const [state, dispatch] = useReducer<Reducer<DBState, IDBAction>>(reducer, {
    value: {
      book: {},
      journal: {},
      report: {},
      website: {},
    },
    format,
  })

  useEffect(() => {
    const dbCitations = getDBCitations(format)
    dispatch({ type: "initialize", citationDocument, dbCitations })
  }, [])

  return (
    <DBContext.Provider
      value={{
        showCitationsList,
        setShowCitationsList,
        state,
        dispatch,
        format,
      }}
    >
      {children}
    </DBContext.Provider>
  )
}
