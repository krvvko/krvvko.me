import styles from "./page.module.css";
import ContactBlock from "@/components/ui/ContactBlock/ContactBlock";
import ContactLink from "@/components/ui/ContactLink/ContactLink";

import cv from "@/media/svg/cv.svg";
import email from "@/media/svg/email.svg";
import github from "@/media/svg/github.svg";
import linkedin from "@/media/svg/linkedin.svg";
import React from "react";
import ContactStat from "@/components/ui/ContactStat/ContactStat";
import {fetchPersonalApi} from "@/api/fetchPersonalApi";

export const metadata = {
    title: "Contact - krvvko",
    description: "Here is how you can contact me",
    openGraph: {
        images: "/preview.png",
    }
};

const Contact = async () => {
    const { projects, technologies, personal } = await fetchPersonalApi();
    const year = new Date().getFullYear();

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <ContactBlock data={personal} year={year} />
                <div className={styles.links}>
                    <ContactLink url={personal.links.github} icon={github} />
                    <ContactLink url={personal.links.linkedIn} icon={linkedin} />
                    <ContactLink url={'mailto:' + personal.contacts.email} icon={email} />
                    <ContactLink url={'/resume.pdf'} icon={cv} />
                </div>
            </div>
            <div className={styles.stats}>
                <ContactStat label={'Experience: '} value={`${parseInt(year) - parseInt(new Date(personal.developer_since).getFullYear())}+ years`} />
                <ContactStat label={'Projects: '} value={`${projects.length}+`} />
                <ContactStat label={'Technologies: '} value={technologies.length} />
            </div>
        </div>
    );
};

export default Contact;
