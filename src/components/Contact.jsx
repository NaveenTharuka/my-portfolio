'use client';

import { useState } from 'react';
import styles from './ContactSection.module.css';
import { addResponse } from '../../services/contacts.api';

const INITIAL_STATE = { name: '', email: '', title: '', message: '' };

export default function ContactSection() {
    const [formData, setFormData] = useState(INITIAL_STATE);
    const [status, setStatus] = useState('idle'); // idle | sending | sent | error

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await addResponse(formData);
            setStatus('sent');
            setTimeout(() => {
                setStatus('idle');
                setFormData(INITIAL_STATE);
            }, 2000);
        } catch (err) {
            console.error('Contact form submission failed:', err);
            setStatus('error');
        }
    };

    const buttonLabel = {
        idle: 'EXECUTE_UPLINK()',
        sending: 'TRANSMITTING...',
        sent: 'UPLINK_SENT',
        error: 'RETRY_UPLINK()',
    }[status];

    const statusText = {
        idle: 'Ready for Input',
        sending: 'Transmitting...',
        sent: 'Message Received',
        error: 'Uplink Failed — Retry',
    }[status];

    return (
        <section className={styles.section} id="contact">
            <div className={styles.blueprintGrid} />
            <div className={styles.container}>
                <div className={styles.grid}>
                    <div className={styles.infoColumn}>
                        <div className={styles.sectionNumber}>05_COMMS</div>
                        <h2 className={styles.heading}>
                            INITIATE_
                            <br />
                            CONTACT
                        </h2>
                        <p className={styles.description}>
                            Establish a secure uplink for project inquiries, technical consultations, or
                            architectural collaborations.
                        </p>
                        <div className={styles.statusRow}>
                            <span className={styles.statusLine} />
                            Status: {statusText}
                        </div>
                    </div>

                    <div className={styles.formColumn}>
                        <div className={styles.formCard}>
                            <form className={styles.form} onSubmit={handleSubmit}>
                                <div className={styles.row}>
                                    <div className={styles.field}>
                                        <label htmlFor="name" className={styles.label}>
                                            COMMAND_SENDER
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="// IDENTIFY YOURSELF"
                                            className={styles.input}
                                        />
                                    </div>
                                    <div className={styles.field}>
                                        <label htmlFor="email" className={styles.label}>
                                            UPLINK_ADDRESS
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="// EMAIL@DOMAIN.COM"
                                            className={styles.input}
                                        />
                                    </div>
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="title" className={styles.label}>
                                        PAYLOAD_TITLE
                                    </label>
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        required
                                        value={formData.title}
                                        onChange={handleChange}
                                        placeholder="// EMAIL@DOMAIN.COM"
                                        className={styles.input}
                                    />
                                </div>

                                <div className={styles.field}>
                                    <label htmlFor="message" className={styles.label}>
                                        MESSAGE_PAYLOAD
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="// ENTER TRANSMISSION DATA..."
                                        className={styles.textarea}
                                    />
                                </div>

                                <div className={styles.submitRow}>
                                    <button type="submit" disabled={status === 'sending'} className={styles.button}>
                                        {buttonLabel}
                                        <span className={`material-symbols-outlined ${styles.buttonIcon}`}>
                                            terminal
                                        </span>
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}