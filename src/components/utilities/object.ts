import { Citation } from "../../types"

export const isEmptyObject = (citation: Citation): boolean =>
  Object.values(citation).every((value) => {
    switch (typeof value) {
      case "string":
        return value === undefined || value === ""
      case "number":
        return value === undefined
      case "object":
        // console.log(value)
        return false
      // return (
      //   value === undefined ||
      //   !value.find(
      //     (auth: Author) =>
      //       (auth.given && auth.given.length > 0) ||
      //       (auth.family && auth.family.length > 0),
      //   )
      // )
      default:
        return false
    }
  })
