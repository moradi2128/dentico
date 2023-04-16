
import { gql } from "@apollo/client"
import client from "client"
import { v4 as uuid } from "uuid"
export const cleanAndTransformBlocks = async (blocksJSON) => {
    const fetchData = await client.query({
        query: gql`
            query ExtraDataQuery {
                pages {
                  nodes {
                    uri
                    databaseId
                  }
                }
                mediaItems {
                    nodes {
                      databaseId
                      mediaDetails {
                        height
                        width
                      }
                    }
                  }
              }
          `
    })
    const data = fetchData?.data
    const blocks = JSON.parse(blocksJSON)
    const deleteKeys = [
        "attributesType",
        "blockType",
        "dynamicContent",
        "originalContent",
        "saveContent",
        "postId",
        "get_parent",
        "order",
    ]

    const cleanBlocks = (b) => {
        b.forEach((block) => {
            block.id = uuid();
            deleteKeys.forEach((deletKey) => {
                delete block[deletKey]
            });
            if (block.name == "acf/ctabutton" && data) {
                const associatedPage = data?.pages.nodes.find((page) => page.databaseId === block.attributes.data.de);
                if (associatedPage) {
                    block.attributes.data.de = associatedPage.uri
                }
            }
            if (block.name == "core/image" && data) {
                const associatedMediaItem = data?.mediaItems?.nodes.find((mediaItem) => mediaItem.databaseId === block.attributes.id);
                if (associatedMediaItem) {
                    block.attributes.orginalHeight = associatedMediaItem.mediaDetails?.height
                    block.attributes.orginalWidth = associatedMediaItem.mediaDetails?.width;
                }
            }
            if (block.innerBlocks?.length) {
                cleanBlocks(block.innerBlocks)
            } else {
                delete block.innerBlocks
            }
        })
    }
    cleanBlocks(blocks)
    return blocks
}
