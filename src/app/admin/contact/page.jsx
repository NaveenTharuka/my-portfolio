"use client"
import { useState } from "react";
import Head from "next/head";
import styles from "./Dashboard.module.css";
import AdminHeader from "../components/Header";
import SideBar from "../components/AdminSideBar";

const TRANSMISSIONS = [
    {
        id: 1,
        sender: "SENDER_ID: RECRUITER_ALPHA",
        time: "14:02:22 UTC",
        title: "INFRASTRUCTURE ARCHITECT ROLE",
        desc: "Payload: Inquiry regarding cloud-native migration strategy for Tier-1 banking cluster. Seeking expertise in Kubernetes orchestration...",
        tags: [
            { label: "Clearance: L3", variant: "cyan" },
            { label: "Encrypted", variant: "default" },
        ],
        titleVariant: "default",
    },
    {
        id: 2,
        sender: "SENDER_ID: DEV_REL_COLLAB",
        time: "09:45:11 UTC",
        title: "OS_CONTRIBUTION_REQUEST",
        desc: "Payload: Proposal to integrate advanced telemetry module into the core SYS_ARCHITECT library. Potential for 25% performance boost...",
        tags: [{ label: "Clearance: L1", variant: "default" }],
        titleVariant: "default",
    },
    {
        id: 3,
        sender: "SENDER_ID: UNKNOWN_NODE",
        time: "YESTERDAY",
        title: "SECURITY_ALERT_PING",
        desc: "Payload: Multiple failed handshake attempts from subnet 192.168.0.0/24. Source geolocation: OBFUSCATED. Immediate review required...",
        tags: [{ label: "CRITICAL", variant: "error" }],
        titleVariant: "error",
    },
    {
        id: 4,
        sender: "SENDER_ID: SYSTEM_ADMIN",
        time: "02.14.2024",
        title: "WEEKLY_STATUS_SUMMARY",
        desc: "Payload: All nodes operating within nominal parameters. Memory usage optimized. Backup procedures initialized at 0400hrs...",
        tags: [{ label: "Report", variant: "default" }],
        titleVariant: "default",
    },
];

export default function InboxDashboard() {
    const [activeId, setActiveId] = useState(1);

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
                            <span className={styles.liveText}>4 ACTIVE_NODES</span>
                        </div>
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

                        {TRANSMISSIONS.map((t) => (
                            <div
                                key={t.id}
                                className={t.id === activeId ? styles.feedCardActive : styles.feedCard}
                                onClick={() => setActiveId(t.id)}
                            >
                                <div className={styles.feedCardTop}>
                                    <span className={t.id === activeId ? styles.feedSender : styles.feedSenderMuted}>
                                        {t.sender}
                                    </span>
                                    <span className={styles.feedTime}>{t.time}</span>
                                </div>
                                <h4 className={t.titleVariant === "error" ? styles.feedTitleError : styles.feedTitle}>
                                    {t.title}
                                </h4>
                                <p className={styles.feedDesc}>{t.desc}</p>
                                <div className={styles.feedTags}>
                                    {t.tags.map((tag) => (
                                        <span
                                            key={tag.label}
                                            className={
                                                tag.variant === "cyan"
                                                    ? styles.tagCyan
                                                    : tag.variant === "error"
                                                        ? styles.tagError
                                                        : styles.tag
                                            }
                                        >
                                            {tag.label}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </section>

                    {/* RIGHT: MESSAGE DETAILS */}
                    <section className={`${styles.detailColumn} ${styles.customScrollbar}`}>
                        <div className={styles.detailHeader}>
                            <div className={styles.detailTop}>
                                <div>
                                    <div className={styles.detailMeta}>
                                        <span className={styles.typeBadge}>TYPE: RECRUITMENT_NODE</span>
                                        <span className={styles.encryptionBadge}>ENCRYPTION: AES-256</span>
                                    </div>
                                    <h2 className={styles.detailTitle}>INFRASTRUCTURE ARCHITECT ROLE</h2>
                                    <div className={styles.detailInfo}>
                                        <div className={styles.infoItem}>
                                            <span className="material-symbols-outlined">person</span>
                                            <span>SENDER_ID: ALPHA_TALENT_SOLUTIONS</span>
                                        </div>
                                        <div className={styles.infoDot} />

                                        <div className={styles.infoDot} />

                                    </div>
                                </div>
                                <div className={styles.actionButtons}>
                                    <button className={styles.deleteButton}>
                                        <span className="material-symbols-outlined">delete_forever</span> DELETE_()
                                    </button>
                                </div>
                            </div>

                            {/* PAYLOAD VIEWER */}
                            <div className={styles.payloadViewer}>
                                <p className={styles.payloadText}>
                                    <span className={styles.italic}>// Subject: Opportunity for Senior Infrastructure Engineer</span>
                                </p>
                                <p className={styles.payloadText}>Greeting Engineer 8829-X,</p>
                                <p className={styles.payloadText}>
                                    We have been monitoring the deployment of the{" "}
                                    <span className={styles.highlight}>SYS_ARCHITECT_v1.0</span> framework and are highly
                                    impressed with the structural integrity of your backend clusters. A Tier-1 financial
                                    institution is currently seeking a specialized System Architect to lead their transition
                                    into a distributed multi-cloud architecture.
                                </p>
                                <p className={styles.payloadText}>
                                    Specifically, they are interested in your approach to high-availability state management
                                    and zero-trust networking protocols. Your recent work on the &apos;Log-Aggregator-v4&apos;
                                    repository aligns perfectly with their internal roadmap.
                                </p>
                                <p className={styles.payloadText}>
                                    If you are open to initializing a communication handshake, we would like to schedule a
                                    deep-dive technical audit of your career trajectory next Tuesday at 14:00 UTC.
                                </p>
                                <p className={styles.payloadText}>Awaiting status response.</p>
                                <p>
                                    Regards,
                                    <br />
                                    Director, Alpha Talent Solutions
                                </p>
                            </div>
                        </div>


                        {/* METADATA FOOTER */}
                        <div className={styles.footer}>
                            <div className={styles.footerLeft}>
                                <div>
                                    <span className={styles.footerLabel}>NODE_ID</span>
                                    <span className={styles.footerValue}>0xAF8829_TRANS</span>
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
                            <div className={styles.footerRight}>SYSTEM_LOC: US-EAST-1 // PAGE: 01/22</div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}