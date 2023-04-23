import Image from 'next/image';
import React from 'react'
import Avatar from 'src/subComponents/Avatar';
import LinkCustom from 'src/subComponents/LinkCustom';

const Post = ({ post }) => {
  let { author, categories, featuredImage, tags, title, excerpt, uri, date, } = post
  uri = `${"/posts" + uri}`
  return (
    // <div className=' group p-5 min-h-[500px] rounded-xl shadow-custom relative overflow-hidden'>
    //   {/* === Header === */}
    //   <div className='absolute inset-3 -z-10 h-[80%] overflow-hidden rounded-xl shadow-xl'>
    //     {featuredImage && <Image src={featuredImage?.node.sourceUrl} layout="fill" objectFit="cover" className='-z-10' alt={title} />}
    //     {/* <div className='absolute bg-black/30 inset-0 group-hover:bg-black/40 transition-all duration-300 ' /> */}
    //     <div className='absolute bg-gradient-to-b from-zinc-900/20 to-black/60 inset-0 group-hover:bg-black/40 transition-all duration-300 ' />
    //     <div className='h-full flex items-end px-3 py-4 z-0 relative'>
    //       <div className='flex gap-3'>
    //         {(tags?.nodes || []).map((tag, i) => {
    //           return <div className="badge bg-white badge-sm outline-none border-none text-gray-500" key={i}>{tag?.name}</div>
    //         })}
    //       </div>
    //     </div>
    //   </div>
    //   {/* === Body === */}
    //   <Link href={uri}>
    //     <a>
    //       <div className='px-3 pt-4 justify-between flex flex-col flex-1 h-full'>
    //         <div>
    //           <Link href={uri}>
    //             <a >
    //               <h2 className='text-2xl text-white mb-2'>{title}</h2>
    //             </a>
    //           </Link>
    //           <div className='flex gap-1 items-center'>
    //             {(categories?.nodes || []).filter(category => category.name !== "Uncategorized").map((category, i) => {
    //               return <p className='text-white text-sm' key={i}>{(i !== 0 ? ", " : "") + category.name}</p>
    //             })}
    //           </div>
    //         </div>
    //         <Avatar
    //           url={author?.node.avatar.url}
    //           name={author?.node.name}
    //           date={date}
    //         />
    //       </div>
    //     </a>
    //   </Link>
    //   {/* === Footer === */}
    // </div>
    <div className=' group p-5 min-h-[500px] rounded-xl shadow-custom relative overflow-hidden'>
      {/* === Header === */}
      <div className='absolute inset-0 -z-10 h overflow-hidden rounded-xl group-hover:scale-105 transition-all duration-500'>
        {featuredImage && <Image src={featuredImage?.node.sourceUrl} layout="fill" objectFit="cover" className='-z-10' alt={title} />}
        <div className='absolute bg-gradient-to-b from-zinc-900/10 to-black/70 inset-0 group-hover:bg-black/20 transition-all duration-300 ' />
      </div>
      {/* === Body === */}
      <LinkCustom href={uri}>
        <a>
          <div className='px-3 pt-4 justify-end flex flex-col flex-1 h-full gap-4'>
            <div className='border-b border-gray-300 pb-4'>
              <LinkCustom href={uri}>
                <a >
                  <h2 className='text-2xl text-white mb-3'>{title}</h2>
                </a>
              </LinkCustom>
              <div
              className='text-gray-300 text-[.8rem] line-clamp-3 text-justify'
                dangerouslySetInnerHTML={{ __html: excerpt }}
              />
            </div>
            <Avatar
              light
              url={author?.node.avatar.url}
              name={author?.node.name}
              date={date}
            />
          </div>
        </a>
      </LinkCustom>
      {/* === Footer === */}
    </div>
  )
}

export default Post