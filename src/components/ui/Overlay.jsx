import {cn} from "@utils/ui-utils.js";

export default function Overlay({flag, setFlag, z = "z-10", lock = false}) {
    if (!flag) return null;

    const clickHandler = e => {
        if (lock) return;
        if (e.target === e.currentTarget) setFlag(false);
    }

    return (
        <div
            role="presentation"
            aria-hidden="true"
            onClick={clickHandler}
            className={cn(
                "fixed inset-0 bg-black/60 w-full h-full backdrop-blur-xs",
                z
            )}
        >
        </div>
    );
};