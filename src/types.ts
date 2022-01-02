export enum CitationDocumentType {
  JOURNAL = "journal",
  BOOK = "book",
  REPORT = "report",
  WEBSITE = "website",
}

export type CitationStyle = "apa"

export enum Events {
  CITATION = "fill-citation-field",
  AUTHORS = "fill-authors-field",
}

export type CitationDocument = { [k in CitationDocumentType]: Citation }

export interface Citation {
  id: string
  articleTitle: string
  journalTitle: string
  year: number
  authors: Author[]
  month?: number
  from?: number
  to?: number
  volume?: number
  issue?: number
  link?: string
  annotation?: string
  page?: string
  URL?: string
  DOI?: string
}

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
  [k in CitationDocumentType]: { [k: string]: Citation }
}