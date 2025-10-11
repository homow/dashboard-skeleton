import OpenMobileNavMenuBtn from "./OpenMobileNavMenuBtn.jsx";

export default function LeftTopBar({setMobileNavOpen}) {
    return (
        <div className={"md:hidden"}>
            <OpenMobileNavMenuBtn setMobileNavOpen={setMobileNavOpen}/>
        </div>
    )
}
