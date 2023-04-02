import { getTextAlign } from '@/src/utils/fonts'
import React from 'react'
import ButtonLink from '../ButtonLink/ButtonLink'

const CallToActionButton = ({ buttonLabel, destination, align = "left", className }) => {
    return (
        <div className={getTextAlign(align)} >
            <ButtonLink label={buttonLabel} destination={destination} className={className} />
        </div >
    )
}

export default CallToActionButton
