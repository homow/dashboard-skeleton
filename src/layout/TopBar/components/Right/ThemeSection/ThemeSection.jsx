import {useState, useEffect} from "react";
import Icon from "@components/ui/icons/Icon";

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
            className="flex justify-center items-center p-1 rounded-full cursor-pointer"
        >
            <Icon icon={theme === "dark" ? "sun" : "moon"}/>
        </div>
    );
}