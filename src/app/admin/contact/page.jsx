"use client"
import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./Dashboard.module.css";
import AdminHeader from "../components/Header";
import SideBar from "../components/AdminSideBar";
import AdminResponses from "../components/AdminResponses";
import { deleteResponse, getResponses, markAsRead } from "../../../../services/contacts.api";
import AdminLoader from "../components/AdminLoader";

// Format an ISO datetime into something readable, falling back gracefully
// if the string doesn't parse (e.g. during local mock/dev data).
function formatTimestamp(isoString) {
    const date = new Date(isoString);
    if (isNaN(date.getTime())) return isoString;

    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();
    const yesterday = new Date(now);
    yesterday.setDate(now.getDate() - 1);
    const isYesterday = date.toDateString() === yesterday.toDateString();

    const time = date.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });

    if (isToday) return time;
    if (isYesterday) return `Yesterday, ${time}`;
    return date.toLocaleDateString([], { month: "short", day: "numeric" }) + `, ${time}`;
}

// Short, stable display id derived from the UUID (first 8 chars, uppercased)
function shortId(uuid) {
    return uuid ? uuid.split("-")[0].toUpperCase() : "UNKNOWN";
}

export default function InboxDashboard() {
    const [transmissions, setTransmissions] = useState([]);
    const [activeId, setActiveId] = useState(null);
    const [expandedId, setExpandedId] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    const [loading, setLoading] = useState(false)
    const [reading, setReading] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)

    // Check if we're on mobile
    useEffect(() => {

        async function get_responses() {
            setLoading(true)
            const res = await getResponses()
            if (res) {
                setTransmissions(res)
            } else {
                alert(`Error ${res?.message}`)
            }
            setLoading(false)
        }
        get_responses()

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const markRead = async (id, read) => {
        setReading(true)
        const res = await markAsRead(id, read)
        if (res) {
            setTransmissions(prev => prev.map(t => t.id === id ? { ...t, read } : t))
        } else {
            alert(`Error ${res?.message}`)
        }
        setReading(false)

    };

    const handleDelete = async (id) => {
        setIsDeleting(true)
        const res = await deleteResponse(id)
        if (res) {
            setTransmissions(prev => prev.filter(t => t.id !== id));
        } else {
            alert(`Error ${res?.message}`)
        }
        setIsDeleting(false)
    };

    const handleCardClick = (id) => {
        // On desktop: update active ID
        setActiveId(id);
        // Opening a transmission marks it read
        markRead(id, true);

        // On mobile: toggle expansion
        if (isMobile) {
            setExpandedId(expandedId === id ? null : id);
        }
    };

    const selectedTransmission = transmissions.find(t => t.id === activeId);
    const unreadCount = transmissions.filter(t => !t.read).length;

    if (loading) {
        return (
            <AdminLoader />
        )
    }

    return (
        <div className={styles.root}>
            <AdminHeader />

            <SideBar />

            {/* MAIN CONTENT CANVAS */}
            <main className={`${styles.main} ${styles.blueprintGrid}`}>
                {/* SUBHEADER */}
                <div className={styles.subheader}>
                    <div className={styles.subheaderLeft}>
                        <span className={styles.breadcrumb}>// LOCATION: /var/log/transmissions</span>
                        <div className={styles.vDivider} />
                        <div className={styles.liveIndicator}>
                            <div className={styles.liveDot} />
                            <span className={styles.liveText}>{transmissions.length} MESSAGES</span>
                        </div>
                        {unreadCount > 0 && (
                            <span className={styles.unreadCountBadge}>{unreadCount} UNREAD</span>
                        )}
                    </div>
                    <div className={styles.searchWrap}>
                        <input
                            className={styles.searchInput}
                            placeholder="FILTER_PAYLOADS..."
                            type="text"
                        />
                        <span className={`material-symbols-outlined ${styles.searchIcon}`}>search</span>
                    </div>
                </div>

                {/* SPLIT PANE */}
                <div className={styles.splitPane}>
                    {/* LEFT: TRANSMISSION FEED */}
                    <section className={`${styles.feedColumn} ${styles.customScrollbar}`}>
                        <div className={styles.feedHeader}>
                            <h3 className={styles.feedHeaderTitle}>INBOUND_LOG</h3>
                        </div>

                        {transmissions.map((t) => (
                            <AdminResponses
                                response={t}
                                key={t.id}
                                activeId={activeId}
                                setActiveId={setActiveId}
                                isExpanded={expandedId === t.id}
                                onCardClick={() => handleCardClick(t.id)}
                                isMobile={isMobile}
                            />
                        ))}
                    </section>

                    {/* RIGHT: MESSAGE DETAILS - Desktop only */}
                    {!isMobile && (
                        <section className={`${styles.detailColumn} ${styles.customScrollbar}`}>
                            {selectedTransmission ? (
                                <>
                                    <div className={styles.detailHeader}>
                                        <div className={styles.detailTop}>
                                            <div className={styles.detailTopRow}>
                                                {/* Badge row */}
                                                <div className={styles.detailMeta}>
                                                    <span className={styles.typeBadge}>
                                                        NODE_#{shortId(selectedTransmission.id)}
                                                    </span>
                                                    <span className={styles.encryptionBadge}>
                                                        RECEIVED: {formatTimestamp(selectedTransmission.created_at)}
                                                    </span>
                                                    {!selectedTransmission.read && (
                                                        <span className={styles.unreadBadge}>UNREAD</span>
                                                    )}
                                                </div>

                                                <div className={styles.actionButtons}>
                                                    <button
                                                        className={styles.readButton}
                                                        onClick={() => markRead(selectedTransmission.id, !selectedTransmission.read)}
                                                    >
                                                        <span className="material-symbols-outlined">
                                                            {selectedTransmission.read ? "mark_email_unread" : "mark_email_read"}
                                                        </span>
                                                        {reading ? "PROCESSING..." : (selectedTransmission.read ? "MARK_UNREAD()" : "MARK_READ()")}
                                                    </button>
                                                    <button
                                                        className={styles.deleteButton}
                                                        onClick={() => handleDelete(selectedTransmission.id)}
                                                    >
                                                        <span className="material-symbols-outlined">delete_forever</span> {isDeleting ? "PROCESSING..." : "DELETE_()"}
                                                    </button>
                                                </div>
                                            </div>

                                            <h2 className={styles.detailTitle}>{selectedTransmission.title}</h2>

                                            <div className={styles.detailInfo}>
                                                <div className={styles.infoItem}>
                                                    <span className="material-symbols-outlined">person</span>
                                                    <span>{selectedTransmission.name}</span>
                                                </div>
                                                <div className={styles.infoDot} />
                                                <div className={styles.infoItem}>
                                                    <span className="material-symbols-outlined">mail</span>
                                                    <a
                                                        className={styles.emailLink}
                                                        href={`mailto:${selectedTransmission.email}`}
                                                    >
                                                        {selectedTransmission.email}
                                                    </a>
                                                </div>
                                                <div className={styles.infoDot} />
                                                <div className={styles.infoItem}>
                                                    <span className="material-symbols-outlined">schedule</span>
                                                    <span>{formatTimestamp(selectedTransmission.created_at)}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* PAYLOAD VIEWER */}
                                        <div className={styles.payloadViewer}>
                                            <div className={styles.payloadLabel}>
                                                Payload_View_{shortId(selectedTransmission.id)}.txt
                                            </div>
                                            <p className={styles.payloadText}>
                                                <span className={styles.italic}>
                                                    // Subject: {selectedTransmission.title}
                                                </span>
                                            </p>
                                            <p className={styles.payloadText}>
                                                {selectedTransmission.message || "// NO PAYLOAD DATA AVAILABLE"}
                                            </p>
                                            <p>
                                                Regards,
                                                <br />
                                                {selectedTransmission.name}
                                            </p>
                                        </div>
                                    </div>

                                    {/* METADATA FOOTER */}
                                    <div className={styles.footer}>
                                        <div className={styles.footerLeft}>
                                            <div>
                                                <span className={styles.footerLabel}>NODE_ID</span>
                                                <span className={styles.footerValue}>
                                                    0x{shortId(selectedTransmission.id)}
                                                </span>
                                            </div>
                                            <div>
                                                <span className={styles.footerLabel}>INTEGRITY_CHECK</span>
                                                <span className={styles.footerValueCyan}>MATCH_SUCCESS</span>
                                            </div>
                                            <div>
                                                <span className={styles.footerLabel}>RETENTION_POLICY</span>
                                                <span className={styles.footerValueMuted}>365_DAYS</span>
                                            </div>
                                        </div>
                                        <div className={styles.footerRight}>
                                            SYSTEM_LOC: US-EAST-1 // PAGE: 01/{String(transmissions.length).padStart(2, "0")}
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className={styles.emptyState}>
                                    <span className="material-symbols-outlined">mail</span>
                                    <p>NO_NODE_SELECTED — choose a transmission from the log.</p>
                                </div>
                            )}
                        </section>
                    )}
                </div>
            </main>
        </div>
    );
}