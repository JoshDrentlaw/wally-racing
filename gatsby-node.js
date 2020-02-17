/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const result = await graphql(`
        query {
            allSanityRacers {
                edges {
                    node {
                        url {
                            current
                        }
                    }
                }
            }
        }
    `)
    result.data.allSanityRacers.edges.forEach(({ node }) => {
        createPage({
            path: `/racers/${node.url.current}`,
            component: path.resolve('./src/templates/racer.js'),
            context: {
                slug: node.url.current
            }
        })
    })
}
