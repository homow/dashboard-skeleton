import {useEffect, useRef, useState} from "react";
import {cn} from "@utils/ui-utils.js";
import {getBgHeader, getBtnBg, getTitle, getBgBar} from "@utils/alertHelpers";

export default function AlertModal({message, type, isOpen = false, setIsOpen, setData, closeDelay = 5000}) {
    const [barWidth, setBarWidth] = useState(100)
    const buttonRef = useRef(null);

    const bgHeader = getBgHeader(type);
    const btnBg = getBtnBg(type);
    const title = getTitle(type);
    const bgBar = getBgBar(type);

    // close with Escape
    useEffect(() => {
        // ESC key listener
        if (isOpen && buttonRef.current) buttonRef.current.focus();

        const handleKey = (e) => {
            if (e.key === "Escape") setIsOpen(false);
        };

        if (isOpen) window.addEventListener("keydown", handleKey);

        // cleanUp Event
        return () => {
            window.removeEventListener("keydown", handleKey);
        }
    }, [isOpen, setIsOpen]);

    // progress bar and auto close
    useEffect(() => {
        if (!isOpen) return;

        let startTime;
        let animationFrame;

        const animate = timestamp => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;
            const progress = Math.min(elapsed / closeDelay, 1);
            setBarWidth(100 - progress * 100);

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            } else {
                setIsOpen(false);
                setData && setData({type: null, message: ""});
            }
        };

        if (isOpen) {
            setBarWidth(100);
            animationFrame = requestAnimationFrame(animate);
        } else {
            return;
        }

        return () => {
            cancelAnimationFrame(animationFrame);
        };
    }, [isOpen, closeDelay, setIsOpen, setData]);

    if (!isOpen) return null;

    return (
        <div
            className={cn("max-w-70 text-sm fixed top-0 left-0 w-full flex items-center overflow-hidden justify-center shadow-2xl z-30 xs:max-w-xs sm:text-base sm:max-w-sm", isOpen ? "block" : "hidden")}
            role={"alertdialog"}
            aria-live={"assertive"}
            aria-modal={true}
            aria-labelledby={"alert-title"}
            aria-describedby={"alert-desc"}
        >
            <div className="bg-white dark:bg-gray-800 shadow-xl w-full space-y-2 pt-3">
                <h3 className={cn("px-3 text-lg font-semibold", bgHeader)}>
                    {title}
                </h3>
                <p
                    className="max-w-max text-gray-700 px-3 dark:text-gray-300"
                    aria-live={"assertive"}
                >
                    {message}
                </p>
                <div className="flex justify-end px-3">
                    <button
                        ref={buttonRef}
                        onClick={() => setIsOpen(false)}
                        className={cn(
                            "cursor-pointer px-3 py-1 text-white transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black focus:ring-offset-white hover:brightness-110",
                            btnBg
                        )}
                    >
                        close
                    </button>
                </div>

                <div dir={"ltr"} className={"mt-3"}>
                    <div
                        style={{width: `${barWidth}%`, transformOrigin: "left"}}
                        className={cn("h-2", bgBar)}
                    ></div>
                </div>
            </div>
        </div>
    );
}
