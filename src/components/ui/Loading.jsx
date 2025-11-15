import {cn} from "@utils/ui-utils.js";

export default function Loading({className, message = "Loading..."}) {
    return (
        <div
            className={cn("h-full flex items-center justify-center bg-main-bg/60 dark:bg-main-bg/90 backdrop-blur-xs", className)}
            role="status"
            aria-live="polite"
        >
            <div className="flex flex-col items-center gap-4">
                {/* Simple spinner */}
                <div className="w-12 h-12 border-4 border-sky-600 border-t-transparent rounded-full animate-spin"/>

                {/* Loading text */}
                <p className="text-lg font-medium text-gray-700 dark:text-gray-200">
                    {message}
                </p>
            </div>
        </div>
    );
};