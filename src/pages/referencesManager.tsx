import * as React from "react"
import { Box, Container } from "@mui/material"
import Seo from "../components/Seo"
import Layout from "../components/pages/Layout"

const ReferencesManagerPage: React.FC = () => {
  return (
    <Layout>
      {/* TODO:: add more info */}
      <Seo title="Citation Style List" />
      <Box
        sx={{
          bgcolor: "background.paper",
          pt: 8,
          pb: 6,
        }}
      >
        <Container>CSL List :{window.history.state.format}</Container>
      </Box>
    </Layout>
  )
}

export default ReferencesManagerPage
