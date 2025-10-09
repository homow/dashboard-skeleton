import {useEffect} from "react";

export default function User() {
    useEffect(() => {
        document.title = 'Users | Dashboard';
    }, [])

    return (
        <h1>User</h1>
    )
}
