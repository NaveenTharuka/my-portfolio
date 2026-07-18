import styles from './SideBar.module.css'
export default function SideBar() {
    return (
        < aside className={styles.sidebar} >
            <div className={styles.sidebarBrand}>
                <div className={styles.sidebarBrandRow}>
                    <div className={styles.sidebarBrandIcon}>
                        <span className="material-symbols-outlined">shield_person</span>
                    </div>
                    <div>
                        <h2 className={styles.sidebarBrandTitle}>ROOT_ACCESS</h2>
                        <p className={styles.sidebarBrandId}>ID: 8829-X</p>
                    </div>
                </div>
            </div>

            <nav className={styles.sidebarNav}>
                <a className={styles.sidebarNavItem} href="#">
                    <span className="material-symbols-outlined">dashboard</span> DASHBOARD
                </a>
                <a className={styles.sidebarNavItemActive} href="#">
                    <span className="material-symbols-outlined">database</span> REPOSITORIES
                </a>
                <a className={styles.sidebarNavItem} href="#">
                    <span className="material-symbols-outlined">router</span> INFRASTRUCTURE
                </a>
                <a className={styles.sidebarNavItem} href="#">
                    <span className="material-symbols-outlined">monitoring</span> ANALYTICS
                </a>
                <a className={styles.sidebarNavItem} href="#">
                    <span className="material-symbols-outlined">forum</span> RESPONSES
                </a>
            </nav>

            <div className={styles.sidebarBottom}>
                <button className={styles.logoutButton}>
                    <span className="material-symbols-outlined">logout</span> LOGOUT
                </button>
            </div>
        </aside >
    )
}