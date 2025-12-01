import React, { createContext, useState, useEffect } from "react";
import { getProfile } from "../services/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loadingAuth, setLoadingAuth] = useState(true);

    const fetchProfile = async () => {
        try {
            const res = await getProfile();
            setUser(res.data);
        } catch (err) {
            setUser(null);
            //token might be invalid or expired
            localStorage.removeItem('accessToken');
            localStorage.removeItem('refreshToken');
        } finally {
            setLoadingAuth(false);
        }
    };

    useEffect(() => {
        const token = localStorage.getItem('accessToken');
        if (token) fetchProfile();
        else setLoadingAuth(false);
    }, []);

    const loginUser = (tokens, userInfo) => {
        localStorage.setItem('accessToken', tokens.access);
        if (tokens.refresh) localStorage.setItem('refreshToken', tokens.refresh);
        setUser(userInfo);
    };

    const logoutUser = () => {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, loadingAuth, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};