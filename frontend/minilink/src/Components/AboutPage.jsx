import React from 'react'
import {FaChartLine, FaLink} from "react-icons/fa6"
import {FaEdit, FaShareAlt} from "react-icons/fa";

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
                        <div>
                            <h2 className="sm:text-2xl font-bold text-slate-800">
                                Simple URL Shortening
                            </h2>
                            <p className="text-gray-700">
                                Users can input a long URL and receive a shortened version that is easy to share.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FaShareAlt className="text-green-500 text-3xl mr-4" />
                        <div>
                            <h2 className="sm:text-2xl font-bold text-slate-800">
                                Powerful Analytics
                            </h2>
                            <p className="text-gray-700">
                                MiniLink provides detailed analytics on link usage, including click counts, geographic data, and referral sources.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FaEdit className="text-purple-500 text-3xl mr-4" />
                        <div>
                            <h2 className="sm:text-2xl font-bold text-slate-800">
                                Enhanced Security
                            </h2>
                            <p className="text-gray-700">
                                MiniLink includes features to protect against spam and malicious links, ensuring a safe experience for users.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-start">
                        <FaChartLine className="text-red-500 text-3xl mr-4" />
                        <div>
                            <h2 className="sm:text-2xl font-bold text-slate-800">
                                Fast and Reliable
                            </h2>
                            <p className="text-gray-700">
                                The service is optimized for speed and reliability, ensuring that shortened links are always accessible.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
export default AboutPage
