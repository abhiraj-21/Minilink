import React from 'react'
import Graph from "./Graph.jsx";
import {dummyData} from "../../dummyData/data.js";

const DashboardLayout = () => {
    return (
        <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
            <div className="lg:w-[90%] w-full mx-auto py-16">
                <div className="h-96 relative">
                    <Graph graphData={dummyData} />
                </div>
                <div className="py-5 sm:text-end text-center">
                    <button className="bg-custom-gradient px-4 py-2 rounded-md text-white hover:cursor-pointer hover:scale-95 duration-300">
                        Create a New Short URL
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DashboardLayout
