import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "@/context/AuthContext.jsx";

export default function PrivateRoutes() {
    const {accessToken} = useAuth();
    return accessToken ? <Outlet/> : <Navigate to="/login"/>
}
