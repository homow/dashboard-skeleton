import {useEffect} from "react";
import HomePageLayout from "./HomePageLayout.jsx";

export default function Home() {
    useEffect(() => {
        document.title = 'Home | Dashboard';
    }, [])

    return (
        <div>
            <HomePageLayout/>
        </div>
    )
}
