import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { AppBar, Toolbar } from "@mui/material"

const Header: React.FC = () => (
  <AppBar position="relative" color="transparent">
    <Toolbar>
      <StaticImage
        src="../images/logo.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="Citation Generator"
      />
      {/*  TODO:: add other options, eg: search for a style   */}
    </Toolbar>
  </AppBar>
)

export default Header
