import {useEffect, useCallback, useState} from "react";
import {Link} from "react-router-dom";
import Icon from "@components/ui/icons/Icon";
import {useCollapsedMenu} from "@context/CollapsedMenuContext";
import {cn} from "@utils/ui-utils.js";

export default function SideBarHeader() {
    const [titleStyle, setTitleStyle] = useState("");
    const {collapsed, setCollapsed} = useCollapsedMenu();

    // apply collapsed state from size
    const applySpacing = useCallback(collapsedState => {
        if (window.innerWidth < 896) {
            document.documentElement.style.setProperty("--spacing-custom", "0px");
            setTitleStyle("")
        } else {
            document.documentElement.style.setProperty(
                "--spacing-custom",
                collapsedState ? "80px" : "260px"
            );
            setTitleStyle(collapsed ? "hidden" : "");
        }
    }, [collapsed]);

    // run in component mounted
    useEffect(() => {
        applySpacing(collapsed);
    }, [applySpacing, collapsed]);

    // apply space in resize
    useEffect(() => {
        const handleResize = () => applySpacing(collapsed);

        window.addEventListener("resize", handleResize);

        // cleanUp event
        return () => window.removeEventListener("resize", handleResize);
    }, [collapsed, applySpacing]);

    // toggle collapse when click to button
    const toggleCollapse = () => {
        setTitleStyle(collapsed ? "hidden" : "");
        const newState = !collapsed;
        setCollapsed(newState);
        localStorage.setItem("collapsedMenu", JSON.stringify(newState));
        applySpacing(newState);
    };

    return (
        <div className={"relative flex items-center justify-between h-16"}>

            {/* brand and logo */}
            <Link to="/" className={"pl-5.5 flex flex-row items-center gap-4 hover:text-primary-txt"}>
               <span>
                    <svg className={"w-7.5 h-[23px]"}>
                        <use href="#logo-icon"></use>
                    </svg>
                </span>
                <span className={cn("font-medium", titleStyle)}>Material</span>
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
