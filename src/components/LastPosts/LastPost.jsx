import { convertDateToPersionDate } from '@/src/utils/convertDateToPersionDate';
import { ArrowLongLeftIcon } from '@heroicons/react/24/outline';
import React from 'react'
import LinkCustom from 'src/subComponents/LinkCustom';

const LastPost = ({ post }) => {
    const { uri, title, date, commentCount } = post

    return (
        <LinkCustom href={uri || ""}>
            <a className='group flex justify-between items-center transition-all duration-300 px-3 py-2 rounded-lg hover:bg-gray-200 border-r-[3px] border-secondary'>
                <span >
                    {/* === title === */}
                    <h2 className='text-lg mb-2 font-extralight group-hover:text-secondary'>{title}</h2>
                    <span className='flex gap-4 items-center'>
                        {/* === date === */}
                        <p className='text-xs'>{convertDateToPersionDate(date)}</p>
                        {/* === comment count === */}
                        {commentCount && <p className='text-xs'>نظرات کاربران : {commentCount}</p>}
                    </span>
                </span>
                {/* === arror icon === */}
                <ArrowLongLeftIcon className='w-5 h-5 ml-1 transition-all duration-200 group-hover:ml-0' />
            </a>
        </LinkCustom >
    )
}

export default LastPost