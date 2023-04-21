import Crumb from '@/src/utils/Crumb'
import React from 'react'

const Breadcrumb = ({ breadcrumbs }) => {
    return (
        <div className="">
            <ul className='flex items-center gap-2'>
                {(breadcrumbs || []).map((breadcrumb, index) => {
                    return <Crumb key={index} href={breadcrumb.url} text={breadcrumb.text} last={index === breadcrumbs.length - 1} />
                })}
            </ul>
        </div>
    )
}

export default Breadcrumb