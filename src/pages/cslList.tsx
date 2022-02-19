import * as React from "react"
import { Box, Container } from "@mui/material"
import Seo from "../components/Seo"
import Layout from "../components/pages/Layout"

const CSLListPage: React.FC = () => {
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
        <Container>CSL List</Container>
      </Box>
    </Layout>
  )
}

export default CSLListPage
