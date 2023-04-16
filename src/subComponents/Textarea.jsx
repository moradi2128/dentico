import React from 'react'

const Textarea = (props) => {
    const { value, onChange, onBlur, type = "text", placeholder, label, rightLabel, BLLabel, isInvalid = false, errorMessage } = props
    return (
        <div className="form-control w-full max-w-md">
            {(label || rightLabel) && <label className="label">
                {label && <span className="label-text text-lg font-extralight">{label}</span>}
                {rightLabel && <span className="label-text-alt">{rightLabel}</span>}
            </label>}
            <textarea
                onBlur={() => typeof onBlur === "function" && onBlur()}
                onChange={(text) => typeof onChange === "function" && onChange(text.target.value)}
                value={value}
                type={type}
                placeholder={placeholder}
                className={`textarea textarea-bordered textarea-primary min-h-24 w-full max-w-md ${isInvalid ? "textarea-error" : ""}`}
            />
            <label className="label min-h-[35px]">
                {BLLabel && <span className="label-text-alt">{BLLabel}</span>}
                {errorMessage && <span className="label-text-alt text-error">{errorMessage}</span>}
            </label>
        </div>
    )
}

export default Textarea