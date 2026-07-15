// app/page.js
'use client';
import { useState } from 'react';
import styles from './projects.module.css';

import { CodeBracketIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/navigation';
import SideBar from '../../components/AdminSideBar';
import AdminHeader from '../../components/Header';
import AdminProjectCard from '../../components/AdminProjectsCard';

export default function Home() {

    const router = useRouter()

    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'NEURAL_NET_V4',
            description: 'Autonomous routing optimization protocol.',
            stack: ['PYTHON', 'PYTORCH', 'DOCKER'],
            repo: 'github.com/root/neural',
            lastUpdated: '2023.10.12',
            status: 'active',
        },
        {
            id: 2,
            title: 'QUANTUM_SECURE_API',
            description: 'End-to-end encryption with post-quantum standards.',
            stack: ['GO', 'GRPC', 'TLS_1.3'],
            repo: 'github.com/root/quantum',
            lastUpdated: '2023.10.05',
            status: 'active',
        },
        {
            id: 3,
            title: 'CORE_OS_WATCHDOG',
            description: 'Monitoring system for kernel-level exceptions.',
            stack: ['C++', 'LINUX_KERNEL'],
            repo: 'github.com/root/watchdog',
            lastUpdated: '2023.10.01',
            status: 'critical',
        },
    ]);

    const [currentPage, setCurrentPage] = useState(0);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        repo: '',
    });
    const [tags, setTags] = useState([]);
    const [stackInput, setStackInput] = useState('');

    const projectsPerPage = 3;
    const pageCount = Math.ceil(projects.length / projectsPerPage);

    const currentProjects = projects.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage
    );

    const handleAddProject = (e) => {
        e.preventDefault();
        if (!formData.title.trim()) return;

        const newProject = {
            id: Date.now(),
            title: formData.title.trim(),
            description: formData.description.trim() || 'No description provided.',
            stack: tags.length ? tags : ['N/A'],
            repo: formData.repo.trim() || 'github.com/root/repo',
            lastUpdated: new Date().toISOString().split('T')[0].replace(/-/g, '.'),
            status: 'active',
        };

        setProjects([newProject, ...projects]);
        setFormData({ title: '', description: '', repo: '' });
        setTags([]);
        setStackInput('');
        setCurrentPage(0);
    };

    const handleDelete = (id) => {
        setProjects(projects.filter(p => p.id !== id));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleStackKeyDown = (e) => {
        if (e.key === 'Enter' && stackInput.trim()) {
            e.preventDefault();
            setTags(prev => [...prev, stackInput.trim().toUpperCase()]);
            setStackInput('');
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
                        <span className={styles.breadcrumbCyan}>01_PROJECT_MANAGEMENT</span>
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
                                    INITIALIZE_NEW_PROJECT
                                </h2>
                                <form className={styles.form} onSubmit={handleAddProject}>
                                    <div className={styles.field}>
                                        <label className={styles.label}>// project_title</label>
                                        <input
                                            className={styles.input}
                                            placeholder="ARCHIVE_01_GENESIS"
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>// description</label>
                                        <textarea
                                            className={`${styles.input} ${styles.textarea}`}
                                            placeholder="Define core architectural objectives..."
                                            rows="3"
                                            name="description"
                                            value={formData.description}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>// technical_stack</label>
                                        <div className={styles.stackWrapper}>
                                            <input
                                                className={styles.input}
                                                placeholder="React, Rust, WebGL..."
                                                type="text"
                                                value={stackInput}
                                                onChange={(e) => setStackInput(e.target.value)}
                                                onKeyDown={handleStackKeyDown}
                                            />
                                            <div className={styles.tagContainer}>
                                                {tags.map(tag => (
                                                    <span key={tag} className={styles.tag}>
                                                        {tag}
                                                        <button
                                                            type="button"
                                                            className={styles.tagRemove}
                                                            onClick={() => removeTag(tag)}
                                                        >
                                                            ×
                                                        </button>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>// repository_link</label>
                                        <div className={styles.repoWrapper}>
                                            <span className={styles.repoPrefix}>https://</span>
                                            <input
                                                className={styles.input}
                                                placeholder="github.com/root/repo"
                                                type="text"
                                                name="repo"
                                                value={formData.repo}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <button className={styles.submitBtn} type="submit">
                                        <span className="material-symbols-outlined">bolt</span>
                                        EXECUTE_DEPLOYMENT
                                    </button>
                                </form>
                            </div>

                            <div className={styles.diagnostics}>
                                <div className={styles.diagRow}>
                                    <span className={styles.diagLabel}>SYS_HEALTH: OPTIMAL</span>
                                    <span className={styles.diagLatency}>LATENCY: 12ms</span>
                                </div>
                                <div className={styles.progressBar}>
                                    <div className={styles.progressFill}></div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Project List */}
                        <div className={styles.gridRight}>
                            <div className={styles.listHeader}>
                                <h2 className={styles.listTitle}>CURRENT_INFRASTRUCTURE</h2>
                                <span className={styles.listCount}>TOTAL_NODES: {projects.length}</span>
                            </div>

                            {currentProjects.map((project) => (
                                <AdminProjectCard key={project.id} project={project} />
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

            {/* Footer */}
            <footer className={styles.footer}>
                <div className={styles.footerLeft}>
                    <span className={styles.statusIndicator}>
                        <span className={styles.statusDot}></span>
                        UPLINK_STABLE
                    </span>
                    <span>OS: SHADOW_KERNEL_V2.1</span>
                    <span>MEMORY: 14.4GB / 64GB</span>
                </div>
                <div className={styles.footerRight}>
                    <span className={styles.footerTime}>UTC: 2023.10.27_14:32:01</span>
                    <span className={styles.region}>REGION: US_EAST_01</span>
                </div>
            </footer>
        </>
    );
}