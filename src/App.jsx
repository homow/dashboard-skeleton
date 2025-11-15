import {Outlet} from "react-router-dom";
import {AuthProvider, useAuth} from "@context/AuthContext"
import Loading from "@components/ui/Loading";
import MainLayout from "@/layout/MainLayout";

function InnerApp() {
    const {loading} = useAuth()

    return (
        loading ? (
            <Loading/>
        ) : (
            <MainLayout>
                <Outlet/>
            </MainLayout>
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
