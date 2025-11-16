import {Link} from "react-router-dom";
import Icon from "@components/ui/icons/Icon";
import {useCollapsedMenu} from "@context/CollapsedMenuContext";
import {cn} from "@utils/ui-utils.js";

export default function SideBarHeader() {
    const {collapsed, setCollapsed, currentCollapsed} = useCollapsedMenu();


    // toggle collapse when click to button
    const toggleCollapse = () => setCollapsed(!collapsed);

    return (
        <div className={"relative flex items-center justify-between h-16"}>

            {/* brand and logo */}
            <Link to="/" className={"pl-5.5 flex flex-row items-center gap-4 hover:text-primary-txt"}>
                <Icon icon={"logo"} className={"w-7.5 h-[23px]"}/>
                <span className={cn("font-medium", currentCollapsed && "hidden")}>Material</span>
            </Link>

            <span
                onClick={toggleCollapse}
                className={cn("hidden md:flex items-center justify-center absolute -right-5.5 cursor-pointer -rotate-180 transition-all duration-500", collapsed && "rotate-0")}
            >
                <Icon icon={"chevronDoubleRight"} className={"size-5"}/>
            </span>
        </div>
    );
};
