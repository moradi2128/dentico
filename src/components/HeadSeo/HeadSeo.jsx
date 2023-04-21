import Head from 'next/head'
import React from 'react'

const HeadSeo = ({ seo }) => {
    return (
        <Head>
            <title>{seo.title}</title>
            <meta name="description" content={seo.metaDesc} />
            {/* <link rel="icon" href="/favicon.ico" /> */}
        </Head>
    )
}

export default HeadSeo
