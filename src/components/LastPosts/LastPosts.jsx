import React from 'react'
import ArticlesPostLayout from 'src/Layout/ArticlesPostLayout'
import LastPost from './LastPost'

const LastPosts = ({ posts }) => {
    return (
      <ArticlesPostLayout>
            {/* === Title === */}
            <h2 className='text-2xl mb-5 font-semibold text-primary'>آخرین پست ها</h2>

            {/* === body === */}
            <div className='flex flex-col gap-5'>
                {(posts || []).map((post, i) => {
                    return <LastPost key={i} post={post} />
                })}
            </div>
        </ArticlesPostLayout>
    )
}

export default LastPosts