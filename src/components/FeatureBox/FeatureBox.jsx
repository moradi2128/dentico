import { relativeToAbsoluteUrls } from '@/src/utils/relativeToAbsoluteUrls'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import React from 'react'
import LinkCustom from 'src/subComponents/LinkCustom'

const FeatureBox = ({ description, title, destination,sub_description }) => {
    const renderCard = (title, description) => {
        return <div className='w-50 m-6 max-w-xs my-5'>
            <div className='block mr-3 p-8 bg-white shadow-custom text-black hover-card'>
                <div className='pb-4'>
                    <h3 className='text-2xl text-secondary mb-2'>{title}</h3>
                    <p className='text-md mb-3 font-semibold'>{description}</p>
                    <p className='text-md font-semibold'>{sub_description}</p>
                </div>
                <div className='w-[50px] h-[50px] rounded-full flex justify-center items-center absolute bg-secondary hover:scale-105 transition-all'>
                    <ChevronRightIcon className='w-6 h-6 text-white' />
                </div>
            </div>
        </div>
    }
    if (destination?.url) {
        return (
            <LinkCustom href={relativeToAbsoluteUrls(destination.url)}>
                <a>
                    {renderCard(title, description)}
                </a>
            </LinkCustom>
        )
    }
    return renderCard(title, description)

}

export default FeatureBox