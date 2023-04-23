import React from 'react'
import LinkCustom from 'src/subComponents/LinkCustom'

const ButtonLink = ({ destination, label, className }) => {
    return (
        <LinkCustom href={`${destination}`}>
            <a className={`btn-custom ${className ? className : ""}`} >
                {label}
            </a>
        </LinkCustom>
    )
}

export default ButtonLink
