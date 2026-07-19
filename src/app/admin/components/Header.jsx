import styles from './Header.module.css'
import { useRouter } from 'next/navigation';

export default function AdminHeader() {
    const router = useRouter();
    return (
        <header className={styles.header}>
            <div className={styles.headerLeft}>
                <span className={styles.headerTitle} onClick={() => router.push('/')}>NAVEEN_THARUKA</span>
            </div>
            <div className={styles.headerRight}>
                <button className={styles.settingsBtn}>
                    <span className="material-symbols-outlined">settings</span>
                </button>
                <div className={styles.avatar}>
                    <img
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDQ0JgGiEu3wsVGPV2tsw0LQdKieOtzEd_5ff7O0uH6ARTAFd1dKyrHNUcVdERACMqkiHzDcopqdLOdItfuOwH6XhZvGT_s35nlDGN5yMupzJPkfPfw9jlSDrsCS-ZgNRjF247LawFwxQY0myje93f1dsGjRGSpdxUSfIdWSvq1iqla31FvwQTf8n8mnzirnic5dJfSBGv_E_PHcoAXNJiSub6B8PZhR_FcR3Sryc0Vm7w_A1-h9k9lVg"
                        alt="Avatar"
                    />
                </div>
            </div>
        </header>
    )
}