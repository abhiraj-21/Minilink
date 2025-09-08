import React from 'react'
import {PuffLoader} from "react-spinners";

const Loader = () => {
    return (
        <div className="flex items-center justify-center w-full min-h-[calc(100vh-64px)]">
            <PuffLoader
                color="#6da5c4"
                loading
                size={150}
            />
        </div>
    )
}
export default Loader
