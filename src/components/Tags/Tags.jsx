import { TagIcon } from '@heroicons/react/24/outline'
import React from 'react'
import ArticlesPostLayout from 'src/Layout/ArticlesPostLayout'
import NotFoundText from 'src/subComponents/NotFoundText'
import Tag from './Tag'

const Tags = ({ tags }) => {
    return (
        < ArticlesPostLayout title="تگ ها" icon={<TagIcon />}>
            {/* === body === */}
            {tags.length === 0 ?
                <NotFoundText /> :
                <div className='flex gap-5'>
                    {(tags || []).map((tag, i) => {
                        return <Tag key={i} tag={tag} />
                    })}
                </div>}


        </ArticlesPostLayout>
    )
}

export default Tags