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
          }
      `
  })
  var paths = [...data?.pages.nodes].filter(page => page.uri !== "/" && page.uri !== "/posts/"&& page.uri !== "/gallery/").map((page => ({
    params: { slug: decodeURI(page?.uri)?.substring(1, page.uri.length - 1)?.split("/").filter(item => item !== "") }
  }
  )))
  return {
    paths,
    fallback: false
  }
}