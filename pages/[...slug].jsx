import { getPageStaticProps } from '@/src/utils/getPageStaticProps'
import { gql } from '@apollo/client'
import client from 'client'
import Page from "@/src/components/Page/Page";


export default Page;

export const getStaticProps = getPageStaticProps
export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
        query AllPagesQuery {
            pages {
              nodes {
                uri
              }
            }
            properties {
              nodes {
                uri
                title
              }
            }
          }
      `
  })
  var paths = [...data?.pages.nodes, ...data.properties.nodes].map((page => ({
    params: { slug: decodeURI(page?.uri) == "/" ? [] : decodeURI(page?.uri)?.substring(1, page.uri.length - 1)?.split("/").filter(item => item !== "") }
  }
  )))
  const _paths = paths.filter((item) => item.params.slug?.length !== 0)
  return {
    paths: _paths,
    fallback: false
  }
}