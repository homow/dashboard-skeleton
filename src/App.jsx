import {useState} from "react";
import TopBar from "@/layout/TopBar";
import MainLayout from "@/layout/MainLayout";
import SideBar from "@/layout/SideBar";
import Footer from "@/layout/Footer";
import SvgDefs from "@components/ui/SvgDefs.jsx";
import Overlay from "@components/ui/Overlay.jsx";

export default function App() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    return (
        <section id="app-container" className="flex flex-row min-h-screen">

            {/* svg icons */}
            <SvgDefs/>

            {/* overlay */}
            <Overlay flag={mobileNavOpen} setFlag={setMobileNavOpen}/>

            {/* side bar menu and links */}
            <SideBar mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen}/>

            <section className={"transition-all ml-custom flex-1 px-3 sm:px-6 flex flex-col"}>

                {/* top bar | header */}
                <TopBar mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen}/>

                {/* main content */}
                <MainLayout/>

                {/* footer */}
                <Footer/>
            </section>
        </section>
    )
}
