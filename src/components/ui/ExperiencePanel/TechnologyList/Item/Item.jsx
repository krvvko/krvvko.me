import React from 'react';
import styles from './index.module.css';

const Item = ({tech}) => {
    console.log(tech);
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.name}>{tech.name} <div className={styles.language}> - {tech.language}</div></div>
                <span className={styles.description}>{tech.description_en}</span>
            </div>
            <div className={styles.right}>
                <span className={styles.date}>
                    Since {new Intl.DateTimeFormat("en-US", { month: "short", day: "numeric", year: "numeric" }).format(new Date(tech.start_date))}
                </span>
                <div className={styles.knowledge}>
                    <span className={styles.knowledgeText}>Knowledge</span>
                    <div className={styles.outer}>
                        <div
                            className={styles.inner}
                            style={{ width: tech.knowledge * 10 + "%" }}
                        ></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Item;
