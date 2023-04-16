import React from 'react'
import Category from './Category'

const Categories = ({ categories }) => {
    return (
        <div>
            {/* === Title === */}
            <h2 className='text-2xl mb-2 font-semibold text-primary'>دسته بندی ها</h2>

            {/* === body === */}
            <div className='flex flex-col gap-2'>
                {(categories || []).map((category, i) => {
                    return <Category key={i} category={category} />
                })}
            </div>

        </div>
    )
}

export default Categories