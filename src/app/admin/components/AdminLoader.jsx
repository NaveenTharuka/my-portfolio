// components/AdminLoader.jsx
import styles from './AdminLoader.module.css';

export default function AdminLoader({ text }) {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loadingText}>{text ? text : 'LOADING'}</div>
            <div className={styles.loader}>
                <div className={styles.jimuPrimaryLoading}></div>
            </div>
        </div>
    );
}