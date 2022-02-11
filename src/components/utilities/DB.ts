import { v4 as uuid } from "uuid"
import {
  CitationDocumentType,
  CitationStyle,
  CitationWithID,
  DBCitations,
} from "../../types"

const INITIAL_DOCUMENT: DBCitations = {
  journal: {},
  book: {},
  report: {},
  website: {},
}

export const getDBCitations = (format: CitationStyle): DBCitations => {
  const citations = localStorage.getItem(format)
  if (citations) {
    return JSON.parse(citations) as DBCitations
  }
  localStorage.setItem(format, JSON.stringify(INITIAL_DOCUMENT))
  return INITIAL_DOCUMENT
}

export const getDBCitationDocument = (
  dbCitation: DBCitations,
  citationID: string,
): CitationDocumentType | undefined => {
  let citationDocument = undefined

  Object.entries(dbCitation).find((obj) => {
    if (obj[1][citationID]) {
      citationDocument = obj[0]
      return obj
    } else return undefined
  })

  return citationDocument
}

export const storeCitation = (
  citation: CitationWithID,
  document: CitationDocumentType,
  format: CitationStyle,
): DBCitations => {
  const dbCitation = getDBCitations(format)

  if (!dbCitation[document][citation.id]) {
    const id = `Citation:${uuid()}`
    dbCitation[document][id] = { ...citation, id }
  } else {
    dbCitation[document][citation.id] = { ...citation }
  }

  localStorage.setItem(format, JSON.stringify(dbCitation))
  return dbCitation
}

export const deleteCitation = (
  citationID: string,
  document: CitationDocumentType,
  format: CitationStyle,
): DBCitations => {
  const dbCitation = getDBCitations(format)

  if (dbCitation[document][citationID]) {
    delete dbCitation[document][citationID]
  }

  localStorage.setItem(format, JSON.stringify(dbCitation))
  return dbCitation
}
