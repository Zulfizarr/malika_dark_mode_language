import { createContext, useState } from "react";

export const Context = createContext()

export const ContextProvider = ({children}) => {
    const localsDark = window.localStorage.getItem("dark")
    const [dark, setDark ] = useState(localsDark ? localsDark: "white")
    const localsLanguage = window.localStorage.getItem("Language")
    const [language, setLanguage] = useState(localsLanguage ? localsLanguage : "uz")
    return(
        <Context.Provider value={{dark, setDark, language, setLanguage}}>
            {children}
        </Context.Provider>
    )
}