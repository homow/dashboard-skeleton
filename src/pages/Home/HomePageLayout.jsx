export default function HomePageLayout() {
    return (
        <div className="px-2 space-y-10">
            <h1>Home</h1>

            <div dir="rtl">
                <p style={{ fontFamily: "sans-serif" }}>
                    پروژه‌ای برای ساخت سریع پنل مدیریت با React و Tailwind CSS 4.
                </p>
            </div>

            <div className="flex flex-col gap-2">
                <p className="mb-8">A fast, clean dashboard template built with React and Tailwind CSS 4.</p>

                <a
                    className="inline-block max-w-max text-sky-500 hover:underline active:underline"
                    target="_blank"
                    href="https://yourwebsite.com"
                >
                    my github
                </a>
                <a
                    className="inline-block max-w-max text-sky-500 hover:underline active:underline"
                    target="_blank"
                    href="https://github.com/homow/dashboard-template"
                >
                    get source here
                </a>

            </div>
        </div>
    )
}
