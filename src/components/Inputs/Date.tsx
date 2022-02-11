import React, { useCallback, useContext } from "react"
import { StoreContext } from "../../provider/Store"
import { Box, FormControl, FormLabel, Input, InputLabel } from "@mui/material"
import { FieldProps, NumberFieldProps } from "./types"
import { HtmlTooltip } from "../Tooltips"
import { descriptions } from "../../cslTypes/fieldsMapping"
import HelpOutlineIcon from "@mui/icons-material/HelpOutline"

const DateField: React.FC<
  FieldProps & NumberFieldProps & { id: "issued" | "accessed" }
> = ({ label, id, error, documentType }) => {
  const { dispatch, state } = useContext(StoreContext)

  const handleChange = useCallback((e) => {
    // @ts-ignore
    const value = state[documentType][id] || { "date-parts": ["0", "0", "0"] }

    switch (e.target.id) {
      case `${id}-day`:
        value["date-parts"][2] = e.target.value
        break
      case `${id}-month`:
        value["date-parts"][1] = e.target.value
        break
      case `${id}-year`:
        value["date-parts"][0] = e.target.value
    }

    dispatch({
      type: "set",
      id,
      documentType,
      value,
    })
  }, [])

  return (
    <Box margin="8px">
      <FormLabel error={error}>
        {label}
        <HtmlTooltip title={descriptions["issued"]}>
          {/* @ts-ignore */}
          <HelpOutlineIcon fontSize="16" sx={{ margin: "0 4px" }} />
        </HtmlTooltip>
      </FormLabel>
      {documentType === "website" && (
        <>
          <FormControl variant="standard" sx={{ margin: "0 12px" }}>
            <InputLabel htmlFor="formatted-text-mask-input">Day</InputLabel>
            <Input onChange={handleChange} type="number" id={`${id}-day`} />
          </FormControl>

          <FormControl variant="standard" sx={{ margin: "0 12px" }}>
            <InputLabel htmlFor="formatted-text-mask-input">Month</InputLabel>
            <Input onChange={handleChange} type="number" id={`${id}-month`} />
          </FormControl>
        </>
      )}

      <FormControl variant="standard" sx={{ margin: "0 12px" }}>
        <InputLabel htmlFor="formatted-text-mask-input">Year</InputLabel>
        <Input onChange={handleChange} type="number" id={`${id}-year`} />
      </FormControl>
    </Box>
  )
}

export default DateField
