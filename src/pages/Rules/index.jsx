import {useEffect} from "react";

export default function Rules() {
    useEffect(() => {
        document.title = 'Rules & Permissions | Dashboard';
    }, [])

    return (
        <h1>Rules & Permissions</h1>
    )
}
