import AppRoutes from "@/routes/AppRoutes.jsx";

export default function MainLayout() {
    return (
        <main id="main" className={"relative h-full @container/main"}>

            {/* Routes */}
            <AppRoutes/>
        </main>
    )
}
