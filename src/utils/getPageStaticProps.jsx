import { gql } from "@apollo/client"
import client from "client"
import { cleanAndTransformBlocks } from "./cleanAndTransformBlocks"
import { mainMaenuItems } from "./mapMainMenuItems"

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
          ... on Property {
            id
            title
            blocksJSON
            featuredImage {
              node {
                sourceUrl
              }
            }
          }
        }
        getFooter {
          sidebarOne
          sidebarTwo
          copyrightText
          socialLinks {
            iconName
            iconUrl
          }
        }
  acfOptionsMainMenu {
    logo {
      logo {
        sourceUrl
      }
    }
    mainMenu {
      callToActionButton {
        destination {
          ... on Page {
            id
            uri
          }
        }
        label
      }
      menuItems {
        items {
          destination {
            ... on Page {
              uri
            }
          }
          label
        }
        menuItems {
          destination {
            ... on Page {
              uri
            }
          }
          label
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
      latestComments:data.nodeByUri?.comments?.nodes || null,
      logo: data.acfOptionsMainMenu.logo.logo.sourceUrl || null,
      featuredImage: data.nodeByUri?.featuredImage?.node?.sourceUrl || null,
      mainMenuItems: mainMaenuItems(data.acfOptionsMainMenu.mainMenu.menuItems),
      footer:data.getFooter,
      callToActionLabel: data.acfOptionsMainMenu.mainMenu.callToActionButton.label,
      callToActionDestination: data.acfOptionsMainMenu.mainMenu.callToActionButton.destinatio?.uri || null,
      blocks: await cleanAndTransformBlocks(data.nodeByUri.blocksJSON)
    }
  }
}