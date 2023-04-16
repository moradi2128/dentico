import React from 'react'

const Modal = (props) => {
    const { htmlFor, title, children } = props
    return (
        <>
            <input type="checkbox" id={htmlFor} className="modal-toggle" />
            <label htmlFor={htmlFor} className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <label htmlFor={htmlFor} className="btn btn-sm btn-square absolute left-5 top-5">✕</label>
                    {title && <h3 className="text-lg font-bold">{title}</h3>}
                    {children && <div className='my-4'>
                        {children}
                    </div>}
                </label>
            </label>
        </>

    )
}

export default Modal