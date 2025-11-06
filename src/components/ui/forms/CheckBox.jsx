import {cn} from "@/lib/utils/ui-utils.js";

export default function CheckBox({id = "checkbox", label = "انتخاب کن", checked, onChange, className}) {
    return (
        <label htmlFor={id} className={cn("flex items-center gap-2 cursor-pointer text-sm", className)}>
            <input
                id={id}
                name={id}
                type="checkbox"
                checked={checked}
                onChange={e => onChange(e.target.checked)}
                className="w-4 h-4 rounded border-2 border-gray-400 appearance-none checked:bg-sky-500 checked:border-sky-600 cursor-pointer"
            />
            <span>{label}</span>
        </label>
    );
}