import { QueueListIcon } from '@heroicons/react/24/outline'
import React from 'react'
import ArticlesPostLayout from 'src/Layout/ArticlesPostLayout'
import Category from './Category'

const Categories = ({ categories }) => {
    return (
        <ArticlesPostLayout
            title="دسته بندی ها"
            icon={<QueueListIcon />}
        >
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