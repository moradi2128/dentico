import React from 'react'

const ArticlesPostLayout = ({ title, icon, children }) => {
    return (
        <div className='bg-gray-100 p-5 rounded-xl shadow-custom'>
            <div className='flex items-center gap-2 mb-5 border-b pb-5'>
                {icon && <span className='w-5 h-5'>
                    {icon}
                </span>}
                <h2 className='text-xl font-semibold text-primary'>{title}</h2>
            </div>

            {children}</div>
    )
}

export default ArticlesPostLayout