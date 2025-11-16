import {Suspense} from 'react'
import Loading from "../Loading";

export default function SuspenseBoundary({children, fallback, className}) {
    return (
        <Suspense
            fallback={
                fallback ||
                <Loading
                    message={"Loading.."}
                    className={className}
                />
            }
        >
            {children}
        </Suspense>
    )
};