import * as React from "react"
import { Box, Container } from "@mui/material"
import Seo from "../components/Seo"
import Layout from "../components/pages/Layout"
import { useEffect, useState } from "react"

const ReferencesManagerPage: React.FC = () => {
  const [format, setFormat] = useState()

  useEffect(() => {
    const format = window.history.state?.format
    if (format) {
      setFormat(format)
    }
  }, [setFormat])

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
        {format && <Container>CSL List :{format}</Container>}
      </Box>
    </Layout>
  )
}

export default ReferencesManagerPage
