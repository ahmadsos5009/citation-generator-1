import {
  Citation,
  CitationDocumentType,
  CitationJSDocumentType,
  Events,
} from "../../types"
import { documentFields } from "../../cslTypes/fieldsMapping"
import { eliminatedFields } from "../CitationForm"
import { v4 as uuid } from "uuid"
import { User } from "../../cslTypes/type"

export const clearCitationFields = (documentType: CitationDocumentType): void => {
  documentFields[CitationJSDocumentType[documentType]]
    .filter((field) => !eliminatedFields[documentType].includes(field))
    .map((field) => clearNode(document.getElementById(field)))

  const editEvent = new CustomEvent<{ payload: User }>(Events.AUTHORS, {
    detail: { payload: { id: uuid() } },
  })
  document.getElementById("author-container")?.dispatchEvent(editEvent)

  clearNode(document.getElementById("issued-day"))
  clearNode(document.getElementById("issued-month"))
  clearNode(document.getElementById("issued-year"))

  clearNode(document.getElementById("link"))
}

const clearNode = (node: HTMLElement | null) => {
  if (node && (node as HTMLInputElement)) {
    (node as HTMLInputElement).value = ""
  }
}

export const fillCitationFields = (
  documentType: CitationDocumentType,
  citation: Citation,
): void => {
  documentFields[CitationJSDocumentType[documentType]].map((field) => {
    // @ts-ignore
    updateNodeValue(document.getElementById(field), citation[field])
  })

  const fromContainerEvent = new CustomEvent<{ payload: Citation }>(
    Events.CITATION,
    {
      detail: { payload: citation },
    },
  )
  document.getElementById("form-container")?.dispatchEvent(fromContainerEvent)
}

const updateNodeValue = (node: HTMLElement | null, value?: string): void => {
  if (node && (node as HTMLInputElement) && value) {
    (node as HTMLInputElement).value = value
  }
}
