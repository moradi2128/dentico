import Link from 'next/link'
import React from 'react'

const Category = ({ category }) => {
    return (
        <Link href={category.link} >
            <a className="py-2 text-gray-400 hover:text-secondary transition-all duration-300">
                {category.name}
            </a>
        </Link>
    )
}

export default Category