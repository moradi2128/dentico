import Link from 'next/link'
import React from 'react'

const ButtonLink = ({ destination, label, className }) => {
    return (
        <Link href={`${destination}`}>
            <a className={`btn-custom ${className ? className : ""}`} >
                {label}
            </a>
        </Link>
    )
}

export default ButtonLink
