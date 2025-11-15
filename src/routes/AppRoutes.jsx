import {lazy} from "react";
import {createBrowserRouter} from "react-router-dom";
import SuspenseBoundary from "@components/ui/SuspenseBoundary";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import App from "@/App"
import MainLayout from "@/layout/MainLayout/index.jsx";

const lazyWithSuspense = importFunc => {
    const Component = lazy(importFunc);

    return props => (
        <SuspenseBoundary>
            <Component {...props}/>
        </SuspenseBoundary>
    );
};

const Login = lazy(() => import("@pages/Login"));
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
            {
                element: <PublicRoutes/>,
                children: [
                    {path: "/login", element: <Login/>}
                ]
            },
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