import React from 'react'
import LinkCustom from 'src/subComponents/LinkCustom'

const Category = ({ category }) => {
    return (
        <LinkCustom href={category.link} >
            <a className="py-2 text-gray-400 hover:text-secondary transition-all duration-300">
                {category.name}
            </a>
        </LinkCustom>
    )
}

export default Category