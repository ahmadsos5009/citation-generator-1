import {
  BookCitation,
  JournalArticleCitation,
  ReportCitation,
  WebsiteCitation,
} from "./cslTypes/type"

export enum CitationDocumentType {
  JOURNAL = "journal",
  BOOK = "book",
  REPORT = "report",
  WEBSITE = "website",
}

export type DocumentType = "article-journal" | "report" | "book" | "webpage"

export const CitationJSDocumentType: {
  [k in CitationDocumentType]: DocumentType
} = {
  [CitationDocumentType.JOURNAL]: "article-journal",
  [CitationDocumentType.REPORT]: "report",
  [CitationDocumentType.BOOK]: "book",
  [CitationDocumentType.WEBSITE]: "webpage",
}

export type CitationStyle = "apa"

export enum Events {
  CITATION = "fill-citation-field",
  AUTHORS = "fill-authors-field",
}

export type Citation =
  | JournalArticleCitation
  | ReportCitation
  | BookCitation
  | WebsiteCitation

export type CitationWithID = Citation & { id: string }

export type CitationDocument = { [k in CitationDocumentType]: CitationWithID }

export interface Author {
  id: string
  given?: string
  family?: string
}

export interface CitationOutput {
  html: string
  inText: string
}

export type DBCitations = {
  [k in CitationDocumentType]: { [k: string]: CitationWithID }
}
