import _mapKeys from "lodash/mapKeys"
import { Cite } from /* webpackChunkName: "citation-js" */ "@citation-js/core"
import { Citation } from "../../types"

require(/* webpackChunkName: "citation-js" */ "@citation-js/plugin-csl")

export function generateCitation(
  citation: Citation,
  documentType: string,
): { html: string; inText: string } {
  // TODO:: add styles configuration
  // const cslPlugin = plugins.config.get('@csl');
  // cslPlugin.templates.add('apa', '');
  const cleanedCitation = cleansingCitation(citation)

  const cite = Cite({ ...cleanedCitation, type: documentType }, { format: "string" })
  const htmlCitation = cite.format("bibliography", {
    format: "html",
    template: "apa",
    lang: "en-US",
  })
  const inTextCitation = cite.format("citation", {
    format: "html",
    template: "apa",
    lang: "en-US",
  })

  return {
    html: htmlCitation,
    inText: inTextCitation,
  }
}

const cleansingCitation = (citation: Citation) => {
  const keys = {
    articleTitle: "title",
    journalTitle: "container-title",
    authors: "author",
    year: "issued",
  }

  if (citation.from && citation.to) {
    citation.page = `${citation.from}-${citation.to}`
  } else {
    delete citation.page
  }

  if (citation.link) {
    if (citation.link.includes("http")) {
      citation.URL = citation.link
      delete citation.DOI
    } else {
      citation.DOI = citation.link
      delete citation.URL
    }
  } else {
    delete citation.DOI
    delete citation.URL
  }

  // @ts-ignore
  const mapKeys = _mapKeys(citation, (value, key) => (keys[key] && keys[key]) || key)
  // @ts-ignore
  mapKeys.issued = [{ "date-parts": [mapKeys.issued] }]
  return mapKeys
}
