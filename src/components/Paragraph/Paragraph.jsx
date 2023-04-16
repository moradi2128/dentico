import { getTextAlign } from '@/src/utils/fonts'
import { relativeToAbsoluteUrls } from '@/src/utils/relativeToAbsoluteUrls'
import React from 'react'

const Paragraph = ({
    textAlign = "right",
    textColor,
    content,
    className
}) => {
    return (
        <p
            className={`[&>a]:text-blue-400 [&>a]:underline  text-md lg:text-xl  text-black max-w-6xl mx-auto mb-6 pt-2 ${textAlign === "right" ? "text-justify" : getTextAlign(textAlign)} ${className ? className : ""} `}
            style={{ color: textColor }}
            dangerouslySetInnerHTML={{ __html: content?.includes("<img") ? content : relativeToAbsoluteUrls(content) }} />
    )
}

export default Paragraph
