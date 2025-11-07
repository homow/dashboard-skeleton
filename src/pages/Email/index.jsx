import {useEffect} from "react";

export default function Email() {
    useEffect(() => {
        document.title = 'ایمیل | داشبورد';
    }, [])

    return (
        <h1>Email</h1>
    )
}
