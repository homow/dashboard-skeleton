import {useState} from "react";
import Layout from "./Layout";
import {cn} from "@utils/ui-utils.js";
import Page2 from "@pages/Home/routes/Page2/index.jsx";

const homeRoutesData = [
    {name: "Page-1"},
    {name: "Page-2"},
]

export default function HomePageLayout() {
    const [activeTab, setActiveTab] = useState("page-1");

    return (
        <>
            <section className={"main-components space-y-8"}>
                <h1 className={"text-center"}>Home</h1>

                <ul
                    className={"flex flex-row items-center gap-6"}
                >
                    {homeRoutesData.map(data => (
                        <button
                            onClick={() => setActiveTab(data.name)}
                            key={data.name}
                            className={cn(" relative cursor-pointer ", activeTab === data.name && "text-sky-500")}
                        >
                            {data.name}
                            <span className={cn("absolute inline-block left-1/2 -translate-x-1/2 -bottom-2 bg-primary-txt w-full h-[1.7px]", activeTab === data.name && "bg-sky-500")}/>
                        </button>
                    ))}
                </ul>
            </section>

            <section>
                {activeTab === "Page-1" && <Layout/>}
                {activeTab === "Page-2" && <Page2/>}
            </section>
        </>
    )
}