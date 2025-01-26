import React from 'react';
import styles from './index.module.css';

const Point = ({label, value}) => (
    <div className={styles.point}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
    </div>
)

const ContactBlock = ({data, year}) => {
    return (
        <div className={styles.container}>
            <div className={styles.top}>
                <span className={styles.name}>Kostya K.</span>
                <span className={styles.position}>- Web Developer</span>
            </div>
            <span className={styles.description}>Hi! 👋 I'm a full-stack developer with {parseInt(year) - parseInt(new Date(data.developer_since).getFullYear())} years of experience. I love creating user-friendly apps and am always open to new opportunities. Feel free to reach out! 🚀</span>
            <Point label={'Location: '} value={data.location} />
            <Point label={'Status: '} value={data.status} />
        </div>
    );
}

export default ContactBlock;
