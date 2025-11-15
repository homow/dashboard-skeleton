import React, {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {RouterProvider} from "react-router-dom";
import "@/styles/global.css";
import router from "@/routes/AppRoutes";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router}/>
    </StrictMode>,
);