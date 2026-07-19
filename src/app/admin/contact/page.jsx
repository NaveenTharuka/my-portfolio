"use client"
import { useState, useEffect } from "react";
import Head from "next/head";
import styles from "./Dashboard.module.css";
import AdminHeader from "../components/Header";
import SideBar from "../components/AdminSideBar";
import AdminResponses from "../components/AdminResponses";

// Sample data shaped exactly like the API response:
// { id: uuid, name, email, title, message, created_at: ISO string, read }
const INITIAL_TRANSMISSIONS = [
    {
        id: "e3b0c442-98fc-4e1e-8b1f-1a2b3c4d5e01",
        name: "Sarah Chen",
        email: "sarah.chen@stripe.com",
        title: "Frontend Engineer — Payments Team",
        message:
            "Hi! I came across your portfolio while researching frontend engineers with strong design systems experience — the component library you built for your dashboard project is really clean. We have an opening on our Payments team for a Frontend Engineer, working closely with design on our merchant-facing tools. Would you be open to a 20-minute intro call this week to talk through the role?",
        created_at: "2026-01-19T14:02:22",
        read: false,
    },
    {
        id: "e3b0c442-98fc-4e1e-8b1f-1a2b3c4d5e02",
        name: "Marcus Webb",
        email: "marcus@fenwick.io",
        title: "Founding Engineer — Full Stack",
        message:
            "Hey, saw your site linked from a mutual connection's LinkedIn. We're a 4-person team building workflow automation for logistics companies, just closed our seed round. Looking for a founding engineer comfortable across the stack — Next.js, Postgres, some infra. Equity-heavy comp, fully remote. Happy to send our deck if you're curious.",
        created_at: "2026-01-19T09:45:11",
        read: false,
    },
    {
        id: "e3b0c442-98fc-4e1e-8b1f-1a2b3c4d5e03",
        name: "No-Reply Talent Network",
        email: "noreply@talentbridge-solutions.com",
        title: "Exciting Software Engineer Opportunities — Apply Now!",
        message:
            "Dear Candidate, our AI-powered talent matching system has identified your profile as a strong fit for multiple Software Engineer II/III openings at top-tier companies in your area. Salaries range from $130K-$220K. Click here to upload your resume and get matched instantly. This is an automated message, please do not reply directly.",
        created_at: "2026-01-18T11:20:00",
        read: true,
    },
    {
        id: "e3b0c442-98fc-4e1e-8b1f-1a2b3c4d5e04",
        name: "Priya Nair",
        email: "priya.nair@linear.app",
        title: "Re: Your application — Product Engineer",
        message:
            "Thanks again for applying and for the thoughtful walkthrough of your project during the take-home review. The team enjoyed discussing your approach to state management. We've decided to move forward with another candidate whose backend experience more closely matches this particular opening, but we'd like to keep your resume on file for future roles. Wishing you the best in your search.",
        created_at: "2026-01-18T16:40:05",
        read: true,
    },
    {
        id: "e3b0c442-98fc-4e1e-8b1f-1a2b3c4d5e05",
        name: "James O'Connor",
        email: "james.oconnor@vercel.com",
        title: "Loved your open-source contribution",
        message:
            "Hey — I'm on the DX team here and noticed you'd opened a PR against one of our examples repos a few months back, nice fix. Wasn't reaching out about that specifically, but it led me to your site and I think you'd be a great fit for our Developer Experience Engineer opening. No pressure at all, just wanted to flag it in case you're looking.",
        created_at: "2026-01-12T08:15:00",
        read: false,
    },
    {
        id: "e3b0c442-98fc-4e1e-8b1f-1a2b3c4d5e06",
        name: "Sarah Chen",
        email: "sarah.chen@stripe.com",
        title: "Following up — Frontend Engineer role",
        message:
            "Just floating this back to the top of your inbox in case it got buried. Totally understand if the timing isn't right, but wanted to check if you had 15 minutes this week or next to connect. Let me know either way!",
        created_at: "2026-01-12T13:05:00",
        read: false,
    },
    {
        id: "e3b0c442-98fc-4e1e-8b1f-1a2b3c4d5e07",
        name: "Amanda Torres",
        email: "amanda.torres@notion.so",
        title: "Quick question about your availability",
        message:
            "Hi there, I'm recruiting for a Senior Frontend role on our Docs team and your portfolio came up in a search for engineers with strong animation/interaction work — the micro-interactions on your project pages are a nice touch. Are you currently open to new opportunities, or is your site more of a 'not actively looking but always curious' situation? Either answer is totally fine, just trying to gauge timing.",
        created_at: "2026-01-09T10:30:00",
        read: true,
    },
];

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
    const [transmissions, setTransmissions] = useState(INITIAL_TRANSMISSIONS);
    const [activeId, setActiveId] = useState(INITIAL_TRANSMISSIONS[0]?.id ?? null);
    const [expandedId, setExpandedId] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    // Check if we're on mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 1024);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const markRead = (id, read) => {
        setTransmissions(prev =>
            prev.map(t => (t.id === id ? { ...t, read } : t))
        );
    };

    const handleDelete = (id) => {
        setTransmissions(prev => prev.filter(t => t.id !== id));
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
                                                        {selectedTransmission.read ? "MARK_UNREAD()" : "MARK_READ()"}
                                                    </button>
                                                    <button
                                                        className={styles.deleteButton}
                                                        onClick={() => handleDelete(selectedTransmission.id)}
                                                    >
                                                        <span className="material-symbols-outlined">delete_forever</span> DELETE_()
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