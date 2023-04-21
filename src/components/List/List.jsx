import React from 'react'
import { BlockRenderer } from '../BlockRenderer'


const List = ({ content }) => {
    return (
        <ul>
            <BlockRenderer blocks={content} />
        </ul>
    )
}

export default List