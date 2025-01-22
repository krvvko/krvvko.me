import React from 'react';
import styles from './index.module.css';

const Footer = async () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.container}>
            <span>All Rights Reserved © {year} - <span className={styles.krvvko}>krvvko.me</span></span>
        </footer>
    );
}

export default Footer;
