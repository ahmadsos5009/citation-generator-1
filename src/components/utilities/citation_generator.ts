import { Cite } from "@citation-js/core"
import { Citation, CitationStyle } from "../../types"

require("@citation-js/plugin-csl")

export function generateCitation(
  citation: Citation,
  documentType: string,
  format: "html" | "text",
  template: CitationStyle,
): { convertedCitation: string; inText: string } {
  const cite = Cite({ ...citation, type: documentType }, { format: "string" })
  const htmlCitation = cite.format("bibliography", {
    format: format,
    lang: "en-US",
    template,
  })
  const inTextCitation = cite.format("citation", {
    format: format,
    lang: "en-US",
    template,
  })

  return {
    convertedCitation: htmlCitation,
    inText: inTextCitation,
  }
}

export const generateCitations = (
  citations: Citation[],
  template: CitationStyle,
): string => {
  const cite = Cite(citations, { format: "string" })

  return cite.format("bibliography", {
    format: "html",
    lang: "en-US",
    template,
  })
}
