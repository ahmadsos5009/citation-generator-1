import * as React from "react"
import { Alert, Box, Container, Typography } from "@mui/material"
import Seo from "../components/Seo"
import Layout from "../components/pages/Layout"
import { StaticImage } from "gatsby-plugin-image"

const HelpPage: React.FC = () => {
  return (
    <Layout>
      <Seo title="Help" />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container>
          <Typography component="h1" variant="h4" color="text.primary" gutterBottom>
            Help
          </Typography>
          <Alert severity="warning">
            Work in progress to add guidance for each feature
          </Alert>
          <Container maxWidth="sm" sx={{ padding: "12px" }}>
            <StaticImage src="../images/work_on_progress.png" alt="Citation" />
          </Container>
        </Container>
      </Box>
    </Layout>
  )
}

export default HelpPage
