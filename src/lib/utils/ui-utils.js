import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";

const cn = (...inputs) => twMerge(clsx(inputs));

const applyCustomSpace = ({setCurrentCollapsed, collapsed}) => {
    if (window.innerWidth < 896) {
        document.documentElement.style.setProperty("--spacing-custom", "0px");
        setCurrentCollapsed(false);
    } else {
        document.documentElement.style.setProperty(
            "--spacing-custom",
            collapsed ? "80px" : "256px"
        );
        setCurrentCollapsed(collapsed);
    }
}

export {cn, applyCustomSpace};
