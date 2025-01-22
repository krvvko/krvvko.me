'use client'
import styles from "./page.module.css";
import TextTyper from "@/components/ui/TextTyper/TextTyper";

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