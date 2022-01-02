import React, { useCallback, useContext, useMemo, useState } from "react"
import {
  Box,
  Checkbox,
  Container,
  IconButton,
  List,
  ListItem,
  ListSubheader,
  Stack,
  Typography,
} from "@mui/material"
import ListIcon from "@mui/icons-material/List"
import FilterListIcon from "@mui/icons-material/FilterList"
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp"
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"
import styled from "styled-components"
import { generateCitation } from "./utilities/citation_generator"
import { DBContext } from "../provider/DBProvider"
import { CitationDocumentType } from "../types"

export const ReferencesList: React.FC = () => {
  const { state, showCitationsList, dispatch } = useContext(DBContext)
  const citations = useMemo(
    () =>
      Object.values(state.value.journal).map((c) => ({
        view: generateCitation(c, "article-journal"),
        citationID: c.id,
      })),
    [state.value.journal],
  )

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

const ListHeader: React.FC = () => (
  <ListSubheader>
    <Typography>References</Typography>
    <Stack justifyContent="space-between" direction="row">
      <Box>
        <IconButton>
          <ListIcon />
        </IconButton>
        <IconButton>
          <FilterListIcon />
        </IconButton>
        <IconButton>
          <RemoveRedEyeIcon />
        </IconButton>
      </Box>
      <Checkbox edge="end" />
    </Stack>
  </ListSubheader>
)

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
