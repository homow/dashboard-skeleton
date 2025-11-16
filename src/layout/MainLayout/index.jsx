import {Outlet} from "react-router-dom";
import TopBar from "../TopBar";
import SideBar from "../SideBar";
import Footer from "../Footer";
import SvgDefs from "@ui/icons/SvgDefs";
import Overlay from "@components/ui/Overlay";
import {MobileNavProvider, useMobileNav} from "@context/MobileNavContext";

function InnerMainLayout() {
    const {openMobileNav, setOpenMobileNav} = useMobileNav();

    return (
        <section id="app-container" className="flex flex-row min-h-svh">

            {/* svg icons */}
            <SvgDefs/>

            {/* overlay */}
            <Overlay
                flag={openMobileNav}
                setFlag={setOpenMobileNav}
                z={"z-30"}
            />

            {/* side bar menu and links */}
            <SideBar/>

            <section className={"transition-all ml-custom flex-1 px-3 sm:px-6 flex flex-col"}>

                {/* top bar | header */}
                <TopBar/>

                {/* main content */}
                <main id="main" className={"@container/main relative h-full pb-5 space-y-6"}>

                    {/* Routes */}
                    <Outlet/>
                </main>

                {/* footer */}
                <Footer/>
            </section>
        </section>
    )
}

export default function MainLayout() {
    return (
        <MobileNavProvider>
            <InnerMainLayout/>
        </MobileNavProvider>
    )
};