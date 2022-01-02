import { v4 as uuid } from "uuid"
import { Author, Citation, Events } from "../../types"

export const clearJournalFields = (): void => {
  clearNode(document.getElementById("articleTitle"))
  clearNode(document.getElementById("journalTitle"))
  clearNode(document.getElementById("year"))

  Array.from(document.getElementsByClassName("given")).map((node) =>
    clearNode(node as HTMLInputElement),
  )
  Array.from(document.getElementsByClassName("family")).map((node) =>
    clearNode(node as HTMLInputElement),
  )
  const editEvent = new CustomEvent<{ payload: Author[] }>(Events.AUTHORS, {
    detail: { payload: [{ id: `Author:${uuid()}` }] },
  })
  document.getElementById("author-container")?.dispatchEvent(editEvent)

  clearNode(document.getElementById("volume"))
  clearNode(document.getElementById("issue"))
  clearNode(document.getElementById("from"))
  clearNode(document.getElementById("to"))
  clearNode(document.getElementById("link"))
}

const clearNode = (node: HTMLElement | null) => {
  if (node && (node as HTMLInputElement)) {
    (node as HTMLInputElement).value = ""
  }
}

export const fillJournalFields = (citation: Citation): void => {
  updateNodeValue(document.getElementById("articleTitle"), citation.articleTitle)
  updateNodeValue(document.getElementById("journalTitle"), citation.journalTitle)
  updateNodeValue(document.getElementById("year"), citation.year.toString())

  updateNodeValue(document.getElementById("volume"), citation.volume?.toString())
  updateNodeValue(document.getElementById("issue"), citation.issue?.toString())

  if (citation.from && citation.to) {
    updateNodeValue(document.getElementById("from"), citation.from.toString())
    updateNodeValue(document.getElementById("to"), citation.to.toString())
  }

  citation.link = citation.URL || citation.DOI
  updateNodeValue(document.getElementById("link"), citation.link)

  const fromContainerEvent = new CustomEvent<{ payload: Citation }>(
    Events.CITATION,
    {
      detail: { payload: { ...citation, authors: [] } },
    },
  )
  document.getElementById("form-container")?.dispatchEvent(fromContainerEvent)

  const editEvent = new CustomEvent<{ payload: Author[] }>(Events.AUTHORS, {
    detail: { payload: citation.authors },
  })
  document.getElementById("author-container")?.dispatchEvent(editEvent)
}

export const fillAuthorsFields = (authors: Author[]): void => {
  const givenElements = Array.from(document.getElementsByClassName("given"))
  givenElements.map((node, index) =>
    updateNodeValue(node as HTMLInputElement, authors[index].given),
  )

  const familyElements = Array.from(document.getElementsByClassName("family"))
  familyElements.map((node, index) =>
    updateNodeValue(node as HTMLInputElement, authors[index].family),
  )
}

const updateNodeValue = (node: HTMLElement | null, value?: string): void => {
  if (node && (node as HTMLInputElement) && value) {
    (node as HTMLInputElement).value = value
  }
}
