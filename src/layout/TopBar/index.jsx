import LeftTopBar from './components/Left';
import RightTopBar from "./components/Right";

export default function TopBar() {
    return (
        <header className={"flex items-center justify-between top-0 h-16 md:justify-end"}>

            {/* left top bar */}
            <LeftTopBar/>

            {/* right top bar */}
            <RightTopBar/>
        </header>
    )
};