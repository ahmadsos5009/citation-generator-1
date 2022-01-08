import React, { useCallback } from "react"

export default (): {
  anchorEl: null | HTMLElement
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  handleClose: () => void
} => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return { anchorEl, handleClick, handleClose }
}
