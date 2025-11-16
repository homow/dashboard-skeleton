import {lazy} from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayout from "@/layout/MainLayout";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import App from "@/App"

const Login = lazyWithSuspense(() => import("@pages/Login"), "fixed inset-0");
const Home = lazyWithSuspense(() => import("@pages/Home"));
const Analytics = lazyWithSuspense(() => import("@pages/Analytics"));
const Email = lazyWithSuspense(() => import("@pages/Email"));
const User = lazyWithSuspense(() => import("@pages/User"));
const Rules = lazyWithSuspense(() => import("@pages/Rules"));
const NotFound = lazyWithSuspense(() => import("@pages/NotFound"));

// routes
const router = createBrowserRouter(
    [{
        element: <App/>,
        children: [
            // when admin not login
            {
                element: <PublicRoutes/>,
                children: [
                    {path: "/login", element: <Login/>}
                ]
            },
            // when admin login
            {
                element: <PrivateRoutes/>,
                children: [{
                    element: <MainLayout/>,
                    children: [
                        {path: "/", element: <Home/>},
                        {path: "/analytics", element: <Analytics/>},
                        {path: "/email", element: <Email/>},
                        {path: "/user", element: <User/>},
                        {path: "/rules", element: <Rules/>},
                        // 404 | not found
                        {path: "*", element: <NotFound/>}
                    ]
                }]
            }
        ]
    }]
);

export default router;