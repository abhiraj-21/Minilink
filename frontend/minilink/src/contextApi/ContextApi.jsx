import {createContext, useContext, useState} from "react";

const ContextApi = createContext()

export const ContextProvider = ({children}) => {
    const getToken = localStorage.getItem("JWT_TOKEN") ? JSON.parse(localStorage.getItem("JWT_TOKEN")) : null

    const [token, setToken] = useState(getToken)
    const [authenticated, setAuthenticated] = useState(false)

    const sendData = {token, setToken, authenticated, setAuthenticated}

    return <ContextApi.Provider value={sendData}>{children}</ContextApi.Provider>
}

export const useStoreContext = () =>{
    return useContext(ContextApi)
}