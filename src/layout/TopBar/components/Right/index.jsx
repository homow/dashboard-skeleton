import Notification from "./Notification/Notification";
import Account from "./AccountMenu/AccountMenu";
import ThemeSection from "./ThemeSection/ThemeSection";
import SearchBar from "./SearchBar/SearchBar";

export default function LeftTopBar() {
    return (
        <div className={"flex items-center justify-between gap-4 py-3 md:flex-1"}>

            {/* search bar */}
            <SearchBar/>

            <div className={"flex items-center justify-between gap-4 py-3"}>
                <ThemeSection/>
                <Notification/>
                <Account/>
            </div>
        </div>
    )
}