import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AppBar, Link, Stack, styled, Toolbar } from "@mui/material"

const Header: React.FC = () => (
  <AppBar position="relative" color="transparent" sx={{ background: "#2f69a3" }}>
    <Toolbar sx={{ justifyContent: "space-between" }}>
      <Link href="/" sx={{ margin: "2px" }}>
        <StaticImage src="../images/logo_white.png" alt="Citation Generator" />
      </Link>
      {/*  TODO:: add other options, eg: search for a style   */}
      <Stack direction="row" spacing={2}>
        <PageLink underline="none" color="white">
          Bibliography
        </PageLink>
        <PageLink href="/cslList" underline="none" color="white">
          Citation Styles
        </PageLink>
      </Stack>
    </Toolbar>
  </AppBar>
)

const PageLink = styled(Link)`
  :hover {
    color: #a2acbd;
  }
  cursor: pointer;
`

export default Header
