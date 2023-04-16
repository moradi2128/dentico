import { convertDateToPersionDate } from '@/src/utils/convertDateToPersionDate';
import Link from 'next/link';
import React from 'react'

const LastPost = ({ post }) => {
    const { uri, title, date } = post
    return (
        <Link href={uri}>
            <a className='flex justify-between items-center hover:text-secondary transition-all duration-300'>
                {/* === title === */}
                <h2 className='text-lg mb-1 font-extralight'>{title}</h2>
                <p className='text-xs'>{convertDateToPersionDate(date)}</p>
            </a>
        </Link>
    )
}

export default LastPost