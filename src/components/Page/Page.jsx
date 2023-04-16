
import {  props } from 'dummy';
import React from 'react'
import { PageWrapper } from 'src/context/page';
import { BlockRenderer } from '../BlockRenderer';

const Page = () => {
    return (
        <PageWrapper value={{ title: props.title, featuredImage: props.featuredImage, latestComments: props?.latestComments || null }}>
            <BlockRenderer blocks={props.blocks} />
        </PageWrapper>
    )
}

export default Page
