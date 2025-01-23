import React from 'react';
import styles from './index.module.css';

const ContactStat = ({label, value}) => {
    return (
        <div className={styles.container}>
            <span className={styles.label}>{label}</span>
            <span className={styles.value}>{value}</span>
        </div>
    );
}

export default ContactStat;
