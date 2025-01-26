import React from 'react';
import styles from './index.module.css';
import Link from "next/link";

const Item = ({project}) => {
    return (
        <Link className={styles.container} href={`/project/${project.id}`}>
            <div className={styles.textContent}>
                <div className={styles.main}>
                    <span>{project.name_en} <span className={styles.type}>- {project.type}</span></span>
                </div>
                <div className={styles.info}>
                    <div className={styles.tech}>
                        {project.technologies.map((technology, index) => (
                            <span key={index}>{technology}</span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Item;
