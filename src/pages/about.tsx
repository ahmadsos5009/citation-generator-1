import * as React from "react"
import { Box, Container, Typography } from "@mui/material"
import Seo from "../components/Seo"
import Layout from "../components/pages/Layout"

const AboutPage: React.FC = () => {
  return (
    <Layout>
      <Seo title="About" />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container maxWidth="sm">
          <Typography component="h1" variant="h4" color="text.primary" gutterBottom>
            About
          </Typography>
          <Typography padding={1}>
            Citation generator founded to create citation rapidly by adding citation
            manually or importing bib or tax file, with support a large number of
            citation styles.
          </Typography>
          <Typography padding={1}>
            Extra Services provided:
            <ul>
              <li>store citation locally</li>
              <li>
                generate references list, by exporting it to PDF, Word, BibTex
                Document
              </li>
              <li>Text editor for references list</li>
              <li>
                Provide references management system to add your own collection and
                label
              </li>
            </ul>
          </Typography>
          <Typography padding={1}>All services are free to use.</Typography>
        </Container>
      </Box>
    </Layout>
  )
}

export default AboutPage
