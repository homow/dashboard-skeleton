import {useRoutes} from "react-router-dom";
import Home from "@pages/Home"

export default function AppRoutes() {
    return useRoutes([
        {path: "/", element: <Home/>}
    ])
}
