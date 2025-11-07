import {useState} from "react";
import {Link} from "react-router-dom";
import {cn} from "@utils/ui-utils";
import Overlay from "@components/ui/Overlay";
import AlertModal from "@components/ui/modals/AlertModal";
import ConfirmModal from "@components/ui/modals/ConfirmModal";
import AccountAvatar from "../../common/AccountAvatar";
import Icon from "@components/ui/icons/Icon";
import {useAuth} from "@context/AuthContext";

function DropDownAccountOptions({data, className, setOpenMenu}) {
    const iconElem = icon => <Icon icon={icon} className={"size-5"}/>;

    const onClickHandler = (callback, event) => {
        event.stopPropagation();

        if (callback) {
            callback();
            return;
        }

        setOpenMenu(false);
    }

    return (
        <ul className={cn("divide-y divide-disable-txt/30 *:last:hover:bg-rose-600 *:last:active:bg-rose-600", className)}>
            {data.map(link => {
                return (
                    <li
                        key={link.name}
                        className={"w-full px-4 py-0.5 *:py-1.5 *:hover:opacity-100 hover:text-white hover:bg-sky-500 active:bg-sky-500 active:text-white *:active:text-white *:hover:text-white *:transition-all *:duration-300 *:rounded-md"}>
                        {link.url ? (
                            <Link
                                onClick={event => onClickHandler(null, event)}
                                to={`${link.url}`}
                                className={"w-full flex flex-row items-start gap-2"}>
                                {iconElem(link.icon)}
                                {link.name}
                            </Link>
                        ) : (
                            <p
                                onClick={event => onClickHandler(link.callback, event)}
                                className={"flex flex-row items-center gap-2 cursor-pointer"}>
                                {iconElem(link.icon)}
                                {link.name}
                            </p>
                        )}
                    </li>
                )
            })}
        </ul>
    )
}

function AccountInfo({className}) {
    const {user} = useAuth();

    return (
        <div dir={"ltr"} className={`px-5 flex flex-row items-start gap-4 ${className}`}>
            {/* account avatar */}
            <AccountAvatar/>

            {/* account details */}
            <div>
                <p>{user?.display_name}</p>
                <p className={"text-secondary-txt text-sm"}>{user?.role}</p>
            </div>
        </div>
    )
}

export default function DropDownAccount({setOpenMenu, open, className}) {
    const [openLogoutModal, setOpenLogoutModal] = useState(false);
    const [isOpenAlertModal, setIsOpenAlertModal] = useState(false);
    const [alertModalData, setAlertModalData] = useState({type: "error", message: ""});
    const [lockScreenOpen, setLockScreenOpen] = useState(false);
    const {setAuthInfo} = useAuth();

    // drop down options
    const openLogoutModalHandler = () => {
        setOpenLogoutModal(true);
    }

    // close logout modals
    const closeLogoutModalHandler = () => setOpenLogoutModal(false);

    const logoutHandler = () => {
        setIsOpenAlertModal(true);
        setAlertModalData({type: "success", message: "Logout successfully."});
        setOpenLogoutModal(false);
        setLockScreenOpen(true);

        setTimeout(() => {
            setIsOpenAlertModal(false);
            setAlertModalData({type: "error", message: ""});
            setAuthInfo({userData: {}, accessToken: null});
            setLockScreenOpen(false);
        }, 5000);
    }

    // drop down option
    const dropDownAccountOptionsData = [
        {icon: "user", url: "/account", name: "Account"},
        {icon: "logout", callback: openLogoutModalHandler, name: "Logout"},
    ];

    if (!open) return null;

    return (
        <div
            className={cn("w-58 mt-2 absolute top-full right-0 z-20 bg-main-bg py-2  rounded-md shadow-2xl", className)}
        >

            {/* account info */}
            <AccountInfo
                className={"pb-4 border-b border-disable-txt/50"}
            />

            {/* drop down options */}
            <DropDownAccountOptions
                setOpenMenu={setOpenMenu}
                className={"pt-2"}
                data={dropDownAccountOptionsData}
            />

            {/* confirm logout modals */}
            <ConfirmModal
                title={"Logout"}
                message={"Can you Sure you want to logout?"}
                onConfirm={logoutHandler}
                onCancel={closeLogoutModalHandler}
                isOpen={openLogoutModal}
                cancelText={"No"}
                confirmText={"Yes"}
                dangerMode={true}
            />

            {/* overlay */}
            <Overlay
                flag={openLogoutModal}
                setFlag={setOpenLogoutModal}
                lock={lockScreenOpen}
            />

            {/* alert modals for success message after logout */}
            <AlertModal
                {...alertModalData}
                isOpen={isOpenAlertModal}
                setData={setAlertModalData}
                setIsOpen={setIsOpenAlertModal}
            />

            {/* overlay and screen locked when user logout */}
            <Overlay
                flag={lockScreenOpen}
                lock={true}
            />
        </div>
    )
};