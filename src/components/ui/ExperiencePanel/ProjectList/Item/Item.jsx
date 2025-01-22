import React from 'react';
import styles from './index.module.css';
import Link from "next/link";

const Item = ({project}) => {
    return (
        <div className={styles.container}>
            <img className={styles.image} src={project.images[0]} alt={project.id}/>
            <div className={styles.textContent}>
                <div className={styles.main}>
                    <span>{project.name_en} <span className={styles.type}>- {project.type}</span></span>
                    <span>{project.short_description_en}</span>
                </div>
                <div className={styles.info}>
                    <div className={styles.tech}>
                        {project.technologies.map((technology, index) => (
                            <span key={index}>{technology}</span>
                        ))}
                    </div>
                    <span>{new Date(project.creation_date).toLocaleDateString('en-US', {day: 'numeric', month: 'short', year: 'numeric'})}</span>
                </div>
            </div>
            {(project.url || project.source) && <div className={styles.links}>
                {project.source && <Link target={'_blank'} className={styles.link} href={project.source}>Source</Link>}
                {project.url && <Link target={'_blank'} className={styles.link} href={project.url}>Web</Link>}
            </div>}
        </div>
    );
}

export default Item;
