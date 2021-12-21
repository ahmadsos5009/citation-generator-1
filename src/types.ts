export interface DocumentCitation {
  journal: Citation
  book: Citation
  report: Citation
  website: Citation
}

export type DocumentType = 'journal' | 'book' | 'report' | 'website';

export interface Citation {
  id: string
  articleTitle: string,
  journalTitle: string,
  year: number,
  authors: Author[],
  month?: number,
  from?: number,
  to?: number,
  volume?: number,
  link?: string,
  annotation?: string,
}

export interface Author {
  id: string
  given?: string
  family?: string
}

export interface CitationOutput {
  html: string,
  inText: string
}
