import { BlockRenderer } from '@/src/components/BlockRenderer'
import { cleanAndTransformBlocks } from '@/src/utils/cleanAndTransformBlocks'
import { gql } from '@apollo/client'
import client from 'client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useCallback, useEffect, useState } from 'react'

const GalleyDetail = (props) => {
    const { blocksJSON, title, featuredImage } = props.galleyDetail
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
            {/* === cover === */}
            <div className="text-white min-h-[600px] relative flex justify-center items-center z-10">
                {featuredImage.node.sourceUrl && <Image src={featuredImage.node.sourceUrl} layout="fill" objectFit='contain' className='mix-blend-soft-light' alt={title} />}
            </div>
            <div className='container mx-auto px-4 my-10'>
                <div className='grid grid-cols-1 md:grid-cols-4 gap-6'>
                    {/* === articels === */}
                    <div className=''>
                        <h2 className='text-4xl text-primary mb-5'>{pageName}</h2>
                        <ul>
                            {(props.allGallery || []).map((galley) => {
                                return <li className='mb-4' key={gallery.id}>
                                    <Link href={galley.uri}>
                                        <a className="py-2 hover:text-secondary text-md transition-all duration-300">
                                            {galley.title}
                                        </a>
                                    </Link>
                                </li>
                            })}
                        </ul>
                    </div>
                    {/* === content body === */}
                    <div className=' my-10 px-4 col-span-3'>
                        {/* === Title === */}
                        {/* <h2 className='text-5xl lg:text-6xl mb-8'>{title}</h2> */}
                        <BlockRenderer blocks={gallery} />

                    </div>

                </div>
            </div>
        </div>
    )
}

export default GalleyDetail

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