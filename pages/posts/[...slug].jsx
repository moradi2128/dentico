import { BlockRenderer } from '@/src/components/BlockRenderer'
import Comments from '@/src/components/Comments/Comments'
import CommentForm from '@/src/components/CommnetForm/CommentForm'
import { cleanAndTransformBlocks } from '@/src/utils/cleanAndTransformBlocks'
import { gql } from '@apollo/client'
import { ChatBubbleBottomCenterIcon } from '@heroicons/react/24/outline'
import client from 'client'
import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'
import Avatar from 'src/subComponents/Avatar'
import Modal from 'src/subComponents/Modal'

const PostDetail = (props) => {
  const { title, featuredImage, date, databaseId, commentCount, comments, blocksJSON, author } = props.post
  const [blogs, setBlogs] = useState([])
  // === message handler => comment form ===
  const [errorMessage, setErrorMessage] = useState(false)
  const [successMessage, setSuccessMessage] = useState(false)
  // === loading for submit comment btn ===
  const [loading, setLoading] = useState(false)

  const blogsRender = useCallback(async () => {
    const _blogs = await cleanAndTransformBlocks(blocksJSON)
    setBlogs(_blogs)
  }, [blocksJSON])

  useEffect(() => {
    blogsRender()
  }, [blocksJSON])

  // === post comment handler ===
  const obSubmitHandler = async (commentData) => {
    setLoading(true)

    fetch(process.env.WP_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
               mutation CREATE_COMMENT($author: String!, $commentOn: Int!, $content: String!) {
                 createComment(input: {commentOn: $commentOn, content: $content, author: $author}) {
                 success
                 }
                }
      `,
        variables: {
          commentOn: databaseId,
          content: commentData.content,
          author: commentData.author
        },
      }),
    }).then(res => res.json())
      .then(res => {
        setLoading(false)
        if (res.data.createComment) {
          if (res.data.createComment.success) {
            setSuccessMessage(true)
            setTimeout(() => {
              setSuccessMessage(false)
            }, 3500)
          }
        } else {
          setErrorMessage(true)
          setTimeout(() => {
            setErrorMessage(false)
          }, 3500)
        }
      })
      .catch((e) => {
        setLoading(false);
        console.log(e)
      })
  }
  return (
    <div>
      {/* === cover === */}
      <div className="text-white min-h-[600px] relative flex justify-center items-center z-10">
        {featuredImage.node.sourceUrl && <Image src={featuredImage.node.sourceUrl} layout="fill" objectFit='cover' className='mix-blend-soft-light' alt={title} />}
      </div>
      <div className='mx-auto max-w-4xl my-10 px-4'>
        {/* === Title === */}
        <h2 className='text-5xl lg:text-6xl mb-8'>{title}</h2>
        {/* === Author info === */}
        <div className='mb-10 flex items-end gap-3'>
          <Avatar name={author.node.name} date={date} url={author.node.avatar.url} />
          {commentCount && <p className='text-gray-400 text-[.7rem] whitespace-nowrap mb-0.5'>نظرات ثبت شده : {commentCount}</p>}
        </div>
        {/* === Blocks === */}
        <BlockRenderer blocks={blogs} />

        {/* === comments === */}
        <div className="my-14">
          <div className='flex justify-between items-center'>
            <h2 className='mb-4 text-2xl md:text-4xl text-primary font-semibold'>نظرات کاربران</h2>
            {/* === comment Form Modal btn === */}
            <label htmlFor="commnetForms" className="btn gap-2 btn-ghost relative">
              <svg viewBox="0 0 39 104" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 rotate-45 absolute -top-5 right-0"><path d="M9.96 92.03c3.946 3.092 9.307 7.14 13.43 9.493m0 0c.474.271.204-3.913.177-4.109-.581-4.301-1.625-8.535-2.764-12.848m2.586 16.957C4.44 80.457-2.175 53.037 5.481 38.907c.758-1.4 1.586-2.924 2.55-4.313m0 0c1.537-2.213 3.422-4.087 5.935-4.59 2.318-.463 5.784.17 7.94 2.607 4.027 4.553 2.166 11.094-2.429 11.22-4.037.112-9.76-4.42-11.445-9.237Zm0 0a9.684 9.684 0 0 1-.1-.305C.23 9.709 19.54-1.921 36.868 3.657" stroke="currentColor" strokeWidth="3" strokeMiterlimit="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
              <ChatBubbleBottomCenterIcon className='w-6 h-6' />
              ثبت نظر
            </label>
          </div>
          {/* === commnet forms === */}
          <Modal title="ثبت نظر" htmlFor="commnetForms">
            <CommentForm
              loading={loading}
              errorMessage={errorMessage}
              successMessage={successMessage}
              obSubmit={(commentData) => {
                obSubmitHandler(commentData)
              }} />
          </Modal>
          {/* === commnets list === */}
          <Comments comments={comments.nodes} />
        </div>
      </div>
    </div>
  )
}

export default PostDetail

export async function getServerSideProps(ctx) {
  const uri = `${ctx.query.slug.join("/")}`
  const { data } = await client.query({
    query: gql`
      query Post($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Post {
            author {
              node {
                avatar {
                  url
                }
                name
              }
            }
            date
            title
            databaseId
            commentCount
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
            blocksJSON
            comments {
              nodes {
                content
                id
                date
                author {
                  node {
                    name
                    avatar {
                      url
                    }
                  }
                }
                parent {
                  node {
                    author {
                      node {
                        name
                        avatar {
                          url
                        }
                      }
                    }
                    id
                    date
                  }
                }
              }
            }
          }
        }
      }
        `,
    variables: { uri }
  })

  return {
    props: {
      post: data.nodeByUri,
    },
  }

}