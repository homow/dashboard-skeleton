export default function Page1() {
    return (
        <div style={{fontFamily: "sans-serif"}} className="mb-10 main-components">
            <p className="mb-6" dir={"rtl"}>
                پروژه‌ای برای ساخت سریع پنل مدیریت با React و Tailwind CSS 4.
            </p>

            <div className="flex flex-col gap-2">
                <p className="mb-8">
                    A fast, clean dashboard template built with React and Tailwind CSS 4.
                </p>
                <a
                    className="inline-block max-w-max text-sky-500 hover:underline active:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/homow"
                >
                    my github
                    / گیتهاب
                </a>
                <a
                    className="inline-block max-w-max text-sky-500 hover:underline active:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/homow/dashboard-skeleton"
                >
                    get LTR source here
                    / نسخه انگلیسی سورس، چپ چین
                </a>
                <a
                    className="inline-block max-w-max text-sky-500 hover:underline active:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/homow/dashboard-skeleton/tree/rtl"
                >
                    get RTL source here
                    /
                    نسخه فارسی سورس، راست چین
                </a>
            </div>
        </div>
    )
};