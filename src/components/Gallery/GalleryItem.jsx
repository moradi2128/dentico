import Image from 'next/image'
import React from 'react'
import Paragraph from '../Paragraph/Paragraph'

const GalleryItem = ({ block, index }) => {

    const renderCard = () => {
        return <div className={`w-full group transition-all relative mb-6 overflow-hidden card-rounded min-h-[500px]`}>
            <Image src={block.url} layout="fill" objectFit='cover' alt={block.alt || ""} />
            <div className=' absolute bottom-0 right-0 left-0 opacity-50 transition-all duration-300 h-[100%] group-hover:h-[100%]  bg-gradient-to-t from-primary group-hover:to-primary ' />
            {/* === content === */}
            <div className='[&>p]:text-lg text-white absolute bottom-0 right-0 left-0 p-10 
        '>
                {/* <h3 className='text-3xl mb-3'>دکتر مرادی</h3> */}
                <Paragraph content={block.caption} className="text-white" />
            </div>
        </div>
    }
    // if (block.href !== "") {
    //     const convertUrl = block?.href.includes(process.env.NEXT_PUBLIC_WP_URL) ? relativeToAbsoluteUrls(block.href) : block.href
    //     return <Link href={convertUrl} passHref legacyBehavior  >
    //         <a href={convertUrl} className={`aspect-auto block mb-[${index + 3}] ${index % 2 !== 0 ? " min-h-[570px]" : " min-h-[560px]"}`}>{renderCard()}</a>
    //     </Link>
    // }
    return renderCard()
}

export default GalleryItem