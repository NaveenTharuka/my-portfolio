"use client"
import { useState, useEffect } from "react";
import styles from "./Responses.module.css";

// Short, stable display id derived from the UUID (first segment, uppercased)
function shortId(uuid) {
    return uuid ? String(uuid).split("-")[0].toUpperCase() : "UNKNOWN";
}

export default function AdminResponses({
    response,
    activeId,
    setActiveId,
    isExpanded,
    onCardClick,
    isMobile: isMobileProp,
    onDelete,
    onMarkRead,
}) {
    const [isMobileLocal, setIsMobileLocal] = useState(false);

    // Fall back to computing locally only if the parent didn't pass isMobile down
    useEffect(() => {
        if (isMobileProp !== undefined) return;
        const checkMobile = () => setIsMobileLocal(window.innerWidth <= 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, [isMobileProp]);

    const isMobile = isMobileProp !== undefined ? isMobileProp : isMobileLocal;

    const handleClick = () => {
        if (isMobile) {
            onCardClick();
        } else {
            setActiveId(response.id);
        }
    };

    const isActive = activeId === response.id;
    const showExpanded = isMobile && isExpanded;
    const isUnread = !response.read;

    return (
        <>
            <div
                className={`${styles.feedCardWrapper} ${showExpanded ? styles.feedCardExpanded : ''}`}
                onClick={handleClick}
            >
                <div
                    className={`${styles.feedCard} ${!isMobile && isActive ? styles.feedCardActive : ''} ${isUnread ? styles.feedCardUnread : ''}`}
                >
                    <div className={styles.feedCardTop}>
                        <span className={styles.feedCardSenderRow}>
                            {isUnread && <span className={styles.unreadDot} />}
                            <span className={(!isMobile && isActive) ? styles.feedSender : styles.feedSenderMuted}>
                                {response.name}
                            </span>
                        </span>
                        <span className={styles.feedTime}>{response.created_at}</span>
                    </div>
                    <h4 className={`${styles.feedTitle} ${isUnread ? styles.feedTitleUnread : ''}`}>
                        {response.title}
                    </h4>
                    <p className={styles.feedDesc}>{response.message}</p>
                </div>

                {/* Mobile Expanded Detail */}
                {showExpanded && response && (
                    <div className={styles.mobileDetailContainer}>
                        <div className={styles.mobileDetailHeader}>
                            <h3 className={styles.mobileDetailTitle}>{response.title}</h3>
                            <div className={styles.mobileSender}>
                                <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>person</span>
                                <span>{response.name}</span>
                            </div>
                            {response.email && (
                                <a
                                    className={styles.mobileEmailLink}
                                    href={`mailto:${response.email}`}
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <span className="material-symbols-outlined" style={{ fontSize: '1rem' }}>mail</span>
                                    {response.email}
                                </a>
                            )}
                        </div>

                        <div className={styles.mobilePayload}>
                            {response.message
                                ? response.message.split('\n').map((line, i) => (
                                    <span key={i}>
                                        {line.startsWith('//') ? (
                                            <span className={styles.italic}>{line}</span>
                                        ) : (
                                            line
                                        )}
                                        <br />
                                    </span>
                                ))
                                : <span className={styles.italic}>// NO PAYLOAD DATA AVAILABLE</span>
                            }
                        </div>

                        <div className={styles.mobileActions}>
                            <button
                                className={styles.mobileActionButton}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onMarkRead?.(response.id, !response.read);
                                }}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle' }}>
                                    {response.read ? "mark_email_unread" : "mark_email_read"}
                                </span> {response.read ? "MARK UNREAD" : "MARK READ"}
                            </button>
                            <button
                                className={styles.mobileActionButtonDanger}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    onDelete?.(response.id);
                                }}
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle' }}>
                                    delete_forever
                                </span> DELETE
                            </button>
                        </div>

                        <div className={styles.mobileFooter}>
                            <span>NODE_ID: 0x{shortId(response.id)}</span>
                            <span>INTEGRITY: <span style={{ color: 'var(--terminal-cyan)' }}>MATCH_SUCCESS</span></span>
                            <span>{response.read ? "READ" : "UNREAD"}</span>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}