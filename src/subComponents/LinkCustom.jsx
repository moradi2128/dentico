import Link from 'next/link'
import React from 'react'

const LinkCustom = (props) => {
    return (
        <Link passHref legacyBehavior
            href={decodeURI(props.href)}
            {...Object.fromEntries(Object.entries(props).filter(([key]) => key.includes('children') === false || key.includes('href')))}

        >
            {props.children}
        </Link>
    )
}

export default LinkCustom