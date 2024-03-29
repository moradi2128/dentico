import React from 'react'

const Columns = ({ isStackedOnMobile, children }) => {
    return (
        <div className='my-10 container'>
            <div className={`gap-5 mx-auto ${isStackedOnMobile ? "block md:flex" : "flex"}`}>{children}</div>
        </div>
    )
}

export default Columns
