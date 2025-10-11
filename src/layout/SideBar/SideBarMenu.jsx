import {NavLink} from "react-router-dom";

function SideBarLinks({setMobileNavOpen, collapsed, ...props}) {
    const {title, dataLinks} = props.data;

    return (
        <div>
            {/* title links */}
            <div className={`h-4.5 flex items-center gap-4 ${collapsed && "px-2"}`}>
                <div className={`w-10 h-px bg-disable-txt ${collapsed && "hidden"}`}></div>
                <p className={`text-sm text-disable-txt ${collapsed && "hidden"}`}>{title}</p>
                <div className="flex-1 h-px bg-disable-txt"></div>
            </div>

            {/* list of links */}
            <ul className={"mt-3 space-y-1.5"}>
                {dataLinks && dataLinks.map(link => (
                    <li key={link.text}>
                        <NavLink onClick={() => setMobileNavOpen && setMobileNavOpen(false)} to={link.url} className={({isActive}) => `h-10.5 flex items-center pl-5.5 py-2 flex-row gap-3 w-full rounded-r-full ${isActive && "grad-links"}`}>

                            {/* icon */}
                            <span>
                                <svg className={"size-5"}>
                                    <use href={`#${link.icon}-icon`}></use>
                                </svg>
                            </span>

                            {/* text of link */}
                            <span className={`${collapsed && "hidden"}`}>
                                {link.text}
                            </span>
                        </NavLink>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default function SideBarMenu({setMobileNavOpen, collapsed}) {
    const dataLinks = [
        {
            title: "Dashboard", dataLinks: [
                {text: "Home", url: "/", icon: "home"},
                {text: "Analytics", url: "/analytics", icon: "analyze"}
            ]
        },
        {
            title: "APP & PAGES", dataLinks: [
                {text: "Email", url: "/email", icon: "email"},
                {text: "User", url: "/user", icon: "user"},
                {text: "Rules & Permissions", url: "/rules", icon: "lock"},
            ]
        }
    ];

    return (
        <div className={"space-y-5 pb-2"}>
            {dataLinks.length > 0 && dataLinks.map(link => (
                <SideBarLinks key={link.title} data={link} collapsed={collapsed} setMobileNavOpen={setMobileNavOpen}/>
            ))}
        </div>
    )
}
