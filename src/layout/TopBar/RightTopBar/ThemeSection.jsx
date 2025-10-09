import {useState, useEffect} from "react";

export default function ThemeSection() {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const resolvedTheme = localTheme === "dark" || (!localTheme && prefersDark) ? "dark" : "light";
        setTheme(resolvedTheme);
    }, []);

    const changeTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    return (
        <div
            onClick={changeTheme}
            className="inline-block p-1 rounded-full cursor-pointer"
        >
            <svg className="size-6">
                <use href={`#${theme === "dark" ? "sun-icon" : "moon-icon"}`}/>
            </svg>
        </div>
    );
}