"use client"
import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const router = useRouter()
    const [loading, setLoading] = useState(true)  // true = still checking auth
    const [user, setUser] = useState(null);

    useEffect(() => {
        function initAuth() {
            const storedUser = localStorage.getItem('user')
            if (storedUser) {
                setUser(JSON.parse(storedUser))
            } else {
                setUser(null)
            }
            setLoading(false)  // done checking — allow ProtectedRoutes to decide
        }
        initAuth()
    }, [])

    const login = useCallback((userData) => {
        localStorage.setItem('user', JSON.stringify(userData));
        setUser(userData);
    }, []);

    const logout = useCallback(() => {
        localStorage.removeItem('user');
        setUser(null);
        router.push('/')
    }, []);

    const value = useMemo(
        () => ({
            user,
            login,
            logout,
            isAuthenticated: !!user,
            loading
        }),
        [user, login, logout, loading]
    );

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export default AuthProvider;