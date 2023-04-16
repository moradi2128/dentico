import { CheckIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { BlockRenderer } from '../BlockRenderer'

const ListItem = ({ content, innerBlocks }) => {
    return (
        <li className='py-[10px] '>
            <span className='flex items-start gap-1'>
                <CheckIcon className='w-4 h-4 mt-1 text-primary' />
                <span className='font-semibold'>{content.content}</span>

            </span>
            {innerBlocks && <ul className='pr-5 [&>li]:bg-blue-400'>
                <BlockRenderer blocks={innerBlocks} />
            </ul>
            }
        </li>
    )
}

export default ListItem
