import React, { useCallback } from "react"
import { CitationOutput } from "../../types"

type ClipboardProps = {
  handleClick: (event: React.MouseEvent<HTMLElement>) => void
  handleClose: (
    event?: Event | React.SyntheticEvent<Element, Event> | undefined,
    reason?: string | undefined,
  ) => void
  showAlert: boolean
}

export default (citation?: CitationOutput): ClipboardProps => {
  const [showAlert, setShowAlert] = React.useState(false)

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLElement>) => {
      if (!citation) {
        return
      }

      const target = ((event.target as HTMLElement)?.parentNode as HTMLButtonElement)
        .value
      let clipboardText = ""

      if (target === "citation") {
        clipboardText = citation.html
      } else {
        clipboardText = citation.inText
      }

      (async () => {
        await navigator.clipboard.writeText(clipboardText)
      })()

      setShowAlert(true)
    },
    [citation],
  )

  const handleClose = useCallback(
    (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === "clickaway") {
        return
      }
      setShowAlert(false)
    },
    [],
  )

  return { handleClick, handleClose, showAlert }
}
