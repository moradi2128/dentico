import { convertDateToPersionDate } from '@/src/utils/convertDateToPersionDate'
import { UserCircleIcon, UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'


const RenderDate = (props) => {
    return <span className="text-gray-400 text-[.6rem] whitespace-nowrap">{convertDateToPersionDate(props.date)}</span>
}

const Avatar = (props) => {
    const { name, date, url, alt = "Avatar", size = 50, light = false } = props

    return (
        <div className={`flex flex-row gap-3 items-ends ${light ? "bg-slate-100 w-fit py-2 pr-2 pl-6 rounded-tr-xl rounded-bl-xl" : ""}`}>
            <div className="avatar">
                <div className="w-11 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mask mask-hexagon flex items-center justify-center ">
                    {url ?
                        <Image src={url} alt={alt} width={size} height={size} />
                        :
                        <UserIcon className={`w-8 h-8 text-gray-500`} />
                    }
                </div>
            </div>
            <div className="flex flex-col justify-around">
                <h3 className="text-[0.8rem] text-gray-500 font-semibold whitespace-nowrap">{name}</h3>
                {date && <RenderDate date={date} light={light} />}
            </div>
        </div>

    )
}

export default Avatar