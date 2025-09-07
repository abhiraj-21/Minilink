import React, {useState} from 'react'
import Graph from "./Graph.jsx";
import {useStoreContext} from "../../contextApi/ContextApi.jsx";
import {useFetchMyShortUrls, useFetchTotalClicks} from "../../hooks/useQuery.js";
import ShortenPopup from "./ShortenPopup.jsx";
import {FaLink} from "react-icons/fa6";
import ShortenUrlList from "./ShortenUrlList.jsx";

const DashboardLayout = () => {
    const {token} = useStoreContext();
    // const refetch = false
    const [shortenPopUp, setShortenPopUp] = useState(false)

    function onError() {
        console.log("error")
    }

    const {isPending: loader, data: totalClicks} = useFetchTotalClicks(token, onError)
    const {isPending, data: myShortenUrls = [], refetch} = useFetchMyShortUrls(token, onError)

    return (
        <div className="lg:px-14 sm:px-8 px-4 min-h-[calc(100vh-64px)]">
            {loader ? (<p>Loading...</p>) : (
                <div className="lg:w-[90%] w-full mx-auto py-16">
                    <div className="h-96 relative">
                        {totalClicks.length === 0 && (
                            <div className="absolute flex flex-col  justify-center sm:items-center items-end  w-full left-0 top-0 bottom-0 right-0 m-auto">
                                <h1 className=" text-slate-800 font-serif sm:text-2xl text-[18px] font-bold mb-1">
                                    No Data For This Time Period
                                </h1>
                                <h3 className="sm:w-96 w-[90%] sm:ml-0 pl-6 text-center sm:text-lg text-sm text-slate-600">
                                    Share your short links to view where your engagements are coming from!
                                </h3>
                            </div>
                        )}
                        <Graph graphData={totalClicks} />
                    </div>
                    <div className="py-5 sm:text-end text-center">
                        <button className="bg-custom-gradient px-4 py-2 rounded-md text-white hover:cursor-pointer hover:scale-95 duration-300"
                        onClick={ () => setShortenPopUp(true)}>
                            Create a New Short URL
                        </button>
                    </div>

                    <div>
                        {!isPending && myShortenUrls.length === 0 ? (
                            <div className="flex justify-center pt-16">
                                <div className="flex gap-2 items-center justify-center  py-6 sm:px-8 px-5 rounded-md   shadow-lg  bg-gray-50">
                                    <h1 className="text-slate-800 font-montserrat   sm:text-[18px] text-[14px] font-semibold mb-1 ">
                                        You haven't created any short link yet
                                    </h1>
                                    <FaLink className="text-blue-500 sm:text-xl text-sm " />
                                </div>
                            </div>
                        ) : (
                            <ShortenUrlList data={myShortenUrls} />
                        )}
                    </div>

                </div>
            )}

            <ShortenPopup
                refetch={refetch}
                open={shortenPopUp}
                setOpen={setShortenPopUp}
                />
        </div>
    )
}
export default DashboardLayout
