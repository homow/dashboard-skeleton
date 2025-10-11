import RightTopBar from './RightTopBar/RightTopBar.jsx'
import LeftTopBar from "./LeftTopBar/LeftTopBar.jsx";

export default function TopBar({setMobileNavOpen}) {
    return (
        <header className={"flex items-center justify-between top-0 h-16 md:justify-end"}>

            {/* left top bar */}
            <LeftTopBar setMobileNavOpen={setMobileNavOpen}/>

            {/* right top bar */}
            <RightTopBar/>
        </header>
    )
}
