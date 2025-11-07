import {useContext, createContext, useState, useEffect} from "react";

const CollapsedMenuContext = createContext(null);

const CollapsedMenuProvider = ({children}) => {
    const [collapsed, setCollapsed] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("collapsedMenu");
            return saved === "true";
        }
        return false;
    });

    useEffect(() => {
        localStorage.setItem("collapsedMenu", JSON.stringify(collapsed));
    }, [collapsed]);

    const value = {collapsed, setCollapsed};

    return (
        <CollapsedMenuContext.Provider value={value}>
            {children}
        </CollapsedMenuContext.Provider>
    );
};

const useCollapsedMenu = () => {
    const context = useContext(CollapsedMenuContext);
    if (!context) throw new Error("useCollapsedMenu must be used within the context");
    return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export {CollapsedMenuProvider, useCollapsedMenu};
