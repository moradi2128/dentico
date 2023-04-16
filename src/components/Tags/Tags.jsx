import React from 'react'
import Tag from './Tag'

const Tags = ({ tags }) => {
    return (
        <div>
            {/* === Title === */}
            <h2 className='text-2xl mb-3 font-semibold text-primary'>تگ ها</h2>

            {/* === body === */}
            <div className='flex gap-5'>
                {(tags || []).map((tag, i) => {
                    return <Tag key={i} tag={tag} />
                })}
            </div>

        </div>
    )
}

export default Tags