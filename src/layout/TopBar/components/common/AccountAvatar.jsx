import {useEffect, useState} from "react";
import {cn} from "@/lib/utils/ui-utils.js";
import avatar from "@img/top-bar/Avatar.webp"

export default function AccountAvatar({className = null}) {
    const [online, setOnline] = useState(navigator.onLine);

    useEffect(() => {
        const handleOnline = () => setOnline(true);
        const handleOffline = () => setOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        };
    }, []);

    return (
        <div className={cn("relative size-10 rounded-full", className)}>
            <img className={"w-full"} src={`${avatar}`} alt="avatar profile"/>
            <span className={`absolute bottom-0 right-0 border-2 border-primary-bg rounded-full size-3 ${online ? "bg-green-500" : "bg-red-600"}`}></span>
        </div>
    )
}
