import { getFontSizeForHeading, getTextAlign } from '@/src/utils/fonts'
import React from 'react'

const Heading = ({ textAlign, content, level, textColor="#000" }) => {
    const tag = React.createElement(`h${level}`, {
        dangerouslySetInnerHTML: { __html: content },
        className: `my-6 container ${getTextAlign(textAlign)} ${getFontSizeForHeading(level)}`,
        style: { color: textColor }
    })
return tag
}

export default Heading
