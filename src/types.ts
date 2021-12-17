export interface Citation {
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
