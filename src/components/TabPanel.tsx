import React from "react"
import { Box } from "@mui/material"
import { CitationDocumentType } from "../types"

interface TabPanelProps {
  children: React.ReactNode
  index: CitationDocumentType
  value: CitationDocumentType
}

const Panel: React.FC<TabPanelProps> = ({ children, value, index }) => (
  <div
    role="tabpanel"
    hidden={value !== index}
    id={`simple-tabpanel-${index}`}
    aria-labelledby={`simple-tab-${index}`}
  >
    {value === index && (
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        {children}
      </Box>
    )}
  </div>
)

export default Panel
