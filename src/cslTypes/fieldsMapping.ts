export const labels = {
  title: "Title",
  abstract: "Abstract",
  "container-title": "Publication",
  volume: "Volume",
  issue: "Issue",
  page: "Pages",
  issued: "Date",
  "collection-title": "Series",
  journalAbbreviation: "Journal Abbr",
  language: "Language",
  DOI: "DOI",
  ISSN: "ISSN",
  shortTitle: "Short Title",
  URL: "URL",
  accessed: "Accessed",
  archive: "Archive",
  archive_location: "Loc. in Archive",
  source: "Library Catalog",
  "call-number": "Call Number",
  note: "Extra",
  "publisher-place": "Place",
  "collection-number": "Series Number",
  "number-of-volumes": "# of Volumes",
  edition: "Edition",
  "number-of-pages": "# of Pages",
  ISBN: "ISBN",
}
export const descriptions = {
  title: "primary title of the item",
  abstract: "abstract of the item (e.g. the abstract of a journal article)",
  "container-title":
    "title of the container holding the item (e.g. the book title for a book chapter, the journal title for a journal article)",
  volume:
    "(container) volume holding the item (e.g. “2” when citing a chapter from book volume 2)",
  issue:
    "(container) issue holding the item (e.g. “5” when citing a journal article from journal volume 2, issue 5)",
  page: "range of pages the item (e.g. a journal article) covers in a container (e.g. a journal issue)",
  issued: "date the item was issued/published",
  "collection-title":
    "title of the collection holding the item (e.g. the series title for a book)",
  journalAbbreviation: "",
  language: "Language code. Not intended for display purposes.",
  DOI: "Digital Object Identifier (e.g. “10.1128/AEM.02591-07”)",
  ISSN: "International Standard Serial Number",
  shortTitle: "",
  URL: "Uniform Resource Locator (e.g. “http://aem.asm.org/cgi/content/full/74/9/2766”)",
  accessed: "date the item has been accessed",
  archive: "archive storing the item",
  archive_location:
    "storage location within an archive (e.g. a box and folder number)",
  source: "from whence the item originates (e.g. a library catalog or database)",
  "call-number": "call number (to locate the item in a library)",
  note: "(short) inline note giving additional item details (e.g. a concise summary or commentary)",
  "publisher-place": "geographic location of the publisher",
  "collection-number":
    "number identifying the collection holding the item (e.g. the series number for a book)",
  "number-of-volumes":
    "total number of volumes, usable for citing multi-volume books and such",
  edition:
    "(container) edition holding the item (e.g. “3” when citing a chapter in the third edition of a book)",
  "number-of-pages": "total number of pages of the cited item",
  ISBN: "International Standard Book Number",
}
export const users = {
  author: "author",
  editor: "editor",
  "container-author": "bookAuthor",
  composer: "composer",
  director: "director",
  interviewer: "interviewer",
  recipient: "recipient",
  "reviewed-author": "reviewedAuthor",
  "collection-editor": "seriesEditor",
  translator: "translator",
  contributor: "contributor",
}
export const documentUser = {
  "article-journal": [
    "author",
    "contributor",
    "editor",
    "reviewed-author",
    "translator",
  ],
  report: ["author", "contributor", "collection-editor", "translator"],
  book: ["author", "contributor", "editor", "collection-editor", "translator"],
  webpage: ["author", "contributor", "translator"],
}
