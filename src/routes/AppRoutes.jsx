import {createBrowserRouter} from "react-router-dom";
import LazyWithSuspense from "@ui/suspense/LazyWithSuspense";
import MainLayout from "@/layout/MainLayout";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import App from "@/App"

const Login = LazyWithSuspense(() => import("@pages/Login"), "fixed inset-0");
const Home = LazyWithSuspense(() => import("@pages/Home"));
const Analytics = LazyWithSuspense(() => import("@pages/Analytics"));
const Email = LazyWithSuspense(() => import("@pages/Email"));
const User = LazyWithSuspense(() => import("@pages/User"));
const Rules = LazyWithSuspense(() => import("@pages/Rules"));
const NotFound = LazyWithSuspense(() => import("@pages/NotFound"));

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