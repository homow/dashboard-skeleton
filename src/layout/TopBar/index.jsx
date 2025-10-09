import RightTopBar from './RightTopBar/RightTopBar.jsx'
import LeftTopBar from "./LeftTopBar/LeftTopBar.jsx";

export default function TopBar({setMobileNavOpen}) {
    return (
        <div className={"flex items-center justify-between top-0 h-16"}>

            {/* left top bar */}
            <LeftTopBar setMobileNavOpen={setMobileNavOpen}/>

            {/* right top bar */}
            <RightTopBar/>
        </div>
    )
}
