import React from 'react'

export const Loading = () => {
    return (
        <div className="flex flex-col justify-center items-center h-screen w-full" id="loading">
            <div className="w-32 h-32 border-t-2 border-indigo-700 rounded-full animate-spin mb-5" />
            <span className="text-indigo-700 text-3xl font-bold ml-2"> {'< Loading />'} </span>
        </div>
    )
}
