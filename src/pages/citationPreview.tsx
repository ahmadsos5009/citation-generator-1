import * as React from "react"
import { Box, Container, Typography } from "@mui/material"
import Seo from "../components/Seo"
import Layout from "../components/pages/Layout"
import Loadable from "@loadable/component"
const CitationEditor = Loadable(() => import("../components/editor/CitationEditor"))

const CitationPreviewPage: React.FC = () => {
  return (
    <Layout>
      <Seo title="Citation List(Bibliography) editor" />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            color="text.primary"
            gutterBottom
          >
            Citation Preview
          </Typography>
          <CitationEditor />
        </Container>
      </Box>
    </Layout>
  )
}

export default CitationPreviewPage
