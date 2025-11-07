import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import "@/styles/global.css";
import App from './App';

const BASE_PATH = import.meta.env.VITE_BASE_PATH || "/"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={BASE_PATH}>
            <App/>
        </BrowserRouter>
    </StrictMode>,
);