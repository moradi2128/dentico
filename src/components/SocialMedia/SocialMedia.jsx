import { faBathtub } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import LinkCustom from 'src/subComponents/LinkCustom'
const SocialMedia = () => {
    const testData = [
        {
            destination: "/",
            type: "faseBook",
            icon: <FontAwesomeIcon icon={faBathtub} />
        },
        {
            destination: "/",
            type: "instagram",
            icon: <FontAwesomeIcon icon={faBathtub} />
        },
        {
            destination: "/",
            type: "twitter",
            icon: <FontAwesomeIcon icon={faBathtub} />
        },
        {
            destination: "/",
            type: "pinterest",
            icon: <FontAwesomeIcon icon={faBathtub} />
        },
    ]
    return (
        <ui className="flex flex-row justify-between">
            {
                testData.map((item, i) => {
                    return <li key={i} className="w-full border border-gray-400 border-r-0 relative flex flex-col items-center justify-center transition-all
                     before:content-[''] before:absolute before:top-0 before:left-0 before:h-full before:bg-gray-400 before:z-10 before:transition-all
                    last:border-b last:border-gray-400
                    hover:before:w-full
                    group
                    "
                    >
                        <LinkCustom href={item.destination}>
                            <a className='w-[40px] h-[40px] flex justify-center items-center relative z-20 text-gray-400 group-hover:text-secondary'>
                                {item.icon}
                            </a>
                        </LinkCustom>
                    </li>
                })
            }
        </ui>
    )
}

export default SocialMedia
