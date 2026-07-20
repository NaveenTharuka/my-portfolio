"use client";

import React, { useState, useEffect } from "react";
import styles from "./SystemRootLogin.module.css";
import { useRouter } from "next/navigation";
import { useAuth } from "../auth/authProvider";

const SystemRootLogin = () => {
    const { login } = useAuth();
    const router = useRouter();

    const [username, setUsername] = useState(""); // Changed from email to username
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [statusMessage, setStatusMessage] = useState("Awaiting administrative credentials...");
    const [loginStatus, setLoginStatus] = useState("idle");
    const [currentTime, setCurrentTime] = useState("");
    const [isMounted, setIsMounted] = useState(false);

    // Handle mounting to prevent hydration mismatch
    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Redirect if already authenticated
    useEffect(() => {
        if (localStorage.getItem('user')) {
            router.push('/admin/projects');
        }
    }, [router]);

    // Update clock
    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            setCurrentTime(now.toISOString().split("T")[1].split(".")[0] + " UTC");
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            setStatusMessage("ERROR: Missing credentials");
            return;
        }

        setIsLoading(true);
        setStatusMessage("INITIALIZING...");
        setLoginStatus("loading");

        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 800));

        setStatusMessage("AUTHORIZING_ACCESS...");

        try {
            // Validate credentials
            if (username === "Naveen" && password === "12345") {
                const userData = { username };
                login(userData);  // updates both localStorage AND React context state

                setIsLoading(false);
                setStatusMessage("ACCESS_GRANTED");
                setLoginStatus("granted");
                router.push('/admin/projects');
            } else {
                throw new Error("Invalid credentials");
            }
        } catch (error) {
            setIsLoading(false);
            setStatusMessage("ACCESS_DENIED: Invalid credentials");
            setLoginStatus("idle");
            setPassword("");
        }
    };

    // Helper function for status color
    const getStatusColor = () => {
        if (loginStatus === "granted") return styles.statusGranted;
        if (loginStatus === "loading") return styles.statusLoading;
        return styles.statusIdle;
    };

    // Helper function for button styling
    const getButtonStyle = () => {
        if (loginStatus === "granted") {
            return `${styles.submitButton} ${styles.submitButtonGranted}`;
        }
        return `${styles.submitButton} ${styles.submitButtonDefault}`;
    };

    return (

        <div className={styles.container}>
            {/* Animated scanline effect */}
            <div className={styles.scanlineContainer}>
                <div className={styles.scanlineGrid} />
                <div className={styles.scanlineAnimation} />
            </div>

            {/* Main card container */}
            <div className={styles.cardWrapper}>
                {/* Corner decorations */}
                <div className={styles.cornerTopLeft}></div>
                <div className={styles.cornerBottomRight}></div>

                {/* Login Card */}
                <div className={styles.loginCard}>
                    {/* Inner Corner Decorations */}
                    <div className={styles.innerCorner}>
                        0x882_AUTH
                    </div>

                    {/* Header */}
                    <div className={styles.header}>
                        <div className={styles.headerTop}>
                            <h2 className={styles.headerTitle}>
                                // USER_AUTH_v1.0
                            </h2>
                            <span className={`${styles.headerStatus} ${styles.animatePulse}`}>
                                ● SECURE_CHANNEL
                            </span>
                        </div>
                        <p className={`${styles.headerMessage} ${getStatusColor()}`}>
                            {statusMessage}
                        </p>
                    </div>

                    {/* Login Form */}
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            {/* Username Field - Changed from Email */}
                            <div>
                                <label
                                    className={styles.inputLabel}
                                    htmlFor="identifier"
                                >
                                    [ USERNAME ]
                                </label>
                                <div className={styles.inputWrapper}>
                                    <input
                                        id="identifier"
                                        type="text"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        placeholder="Enter username"
                                        className={styles.inputField}
                                        disabled={loginStatus === "granted" || isLoading}
                                        required
                                        autoComplete="username"
                                    />
                                    <div className={styles.inputIcon}>
                                        <span className={styles.inputIconText}>👤</span>
                                    </div>
                                </div>
                            </div>

                            {/* Password Field */}
                            <div>
                                <label
                                    className={styles.inputLabel}
                                    htmlFor="secret_key"
                                >
                                    [ SECRET_KEY ]
                                </label>
                                <div className={styles.inputWrapper}>
                                    <input
                                        id="secret_key"
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        placeholder="••••••••••••"
                                        className={styles.inputField}
                                        disabled={loginStatus === "granted" || isLoading}
                                        required
                                        autoComplete="current-password"
                                    />
                                    <div className={styles.inputIcon}>
                                        <span className={styles.inputIconText}>🔑</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div>
                            <button
                                type="submit"
                                disabled={isLoading || loginStatus === "granted"}
                                className={getButtonStyle()}
                            >
                                <span className="relative z-10">
                                    {loginStatus === "granted" ? "ACCESS_GRANTED" :
                                        isLoading ? "AUTHORIZING..." :
                                            "EXECUTE_LOGIN()"}
                                </span>
                                <div className={styles.buttonOverlay}></div>
                            </button>
                        </div>
                    </form>

                    {/* Status Ticker */}
                    <div className={styles.statusTicker}>
                        <div className={styles.tickerLeft}>
                            <span>LATENCY: 12ms</span>
                            <span>ENC: AES-256</span>
                        </div>
                        <div suppressHydrationWarning>
                            {isMounted ? currentTime : "00:00:00 UTC"}
                        </div>
                    </div>
                </div>

                {/* Exterior Metadata Labels */}
                <div className={styles.metadataLabels}>
                    <div className={styles.metadataLabel}>
                        ERR_LOG: 0 // NO_FAILURES_DETECTED
                    </div>
                    <div className={styles.metadataLabel}>
                        SHADOW_OS_BUILD: 4.0.22
                    </div>
                </div>
            </div>
        </div>

    );
};

export default SystemRootLogin;