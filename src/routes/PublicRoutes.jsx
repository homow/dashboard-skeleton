import {Navigate, Outlet} from "react-router-dom";
import {useAuth} from "@/context/AuthContext.jsx";

export default function PublicRoutes() {
    const {accessToken} = useAuth();
    return accessToken ? <Navigate to="/"/> : <Outlet/>
}
