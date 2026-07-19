import { useRouter } from 'next/navigation'
import styles from './SideBar.module.css'
import { usePathname } from 'next/navigation'

export default function SideBar() {

    const router = useRouter()
    const path = usePathname()

    return (

        <aside className={styles.sidebar}>
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
                <a className={path === '/admin/projects' ? styles.sidebarNavItemActive : styles.sidebarNavItem} onClick={() => router.push('/admin/projects')}>
                    <span className="material-symbols-outlined">code</span> REPOSITORIES
                </a>
                <a className={path === '/admin/interests' ? styles.sidebarNavItemActive : styles.sidebarNavItem} onClick={() => router.push('/admin/interests')}>
                    <span className="material-symbols-outlined">interests</span> Interests
                </a>
                <a className={path === '/admin/contact' ? styles.sidebarNavItemActive : styles.sidebarNavItem} onClick={() => router.push('/admin/contact')}>
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