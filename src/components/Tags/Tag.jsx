import React from 'react'
import LinkCustom from 'src/subComponents/LinkCustom'

const Tag = ({ tag }) => {
    const { name, link } = tag
    return (
        <LinkCustom href={link}>
            <a className='p-2 hover:text-secondary transition-all duration-300 badge badge-ghost badge-lg'>
                {name}
            </a>
        </LinkCustom>
    )
}

export default Tag