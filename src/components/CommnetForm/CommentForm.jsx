import React, { useReducer, useState } from 'react'
import Input from 'src/subComponents/Input'
import Textarea from 'src/subComponents/Textarea'

const initialState = {
    author: "",
    content: "",
};

const initialValidityState = {
    authorError: false,
    authorErrorMessage: "",
    contentError: false,
    contentErrorMessage: "",
    isFormValid: false,
};

const formReducer = (state, action) => {
    switch (action.type) {
        case "UPDATE_AUTHOR":
            return {
                ...state,
                author: action.payLoad,
            };
        case "UPDATE_CONTENT":
            return {
                ...state,
                content: action.payLoad,
            };
        default:
            return state;
    }
};
const formValidityReducer = (
    state,
    action
) => {
    let isValid = false;
    let IsRequired = "";
    switch (action.type) {
        case "VALIDATE_AUTHOR":
            isValid = action.payLoad.author.length > 3 ? true : false;
            IsRequired =
                action.payLoad.author.length == 0
                    ? "لطفا نام خود را وارد کنید!"
                    : !isValid
                        ? "نام وارد شده کمتر از 4 کارکتر می باشد"
                        : "";
            return {
                ...state,
                ...{
                    authorError: !isValid,
                    isFormValid: (isValid || IsRequired == "") && !state.contentError,
                    authorErrorMessage: IsRequired,
                },
            };
        case "VALIDATE_CONTENT":
            isValid = action.payLoad.content.length > 3 ? true : false;
            IsRequired =
                action.payLoad.content.length == 0
                    ? "لطفا نظر خود را وارد کنید!"
                    : !isValid
                        ? "نظر شما باید حداقل بیشتر از یک کلمه باشد"
                        : "";
            return {
                ...state,
                ...{
                    contentError: !isValid,
                    isFormValid: (isValid || IsRequired == "") && !state.authorError,
                    contentErrorMessage: IsRequired,
                },
            };
        default:
            return state;
    }
};
const CommentForm = ({ obSubmit, successMessage = false, errorMessage = false, loading }) => {
    // === Form Validation ===
    const [formData, setFormData] = useReducer(formReducer, initialState);
    const [formValidityData, setFormValidityData] = useReducer(
        formValidityReducer,
        initialValidityState
    );
    const onSubmitHandler = () => {
        setFormValidityData({
            type: "VALIDATE_AUTHOR",
            payLoad: formData,
        });
        setFormValidityData({
            type: "VALIDATE_CONTENT",
            payLoad: formData,
        });
        typeof obSubmit === "function" && formValidityData.isFormValid && obSubmit({ author: formData.author, content: formData.content })
    }
    return (
        <div className='flex flex-col gap-2'>
            {/* === fullName Input === */}
            <Input
                value={formData.author}
                onChange={(txt) => {
                    setFormData({
                        type: "UPDATE_AUTHOR",
                        payLoad: txt,
                    })
                    if (formData.author.length > 3) {
                        setFormValidityData({
                            type: "VALIDATE_AUTHOR",
                            payLoad: formData,
                        })
                    }
                }}
                onBlur={() =>
                    setFormValidityData({
                        type: "VALIDATE_AUTHOR",
                        payLoad: formData,
                    })
                }
                isInvalid={formValidityData.authorError}
                errorMessage={formValidityData.authorErrorMessage}
                label="نام و نام خانوادگی *"
                placeholder="محمد محمدی"
            />
            {/* === commnet Textarea */}
            <Textarea
                value={formData.content}
                onChange={(txt) => {
                    setFormData({
                        type: "UPDATE_CONTENT",
                        payLoad: txt,
                    })
                    if (formData.content.length > 3) {
                        setFormValidityData({
                            type: "VALIDATE_CONTENT",
                            payLoad: formData,
                        })
                    }
                }}
                onBlur={() =>
                    setFormValidityData({
                        type: "VALIDATE_CONTENT",
                        payLoad: formData,
                    })
                }
                isInvalid={formValidityData.contentError}
                errorMessage={formValidityData.contentErrorMessage}
                label="نظر *"
            />
            {/* === success alert === */}
            <div role="alert" className={` rounded-xl border border-gray-100 p-4 shadow-xl ${successMessage ? "visible" : "hidden"}`}>
                <div className="flex items-start gap-4">
                    <span className="text-green-600">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="h-6 w-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </span>
                    <div className="flex-1">
                        <strong className="block font-medium text-gray-900"> نظر شما با موفقیت ثبت شد </strong>
                        <p className="mt-1 text-sm text-gray-700">
                            پس از تایید ادمین نظر شما نمایش داده میشود
                        </p>
                    </div>

                </div>
            </div>
            {/* === error message === */}
            <div role="alert" className={`rounded border-r-4 border-red-500 bg-red-50 p-4 ${errorMessage ? "visible" : "hidden"}`}>
                <strong className="block font-medium text-red-800"> خطا در ارسال نظر </strong>
                <p className="mt-2 text-sm text-red-700">
                    نظر شما قبلا ثبت شده است
                </p>
            </div>
            {/* === Submit === */}
            <button className={`btn btn-primary mb-0 mt-1 ${loading ? "loading" : ""}`} onClick={() => onSubmitHandler()}>
                ثبت نظر
            </button>
        </div>
    )
}

export default CommentForm