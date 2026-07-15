// app/page.js
'use client';
import { useState, useEffect } from 'react';
import styles from './interest.module.css';
import SideBar from '../../components/AdminSideBar';
import AdminHeader from '../../components/Header';

export default function Home() {
    const [interests, setInterests] = useState([
        {
            id: '8829-X-01',
            title: 'Full Stack Development',
            description: 'End-to-end architecting of complex web ecosystems focusing on high-concurrency Node.js environments.',
            active: false
        },
        {
            id: '8829-X-02',
            title: 'Backend Engineering',
            description: 'Optimizing distributed databases, microservices orchestration, and low-latency communication.',
            active: false
        },
        {
            id: '8829-X-03',
            title: 'AI & Machine Learning',
            description: 'Implementation of large language models for autonomous agent workflows and predictive diagnostics.',
            active: false
        },
    ]);

    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });
    const [currentPage, setCurrentPage] = useState(0);

    const interestsPerPage = 3;
    const pageCount = Math.ceil(interests.length / interestsPerPage);
    const currentInterests = interests.slice(
        currentPage * interestsPerPage,
        (currentPage + 1) * interestsPerPage
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) return;

        const newInterest = {
            id: `8829-X-${String(interests.length + 1).padStart(2, '0')}`,
            title: formData.title.trim(),
            description: formData.description.trim() || 'No description provided.',
            active: false,
        };

        setInterests([...interests, newInterest]);
        setFormData({ title: '', description: '' });
        setCurrentPage(0);
    };

    const handleDelete = (id) => {
        setInterests(interests.filter(item => item.id !== id));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleTagKeyDown = (e) => {
        if (e.key === 'Enter' && tagInput.trim()) {
            e.preventDefault();
            setTags(prev => [...prev, tagInput.trim().toUpperCase()]);
            setTagInput('');
        }
    };

    const removeTag = (tagToRemove) => {
        setTags(prev => prev.filter(tag => tag !== tagToRemove));
    };

    return (
        <>
            <div className={styles.scanline}></div>

            {/* Header */}
            <AdminHeader />

            {/* Sidebar */}
            <SideBar />

            {/* Main Content */}
            <main className={styles.mainContent}>
                <div className={styles.container}>
                    <div className={styles.breadcrumb}>
                        <span className={styles.breadcrumbCyan}>02_INTERESTS_MANAGEMENT</span>
                        <span className={styles.breadcrumbSlash}>/</span>
                        <span className={styles.breadcrumbGray}>ACTIVE_NODES</span>
                    </div>

                    <div className={styles.grid}>
                        {/* Left Column - Form */}
                        <div className={styles.gridLeft}>
                            <div className={styles.formCard}>
                                <div className={styles.accentBar}></div>
                                <h2 className={styles.formHeading}>
                                    <span className="material-symbols-outlined">add_box</span>
                                    INITIALIZE_NEW_INTEREST
                                </h2>
                                <form className={styles.form} onSubmit={handleSubmit}>
                                    <div className={styles.field}>
                                        <label className={styles.label}>// interest_title</label>
                                        <input
                                            className={styles.input}
                                            placeholder="e.g. EMBEDDED_SYSTEMS_RUST"
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>// payload_description</label>
                                        <textarea
                                            className={`${styles.input} ${styles.textarea}`}
                                            placeholder="Define core focus objectives..."
                                            rows="3"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <button className={styles.submitBtn} type="submit">
                                        <span className="material-symbols-outlined">bolt</span>
                                        EXECUTE_INITIALIZATION
                                    </button>
                                </form>
                            </div>

                            <div className={styles.diagnostics}>
                                <div className={styles.diagRow}>
                                    <span className={styles.diagLabel}>CORE_SYNCHRONIZATION: STABLE</span>
                                    <span className={styles.diagLatency}>LATENCY: 12ms</span>
                                </div>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFill} style={{ width: '98.4%' }}></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Interest List */}
                        <div className={styles.gridRight}>
                            <div className={styles.listHeader}>
                                <h2 className={styles.listTitle}>INTERESTS_CORE</h2>
                                <span className={styles.listCount}>TOTAL_NODES: {String(interests.length).padStart(2, '0')}</span>
                            </div>

                            {currentInterests.map((interest) => (
                                <div key={interest.id} className={styles.interestCard}>
                                    <div className={styles.cardHeader}>
                                        <div>
                                            <h3 className={styles.cardTitle}>{interest.title}</h3>
                                            <p className={styles.cardDescription}>// {interest.description}</p>
                                        </div>
                                        <div className={styles.cardActions}>
                                            <button className={styles.editBtn}>
                                                <span className="material-symbols-outlined">edit</span>
                                            </button>
                                            <button
                                                className={styles.deleteBtn}
                                                onClick={() => handleDelete(interest.id)}
                                            >
                                                <span className="material-symbols-outlined">delete</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className={styles.cardFooter}>
                                        <span>NODE_UID: {interest.id}</span>
                                        <a href="#" className={styles.repoLink}>
                                            REPOSITORY_LINK
                                            <span className="material-symbols-outlined">open_in_new</span>
                                        </a>
                                    </div>
                                </div>
                            ))}

                            <div className={styles.pagination}>
                                <button
                                    className={styles.paginationBtn}
                                    onClick={() => setCurrentPage(Math.max(0, currentPage - 1))}
                                    disabled={currentPage === 0}
                                >
                                    PREV_NODE
                                </button>
                                <div className={styles.pageNumbers}>
                                    {Array.from({ length: pageCount }, (_, i) => (
                                        <button
                                            key={i}
                                            className={`${styles.pageNumber} ${i === currentPage ? styles.activePage : ''}`}
                                            onClick={() => setCurrentPage(i)}
                                        >
                                            {String(i + 1).padStart(2, '0')}
                                        </button>
                                    ))}
                                </div>
                                <button
                                    className={styles.paginationBtn}
                                    onClick={() => setCurrentPage(Math.min(pageCount - 1, currentPage + 1))}
                                    disabled={currentPage === pageCount - 1}
                                >
                                    NEXT_NODE
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </>
    );
}