import React, {
  ReactElement,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react"
import {
  Alert,
  Box,
  Divider,
  IconButton,
  InputBase,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Snackbar,
  SxProps,
  Theme,
  Tooltip,
  Typography,
} from "@mui/material"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"
import {
  Citation,
  CitationDocumentType,
  CitationJSDocumentType,
  CitationOutput,
  DocumentType,
} from "../types"
import BookIcon from "@mui/icons-material/Book"
import WebsiteIcon from "@mui/icons-material/Web"
import ReportIcon from "@mui/icons-material/Summarize"

export const DocumentIcon: {
  [key in DocumentType]: ReactElement
} = {
  "article-journal": <ArticleIcon />,
  book: <BookIcon />,
  webpage: <WebsiteIcon />,
  report: <ReportIcon />,
}

export const DocumentLabel: {
  [key in DocumentType]: string
} = {
  "article-journal": "Journal",
  book: "Book",
  webpage: "Website",
  report: "Report",
}

import { Cite } from "@citation-js/core"

interface OnFlyCitationBoxProps {
  // eslint-disable-next-line react/require-default-props
  citation?: CitationOutput
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
}

const boxStyle: SxProps<Theme> = {
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: "12px",
  margin: "8px",
  borderRadius: "16px",
  borderColor: "#bdbdbd",
  border: 1,
}

export const OnFlyCitationBox: React.FC<OnFlyCitationBoxProps> = ({
  citation,
  handleClick,
}) => {
  if (!citation) {
    return <></>
  }

  return (
    <Box sx={{ ...boxStyle }}>
      <Box sx={{ display: "flex", padding: "8px", alignItems: "center" }}>
        <IconButton onClick={handleClick} value="citation">
          <ContentCopyIcon />
        </IconButton>
        <div
          className="output-viewer"
          dangerouslySetInnerHTML={{ __html: citation?.html || "" }}
        />
      </Box>

      <Box sx={{ display: "flex", padding: "8px", alignItems: "center" }}>
        <IconButton onClick={handleClick} value="in-text">
          <ContentCopyIcon />
        </IconButton>
        <Box>
          <Typography align="center" color="text.secondary" padding={0}>
            In text citation:
          </Typography>
          <div
            className="output-viewer"
            dangerouslySetInnerHTML={{
              __html: citation?.inText || "",
            }}
          />
        </Box>
      </Box>
    </Box>
  )
}

require("@citation-js/plugin-isbn")
require("@citation-js/plugin-doi")
require("@citation-js/plugin-bibjson")
import SearchIcon from "@mui/icons-material/Search"
import ArticleIcon from "@mui/icons-material/Article"
import BackspaceIcon from "@mui/icons-material/Backspace"

import { StoreContext } from "../provider/Store"
import { clearCitationFields, fillCitationFields } from "./utilities/html_fields"

import EditIcon from "@mui/icons-material/Edit"
import { Spinner } from "./editor/Spinner"
import { UploadFileModel } from "./Model"

export type ImportCitation = Citation & { type: DocumentType }

export const ImportCitationBox: React.FC<{ documentType: CitationDocumentType }> = ({
  documentType,
}) => {
  const [importLoading, setImportLoading] = useState(false)
  const [input, setInput] = useState("")
  const [previewOutput, setPreviewOutput] = useState<string | undefined>(undefined)
  const [outputJson, setOutputJson] = useState<ImportCitation | undefined>(undefined)

  const [showAlert, setShowAlert] = useState(false)
  const closeSnackbar = useCallback(() => setShowAlert(false), [setShowAlert])

  const onImportChange = useCallback((e) => setInput(e.target.value), [])
  const onClearClick = useCallback(() => {
    setInput("")
    setPreviewOutput(undefined)
  }, [])

  const onImportSearch = useCallback(async () => {
    try {
      setImportLoading(true)
      const cite = await Cite.async(input)
      const outputJson = cite.get({ format: "real", type: "json", style: "csl" })
      const outputHtml = Cite(cite.data, { format: "string" }).format(
        "bibliography",
        {
          format: "html",
          lang: "en-US",
        },
      )

      if (outputJson.length > 0) {
        setOutputJson(outputJson[0])
        setPreviewOutput(outputHtml)
      }
    } catch (e) {
      setShowAlert(true)
    }
    setImportLoading(false)
  }, [input, setPreviewOutput])

  const { dispatch } = useContext(StoreContext)

  const onEditClick = useCallback(() => {
    if (!outputJson) return
    clearCitationFields(documentType)
    fillCitationFields(documentType, outputJson)

    dispatch({
      type: "fill",
      documentType,
      value: outputJson,
    })
    setInput("")
    setPreviewOutput(undefined)
  }, [outputJson, documentType])

  const message = useMemo(() => {
    switch (documentType) {
      case CitationDocumentType.JOURNAL:
        return "Import Citation from URL, DOI"
      case CitationDocumentType.BOOK:
        return "Import Citation from URL, ISBN"
      case CitationDocumentType.REPORT:
      case CitationDocumentType.WEBSITE:
        return "Import Citation from URL"
    }
  }, [documentType])

  if (importLoading) {
    return <Spinner />
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="4px"
      margin="8px 12px"
      width="100%"
    >
      <Paper
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: "50%" }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder={message}
          inputProps={{ "aria-label": "Import Citation" }}
          value={input}
          onChange={onImportChange}
        />
        <IconButton sx={{ p: "10px" }} aria-label="search" onClick={onImportSearch}>
          <SearchIcon />
        </IconButton>
        <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
        <Tooltip title="clear imported citation">
          <IconButton sx={{ p: "10px" }} aria-label="clear" onClick={onClearClick}>
            <BackspaceIcon />
          </IconButton>
        </Tooltip>
        <Divider sx={{ height: 28, margin: "0 12px 0 0" }} orientation="vertical" />
        <UploadFileModel documentType={documentType} />
      </Paper>

      {previewOutput && (
        <List sx={{ bgcolor: "background.paper", margin: "8px" }}>
          <ListItem
            key="citation-import"
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="edit-citation"
                onClick={onEditClick}
              >
                <EditIcon />
              </IconButton>
            }
          >
            {outputJson && (
              <ListItemIcon>{DocumentIcon[outputJson.type]}</ListItemIcon>
            )}
            <ListItemText>
              <div dangerouslySetInnerHTML={{ __html: previewOutput }} />
            </ListItemText>
          </ListItem>
          {outputJson && outputJson.type !== CitationJSDocumentType[documentType] && (
            <Alert severity="warning">
              Type of imported citations not similar to the one selected — Import
              this citation from <b>{DocumentLabel[outputJson.type]}</b> section
            </Alert>
          )}
        </List>
      )}

      <Snackbar
        open={showAlert}
        autoHideDuration={2000}
        onClose={closeSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={closeSnackbar} severity="error" sx={{ width: "100%" }}>
          we couldn&apos;t find any results
        </Alert>
      </Snackbar>
    </Box>
  )
}
