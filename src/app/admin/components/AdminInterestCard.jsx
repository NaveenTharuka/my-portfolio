// AdminInterestCard.jsx
import React from 'react';
import styles from './AdminInterestCard.module.css';



const AdminInterestCard = ({
    interest,
    onEdit,
    onDelete,
}) => {
    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <div>
                    <h3 className={styles.cardTitle}>{interest.title}</h3>
                    <p className={styles.cardDescription}>// {interest.desc}</p>
                </div>
                <div className={styles.actionButtons}>
                    <button className={styles.editButton} onClick={onEdit} title="Edit">
                        <span className="material-symbols-outlined">edit</span>
                    </button>
                    <button className={styles.deleteButton} onClick={onDelete} title="Delete">
                        <span className="material-symbols-outlined">delete</span>
                    </button>
                </div>
            </div>
            <div className={styles.cardFooter}>
                <span>NODE_UID: {interest.id}</span>
            </div>
        </div>
    );
};

export default AdminInterestCard;