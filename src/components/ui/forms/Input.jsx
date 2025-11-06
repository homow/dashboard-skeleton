import {cn} from "@/lib/utils/ui-utils.js";
import {ErrorMessageInputs, RedStarField} from "@components/ui/Fragments";

export default function Input({onChange, name, type = name, id = name, label, autoComplete, value, placeholder, req, className, parentClassName, children, hasError, errorMsg = hasError, ...props}) {
    return (
        <div>
            <div className={cn(parentClassName)}>
                <label htmlFor={id} className="flex flex-row gap-1 text-sm">{label} {req && <RedStarField/>}</label>
                <input
                    {...props}
                    {...(type !== "file" && {value: value ?? ""})}
                    onChange={onChange}
                    id={id}
                    name={name}
                    type={type}
                    autoComplete={autoComplete}
                    placeholder={placeholder}
                    className={
                        cn("mt-1 block bg-primary-bg/40 w-full rounded-lg border border-gray-300 px-4 py-2 placeholder-secondary-txt focus:border-sky-500 focus:ring-1 focus:ring-sky-500 outline-none transition",
                            className,
                            hasError && "border-rose-600 bg-rose-600/10"
                        )}
                />
                {children}
            </div>
            {hasError && (
                <ErrorMessageInputs
                    msg={errorMsg}
                />
            )}
        </div>
    );
};