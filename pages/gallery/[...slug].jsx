import { BlockRenderer } from '@/src/components/BlockRenderer'
import Breadcrumb from '@/src/components/Breadcrumb/Breadcrumb'
import Cover from '@/src/components/Cover/Cover'
import { cleanAndTransformBlocks } from '@/src/utils/cleanAndTransformBlocks'
import { convertDateToPersionDate } from '@/src/utils/convertDateToPersionDate'
import { gql } from '@apollo/client'
import client from 'client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'
import ArticlesPostLayout from 'src/Layout/ArticlesPostLayout'
import HeadSeo from "@/src/components/HeadSeo/HeadSeo"
const GalleryDetail = (props) => {
    const { blocksJSON, date, title, featuredImage, seo } = props.galleyDetail
    const [gallery, setGallery] = useState([])
    const [pageName, stPageName] = useState("")
    // const router = useRouter()

    // useEffect(() => {
    //     const checkUri = router.route.includes("/gallery/");
    //     if (checkUri) {
    //         stPageName(element.label)
    //     }
    // }, [])

    const blogsRender = useCallback(async () => {
        const _galley = await cleanAndTransformBlocks(blocksJSON)
        setGallery(_galley)
    }, [blocksJSON])

    useEffect(() => {
        blogsRender()
    }, [])


    return (
        <div>
            <HeadSeo seo={seo} />
            {/* === cover === */}
            <Cover>
                <div className='grid grid-cols-2 items-center'>
                    {/* === header === */}
                    <div>
                        <Breadcrumb breadcrumbs={seo.breadcrumbs} />
                        <h2 className='text-5xl text-secondary my-3'>{title}</h2>
                        <h4 className='text-gray-500'>{convertDateToPersionDate(date)}</h4>
                    </div>
                    {/* === featured Image === */}
                    <div className='w-full h-full min-h-[500px] relative'>
                        {featuredImage.node.sourceUrl && <Image src={featuredImage.node.sourceUrl} layout="fill" objectFit='contain' className='mix-blend-soft-light' alt={title} />}
                    </div>
                </div>
            </Cover>
            {/* === body === */}
            <div className='container  my-10'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    {/* === articels === */}
                    <div >
                        <ArticlesPostLayout
                            title="نمونه درمان"
                        // title={pageName}
                        // icon={<QueueListIcon />}
                        >
                            {/* <h2 className='text-4xl text-primary mb-5'>{pageName}</h2> */}
                            <ul>
                                {(props.allGallery || []).map((gallery, index) => {
                                    return <li className='mb-4' key={index}>
                                        <Link href={gallery.uri}>
                                            <a className="group hover:bg-gray-200 transition-all duration-200 rounded-lg py-3 px-3 text-md justify-between flex items-center border-r-[3px] border-primary">
                                                <span className='group-hover:text-secondary transition-all duration-300'>
                                                    {gallery.title}
                                                </span>
                                                <span className='text-xs'>{convertDateToPersionDate(gallery.date)}</span>
                                            </a>
                                        </Link>
                                    </li>
                                })}
                            </ul>
                        </ArticlesPostLayout>
                    </div>
                    {/* === content body === */}
                    <div className=' my-10 px-4 md:col-span-3'>
                        <BlockRenderer blocks={gallery} />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GalleryDetail

export async function getServerSideProps(ctx) {
    const uri = `${ctx.query.slug.join("/")}`
    const { data } = await client.query({
        query: gql`
      query GetGalleryDetail($uri: String!) {
        galleryBy(uri: $uri) {
            title
            date
            blocksJSON
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
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
        `,
        variables: { uri }
    })
    const { data: allGallery } = await client.query({
        query: gql`
        query GetAllGallery {
          allGallery {
            nodes {
              title
              uri
              date
            }
          }
        }
          `,
    });
    return {
        props: {
            galleyDetail: data.galleryBy,
            allGallery: allGallery.allGallery.nodes,
        },
    }

}   