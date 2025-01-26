import React from 'react';
import styles from './index.module.css';

const Item = ({work}) => {
    return (
        <div className={styles.container}>
            <span className={styles.name}>{work.role}</span>
            <div className={styles.under}>
                <span className={styles.company}>{work.company_name}</span>

                <div className={styles.time}>
                    <span>
                      {new Date(work.start_date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: '2-digit',
                          year: 'numeric',
                      })}
                    </span>
                    <span> - </span>
                    <span>
                      {work.end_date
                          ? new Date(work.end_date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: '2-digit',
                              year: 'numeric',
                          })
                          : '...'}
                    </span>
                </div>
            </div>
            <div className={styles.list}>
                {work.stack.map((item, index) => (
                    <span className={styles.tech} key={index}>{item}</span>
                ))}
            </div>
            <span className={styles.description}>
                {work.company_description_en}
            </span>

            <div className={styles.responsibilities}>
                <span>Responsibilities:</span>
                <ul className={styles.rList}>
                    {work.responsibilities.map((item, index) => (
                        <li key={index} className={styles.responsibility}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Item;
