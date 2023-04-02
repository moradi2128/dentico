import React from 'react'

const IocnButton = ({ children, onClick, ...res }) => {
    return (
        <button type="button" className='w-[45px] h-[45px] flex justify-center items-center p-2 rounded-md shadow-custom-xl' onClick={onClick} {...res}>
            {children}
        </button>
    )
}

export default IocnButton