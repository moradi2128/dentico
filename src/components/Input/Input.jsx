import React from 'react'

const Input = ({ ...rest }) => {
    return (
        <input {...rest} className="block rounded border-slate-400 border-2 hover:border-slate-500" />
    )
}

export default Input
