import styles from './Projects.module.css'

export default function AdminProjectCard({ project }) {
    return (
        <div
            className={`${styles.projectCard} ${project.status === 'critical' ? styles.criticalCard : ''}`}
        >
            <div className={styles.cardHeader}>
                <div>
                    <h3 className={`${styles.cardTitle} ${project.status === 'critical' ? styles.criticalTitle : ''}`}>
                        {project.title}
                        {project.status === 'critical' && (
                            <span className={`material-symbols-outlined ${styles.warningIcon}`}>warning</span>
                        )}
                    </h3>
                    <p className={styles.cardDescription}>// {project.description}</p>
                </div>
                <div className={styles.cardActions}>
                    <button className={styles.editBtn}>
                        <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button
                        className={styles.deleteBtn}
                        onClick={() => handleDelete(project.id)}
                    >
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                </div>
            </div>
            <div className={styles.cardTags}>
                {project.stack.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                ))}
            </div>
            <div className={styles.cardFooter}>
                <span className={project.status === 'critical' ? styles.criticalStatus : ''}>
                    {project.status === 'critical' ? 'STATUS: CRITICAL_EXCEPTION' : `LAST_UPDATED: ${project.lastUpdated}`}
                </span>
                <a href="#" className={styles.repoLink}>
                    REPOSITORY_LINK
                    <span className="material-symbols-outlined">open_in_new</span>
                </a>
            </div>
        </div>
    )
}