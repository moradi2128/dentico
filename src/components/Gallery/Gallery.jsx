import React from 'react'
import Heading from '../Heading/Heading'
import Paragraph from '../Paragraph/Paragraph'
import GalleryItem from './GalleryItem'

const Gallery = ({ images }) => {
    return (
        <div className='columns-1 md:columns-2 lg:col-span-3 container mx-auto gap-8 my-8 px-4 md:px-0'>
            <div className=' mb-10 pt-28 '>
                <Heading level={2} content="خدمات " />
                <Paragraph content="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ " />
            </div>
            {images.map((image,index) => {
                return <GalleryItem key={image.id} block={image.attributes}  index={index}/>

            })}
        </div>
    )
}

export default Gallery