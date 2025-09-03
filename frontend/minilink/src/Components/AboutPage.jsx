import React from 'react'
import {FaLink, FaShareAt, FaEdit, FaChartLine} from "react-icons/fa6"

const AboutPage = () => {
    return (
        <div className="lg:px-14 sm:px-8 px-5 min-h-[calc(100vh-64px)] pt-2 flex flex-col items-center">
            <div className="bg-white w-full sm:py-10 py-8">
                <h1 className="sm:text-4xl text-slate-800 text-3xl font-bold italic mb-4">
                    About MiniLink
                </h1>
                <p className="text-gray-700 text-sm mb-8 xl:w-[60%] lg:w-[70%] md:w-[80%] w-full">
                    MiniLink is a URL shortening service that allows users to create short, manageable links that redirect to longer URLs.
                    It is designed to make sharing links easier, especially on platforms with character limits or where a clean appearance is desired.
                </p>
                <div className="space-y-5 xl:w-[60%] lg:w-[70%] md:w-[80%] w-full">
                    <div className="flex items-start">
                        <FaLink className="text-blue-500 text-3xl mr-4" />
                    </div>

                </div>
            </div>
        </div>
    )
}
export default AboutPage
