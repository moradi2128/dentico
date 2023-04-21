import { AcademicCapIcon } from '@heroicons/react/24/outline'
import React from 'react'
import ArticlesPostLayout from 'src/Layout/ArticlesPostLayout'
import NotFound from 'src/subComponents/NotFound'
import NotFoundText from 'src/subComponents/NotFoundText'
import LastPost from './LastPost'

const LastPosts = ({ posts }) => {
    return (
        <ArticlesPostLayout title="اخرین پست ها" icon={<AcademicCapIcon />}>
            {/* === body === */}
            <div className='flex flex-col gap-5'>
                {posts.length === 0 ?
                    <NotFoundText />
                    : (posts || []).map((post, i) => {
                        return <LastPost key={i} post={post} />
                    })}
            </div>
        </ArticlesPostLayout>
    )
}

export default LastPosts