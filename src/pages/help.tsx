import * as React from "react"
import { Box, Container } from "@mui/material"
import Seo from "../components/Seo"
import Layout from "../components/pages/Layout"

const HelpPage: React.FC = () => {
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
        <Container>Help</Container>
      </Box>
    </Layout>
  )
}

export default HelpPage
