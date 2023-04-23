import React from 'react'

const Loading = () => {
    return (
        <div class="fixed top-0 right-0 h-screen w-screen z-[60] flex justify-center items-center">
            <div class="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
        </div>
    )
}

export default Loading