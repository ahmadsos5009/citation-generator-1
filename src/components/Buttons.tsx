import React, { useCallback, useContext } from "react"
import { Box, Fab, Tooltip, Typography } from "@mui/material"
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen"
import MenuOpenIcon from "@mui/icons-material/MenuOpen"
import { DBContext } from "../provider/DBProvider"
import { clearJournalFields } from "./utilities/html_fields"
import { DocumentType } from "../types"
import { StoreContext } from "../provider/Store"

export const CiteResourceButton: React.FC<{
  onCiteResource: () => void
}> = ({ onCiteResource }) => (
  <Tooltip title="save citation to the References list">
    <Fab color="primary" aria-label="cite" size="large" onClick={onCiteResource}>
      Save
    </Fab>
  </Tooltip>
)

export const ClearFields: React.FC<{ document: DocumentType }> = ({ document }) => {
  const { dispatch } = useContext(StoreContext)

  const onClearClick = useCallback(() => {
    switch (document) {
      case "journal": {
        clearJournalFields()
        break
      }
      default: {
        break
      }
    }
    dispatch({ type: "clear" })
  }, [])

  return (
    <Tooltip title="clear all fields">
      <Fab color="primary" aria-label="clear" size="large" onClick={onClearClick}>
        Clear
      </Fab>
    </Tooltip>
  )
}

export const ToggleCitationsListButton: React.FC = () => {
  const { showCitationsList, setShowCitationsList } = useContext(DBContext)

  const toggleCitationsList = useCallback(
    () => setShowCitationsList(!showCitationsList),
    [showCitationsList, setShowCitationsList],
  )

  if (showCitationsList === undefined) {
    return <></>
  }

  return (
    <Box display="flex" justifyContent="end">
      {(showCitationsList && (
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          style={{ font: "10" }}
          onClick={toggleCitationsList}
        >
          <CloseFullscreenIcon sx={{ mr: 1 }} />
          <Typography variant="overline" display="block">
            Hide Citations List
          </Typography>
        </Fab>
      )) || (
        <Fab
          variant="extended"
          size="medium"
          color="primary"
          aria-label="add"
          style={{ font: "10" }}
          onClick={toggleCitationsList}
        >
          <MenuOpenIcon sx={{ mr: 1 }} />
          <Typography variant="overline" display="block">
            Show Stored Citations
          </Typography>
        </Fab>
      )}
    </Box>
  )
}
