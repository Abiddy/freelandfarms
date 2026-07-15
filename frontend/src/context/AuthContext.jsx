import { createContext, useContext, useState, useCallback } from "react";

const AuthContext = createContext(null);

const ADMIN_USER = process.env.REACT_APP_ADMIN_USER || "admin";
const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD || "freeland2025";
const AUTH_KEY = "freeland_admin_auth";

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        () => sessionStorage.getItem(AUTH_KEY) === "true",
    );

    const login = useCallback((username, password) => {
        if (username === ADMIN_USER && password === ADMIN_PASSWORD) {
            sessionStorage.setItem(AUTH_KEY, "true");
            setIsAuthenticated(true);
            return { success: true };
        }
        return { success: false, error: "Invalid username or password" };
    }, []);

    const logout = useCallback(() => {
        sessionStorage.removeItem(AUTH_KEY);
        setIsAuthenticated(false);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error("useAuth must be used within AuthProvider");
    return ctx;
};
