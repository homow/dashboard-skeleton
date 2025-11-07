import {useState} from "react";
import {cn} from "@utils/ui-utils.js";
import Page1 from "./Page-1";
import Page2 from "./Page-2";

const homeRoutesData = [
    {name: "تب-1"},
    {name: "تب-2"},
]

export default function HomePageLayout() {
    const [activeTab, setActiveTab] = useState("تب-1");

    return (
        <>
            <section className={"main-components space-y-8"}>
                <h1 className={"text-center"}>خانه</h1>

                <ul
                    className={"flex flex-row items-center gap-6"}
                >
                    {homeRoutesData.map(data => (
                        <button
                            onClick={() => setActiveTab(data.name)}
                            key={data.name}
                            className={cn("relative cursor-pointer ", activeTab === data.name && "text-sky-500")}
                        >
                            {data.name}
                            <span className={cn("absolute inline-block left-1/2 -translate-x-1/2 -bottom-2 bg-primary-txt w-full h-[1.7px]", activeTab === data.name && "bg-sky-500")}/>
                        </button>
                    ))}
                </ul>
            </section>

            <section>
                {activeTab === "تب-1" && <Page1/>}
                {activeTab === "تب-2" && <Page2/>}
            </section>
        </>
    )
}