export default function SearchBar({className}) {
    return (
        <div>
            <span className={`${className}`}>
                <svg className={"size-6"}>
                    <use href="#search-icon"></use>
                </svg>
            </span>
        </div>
    )
}
