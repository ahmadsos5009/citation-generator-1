import * as React from "react"
import { Box, Container } from "@mui/material"
import Seo from "../components/Seo"
import Layout from "../components/pages/Layout"

const AboutPage: React.FC = () => {
  return (
    <Layout>
      {/* TODO:: add more info */}
      <Seo title="Help" />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container>About</Container>
      </Box>
    </Layout>
  )
}

export default AboutPage
