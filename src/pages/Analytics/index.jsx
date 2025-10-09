import {useEffect} from "react";

export default function Analytics() {
    useEffect(() => {
        document.title = 'Analytics | Dashboard';
    }, [])

    return (
        <h1>Analytics</h1>
    )
}
