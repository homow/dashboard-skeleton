import {useMobileNav} from "@context/MobileNavContext";
import Icon from "@ui/icons/Icon";

function OpenMobileNavMenuBtn() {
    const {setOpenMobileNav} = useMobileNav();

    return (
        <span
            onClick={
                () => {
                    setOpenMobileNav(true);
                }}
            className={"cursor-pointer md:hidden"}
        >
            <Icon icon={"bars"} className={"size-6"}/>
        </span>
    )
}

export default function Left() {
    return (
        <div className={"md:hidden"}>
            <OpenMobileNavMenuBtn/>
        </div>
    )
}