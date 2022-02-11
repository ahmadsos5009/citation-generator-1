<h1 align="center">
  Citation Generator
</h1>

#### Create Citation online rapidly 🚀, with support for a large number of citation styles, for Book, Journal articles.

#### 🧐 Csl_code styles supported

    ├── apa
    ├── ieee

#### Steps To Add a new CSL Style:
* Add mdx file [MDX](https://github.com/asouqi/citation-generator/blob/master/src/mdx)
* Add new style to the [CitationStyle](https://github.com/asouqi/citation-generator/blob/master/src/types.ts#L26) type
* Add [CSL XML](https://csl.mendeley.com/searchByName/) to new [json object](https://github.com/asouqi/citation-generator/blob/master/data/csl_code.json) as one line use [this tool](https://lingojam.com/TexttoOneLine)
