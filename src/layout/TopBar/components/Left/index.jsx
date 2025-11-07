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
            <svg className={"size-6 -scale-x-100"}>
                <use href="#bars-icon"></use>
            </svg>
        </span>
    )
}

export default function Right() {
    return (
        <div className={"md:hidden"}>
            <OpenMobileNavMenuBtn/>
        </div>
    )
}