import { useEffect } from "react";
import { useAuth } from "./authProvider";
import { useRouter } from "next/navigation";

export default function ProtectedRoutes({ children }) {
    const { user, loading } = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (loading) return;

        if (!user) {
            router.replace('/admin/login');
        }
    }, [user, loading, router]);

    // Show loading state while checking authentication
    if (loading) {
        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100vh'
            }}>
                <div>Loading...</div>
            </div>
        );
    }

    // If no user, return null (will redirect via useEffect)
    if (!user) {
        return null;
    }

    // User is authenticated, render children
    return children;
}