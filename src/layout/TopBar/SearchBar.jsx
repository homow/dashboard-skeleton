export default function SearchBar({setMobileNavOpen}) {
    return (
        <div>
            <span className={"hidden md:block"}>
                <svg className={"size-6"}>
                    <use href="#search-icon"></use>
                </svg>
            </span>

            <span
                onClick={
                    () => {
                        setMobileNavOpen(true);
                    }}
                className={"cursor-pointer md:hidden"}
            >
                <svg className={"size-6"}>
                    <use href="#bars-icon"></use>
                </svg>
            </span>
        </div>
    )
}
