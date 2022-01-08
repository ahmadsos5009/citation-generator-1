import React, { useCallback, useContext, useEffect, useRef, useState } from "react"
import { Alert, Box, Snackbar, Stack } from "@mui/material"
import {
  AuthorsInput,
  LinkInput,
  NumberFieldInput,
  PagesInput,
  TextFieldInput,
} from "./Input"
import { StoreContext } from "../provider/Store"
import { CiteResourceButton, ClearFields } from "./Buttons"
import { Citation, CitationDocumentType, CitationOutput, Events } from "../types"
import { generateCitation } from "./utilities/citation_generator"
import { isEmptyObject } from "./utilities/object"
import { useClipboard } from "./hooks"
import { OnFlyCitationBox } from "./Citation"
import { DBContext } from "../provider/DBProvider"
import { clearJournalFields, fillJournalFields } from "./utilities/html_fields"

const Form: React.FC<{ type: CitationDocumentType }> = ({ type }) => {
  switch (type) {
    case CitationDocumentType.JOURNAL:
      return <JournalForm />
    case CitationDocumentType.BOOK:
      return <span>BOOK</span>
    case CitationDocumentType.REPORT:
      return <span>REPORT</span>
    case CitationDocumentType.WEBSITE:
      return <span>WEBSITE</span>
    default:
      return <></>
  }
}

const JournalForm: React.FC = () => {
  const refNode = useRef<HTMLDivElement>()
  const [error, setError] = useState({
    articleTitle: false,
    journalTitle: false,
    year: false,
  })

  const { state, dispatch } = useContext(StoreContext)
  const DB = useContext(DBContext)
  const [citation, setCitation] = useState<CitationOutput | undefined>()

  useEffect(() => {
    fillJournalFields(state.journal)
  }, [])

  useEffect(() => {
    if (!isEmptyObject(state.journal)) {
      const { html, inText } = generateCitation(state.journal, "article-journal")
      setCitation({
        html,
        inText,
      })
      //  TODO:: show error in the UI
    } else {
      setCitation(undefined)
    }
  }, [state])

  const onCiteResource = useCallback(() => {
    const { articleTitle, journalTitle, year } = state.journal

    // TODO:: add pages validation
    if (isEmpty(articleTitle) || isEmpty(journalTitle) || isEmpty(year)) {
      setError({
        articleTitle: isEmpty(articleTitle),
        journalTitle: isEmpty(journalTitle),
        year: isEmpty(year),
      })
    } else {
      setError({
        articleTitle: false,
        journalTitle: false,
        year: false,
      })
      if ("journal" in state) {
        DB.dispatch({
          type: "save",
          citationDocument: CitationDocumentType.JOURNAL,
          citation: state.journal,
        })
        clearJournalFields()

        dispatch({ type: "clear" })

        if (!DB.showCitationsList) {
          DB.setShowCitationsList(true)
        }
      }
    }
  }, [setCitation, state.journal])

  const { showAlert, handleClick, handleClose } = useClipboard(citation)

  useEffect(() => {
    if (!refNode.current) return

    const callback = (e: CustomEvent<{ payload: Citation }>) =>
      dispatch({
        type: "fill",
        documentType: CitationDocumentType.JOURNAL,
        value: e.detail.payload,
      })
    refNode.current?.addEventListener(Events.CITATION, callback as EventListener)
    return () =>
      refNode.current?.removeEventListener(
        Events.CITATION,
        callback as EventListener,
      )
  }, [refNode])

  return (
    <Box
      ref={refNode}
      id="form-container"
      sx={{
        "& .MuiTextField-root": { m: 1 },
      }}
    >
      <OnFlyCitationBox citation={citation} handleClick={handleClick} />

      <TextFieldInput
        label="Article Title *"
        id="articleTitle"
        required
        documentType={CitationDocumentType.JOURNAL}
        error={error.articleTitle}
      />
      <TextFieldInput
        label="Journal Title *"
        id="journalTitle"
        required
        documentType={CitationDocumentType.JOURNAL}
        error={error.journalTitle}
      />
      <NumberFieldInput
        label="Year *"
        id="year"
        required
        documentType={CitationDocumentType.JOURNAL}
        error={error.year}
        inputProps={{ minLength: 4, maxLength: 4, min: 0 }}
      />
      <AuthorsInput documentType={CitationDocumentType.JOURNAL} />
      <NumberFieldInput
        label="Volume"
        id="volume"
        width={200}
        documentType={CitationDocumentType.JOURNAL}
        inputProps={{ min: 0 }}
      />
      <NumberFieldInput
        label="Issue"
        id="issue"
        width={200}
        documentType={CitationDocumentType.JOURNAL}
        inputProps={{ min: 0 }}
      />
      <PagesInput documentType={CitationDocumentType.JOURNAL} />
      <LinkInput documentType={CitationDocumentType.JOURNAL} />

      {/* TODO:: check citation.js support for annotation */}
      {/* <TextFieldInput label="Annotation" id="annotation" documentType="journal" multiline /> */}

      <Stack spacing={4} direction="row" justifyContent="end">
        <ClearFields document={CitationDocumentType.JOURNAL} />
        <CiteResourceButton onCiteResource={onCiteResource} />
      </Stack>

      <Snackbar open={showAlert} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Citation Copied to clipboard
        </Alert>
      </Snackbar>
    </Box>
  )
}

const isEmpty = (text: string | number | undefined) =>
  !text || (!!text && (text as string).length < 1)

export default Form
