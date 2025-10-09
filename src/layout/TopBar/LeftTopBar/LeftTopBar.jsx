import SearchBar from "./SearchBar.jsx";

export default function LeftTopBar({setMobileNavOpen}) {
    return (
        <div>
            <SearchBar setMobileNavOpen={setMobileNavOpen}/>
        </div>
    )
}
