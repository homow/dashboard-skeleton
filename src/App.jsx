import {Outlet} from "react-router-dom";
import {AuthProvider, useAuth} from "@context/AuthContext"
import Loading from "@components/ui/Loading";

function InnerApp() {
    const {loading} = useAuth()

    return (
        loading ? (
            <Loading className={"fixed inset-0 z-10"}/>
        ) : (
            <Outlet/>
        )
    )
}

export default function App() {
    return (
        <AuthProvider>
            <InnerApp/>
        </AuthProvider>
    )
}
