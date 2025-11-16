import {lazy} from "react";
import SuspenseBoundary from "./SuspenseBoundary";

export default function LazyWithSuspense(importFunc, className) {
    const Component = lazy(importFunc);

    const wrapped = props => (
        <SuspenseBoundary className={className}>
            <Component {...props}/>
        </SuspenseBoundary>
    );
    wrapped.displayName = `LazyWithSuspense(${importFunc})`;
    return wrapped;
};