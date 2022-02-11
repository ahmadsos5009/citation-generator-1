import React from "react"
import { callBack } from "../../provider/Store"
import { FilledInput, FormControl, FormLabel } from "@mui/material"
import { HtmlTooltip } from "../Tooltips"
import { descriptions } from "../../cslTypes/fieldsMapping"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"
import { FieldProps } from "./types"

const TextField: React.FC<FieldProps> = ({
  label,
  id,
  required,
  multiline,
  documentType,
  error,
}) => {
  const onChange = callBack(id, documentType)

  return (
    <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
      <FormLabel error={error}>
        {label}
        <HtmlTooltip title={descriptions[id]}>
          {/* @ts-ignore */}
          <HelpOutlineIcon fontSize="16" sx={{ margin: "0 4px" }} />
        </HtmlTooltip>
      </FormLabel>
      <FilledInput
        required={required}
        multiline={multiline}
        onChange={onChange}
        error={error}
        fullWidth
        id={id}
      />
    </FormControl>
  )
}

export default TextField
