import * as React from "react"
import { Box, Link, Typography } from "@mui/material"
import { StaticImage } from "gatsby-plugin-image"

const Footer: React.FC = () => (
  <Box
    sx={{
      background: "#f4f4f4",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "8px 0",
    }}
    component="footer"
  >
    <Link href="/" sx={{ margin: "2px" }}>
      <StaticImage src="../images/logo_black.png" alt="Citation Generator" />
    </Link>
    <Box
      margin="0 8px"
      sx={{
        typography: "body1",
        "& > :not(style) + :not(style)": {
          ml: 1,
        },
      }}
    >
      <Link href="/help" underline="none">
        Help
      </Link>

      <Link href="/about" underline="none">
        About
      </Link>
    </Box>

    <Typography align="center">© Citation Generator 2022</Typography>
  </Box>
)

export default Footer
