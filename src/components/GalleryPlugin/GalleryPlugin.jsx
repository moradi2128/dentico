import Image from 'next/image'
import React from 'react'

const GalleryPlugin = ({ content }) => {
    const { images } = content
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 my-8 '>
            {images.map((img, i) => {
                return <div className='group min-h-[250px] w-full relative hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden' key={img.id}>
                    <Image src={img.url} layout="fill" objectFit='cover' alt={img.alt} className="group-hover:scale-105 transition-all duration-300" />
                </div>
            })}
        </div>
    )
}

export default GalleryPlugin