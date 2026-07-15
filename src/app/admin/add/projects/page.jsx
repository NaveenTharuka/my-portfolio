// app/page.js
'use client';
import { useState, useEffect } from 'react';
import styles from './projects.module.css';
import { useRouter } from 'next/navigation';
import SideBar from '../../components/AdminSideBar';
import AdminHeader from '../../components/Header';
import AdminProjectCard from '../../components/AdminProjectsCard';
import { addProject, getProjects, deleteProject } from '../../../../../services/projects.api';

export default function Home() {
    const router = useRouter();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(0);
    const [editingId, setEditingId] = useState(null);

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        category: '',
        github: '',
        image: '',
        tags: []
    });

    const [tagInput, setTagInput] = useState('');
    const [techInput, setTechInput] = useState('');
    const [techTags, setTechTags] = useState([]);

    const projectsPerPage = 3;
    const pageCount = Math.ceil(projects.length / projectsPerPage);
    const currentProjects = projects.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage
    );

    // Fetch projects on mount
    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            setLoading(true);
            const data = await getProjects();
            setProjects(data);
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleAddProject = async (e) => {
        e.preventDefault();
        if (!formData.title.trim()) return;

        const newProject = {
            title: formData.title.trim(),
            description: formData.description.trim() || 'No description provided.',
            category: formData.category.trim() || 'Uncategorized',
            tech: techTags.length ? techTags : ['N/A'],
            image: formData.image.trim() || 'default-image-url',
            github: formData.github.trim() || 'github.com/root/repo',
            tags: formData.tags.length ? formData.tags : ['N/A']
        };

        try {
            const created = await addProject(newProject);
            console.log()
            resetForm();
            setCurrentPage(0);
        } catch (error) {
            console.error('Error adding project:', error);
            alert('FAILED_TO_ADD_PROJECT');
        }
    };

    const handleUpdateProject = async (e) => {
        e.preventDefault();
        if (!formData.title.trim()) return;

        const updatedProject = {
            title: formData.title.trim(),
            description: formData.description.trim() || 'No description provided.',
            category: formData.category.trim() || 'Uncategorized',
            tech: techTags.length ? techTags : ['N/A'],
            image: formData.image.trim() || 'default-image-url',
            github: formData.github.trim() || 'github.com/root/repo',
            tags: formData.tags.length ? formData.tags : ['N/A']
        };

        try {
            const updated = await updateProject(editingId, updatedProject);
            setProjects(projects.map(p => p.id === editingId ? updated : p));
            resetForm();
            setEditingId(null);
        } catch (error) {
            console.error('Error updating project:', error);
            alert('FAILED_TO_UPDATE_PROJECT');
        }
    };

    const handleDelete = async (id) => {
        if (window.confirm('CONFIRM_DELETE_NODE?')) {
            try {
                await deleteProject(id);
                setProjects(projects.filter(p => p.id !== id));
            } catch (error) {
                console.error('Error deleting project:', error);
                alert('FAILED_TO_DELETE_PROJECT');
            }
        }
    };

    const handleEdit = (project) => {
        setEditingId(project.id);
        setFormData({
            title: project.title || '',
            description: project.description || '',
            category: project.category || '',
            github: project.github || '',
            image: project.image || '',
            tags: project.tags || []
        });
        setTechTags(project.tech || []);
        setTagInput('');
        setTechInput('');
    };

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            category: '',
            github: '',
            image: '',
            tags: []
        });
        setTechTags([]);
        setTagInput('');
        setTechInput('');
        setEditingId(null);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleTagKeyDown = (e) => {
        if (e.key === 'Enter' && tagInput.trim()) {
            e.preventDefault();
            if (!formData.tags.includes(tagInput.trim())) {
                setFormData(prev => ({
                    ...prev,
                    tags: [...prev.tags, tagInput.trim()]
                }));
            }
            setTagInput('');
        }
    };

    const handleTechKeyDown = (e) => {
        if (e.key === 'Enter' && techInput.trim()) {
            e.preventDefault();
            if (!techTags.includes(techInput.trim())) {
                setTechTags([...techTags, techInput.trim()]);
            }
            setTechInput('');
        }
    };

    const removeTag = (tagToRemove, type) => {
        if (type === 'tech') {
            setTechTags(prev => prev.filter(tag => tag !== tagToRemove));
        } else {
            setFormData(prev => ({
                ...prev,
                tags: prev.tags.filter(tag => tag !== tagToRemove)
            }));
        }
    };

    if (loading) {
        return (
            <div className={styles.loadingContainer}>
                <div className={styles.loadingText}>LOADING_PROJECTS...</div>
            </div>
        );
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
                                    {editingId ? 'UPDATE_PROJECT' : 'INITIALIZE_NEW_PROJECT'}
                                </h2>
                                <form className={styles.form} onSubmit={editingId ? handleUpdateProject : handleAddProject}>
                                    <div className={styles.field}>
                                        <label className={styles.label}>// project_title</label>
                                        <input
                                            className={styles.input}
                                            placeholder="E-Commerce Web"
                                            type="text"
                                            name="title"
                                            value={formData.title}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>// project_category</label>
                                        <input
                                            className={styles.input}
                                            placeholder="Full-Stack"
                                            type="text"
                                            name="category"
                                            value={formData.category}
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
                                                placeholder="React, Springboot, PostgreSQL..."
                                                type="text"
                                                value={techInput}
                                                onChange={(e) => setTechInput(e.target.value)}
                                                onKeyDown={handleTechKeyDown}
                                            />
                                            <div className={styles.tagContainer}>
                                                {techTags.map(tag => (
                                                    <span key={tag} className={styles.tag}>
                                                        {tag}
                                                        <button
                                                            type="button"
                                                            className={styles.tagRemove}
                                                            onClick={() => removeTag(tag, 'tech')}
                                                        >
                                                            ×
                                                        </button>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>// tags</label>
                                        <div className={styles.stackWrapper}>
                                            <input
                                                className={styles.input}
                                                placeholder="springboot, reactjs, postgre..."
                                                type="text"
                                                value={tagInput}
                                                onChange={(e) => setTagInput(e.target.value)}
                                                onKeyDown={handleTagKeyDown}
                                            />
                                            <div className={styles.tagContainer}>
                                                {formData.tags.map(tag => (
                                                    <span key={tag} className={styles.tag}>
                                                        {tag}
                                                        <button
                                                            type="button"
                                                            className={styles.tagRemove}
                                                            onClick={() => removeTag(tag, 'tag')}
                                                        >
                                                            ×
                                                        </button>
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>// github_repository</label>
                                        <div className={styles.repoWrapper}>
                                            <span className={styles.repoPrefix}>https://</span>
                                            <input
                                                className={styles.input}
                                                placeholder="github.com/username/repo"
                                                type="text"
                                                name="github"
                                                value={formData.github}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className={styles.field}>
                                        <label className={styles.label}>// image_url</label>
                                        <input
                                            className={styles.input}
                                            placeholder="https://example.com/image.png"
                                            type="text"
                                            name="image"
                                            value={formData.image}
                                            onChange={handleChange}
                                        />
                                    </div>

                                    <div className={styles.buttonGroup}>
                                        <button className={styles.submitBtn} type="submit">
                                            <span className="material-symbols-outlined">bolt</span>
                                            {editingId ? 'UPDATE_DEPLOYMENT' : 'EXECUTE_DEPLOYMENT'}
                                        </button>
                                        {editingId && (
                                            <button
                                                type="button"
                                                className={styles.cancelBtn}
                                                onClick={resetForm}
                                            >
                                                CANCEL
                                            </button>
                                        )}
                                    </div>
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
                                <AdminProjectCard
                                    key={project.id}
                                    project={project}
                                    onEdit={() => handleEdit(project)}
                                    onDelete={() => handleDelete(project.id)}
                                />
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