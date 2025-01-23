"use client"

import React from 'react';
import styles from './index.module.css';
import Link from "next/link";

const ContactLink = ({url, icon}) => {
    return (
        <Link href={url} target={'_blank'} className={styles.container}>
            <div className={styles.icon} style={{maskImage: `url(${icon.src})`}}></div>
        </Link>
    );
}

export default ContactLink;
