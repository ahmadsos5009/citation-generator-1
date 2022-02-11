/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// eslint-disable-next-line func-names
exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              path
              title
            }
            id
          }
        }
      }
    }
  `)

  const CSL_XML = async () => {
    const { data } = await graphql(`
      query {
        allCslCodeJson {
          edges {
            node {
              xml
            }
          }
        }
      }
    `)

    const stylesXML = new Map()
    data.allCslCodeJson.edges.map((edge) => {
      const [style, xml] = edge.node.xml
      stylesXML.set(style, xml)
    })
    return stylesXML
  }

  const styles_xml = await CSL_XML()

  // eslint-disable-next-line array-callback-return
  return data.allMdx.edges.map((edge) => {
    const { path, title } = edge.node.frontmatter
    const { id } = edge.node
    const xml = styles_xml.get(path)

    actions.createPage({
      path,
      component: require.resolve("./src/components/pages/Generator.tsx"),
      context: { id, title, style: path, xml },
    })
  })
}

// eslint-disable-next-line @typescript-eslint/no-var-requires
const webpack = require("webpack")

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new webpack.ProvidePlugin({
        process: "process",
      }),
    ],
  })
}
