import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import "@/styles/global.css";
import App from './App';
import BASE_PATH from "@/config.js";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={BASE_PATH}>
            <App/>
        </BrowserRouter>
    </StrictMode>,
);