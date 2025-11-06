import {cn} from "@/lib/utils/ui-utils.js";

export default function Button({text = "ارسال", onClick, type = "button", className = "", disabled = false, ...props}) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={cn(
                "w-full bg-violet-600 hover:bg-violet-700 active:bg-violet-700 text-white py-2 rounded-lg transition font-medium cursor-pointer text-sm xs:text-base",
                disabled && "opacity-60 cursor-not-allowed",
                className
            )}
            {...props}
        >
            {text}
        </button>
    );
}
