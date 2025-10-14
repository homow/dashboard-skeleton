import AppRoutes from "@/routes/AppRoutes.jsx";

export default function MainLayout() {
    return (
        <main
            id="main"
            className={"@container/main relative h-full pb-5 space-y-6"}>

            {/* Routes */}
            <AppRoutes/>
        </main>
    )
}
