import { Cite } from "@citation-js/core"
import { Citation } from "../../types"

require("@citation-js/plugin-csl")

export function generateCitation(
  citation: Citation,
  documentType: string,
  format: "html" | "text",
): { convertedCitation: string; inText: string } {
  // TODO:: add styles configuration
  // const cslPlugin = plugins.config.get('@csl');
  // cslPlugin.templates.add('apa', '');

  const cite = Cite({ ...citation, type: documentType }, { format: "string" })
  const htmlCitation = cite.format("bibliography", {
    format: format,
    template: "apa",
    lang: "en-US",
  })
  const inTextCitation = cite.format("citation", {
    format: format,
    template: "apa",
    lang: "en-US",
  })

  return {
    convertedCitation: htmlCitation,
    inText: inTextCitation,
  }
}

export const generateCitations = (citations: Citation[]): string => {
  const cite = Cite(citations, { format: "string" })

  return cite.format("bibliography", {
    format: "html",
    template: "apa",
    lang: "en-US",
  })
}
