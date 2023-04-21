import { ChevronLeftIcon, HomeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import React from 'react'
import { relativeToAbsoluteUrls } from './relativeToAbsoluteUrls';

const Crumb = ({ text, href, last = false }) => {
    if (last) {
        return <li className="text-gray-500">{text}</li>
    }

    // All other crumbs will be rendered as links that can be visited 
    return (
        <li>
            <Link href={relativeToAbsoluteUrls(href)}>
                <a className='text-primary flex items-center py-2'>
                    {text === "Home" ? <HomeIcon className='w-5 h-5' /> : { text }}
                    <ChevronLeftIcon className='w-4 h-4 mr-2' />
                </a>
            </Link>
        </li>
    );
}

export default Crumb