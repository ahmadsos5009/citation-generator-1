import * as React from "react"
import {
  Box,
  Button,
  Container,
  Divider,
  List,
  ListItem,
  ListItemText,
} from "@mui/material"
import Seo from "../components/Seo"
import Layout from "../components/pages/Layout"
import { CSL_METADATA } from "../csl_metadata"

const CSLListPage: React.FC = () => {
  return (
    <Layout>
      <Seo title="Supported Citation Style List" />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container>
          <CSLList />
        </Container>
      </Box>
    </Layout>
  )
}
import CreateIcon from "@mui/icons-material/Create"

const CSLList: React.FC = () => {
  return (
    <List sx={{ width: "100%", bgcolor: "background.paper" }}>
      {Object.values(CSL_METADATA).map((csl) => (
        <div key={csl.id}>
          <ListItem alignItems="flex-start">
            <ListItemText
              primary={`${csl.style_title} (${csl.id})`}
              secondary={
                <Button
                  startIcon={<CreateIcon />}
                  href={`/${csl.id.toLocaleLowerCase()}`}
                >
                  Create Citation
                </Button>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
        </div>
      ))}
    </List>
  )
}

export default CSLListPage
