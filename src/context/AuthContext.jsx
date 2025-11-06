import {createContext, useContext, useState} from "react";

const AuthContext = createContext(null);

function AuthProvider({children}) {
    const [user, setUser] = useState({
        id: "1",
        role: "admin",
        display_name: "john",
        email: "john@exmple.com",
    });
    const [accessToken, setAccessToken] = useState(false);
    const [loading, setLoading] = useState(false);

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

{
    // eslint-disable-next-line
    const exampleUser = {
        id: "1",
        role: "admin",
        display_name: "homow",
        email: "homow@gmail.com",
    }
}