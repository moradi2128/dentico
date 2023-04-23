import { BlockRenderer } from '@/src/components/BlockRenderer'
import HeadSeo from '@/src/components/HeadSeo/HeadSeo'
import { cleanAndTransformBlocks } from '@/src/utils/cleanAndTransformBlocks'
import { convertDateToPersionDate } from '@/src/utils/convertDateToPersionDate'
import { gql } from '@apollo/client'
import { CalendarDaysIcon } from '@heroicons/react/24/outline'
import client from 'client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import LinkCustom from 'src/subComponents/LinkCustom'

const GalleryItem = ({ title, destination, date, imageUri, iamgeAlt }) => {
  return <LinkCustom href={destination}>
    <a>
      <div className={`w-full group transition-all relative mb-6 overflow-hidden card-rounded min-h-[500px] shadow-custom-lg hover:shadow-black/40 border border-gray-200`}>
        {imageUri && <Image src={imageUri} layout="fill" objectFit='cover' alt={iamgeAlt || ""} className="group-hover:scale-105 transition-all duration-300" />}
        <div className=' absolute bottom-0 right-0 left-0 opacity-50 transition-all duration-300 h-[100%] group-hover:h-[100%]  bg-gradient-to-t from-primary group-hover:to-primary/60 ' />
        {/* === content === */}
        <div className='[&>p]:text-lg text-white absolute bottom-0 right-0 left-0 p-10 '>
          <div>
            <h3 className="text-white text-2xl mb-2" >{title}</h3>
            {/* === Date === */}
            <div className='flex items-center gap-2'>
              <CalendarDaysIcon className='w-4 h-4 mb-1 text-white' />
              <p className="text-white text-xs" >{convertDateToPersionDate(date)}</p>
            </div>
          </div>
        </div>
      </div>
    </a>
  </LinkCustom>
}
const Gallery = (props) => {
  return (
    <div className='container '>
      <HeadSeo seo={props.seo} />
      <BlockRenderer blocks={props.pageBlock} />
      <div className='columns-1 md:columns-2 lg:columns-3 gap-5 py-16'>
        {(props.gallery || []).map((item, i) => {
          return <GalleryItem
            key={i}
            title={item.title}
            destination={item.uri}
            date={item.date}
            imageUri={item.featuredImage?.node.sourceUrl}
            iamgeAlt={item.featuredImage?.node.altText}
          />
        })}
      </div>
    </div>

  )
}

export default Gallery

export async function getStaticProps() {
  const uri = `gallery`
  const { data: pageBlock } = await client.query({
    query: gql`
      query Page($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
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
          }
        }
      }
        `,
    variables: { uri }
  })
  const { data } = await client.query({
    query: gql`
    query GetAllGallery {
      allGallery {
        nodes {
          title
          uri
          date
          featuredImage {
            node {
              sourceUrl
              altText
            }
          }
        }
      }
    }
      `,
  });


  return {
    props: {
      pageBlock: await cleanAndTransformBlocks(pageBlock.nodeByUri.blocksJSON),
      seo: pageBlock.nodeByUri.seo,
      gallery: data?.allGallery.nodes,
    },
  }
}