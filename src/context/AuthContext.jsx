import {createContext, useContext, useState} from "react";

const AuthContext = createContext(null);

function AuthProvider({children}) {
    const [user, setUser] = useState({
        id: "1",
        role: "admin",
        display_name: "john",
        email: "john@exmple.com",
    });
    const [accessToken, setAccessToken] = useState(true);

    /* eslint-disable no-unused-vars */
    // noinspection JSUnusedLocalSymbols
    const [loading, setLoading] = useState(false);
    /* eslint-enable no-unused-vars */

    const setAuthInfo = ({userData, token}) => {
        setUser(userData);
        setAccessToken(token);
    };

    const value = {
        user,
        accessToken,
        setAuthInfo,
        loading
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
};

// eslint-disable-next-line react-refresh/only-export-components
export {AuthProvider, useAuth};