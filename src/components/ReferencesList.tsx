import React, { useCallback, useContext, useMemo, useState } from "react"
import {
  Box,
  Checkbox,
  Container,
  IconButton,
  List,
  ListItem,
  Stack,
  Typography,
} from "@mui/material"

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import styled from "styled-components"
import { generateCitation } from "./utilities/citation_generator"
import { DBContext } from "../provider/DBProvider"
import { CitationDocumentType, CitationJSDocumentType } from "../types"
import { ReferenceExportButton, ReferenceFilterButton } from "./Buttons"
import { ReferencesListContext } from "../provider/ReferencesListProvider"
import { grey } from "@mui/material/colors"

export const ReferencesList: React.FC = () => {
  const { state, showCitationsList, dispatch } = useContext(DBContext)
  const { filters } = useContext(ReferencesListContext)

  const citations = useMemo(() => {
    const citations: {
      view: { html: string; inText: string }
      citationID: string
    }[] = []
    filters.map((doc) =>
      Object.values(state.value[doc]).map((c) => {
        citations.push({
          view: generateCitation(c, CitationJSDocumentType[doc]),
          citationID: c.id,
        })
      }),
    )
    return citations
  }, [state.value, filters])

  const handleOnDeleteClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (event.currentTarget) {
        dispatch({
          type: "delete",
          citationDocument: CitationDocumentType.JOURNAL,
          citationID: (event.currentTarget as HTMLButtonElement).value,
        })
      }
    },
    [dispatch],
  )

  const handleOnEditClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (event.currentTarget) {
        dispatch({
          type: "edit",
          citationDocument: CitationDocumentType.JOURNAL,
          citationID: (event.currentTarget as HTMLButtonElement).value,
        })
      }
    },
    [dispatch],
  )

  const [toggleInTextCitation, setToggleInTextCitation] = useState(false)
  const onToggleInTextCitationClick = useCallback(
    () => setToggleInTextCitation(!toggleInTextCitation),
    [toggleInTextCitation, setToggleInTextCitation],
  )

  if (!showCitationsList) {
    return <></>
  }

  return (
    <Container
      sx={{
        width: "25%",
        p: 4,
        m: 0,
        textAlign: "center",
        border: "1px solid rgba(0, 0, 0, 0.12);",
        borderRadius: "10px",
      }}
    >
      <List dense subheader={<ListHeader />}>
        {citations.map((citation, index) => {
          const labelId = `checkbox-list-secondary-label-${index}`

          return (
            <RefListItem
              id={labelId}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
              key={index.toString()}
              secondaryAction={
                <Stack direction="row">
                  <Checkbox edge="end" inputProps={{ "aria-labelledby": labelId }} />
                </Stack>
              }
              disablePadding
            >
              <Stack direction="row" alignItems="center">
                <Stack className="edit-button-group" direction="column">
                  <IconButton
                    onClick={handleOnEditClick}
                    value={citation.citationID}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    onClick={handleOnDeleteClick}
                    value={citation.citationID}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Stack>

                <Stack width="80%">
                  <Box
                    dangerouslySetInnerHTML={{
                      __html: citation?.view.html || "",
                    }}
                  />

                  <Box
                    className="in-text-view"
                    style={{ padding: "2px" }}
                    display="flex"
                    flexDirection="column"
                  >
                    <Stack direction="row" alignItems="center">
                      <Typography
                        variant="caption"
                        display="block"
                        gutterBottom
                        margin={0}
                      >
                        In-text Citation
                      </Typography>
                      <IconButton
                        sx={{ padding: 0 }}
                        onClick={onToggleInTextCitationClick}
                      >
                        {(toggleInTextCitation && <ArrowDropUpIcon />) || (
                          <ArrowDropDownIcon />
                        )}
                      </IconButton>
                    </Stack>

                    {toggleInTextCitation && (
                      <Box
                        dangerouslySetInnerHTML={{
                          __html: citation?.view.inText || "",
                        }}
                      />
                    )}
                  </Box>
                </Stack>
              </Stack>
            </RefListItem>
          )
        })}
      </List>
    </Container>
  )
}

const ListHeader: React.FC = () => {
  return (
    <Box>
      <Typography>References</Typography>
      <Stack
        justifyContent="space-between"
        direction="row"
        sx={{
          border: "1px solid rgba(0, 0, 0, 0.12);",
          borderRadius: "10px",
          margin: "12px 0",
          background: grey[300],
        }}
      >
        <Box>
          <ReferenceFilterButton />
          <IconButton>
            <RemoveRedEyeIcon />
          </IconButton>
        </Box>
        <Box marginRight="18px">
          <ReferenceExportButton />
          <Checkbox edge="end" />
        </Box>
      </Stack>
    </Box>
  )
}

const RefListItem = styled(ListItem)`
  .in-text-view {
    max-height: 0;
    max-width: 0;
    transition: max-height 0.15s ease-in, max-width 0.15s ease-out;
    overflow: hidden;
  }
  .edit-button-group {
    max-height: 0;
    max-width: 0;
    transition: max-height 0.15s ease-out, max-width 0.15s ease-out;
    overflow: hidden;
  }

  :hover {
    .in-text-view {
      max-height: fit-content;
      max-width: fit-content;
      transition: max-height 0.5s ease-in, max-width 0.5s ease-in;
    }
    .edit-button-group {
      max-height: fit-content;
      max-width: fit-content;
      transition: max-height 0.5s ease-in, max-width 0.5s ease-in;
    }

    background: #dcdcdc;
    border-radius: 10px;
  }

  .csl-bib-body {
    padding: 4px;
  }
`
