import ThemeSection from './ThemeSection.jsx'
import Account from "./Account.jsx";
import Notification from "./Notification.jsx";
import SearchBar from "./SearchBar.jsx";

export default function TopBar({setMobileNavOpen}) {
    return (
        <div className={"flex items-center justify-between top-0 h-16"}>

            {/* left top bar */}
            <SearchBar setMobileNavOpen={setMobileNavOpen}/>

            {/* right top bar */}
            <div className={"flex items-center justify-between gap-4 py-3"}>
                <ThemeSection/>
                <Notification/>
                <Account/>
            </div>
        </div>
    )
}
