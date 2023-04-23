import { ChevronLeftIcon, HomeIcon } from '@heroicons/react/24/outline';
import React from 'react'
import LinkCustom from 'src/subComponents/LinkCustom';
import { relativeToAbsoluteUrls } from './relativeToAbsoluteUrls';

const Crumb = ({ text, href, last = false }) => {
    if (last) {
        return <li className="text-gray-500">{text}</li>
    }

    // All other crumbs will be rendered as links that can be visited 
    return (
        <li>
            <LinkCustom href={relativeToAbsoluteUrls(href)}>
                <a className='text-primary flex items-center py-2'>
                    {text === "Home" ? <HomeIcon className='w-5 h-5' /> : { text }}
                    <ChevronLeftIcon className='w-4 h-4 mr-2' />
                </a>
            </LinkCustom>
        </li>
    );
}

export default Crumb