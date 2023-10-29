import React,{createContext,useState} from 'react'
export const PowerEyeContext = createContext()
export const PowerEyeContextProvider =  ({children}) =>{
    const [loggedIn , setLoggedIn] = useState(true)
    const [notifications , setNotifications] = useState([
        {id:1, screen : '' , title:''},
        {id:2, screen : '' , title:''},
        {id:3, screen : '' , title:''},
        {id:4, screen : '' , title:''},
])
    return(
        <PowerEyeContext.Provider value={{loggedIn,setLoggedIn}}>
            {children}
        </PowerEyeContext.Provider>
    )
}