import {useState} from "react";
import Overlay from "@components/ui/Overlay";
import AccountAvatar from "../../common/AccountAvatar";
import DropDownAccount from "./DropDownAccount";
import useScrollLock from "@hooks/useScrollLock";

export default function Account() {
    const [open, setOpen] = useState(false);
    useScrollLock(open);

    return (
        <>
            {/* overlay */}
            <Overlay flag={open} setFlag={setOpen}/>

            <div
                className={"relative z-20"}
                onClick={() => setOpen(true)}
            >
                {/* account avatar */}
                <AccountAvatar className={"cursor-pointer"}/>

                {/* drop down account settings and option */}
                <DropDownAccount
                    setOpenMenu={setOpen}
                    open={open}
                />
            </div>
        </>
    )
}
