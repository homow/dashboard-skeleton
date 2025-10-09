import {useState} from "react";
import TopBar from "@/layout/TopBar";
import MainLayout from "@/layout/MainLayout";
import SideBar from "@/layout/SideBar";
import SvgDefs from "@components/ui/SvgDefs.jsx";
import Overlay from "@components/ui/Overlay.jsx";

export default function App() {
    const [mobileNavOpen, setMobileNavOpen] = useState(false)

    return (
        <div id="app-container" className="flex flex-row min-h-screen">

            {/* svg icons */}
            <SvgDefs/>

            {/* overlay */}
            <Overlay flag={mobileNavOpen} setFlag={setMobileNavOpen}/>

            {/* side bar menu and links */}
            <SideBar mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen}/>

            <div className={"transition-all ml-custom flex-1 px-6 flex flex-col"}>

                {/* top bar | header */}
                <TopBar mobileNavOpen={mobileNavOpen} setMobileNavOpen={setMobileNavOpen}/>

                {/* main content */}
                <MainLayout className={""}/>
            </div>
        </div>
    )
}
