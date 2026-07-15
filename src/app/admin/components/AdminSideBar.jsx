import styles from './SideBar.module.css'
export default function SideBar() {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.sidebarHeader}>
                <div className={styles.avatarBox}>
                    <span className="material-symbols-outlined">database</span>
                </div>
                <div>
                    <h3 className={styles.userName}>ROOT_ACCESS</h3>
                    <p className={styles.userId}>ID: 8829-X</p>
                </div>
            </div>

            <nav className={styles.sidebarNav}>
                <a href="#" className={styles.navLink}>
                    <span className="material-symbols-outlined">dashboard</span>
                    DASHBOARD
                </a>
                <a href="#" className={`${styles.navLink} ${styles.activeNav}`}>
                    <span className="material-symbols-outlined">database</span>
                    REPOSITORIES
                </a>
                <a href="#" className={styles.navLink}>
                    <span className="material-symbols-outlined">router</span>
                    INFRASTRUCTURE
                </a>
                <a href="#" className={styles.navLink}>
                    <span className="material-symbols-outlined">monitoring</span>
                    ANALYTICS
                </a>
            </nav>

            <div className={styles.sidebarFooter}>
                <button className={styles.execBtn}>EXECUTE_INIT()</button>
                <div className={styles.logoutWrapper}>
                    <a href="#" className={styles.logoutLink}>
                        <span className="material-symbols-outlined">logout</span>
                        <span>LOGOUT</span>
                    </a>
                </div>
            </div>
        </aside>
    )
}