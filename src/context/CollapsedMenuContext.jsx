import {useContext, createContext, useState, useEffect} from "react";
import {applyCustomSpace} from "@utils/ui-utils.js";

const CollapsedMenuContext = createContext(null);

const CollapsedMenuProvider = ({children}) => {
    const [collapsed, setCollapsed] = useState(() => {
        if (typeof window !== "undefined") {
            const saved = localStorage.getItem("collapsedMenu");
            return saved === "true";
        }
        return false;
    });
    const [currentCollapsed, setCurrentCollapsed] = useState(false);

    // apply margin-right custom and collapsed
    useEffect(() => {
        const handleResize = () => applyCustomSpace({setCurrentCollapsed, collapsed});

        window.addEventListener("resize", handleResize);

        // cleanUp event
        return () => window.removeEventListener("resize", handleResize);
    }, [collapsed]);

    // handle change and apply after mounted
    useEffect(() => {
        setCurrentCollapsed(collapsed);
        applyCustomSpace({setCurrentCollapsed, collapsed});
        localStorage.setItem("collapsedMenu", JSON.stringify(collapsed));
    }, [collapsed]);

    const value = {collapsed, setCollapsed, currentCollapsed};

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
