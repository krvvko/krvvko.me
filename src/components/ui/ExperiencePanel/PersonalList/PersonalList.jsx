import React from "react";
import Item from "@/components/ui/ExperiencePanel/PersonalList/Item/Item";
import styles from './index.module.css';

const PersonalList = ({ personal }) => {
    return (
        <div className={styles.container}>

            {personal.experience.map((item, index) => (
                <React.Fragment key={index}>
                    <Item work={item} key={index} />
                    {index < personal.experience.length - 1 && <div className={styles.hr}></div>}
                </React.Fragment>
            ))}
        </div>
    );
};

export default PersonalList;
