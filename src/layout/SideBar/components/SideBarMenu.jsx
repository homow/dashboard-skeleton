import {NavLink} from "react-router-dom";
import {useMobileNav} from "@context/MobileNavContext";
import {useCollapsedMenu} from "@context/CollapsedMenuContext";
import Icon from "@components/ui/icons/Icon";
import {cn} from "@utils/ui-utils.js";

function SideBarLinks({...props}) {
    const {title, dataLinks} = props.data;
    const {setOpenMobileNav} = useMobileNav();
    const {currentCollapsed} = useCollapsedMenu();

    return (
        <div>
            {/* title links */}
            <div className={cn("h-4.5 flex items-center gap-4", currentCollapsed && "px-2")}>

                {/* border */}
                <div className={cn("w-10 h-px bg-disable-txt", currentCollapsed && "hidden")}></div>

                {/* title */}
                <p className={cn("text-sm text-disable-txt", currentCollapsed && "hidden")}>{title}</p>

                {/* border */}
                <div className="flex-1 h-px bg-disable-txt"></div>
            </div>

            {/* list of links */}
            <ul className={"mt-3 space-y-1.5"}>
                {dataLinks && dataLinks.map(link => (
                    <li key={link.text}>
                        <NavLink onClick={() => setOpenMobileNav && setOpenMobileNav(false)} to={link.url} className={({isActive}) => cn("h-10.5 flex items-center pl-5.5 py-2 flex-row gap-3 w-full rounded-r-full hover:opacity-100", isActive && "grad-links", !isActive && "hover:bg-sky-300 hover:text-gray-900  active:bg-sky-300 active:text-gray-900")}>

                            {/* icon */}
                            <Icon icon={link.icon}/>

                            {/* text of link */}
                            <span className={cn(currentCollapsed && "hidden")}>
                                {link.text}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const dataLinks = [
    {
        title: "Dashboard", dataLinks: [
            {text: "Dashboard", url: "/", icon: "home"},
            {text: "Analytics", url: "/analytics", icon: "analyze"}
        ]
    },
    {
        title: "APP & PAGES", dataLinks: [
            {text: "User", url: "/user", icon: "user"},
            {text: "Rules & Permissions", url: "/rules", icon: "lock"},
        ]
    }
];

export default function SideBarMenu() {
    return (
        <div className={"space-y-5 pb-2"}>
            {dataLinks.length > 0 && dataLinks.map(link => (
                <SideBarLinks key={link.title} data={link}/>
            ))}
        </div>
    )
};