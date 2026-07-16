// app/page.js
'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import styles from './interest.module.css';
import SideBar from '../../components/AdminSideBar';
import AdminHeader from '../../components/Header';
import AdminInterestCard from '../../components/AdminInterestCard';
import { addInterest, deleteInterest, getInterests } from '../../../../../services/interests.api';

export default function Home() {
    const router = useRouter();
    const [interests, setInterests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [refreshKey, setRefreshKey] = useState(0); // Add refresh key

    const [formData, setFormData] = useState({
        title: '',
        desc: ''
    });
    const [currentPage, setCurrentPage] = useState(0);

    const interestsPerPage = 3;
    const pageCount = Math.ceil(interests.length / interestsPerPage);
    const currentInterests = interests.slice(
        currentPage * interestsPerPage,
        (currentPage + 1) * interestsPerPage
    );

    // Fetch function
    const fetchInterests = async () => {
        setLoading(true);
        try {
            const data = await getInterests();
            setInterests(data);
        } catch (error) {
            console.error('Error fetching interests:', error);
        } finally {
            setLoading(false);
        }
    };

    // Fetch on mount and when refreshKey changes
    useEffect(() => {
        fetchInterests();
    }, [refreshKey]); // Add refreshKey as dependency

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!formData.title.trim()) return;

        try {
            const newInterest = {
                title: formData.title.trim(),
                desc: formData.desc.trim() || 'No desc provided.',
            };
            await addInterest(newInterest);
            setFormData({ title: '', desc: '' });

            // Trigger re-fetch
            setRefreshKey(prev => prev + 1);
            // OR use router.refresh()
            router.refresh();
        } catch (error) {
            console.error('Error adding interest:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await deleteInterest(id);
            // Trigger re-fetch
            setRefreshKey(prev => prev + 1);
            // OR use router.refresh()
            router.refresh();
        } catch (error) {
            console.error('Error deleting interest:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    if (loading) {
        return <div>Loading...</div>
    }

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
                                        <label className={styles.label}>// payload_desc</label>
                                        <textarea
                                            className={`${styles.input} ${styles.textarea}`}
                                            placeholder="Define core focus objectives..."
                                            rows="3"
                                            name="desc"
                                            value={formData.desc}
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
                                <AdminInterestCard key={interest.id} interest={interest} onDelete={() => handleDelete(interest.id)} />
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