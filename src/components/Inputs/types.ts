import { CitationDocumentType } from "../../types"
import { InputBaseComponentProps } from "@mui/material"

export interface FieldProps {
  label: string
  id: string
  required?: boolean | false
  // eslint-disable-next-line react/require-default-props
  multiline?: boolean
  documentType: CitationDocumentType
  error?: boolean
}

export interface NumberFieldProps {
  width?: number
  inputProps?: InputBaseComponentProps | undefined
}
