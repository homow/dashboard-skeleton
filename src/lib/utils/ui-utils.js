import {clsx} from "clsx";
import {twMerge} from "tailwind-merge";

const cn = (...inputs) => twMerge(clsx(inputs));

export {cn};
