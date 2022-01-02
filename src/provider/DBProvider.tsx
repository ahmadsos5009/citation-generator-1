import React, { Dispatch, Reducer, useReducer, useState } from "react"
import { Citation, DocumentType, CitationStyle, DBCitations } from "../types"
import {
  deleteCitation,
  getDBCitations,
  storeCitation,
} from "../components/utilities/DB"
import {
  clearJournalFields,
  fillJournalFields,
} from "../components/utilities/html_fields"

type DBState = { value: DBCitations; format: CitationStyle }

export const DBContext = React.createContext<{
  state: DBState
  dispatch: Dispatch<IDBAction>
  format: CitationStyle
  showCitationsList: boolean | undefined
  setShowCitationsList: Dispatch<React.SetStateAction<boolean | undefined>>
}>({
  // @ts-ignore
  state: {
    value: {},
    format: undefined,
    event: CustomEvent || undefined,
  },
  dispatch: () => {
    console.error("Unmounted")
  },
})

interface IDBAction {
  type: "save" | "delete" | "edit"
  document: DocumentType
  citation?: Citation
  citationID?: string
}

const reducer = (state: DBState, action: IDBAction): DBState => {
  const { type, document, citation, citationID } = action
  switch (type) {
    case "save":
      if (!citation) return state
      return {
        ...state,
        value: storeCitation(citation, document, state.format),
      }
    case "delete":
      if (!citationID) return state
      return {
        ...state,
        value: deleteCitation(citationID, document, state.format),
      }
    case "edit": {
      if (!citationID) return state
      const dbCitation = getDBCitations(state.format)
      if (dbCitation[document][citationID]) {
        clearJournalFields()
        fillJournalFields(dbCitation[document][citationID])
      }
      return state
    }
    default:
      throw new Error()
  }
}

export const DBProvider: React.FC<{ format: CitationStyle }> = ({
  format,
  children,
}) => {
  const [showCitationsList, setShowCitationsList] = useState<boolean | undefined>(
    true,
  )
  const dbCitation = getDBCitations(format)
  const [state, dispatch] = useReducer<Reducer<DBState, IDBAction>>(reducer, {
    value: dbCitation,
    format,
  })

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
