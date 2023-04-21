import { gql } from "@apollo/client"
import client from "client"
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks"


export const getPageStaticProps = async (context) => {
  const uri = context.params?.slug ? `/${context.params.slug.join("/")}/` : "/"
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocksJSON
            seo {
              breadcrumbs {
                url
                text
              }
              fullHead
              metaDesc
              title
            }
            comments(first: 5) {
              nodes {
                content
                id
                parentId
                  parent {
            node {
              date
              author {
                node {
                  name
                  avatar {
                    url
                  }
                }
              }
            }
          }
              }
            }
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }  
      }
      `,
    variables: { uri }
  })
  return {
    props: {
      title: data.nodeByUri.title,
      seo: data.nodeByUri.seo,
      blocks: await cleanAndTransformBlocks(data.nodeByUri.blocksJSON),
      latestComments: data.nodeByUri?.comments?.nodes || null,
      featuredImage: data.nodeByUri?.featuredImage?.node?.sourceUrl || null,
    }
  }
}
