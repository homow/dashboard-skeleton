import TopSection from "./TopSection/TopSection.jsx";

export default function HomePageLayout() {
    return (
        <div className={"pt-12"}>
            <div dir="rtl" className={"mb-6"}>
                <p style={{fontFamily: "sans-serif"}}>پروژه‌ای برای ساخت سریع پنل مدیریت با React و Tailwind CSS 4.</p>
            </div>

            <div className="flex flex-col gap-2 mb-10"><p className="mb-8">A fast, clean dashboard template built with React and Tailwind CSS 4.</p><a className="inline-block max-w-max text-sky-500 hover:underline active:underline" target="_blank" href="https://github.com/homow">my github</a><a className="inline-block max-w-max text-sky-500 hover:underline active:underline" target="_blank" href="https://github.com/homow/dashboard-skeleton">get source here</a></div>

            <TopSection/>
        </div>
    )
}