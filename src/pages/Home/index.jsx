import {useEffect} from "react";
import HomePageLayout from "./HomePageLayout";

export default function Home() {
    useEffect(() => {
        document.title = 'خانه | داشبورد';
    }, [])

    return <HomePageLayout/>
}
