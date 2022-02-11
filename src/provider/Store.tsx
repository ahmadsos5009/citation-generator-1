import React, { Reducer, useCallback, useContext, useReducer } from "react"
import { Citation, CitationDocument, CitationDocumentType } from "../types"
import { User } from "../cslTypes/type"

export const StoreContext = React.createContext<{
  state: CitationDocument
  dispatch: React.Dispatch<ICitationAction>
}>({
  state: {
    journal: { id: "" },
    book: { id: "" },
    report: { id: "" },
    website: { id: "" },
  },
  dispatch: () => {
    console.error("Unmounted")
  },
})

interface ICitationAction {
  type: "set" | "clear" | "fill"
  id?: string
  documentType?: string
  value?: string | number | User[] | Citation | { "date-parts": string[] }
}

const reducer = (
  state: CitationDocument,
  action: ICitationAction,
): CitationDocument => {
  const { type, id, value, documentType } = action
  switch (type) {
    case "set":
      // @ts-ignore
      state[documentType][id] = value
      return { ...state }
    case "clear":
      // @ts-ignore
      state[documentType] = {}
      return { ...state }
    case "fill":
      // @ts-ignore
      state[documentType] = value
      return { ...state }
    default:
      throw new Error()
  }
}

export const StoreProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer<Reducer<CitationDocument, ICitationAction>>(
    reducer,
    {
      // @ts-ignore
      journal: {},
      // @ts-ignore
      book: {},
      // @ts-ignore
      report: {},
      // @ts-ignore
      website: {},
    },
  )

  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </StoreContext.Provider>
  )
}

export const callBack = (
  id: string,
  documentType: CitationDocumentType,
): ((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) => {
  const { dispatch } = useContext(StoreContext)
  return useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      dispatch({
        type: "set",
        id,
        documentType,
        value: e.target.value,
      })
    },
    [dispatch],
  )
}
