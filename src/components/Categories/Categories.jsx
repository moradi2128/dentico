import React from 'react'
import ArticlesPostLayout from 'src/Layout/ArticlesPostLayout'
import Category from './Category'

const Categories = ({ categories }) => {
    return (
        <ArticlesPostLayout>
            {/* === Title === */}
            <h2 className='text-2xl mb-2 font-semibold text-primary'>دسته بندی ها</h2>

            {/* === body === */}
            <div className='flex flex-col gap-2'>
                {(categories || []).map((category, i) => {
                    return <Category key={i} category={category} />
                })}
            </div>

        </ArticlesPostLayout>
    )
}

export default Categories