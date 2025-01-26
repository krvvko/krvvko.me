import React from 'react';
import styles from './index.module.css';
import Link from "next/link";

import source from '@/media/svg/github.svg';
import url from '@/media/svg/url.svg';
import arrow from '@/media/svg/arrow.svg';

const ProjectElementFull = ({project}) => {
    return (
        <div className={styles.container}>
            <div className={styles.headline}>
                <div className={styles.headlineLeft}>
                    <span className={styles.name}>{project.name_en}</span>
                    <span className={styles.type}>- {project.type}</span>
                </div>
                <div className={styles.headlineRight}>
                    {project.technologies.map((technology, index) => (
                        <span className={styles.tech} key={index}>
                            {technology}
                        </span>
                    ))}
                </div>
            </div>
            {(project.url || project.source) &&
                <div className={styles.links}>
                    {project.url && (<Link className={styles.link} href={project.url} target={'_blank'}>
                        <div className={styles.icon} style={{maskImage: `url(${url.src})`}}></div>
                        View Live
                    </Link>) }
                    {project.source && (<Link className={styles.link} href={project.source} target={'_blank'}>
                        <div className={styles.icon} style={{maskImage: `url(${source.src})`}}></div>
                        Source Code
                    </Link>) }
                </div>
            }
            <span className={styles.description}>{project.short_description_en}</span>
            <div className={styles.images}>
                <img src={project.images[0]} alt="First" className={styles.img} />
            </div>
            <span className={styles.description}>{project.full_description_en}</span>
            {project.images.length > 1 &&
                <div className={styles.images}>
                    {project.images.map((image, index) => {
                        if (index === 0) return;
                        return (
                            <img key={index} src={image} className={styles.img} alt={`project image ${index}`} />
                        )
                    })}
                </div>
            }
            <div className={styles.bottom}>
                <Link className={styles.back} href={'/experience'}>
                    <div className={`${styles.icon} ${styles.arrow}`} style={{maskImage: `url(${arrow.src})`}}></div>
                    <span>Back to projects</span>
                </Link>
                <span className={styles.created}>Created on {new Date(project.creation_date).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
            </div>
        </div>
    );
}

export default ProjectElementFull;
