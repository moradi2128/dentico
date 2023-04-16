import { getFontSizeForHeading, getTextAlign } from '@/src/utils/fonts'
import React from 'react'

const Heading = ({ textAlign, content, level, textColor="#000" }) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: { __html: content },
        className: `container mx-auto my-6 ${getTextAlign(textAlign)} ${getFontSizeForHeading(level)}`,
        style: { color: textColor }
    })
return tag
}

export default Heading
