import {redirect} from 'next/navigation';
import styles from './index.module.css';
import {fetchProjectById} from "@/api/fetchPersonalApi";
import ProjectElementFull from "@/components/ui/ProjectElementFull/ProjectElementFull";

export async function generateMetadata({ params }) {
    const { id } = params;
    const { project } = await fetchProjectById(id);

    if (!project) {
        return {
            title: "Not Found",
            description: "The requested project does not exist.",
            openGraph: {
                images: "/preview.png",
            },
        };
    }
    return {
        title: `${project.name_en} - krvvko`,
        description: project.short_description_en,
        openGraph: {
            images: project.images[0],
        },
    };
}

const ProjectPage = async ({ params }) => {
    const { id } = await params;
    const { project } = await fetchProjectById(id);

    if (!project) {
        redirect('/404');
    }

    return (
        <div className={styles.container}>
            <ProjectElementFull project={project} />
        </div>
    );
};

export default ProjectPage;
