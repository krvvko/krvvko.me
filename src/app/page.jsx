import styles from "./page.module.css";
import TextTyper from "@/components/ui/TextTyper/TextTyper";

export const metadata = {
    title: "Home - krvvko",
    description: "Hey! I'm krvvko - a Frontend Web Developer. This is my web portfolio with demonstration of my skills, experience and projects. Feel free to get in touch with me ;)",
    openGraph: {
        images: "/preview.png",
    }
};

const Home = () => {
    return (
        <div className={styles.container}>
            <span className={styles.topText}>Hi! I'm <span className={`${styles.bold} ${styles.gradient}`}>Kostya Krevvetka</span></span>
            <div className={styles.mainText}>
                <div className={styles.typer}>Developer - <span className={styles.gradient}><TextTyper words={['Full Stack', 'Frontend', 'Backend', 'Desktop', 'Bots', 'UI/UX']}/></span> <div className={styles.blinker}></div> </div>
                <span>Crafting <span className={styles.gradient}>Projects</span> of Any</span>
                <span>Complexity with <span className={styles.gradient}>Artistic</span> Flair</span>
            </div>
        </div>
    );
}


export default Home;