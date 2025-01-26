import styles from "./page.module.css";
import {fetchPersonalApi} from "@/api/fetchPersonalApi";
import ExperiencePanel from "@/components/ui/ExperiencePanel/ExperiencePanel";

export const metadata = {
    title: "Experience - krvvko",
    description: "Page with my experience",
    openGraph: {
        images: "/preview.png",
    }
};

const Experience = async () => {
    const { projects, technologies, personal } = await fetchPersonalApi();

    return (
        <div className={styles.container}>
            <ExperiencePanel
                projects={projects}
                technologies={technologies}
                personal={personal}
            />
        </div>
    );
};

export default Experience;
