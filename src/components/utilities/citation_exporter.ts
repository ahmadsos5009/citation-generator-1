import { Cite } from "@citation-js/core"
import { Citation, DocumentType } from "../../types"

require("@citation-js/plugin-csl")
require("@citation-js/plugin-bibtex")

export const export_word = (citationHtml: string, fileName: string): void => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
  const link = document.createElement("a")
  const header =
    "<html xmlns:o='urn:schemas-microsoft-com:office:office' " +
    "xmlns:w='urn:schemas-microsoft-com:office:word' " +
    "xmlns='http://www.w3.org/TR/REC-html40'>" +
    "<head><meta charset='utf-8'></head><body>"
  const footer = "</body></html>"
  const source = header + citationHtml + footer

  link.href = `data:${fileType};charset=UTF-8,` + encodeURIComponent(source)
  link.download = `${fileName}.docx`
  link.click()
}

export const export_pdf = async (citationHtml: string, fileName: string) => {
  const pdfMake = await import(
    /* webpackChunkName: "pdfmake" */ "pdfmake/build/pdfmake"
  )
  const pdfFonts = await import(
    /* webpackChunkName: "vfs_fonts" */ "pdfmake/build/vfs_fonts"
  )
  pdfMake.vfs = pdfFonts.pdfMake.vfs
  const htmlToPdfmake = await import(
    /* webpackChunkName: "html-to-pdfmake" */ "html-to-pdfmake"
  )

  const pdfData = htmlToPdfmake.default(citationHtml)
  pdfMake
    // @ts-ignore
    .createPdf({ content: pdfData }, null, null, pdfFonts.pdfMake.vfs)
    .download(fileName)
}

export const export_bibTex = (
  citations: Citation & { type: DocumentType }[],
  fileName: string,
): void => {
  const cite = Cite(citations, { format: "string" })

  const bibTex = cite.format("bibtex", {
    format: "text",
    template: "apa",
    lang: "en-US",
  })

  const link = document.createElement("a")

  link.href = `data:text/x-tex;charset=UTF-8,` + encodeURIComponent(bibTex)
  link.download = `${fileName}.bib`
  link.click()
}
