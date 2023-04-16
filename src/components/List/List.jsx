import React from 'react'
import { BlockRenderer } from '../BlockRenderer'
import ListItem from './ListItem'

const List = ({ content }) => {
    return (
        <ul>
            <BlockRenderer blocks={content} />
        </ul>
    )
}

export default List