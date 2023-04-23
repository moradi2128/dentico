import Image from 'next/image'
import React from 'react'
import LinkCustom from 'src/subComponents/LinkCustom'

const Logo = ({ src }) => {
    return (
        <LinkCustom href="/">
            <a className="-m-1.5 p-1.5">
                {src && <Image src={src} width={150} height={60} objectFit='contain' alt="Logo" />}
            </a>
        </LinkCustom>
    )
}

export default Logo