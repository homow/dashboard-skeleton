import {useEffect} from "react";

export default function Email() {
    useEffect(() => {
        document.title = 'Email | Dashboard';
    }, [])

    return (
        <h1>Email</h1>
    )
}
