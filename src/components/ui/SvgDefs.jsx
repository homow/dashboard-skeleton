export default function SvgDefs() {
    return (
        <svg className={"hidden"}>
            {/* <===== TopBar =====> */}

            {/* sun */}
            <symbol id={"sun-icon"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
            </symbol>
            {/* moon */}
            <symbol id={"moon-icon"} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </symbol>
            {/* search */}
            <symbol id="search-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </symbol>
            {/* notification */}
            <symbol id="notification-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
            </symbol>

            {/* <===== SideBarHeader =====> */}

            {/* bars */}
            <symbol id="bars-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
            </symbol>
            {/* logo */}
            <symbol id="logo-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 24" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.47602 0.435408L6.7986 3.72203C7.08419 3.89838 7.25806 4.21016 7.25806 4.54592V19.5605C7.25806 19.901 7.07929 20.2164 6.78724 20.3913L1.46466 23.5777C1.00603 23.8523 0.411763 23.7029 0.137322 23.244C0.0474582 23.0938 0 22.922 0 22.7469V1.25929C0 0.724582 0.433273 0.291115 0.967742 0.291115C1.14727 0.291115 1.32325 0.341075 1.47602 0.435408Z" fill="#0ea5e9"/>
                <path opacity="0.077704" fillRule="evenodd" clipRule="evenodd" d="M0 8.11655L7.25806 12.2802V16.3621L0 8.11655Z" fill="black"/>
                <path opacity="0.077704" fillRule="evenodd" clipRule="evenodd" d="M0 8.11655L7.25806 12.1742V14.6678L0 8.11655Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M28.5252 0.431595L23.2026 3.70721C22.9163 3.8834 22.7419 4.19558 22.7419 4.53185V19.5605C22.7419 19.901 22.9207 20.2164 23.2128 20.3913L28.5353 23.5777C28.994 23.8523 29.5882 23.7029 29.8627 23.2441C29.9525 23.0938 30 22.922 30 22.7469V1.25624C30 0.721531 29.5667 0.288063 29.0323 0.288063C28.8532 0.288063 28.6777 0.337749 28.5252 0.431595Z" fill="#0ea5e9"/>
                <path opacity="0.077704" fillRule="evenodd" clipRule="evenodd" d="M30 8.11655L22.7419 12.2714V16.4853L30 8.11655Z" fill="black"/>
                <path opacity="0.077704" fillRule="evenodd" clipRule="evenodd" d="M30 8.11655L22.7419 12.1706V14.791L30 8.11655Z" fill="black"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.47345 0.427468L15 8.72166V16.7091L0 8.11434V1.25294C0 0.718227 0.433273 0.28476 0.967742 0.28476C1.14624 0.28476 1.32126 0.33415 1.47345 0.427468Z" fill="#0ea5e9"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M1.47345 0.427468L15 8.72166V16.7091L0 8.11434V1.25294C0 0.718227 0.433273 0.28476 0.967742 0.28476C1.14624 0.28476 1.32126 0.33415 1.47345 0.427468Z" fill="#7dd3fc" fillOpacity="0.5"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M28.5266 0.427468L15 8.72166V16.7091L30 8.11434V1.25294C30 0.718227 29.5667 0.28476 29.0323 0.28476C28.8538 0.28476 28.6787 0.33415 28.5266 0.427468Z" fill="#0ea5e9"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M28.5266 0.427468L15 8.72166V16.7091L30 8.11434V1.25294C30 0.718227 29.5667 0.28476 29.0323 0.28476C28.8538 0.28476 28.6787 0.33415 28.5266 0.427468Z" fill="#7dd3fc" fillOpacity="0.5"/>
            </symbol>
            {/* chevronDoubleRight */}
            <symbol id="chevronDoubleRight-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
            </symbol>

            {/* <===== SideBarMenu-links =====> */}
            {/* home */}
            <symbol id="home-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </symbol>
            {/* email */}
            <symbol id="email-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
            </symbol>
            {/* analyze */}
            <symbol id="analyze-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z" />
            </symbol>
            {/* user */}
            <symbol id="user-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </symbol>
            {/* lock */}
            <symbol id="lock-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
            </symbol>
            {/* email */}
            {/* email */}
            {/* email */}
            {/* email */}
            {/* email */}
            {/* email */}
            {/* email */}
            {/* email */}
            {/* email */}
            {/* email */}
            {/* email */}
            {/* email */}
            {/* email */}
            {/* email */}
            {/* email */}
        </svg>
    )
}
