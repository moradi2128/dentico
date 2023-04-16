import React from 'react'

const Input = (props) => {
    const { value, onChange, onBlur, type = "text", placeholder, label, rightLabel, BLLabel, errorMessage, isInvalid = false } = props
    return (
        <div className="form-control w-full max-w-md">
            {(label || rightLabel) && <label className="label">
                {label && <span className="label-text text-lg font-extralight">{label}</span>}
                {rightLabel && <span className="label-text-alt">{rightLabel}</span>}
            </label>}
            <input
                onBlur={() => typeof onBlur === "function" && onBlur()}
                onChange={(text) => typeof onChange === "function" && onChange(text.target.value)}
                value={value}
                type={type}
                placeholder={placeholder}
                className={`input input-primary input-bordered w-full max-w-md ${isInvalid ? "input-error" : ""}`}
            />
            <label className="label min-h-[35px]">
                {BLLabel && <span className="label-text-alt">{BLLabel}</span>}
                {errorMessage && <span className="label-text-alt text-error">{errorMessage}</span>}
            </label>
        </div>
    )
}

export default Input