import React, { useCallback, useContext, useEffect, useRef, useState } from "react"
import {
  Box,
  FilledInput,
  FormControl,
  IconButton,
  InputBaseComponentProps,
  Stack,
  TextField,
} from "@mui/material"
import styled from "styled-components"
import AddIcon from "@mui/icons-material/Add"
import DeleteIcon from "@mui/icons-material/Delete"
import { v4 as uuid } from "uuid"
import { Author, DocumentType, Events } from "../types"
import { callBack, StoreContext } from "../provider/Store"
import { fillAuthorsFields } from "./utilities/html_fields"

interface FieldProps {
  label: string
  id: string
  required?: boolean | false
  // eslint-disable-next-line react/require-default-props
  multiline?: boolean
  documentType: DocumentType
  error?: boolean
}

interface NumberFieldProps {
  width?: number
  inputProps?: InputBaseComponentProps | undefined
}

export const TextFieldInput: React.FC<FieldProps> = ({
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
      <FormLabel error={error}>{label}</FormLabel>
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

export const NumberFieldInput: React.FC<FieldProps & NumberFieldProps> = ({
  label,
  id,
  required,
  width,
  error,
  inputProps,
  documentType,
}) => {
  const onChange = callBack(id, documentType)

  return (
    <FormControl fullWidth sx={{ m: 1, maxWidth: width || 100 }} variant="outlined">
      <FormLabel error={error}>{label}</FormLabel>
      <FilledInput
        required={required}
        type="number"
        name="test"
        onChange={onChange}
        inputProps={inputProps}
        error={error}
        id={id}
      />
    </FormControl>
  )
}

export const AuthorsInput: React.FC<{ documentType: DocumentType }> = ({
  documentType,
}) => {
  const [authors, setAuthors] = useState<Author[]>([{ id: `Author:${uuid()}` }])
  const nodeRef = useRef<HTMLDivElement>()

  const handleOnAddClick = useCallback(() => {
    setAuthors([...authors, { id: `Author:${uuid()}` }])
  }, [authors, setAuthors])

  const handleOnDeleteClick = useCallback(
    (event) => {
      setAuthors([
        ...authors.filter(
          (author) => author.id !== event.currentTarget.value.replace("delete-", ""),
        ),
      ])
    },
    [authors, setAuthors],
  )

  const onGivenTextChange = useCallback(
    (event) => {
      const { id } = event.currentTarget.parentNode.parentNode.parentNode
      setAuthors([
        ...authors.map((author) =>
          author.id === id
            ? { ...author, given: event.currentTarget.value }
            : author,
        ),
      ])
    },
    [authors, setAuthors],
  )

  const onFamilyTextChange = useCallback(
    (event) => {
      const { id } = event.currentTarget.parentNode.parentNode.parentNode
      setAuthors([
        ...authors.map((author) =>
          author.id === id
            ? { ...author, family: event.currentTarget.value }
            : author,
        ),
      ])
    },
    [authors, setAuthors],
  )

  const { dispatch } = useContext(StoreContext)
  useEffect(() => {
    dispatch({
      type: "set",
      id: "authors",
      documentType,
      value: authors,
    })
    fillAuthorsFields(authors)
  }, [authors, dispatch])

  useEffect(() => {
    if (!nodeRef.current) return

    const callback = (e: CustomEvent<{ payload: Author[] }>) =>
      setAuthors(e.detail.payload)
    nodeRef.current.addEventListener(Events.AUTHORS, callback as EventListener)
    return () =>
      document.removeEventListener(Events.AUTHORS, callback as EventListener)
  }, [nodeRef])

  return (
    <FormControl fullWidth sx={{ m: 1 }} variant="outlined">
      <Stack spacing={4} direction="row" ref={nodeRef} id="author-container">
        <AuthorsLabel id="authors">Author(s)</AuthorsLabel>
        <IconButton aria-label="add" onClick={handleOnAddClick}>
          <AddIcon />
        </IconButton>
      </Stack>
      {authors.map((author) => (
        <Stack id={author.id} key={author.id} spacing={2} direction="row">
          <TextField
            id="given"
            label="Given"
            inputProps={{ className: "given" }}
            onChange={onGivenTextChange}
          />
          <TextField
            id="family"
            label="Family"
            inputProps={{ className: "family" }}
            onChange={onFamilyTextChange}
          />
          <IconButton
            aria-label="delete"
            value={`delete-${author.id}`}
            onClick={handleOnDeleteClick}
          >
            <DeleteIcon />
          </IconButton>
        </Stack>
      ))}
    </FormControl>
  )
}

export const PagesInput: React.FC<{ documentType: DocumentType }> = ({
  documentType,
}) => (
  <Box sx={{ m: 1 }}>
    <AuthorsLabel id="pages">Pages</AuthorsLabel>
    <NumberFieldInput label="From" id="from" documentType={documentType} />
    <NumberFieldInput label="To" id="to" documentType={documentType} />
  </Box>
)

export const LinkInput: React.FC<{ documentType: DocumentType }> = ({
  documentType,
}) => (
  <Box sx={{ m: 1 }}>
    <AuthorsLabel>Use Doi or URL of the journal home page</AuthorsLabel>
    <TextFieldInput label="" id="link" documentType={documentType} />
  </Box>
)

const FormLabel = styled.p<{ error?: boolean }>`
  margin: 0 0 4px 0;
  ${(props) => props.error && "color: rgb(211, 47, 47)"};
`

const AuthorsLabel = styled(FormLabel)`
  display: flex;
  align-items: center;
  padding: 0;
`
