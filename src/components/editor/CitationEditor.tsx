import "./style.css"
import React, { useCallback, useEffect, useState } from "react"

import { CKEditor } from "@ckeditor/ckeditor5-react"
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document"
import { toolbar, colors, fontSize } from "./config"
import { Spinner } from "./Spinner"

const CitationEditor: React.FC = () => {
  const [html, setHtml] = useState<string>()

  const onTextChange = useCallback(
    (event, editor) => {
      // @ts-ignore
      const data = editor.getData()
      setHtml(data)
    },
    [setHtml],
  )

  useEffect(() => {
    const citations = window.history.state
    if (citations === null || !citations.htmlCitations) return

    const parser = new DOMParser()
    const citationsNode = parser.parseFromString(
      citations.htmlCitations,
      "text/html",
    )

    const header = document.createElement("h1")
    header.innerText = "References"

    citationsNode.getElementsByClassName("csl-bib-body")[0].prepend(header)

    const time = setTimeout(
      () => setHtml(citationsNode.documentElement.outerHTML),
      200,
    )
    return () => {
      clearTimeout(time)
    }
  }, [setHtml])

  if (!html) {
    return <Spinner />
  }

  return (
    <div className="document-editor">
      <div className="document-editor__toolbar" />
      <div className="document-editor__editable-container">
        <CKEditor
          // @ts-ignore
          onReady={(editor) => {
            // @ts-ignore
            window.editor = editor
            const toolbarContainer = document.querySelector(
              ".document-editor__toolbar",
            )
            // @ts-ignore
            toolbarContainer.appendChild(editor.ui.view.toolbar.element)
          }}
          onChange={onTextChange}
          editor={DecoupledEditor}
          data={html}
          config={{
            fontSize,
            fontColor: { colors },
            fontBackgroundColor: { colors },
            toolbar,
          }}
        />
      </div>
    </div>
  )
}

export default CitationEditor
