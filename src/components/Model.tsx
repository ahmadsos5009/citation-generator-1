import React, { useCallback, useContext, useMemo, useState } from "react"
import {
  Alert,
  Box,
  Button,
  FilledInput,
  MenuItem,
  Modal,
  Snackbar,
  Typography,
} from "@mui/material"
import { export_pdf, export_word } from "./utilities/citation_exporter"
import { ReferencesListContext } from "../provider/ReferencesListProvider"
import { DBContext } from "../provider/DBProvider"
import { generateCitations } from "./utilities/citation_generator"

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
}

export const ExportFileNameModel: React.FC<{
  buttonText: string
  buttonIcon: React.ReactNode
  closeDropDown: () => void
}> = ({ buttonText, buttonIcon, closeDropDown }) => {
  const [open, setOpen] = useState(false)
  const [fileName, setFileName] = useState("references")
  const [showAlert, setShowAlert] = useState(false)

  const { selectedCitations, filters } = useContext(ReferencesListContext)

  const handleOpen = useCallback(() => {
    if (selectedCitations.length > 0) {
      setOpen(true)
    } else {
      setShowAlert(true)
    }
  }, [setOpen])

  const handleClose = useCallback(() => {
    setOpen(false)
    closeDropDown()
  }, [setOpen])

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => setFileName(e.currentTarget.value),
    [setFileName],
  )

  const { state } = useContext(DBContext)

  const citationHtml = useMemo(() => {
    let citations = ""

    filters.map((doc) => {
      const citation = Object.values(state.value[doc])
        .filter((c) => selectedCitations.includes(c.id) && c)
        .map((c) => ({ ...c }))
      citations = citations.concat(generateCitations(citation) + "\n")
    })

    return citations
  }, [filters, state.value, selectedCitations])

  const handleDownloadClick = useCallback(() => {
    switch (buttonText) {
      case "PDF":
        export_pdf(citationHtml, fileName)
        break
      case "Word":
        export_word(citationHtml, fileName)
        break
      case "BibTax":
        export_word(citationHtml, fileName)
        break
    }
    handleClose()
  }, [citationHtml, fileName])

  const closeSnackbar = useCallback(() => setShowAlert(false), [setShowAlert])

  return (
    <div>
      <MenuItem onClick={handleOpen} sx={{ justifyContent: "space-between" }}>
        {buttonText}
        {buttonIcon}
      </MenuItem>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Export To {buttonText} file
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            File Name:
          </Typography>
          <FilledInput onChange={onChange} fullWidth value={fileName} />
          <Button onClick={handleDownloadClick}>Download</Button>
        </Box>
      </Modal>

      <Snackbar
        open={showAlert}
        autoHideDuration={2000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={closeSnackbar} severity="warning" sx={{ width: "100%" }}>
          Select All Citations / Or at least one of them
        </Alert>
      </Snackbar>
    </div>
  )
}
