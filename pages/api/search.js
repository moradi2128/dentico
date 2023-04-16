import { gql } from "@apollo/client";
import client from "client";

const handler = async (req, res) => {
  try {
    const filters = JSON.parse(req.body);
    const { data } = await client.query({
      query: gql`
      query AllPosts  {
        posts(where: {offsetPagination: {size:3, offset: ${
          ((filters.page || 1) - 1) * 3
        }}}) {
          nodes {
            author {
              node {
                name
                avatar {
                  url
                }
              }
            }
            categories {
              nodes {
                name
              }
            }
            tags {
              nodes {
                name
              }
            }
            uri
            title
            date
            featuredImage {
              node {
                sourceUrl
                uri
              }
            }
          }
          pageInfo {
            offsetPagination {
              total
            }
          }
        }
        }
    `,
    });

    return res.status(200).json({
      total: data.posts.pageInfo.offsetPagination.total,
      posts: data?.posts.nodes,
    });
  } catch (e) {
    console.log("Error Search", e);
  }
};
export default handler;

// properties (where: {offsetPagination: {size:3, offset: ${((filters.page || 1) - 1) * 3}}}){
//   pageInfo {
//     offsetPagination {
//       total
//     }
//   }
//   nodes {
//     uri
//     title
//     databaseId
//     featuredImage {
//       node {
//         uri
//         sourceUrl
//       }
//     }
//     propertyFeatures {
//       bathrooms
//       bedrrom
//       fieldGroupName
//       hasParking
//       petFriendly
//       price
//     }
//   }
// }
