import {cn} from "@utils/ui-utils.js";

function FooterCopyright() {
    return (
        <div>
            Developed with ❤️ by <a target="_blank" href="https://card.homow.ir" className={"text-sky-500 hover:text-sky-800 active:text-sky-800"}>homow</a>
        </div>
    )
}

function FooterLinks() {
    return (
        <div className={"flex flex-row flex-wrap-reverse items-center justify-center gap-2 xs:gap-4 md:justify-end"}>
            <a target="_blank" href="https://github.com/homow" className={"text-sky-500 hover:text-sky-800 active:text-sky-800"}>GitHub</a>
            <a target="_blank" href="https://homow.ir" className={"text-sky-500 hover:text-sky-800 active:text-sky-800"}>Website</a>
            <a target="_blank" href="https://youtube.com/@homow_dev" className={"text-sky-500 hover:text-sky-800 active:text-sky-800"}>YouTube</a>
            <a target="_blank" href="https://t.me/homow_dev" className={"text-sky-500 hover:text-sky-800 active:text-sky-800"}>Telegram</a>
        </div>
    )
}

export default function Index() {
    return (
        <footer id="footer" className={cn("flex flex-col gap-4 w-full justify-between py-4 bg-primary-bg text-[13px] xs:text-sm text-center md:flex-row md:text-start 2xl:text-base")}>
            <FooterCopyright/>
            <FooterLinks/>
        </footer>
    )
}
