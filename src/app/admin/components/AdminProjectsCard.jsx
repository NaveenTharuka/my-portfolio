// components/AdminProjectsCard.js
import styles from './Projects.module.css';

export default function AdminProjectCard({ project, onEdit, onDelete }) {
    const techStack = project?.tech || [];
    const tags = project?.tags || [];
    const isCritical = project?.status === 'critical';

    return (
        <div className={`${styles.projectCard} ${isCritical ? styles.projectCardCritical : ''}`}>
            <div className={styles.cardHeader}>
                <div className={styles.cardHeaderLeft}>
                    <div className={styles.titleWrapper}>
                        <span className={`${styles.categoryBadge} ${isCritical ? styles.categoryBadgeCritical : ''}`}>
                            {project?.category || 'Uncategorized'}
                        </span>
                        <h3 className={`${styles.cardTitle} ${isCritical ? styles.cardTitleCritical : ''}`}>
                            {project?.title || 'Untitled Project'}
                            {isCritical && (
                                <span className={`material-symbols-outlined ${styles.warningIcon}`}>warning</span>
                            )}
                        </h3>
                    </div>
                    <p className={styles.cardDescription}>
                        // {project?.description || 'No description provided'}
                    </p>
                    <p className={styles.cardId}>
                        ID: {project?.id || 'N/A'}
                    </p>
                </div>
                <div className={styles.cardActions}>
                    <button
                        className={styles.actionBtn}
                        onClick={() => onEdit && onEdit(project)}
                        title="Edit"
                    >
                        <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button
                        className={`${styles.actionBtn} ${styles.deleteBtn}`}
                        onClick={() => onDelete && onDelete(project?.id)}
                        title="Delete"
                    >
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                </div>
            </div>

            <div className={styles.section}>
                <div>
                    <p className={styles.sectionLabel}>// tech_array</p>
                    <div className={styles.tagsContainer}>
                        {techStack.length > 0 ? (
                            techStack.map((tech, index) => (
                                <span key={index} className={styles.techTag}>
                                    {tech.toUpperCase()}
                                </span>
                            ))
                        ) : (
                            <span className={styles.emptyTag}>NO_TECH_SPECIFIED</span>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <div>
                    <p className={styles.sectionLabel}>// tags</p>
                    <div className={styles.tagsContainer}>
                        {tags.length > 0 ? (
                            tags.map((tag, index) => (
                                <span key={index} className={styles.tag}>
                                    {tag.toUpperCase()}
                                </span>
                            ))
                        ) : (
                            <span className={styles.emptyTag}>NO_TAGS</span>
                        )}
                    </div>
                </div>
            </div>

            <div className={styles.cardFooter}>
                <div className={styles.footerLeft}>
                    {isCritical ? (
                        <span className={styles.statusCritical}>STATUS: CRITICAL_EXCEPTION</span>
                    ) : (
                        <>
                            {project?.created_at && (
                                <span>CREATED: {new Date(project.created_at).toISOString().split('T')[0].replace(/-/g, '.')}</span>
                            )}
                            {project?.updated_at && (
                                <span>UPDATED: {new Date(project.updated_at).toISOString().split('T')[0].replace(/-/g, '.')}</span>
                            )}
                        </>
                    )}
                </div>
                {project?.github ? (
                    <a
                        href={`https://${project.github}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.repoLink}
                    >
                        REPOSITORY_LINK
                        <span className="material-symbols-outlined">open_in_new</span>
                    </a>
                ) : (
                    <span className={styles.noRepo}>NO_REPOSITORY</span>
                )}
            </div>
        </div>
    );
}