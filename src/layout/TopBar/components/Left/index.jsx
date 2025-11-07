import {useMobileNav} from "@context/MobileNavContext";

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
            <svg className={"size-6"}>
                <use href="#bars-icon"></use>
            </svg>
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