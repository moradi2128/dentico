import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Logo = ({ src }) => {
    return (
        <Link href="/">
            <a className="-m-1.5 p-1.5">
                <Image src={src} width={150} height={60} objectFit='contain' alt="Logo" />
            </a>
        </Link>
    )
}

export default Logo