import React from 'react'

const Pagination = ({ totalPage, onPageClick }) => {
    return (
        <div className='max-w-5xl mx-auto mb-10 flex justify-center gap-2'>
            {
                Array.from({ length: totalPage }).map((_, i) =>
                    <div className='btn' key={i} onClick={() => onPageClick(i + 1)}>
                        {i + 1}
                    </div>
                )
            }
        </div>
    )
}

export default Pagination
