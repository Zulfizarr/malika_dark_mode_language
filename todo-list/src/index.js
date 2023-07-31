import {createRoot} from "react-dom/client"
import {App} from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// import{BrowserRouter as Router} from "react-router-dom"
import{ContextProvider} from "./Context";
const root = createRoot(document.getElementById("root"))
root.render(
    <>
    {/* <Router> */}
        <ContextProvider>
            <App name="Messi"/>
        </ContextProvider>
    {/* </Router> */}
    </>
)