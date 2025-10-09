import React, {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import BASE_PATH from "./config.js"
import "@/styles/global.css"
import App from './App'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={BASE_PATH}>
            <App/>
        </BrowserRouter>
    </StrictMode>,
)
