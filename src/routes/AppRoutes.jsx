import {lazy} from "react";
import {useRoutes} from "react-router-dom";
import SuspenseBoundary from "@components/ui/SuspenseBoundary";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const Login = lazy(() => import("@pages/Login"))
const MainLayout = lazy(() => import("@/layout/MainLayout"));
const Home = lazy(() => import("@pages/Home"));
const Properties = lazy(() => import("@pages/Properties"));
const CreateProperties = lazy(() => import("@pages/Properties/routes/CreateProperties"))
const EditProperties = lazy(() => import("@pages/Properties/routes/EditProperties"))
const Email = lazy(() => import("@pages/Email"));
const User = lazy(() => import("@pages/User"));
const Rules = lazy(() => import("@pages/Rules"));
const NotFound = lazy(() => import("@pages/NotFound"));

// routes
const routes = [
    // when admin not login
    {
        path: "/login",
        element: <PublicRoutes/>,
        children: [
            {index: true, element: <Login/>}
        ]
    },
    // when admin login
    {
        element: <PrivateRoutes/>,
        children: [
            {
                element: <MainLayout/>,
                children: [
                    {path: "/", element: <Home/>},
                    {
                        path: "/properties", element: <Properties/>,
                        children: [
                            {path: "create", element: <CreateProperties/>},
                            {path: "edit", element: <EditProperties/>},
                        ]
                    },
                    {path: "/email", element: <Email/>},
                    {path: "/user", element: <User/>},
                    {path: "/rules", element: <Rules/>},
                    // 404 | not found
                    {path: "*", element: <NotFound/>}
                ]
            }
        ]
    },
]

export default function AppRoutes() {
    return (
        <SuspenseBoundary>
            {useRoutes(routes)}
        </SuspenseBoundary>
    )
}
