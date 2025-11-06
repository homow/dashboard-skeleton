import {useState, createContext, useContext} from "react";
import useScrollLock from "@hooks/useScrollLock";

const MobileNavContext = createContext(null);

const MobileNavProvider = ({children}) => {
    const [openMobileNav, setOpenMobileNav] = useState(false);
    useScrollLock(openMobileNav);

    const value = {
        openMobileNav,
        setOpenMobileNav,
    }

    return (
        <MobileNavContext.Provider value={value}>
            {children}
        </MobileNavContext.Provider>
    )
}

const useMobileNav = () => {
    const context = useContext(MobileNavContext);
    if (!context) throw new Error("useMobileNav must be used within MobileNavProvider");
    return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export {MobileNavProvider, useMobileNav};