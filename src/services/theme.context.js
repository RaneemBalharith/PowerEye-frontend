import React,{createContext,useState} from 'react'
export const ThemeContext = createContext()
import {theme} from './theme'
export const ThemeContextProvider =  ({children}) =>{

    return(
        <ThemeContext.Provider value={{theme}}>
            {children}
        </ThemeContext.Provider>
    )
}