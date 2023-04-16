import React from 'react'
import Post from './Post'

const PostsRsults = ({ posts }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {posts.map((post, index) => {
                return <Post key={index} post={post} />
            })}
        </div>
    )
}

export default PostsRsults