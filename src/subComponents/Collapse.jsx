import { XMarkIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Collapse = ({ content }) => {
    // const { jsonAnswer, jsonQuestion, jsonImageSrc } = conetent
    return (
        <details
            className="group rounded-lg border-r-4 border-secondary bg-gray-100 p-6 [&_summary::-webkit-details-marker]:hidden mb-5"
            open
        >
            <summary class="flex items-center justify-between cursor-pointer">
                <div
                    class="text-lg font-medium text-gray-900"
                    dangerouslySetInnerHTML={{ __html: content.jsonQuestion }}
                />

                <span
                    class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-800 sm:p-3"
                >
                    <XMarkIcon
                        class="flex-shrink-0 w-5 h-5 -rotate-45 transition duration-300 group-open:rotate-0"
                    />
                </span>
            </summary>
            <div
                class="mt-4 leading-relaxed text-gray-500 [&>img]:my-3 bg-white p-4 rounded-lg "
                dangerouslySetInnerHTML={{ __html: content.jsonAnswer }}
            />
        </details>
    )
}

export default Collapse
