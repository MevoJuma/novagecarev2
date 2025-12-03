import React, { createContext, useState, useEffect } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [authTokens, setAuthTokens] = useState(() =>
        localStorage.getItem("tokens") 
            ? JSON.parse(localStorage.getItem("tokens")) 
            : null
    );

    const [user, setUser] = useState(() =>
        localStorage.getItem("user")
            ? JSON.parse(localStorage.getItem("user"))
            : null
    );

    const [loadingAuth, setLoadingAuth] = useState(true);

    useEffect(() => {
        setLoadingAuth(false);
    }, []);

    const loginUser = ({ access, refresh, user }) => {
        const tokens = {
            access: access,
            refresh: refresh
        };

        setAuthTokens(tokens);
        setUser(user);

        localStorage.setItem("tokens", JSON.stringify(tokens));
        localStorage.setItem("user", JSON.stringify(user));
    };

    const logoutUser = () => {
        setAuthTokens(null);
        setUser(null);

        localStorage.removeItem('tokens');
        localStorage.removeItem('user');  
    };

    return (
        <AuthContext.Provider value={{ user, authTokens, loadingAuth, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};