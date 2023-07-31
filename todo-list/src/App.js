import { useContext } from "react";
import { Context } from "./Context";
import {Language} from "./Language"
export const App = () => {
    const {dark, setDark, language, setLanguage} = useContext(Context)
    console.log(dark)
    const handleChange  =(event) => {
        setDark(event.target.value)
        window.localStorage.setItem("dark", event.target.value)
    }
    const handleLanguageChange = (event) => {
        setLanguage(event.target.value)
        window.localStorage.setItem("Language", event.target.value)
    }
    return(
        <div className={`App ${dark === "black" ? "bg-dark text-light":"bg-light text-dark"}`}style={{minHeight: "100vh"}}>
            <div className="continer">
                <h1>{Language[language].app} <span>{Language[language].hello}</span></h1>

                <select defaultValue={""} onChange={handleChange}>
                    <option value={""}disabled>Back</option>
                    <option value={"black"}>Black</option>
                    <option value={"white"}>White</option>
                </select>

                <select defaultValue={language} onChange={handleLanguageChange}>
                <option value={""} disabled>Back</option>
                    <option value="uz" >Uz</option>
                    <option value="en" >En</option>
                    <option value="ru" >Ru</option>
                     </select>
            </div>
        </div>
    )
}