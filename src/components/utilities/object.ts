import { Citation } from "../../types"
import { User } from "../../cslTypes/type"

export const isEmptyObject = (citation: Citation): boolean =>
  Object.values(citation).every((value) => {
    switch (typeof value) {
      case "string":
        return value === undefined || value === ""
      case "number":
        return value === undefined
      case "object": {
        if (value instanceof Array && value.length > 0) {
          return !(
            isObjectWithValue(value[0], "family") ||
            isObjectWithValue(value[0], "given") ||
            isObjectWithValue(value[0], "suffix")
          )
        } else return false
      }
      default:
        return false
    }
  })

const isObjectWithValue = (obj: User, key: "family" | "given" | "suffix") => {
  const length = obj[key]?.length
  return length && length > 0
}
