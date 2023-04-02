import React from 'react'
import { usePageContext } from 'src/context/page'
import Heading from '../Heading/Heading'

const PostTitle = ({ lavel,
    textAlign }) => {
    const { title } = usePageContext()
    return (
        <Heading content={title} level={lavel} textAlign={textAlign} />
    )
}

export default PostTitle
