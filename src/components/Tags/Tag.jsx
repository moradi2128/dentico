import Link from 'next/link'
import React from 'react'

const Tag = ({ tag }) => {
    const { name, link } = tag
    return (
        <Link href={link}>
            <a className='p-2 hover:text-secondary transition-all duration-300'>
                {name}
            </a>
        </Link>
    )
}

export default Tag