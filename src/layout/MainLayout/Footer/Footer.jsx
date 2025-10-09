function FooterCopyright() {
    return (
        <div>
            Developed with ❤️ by <a target="_blank" href="https://card.homow.ir" className={"text-sky-500"}>homow</a>
        </div>
    )
}

function FooterLinks() {
    return (
        <div className={"flex flex-row flex-wrap-reverse items-center justify-center gap-2 xs:gap-4 md:justify-end"}>
            <a target="_blank" href="https://github.com/homow" className={"text-sky-500"}>GitHub</a>
            <a target="_blank" href="https://homow.ir" className={"text-sky-500"}>Website</a>
            <a target="_blank" href="https://youtube.com/@homow_dev" className={"text-sky-500"}>YouTube</a>
            <a target="_blank" href="https://t.me/homow_dev" className={"text-sky-500"}>Telegram</a>
        </div>
    )
}

export default function Footer() {
    return (
        <div className={`flex flex-col gap-6 w-full justify-between py-3 bg-primary-bg text-[13px] xs:text-sm text-center md:flex-row md:text-start 2xl:text-base`}>
            <FooterCopyright/>
            <FooterLinks/>
        </div>
    )
}
