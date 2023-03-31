import './styles.css'
import './fonts/Montserrat/Montserrat-Medium.ttf';
import React, { Suspense } from "react";
import { createRoot } from 'react-dom/client'
// import App from "./Components/App";
const App = React.lazy(() => import("./Components/App"));
import { AppLoader } from "./Components/Loader.jsx";

if (typeof browser === "undefined") {
    var browser = chrome;
}

createRoot(document.getElementById('root')).render(
    < Suspense fallback={< AppLoader />}>
        <App />
    </Suspense >

)



