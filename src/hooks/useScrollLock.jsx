import {useEffect} from "react";

export default function useScrollLock(isLocked) {
    useEffect(() => {
        const body = document.body;

        if (isLocked) {
            body.classList.add("h-screen", "overflow-y-hidden");
        } else {
            body.classList.remove("h-screen", "overflow-y-hidden");
        }
    }, [isLocked]);
}