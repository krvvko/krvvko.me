import styles from './page.module.css';
import Link from "next/link";

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <span className={styles.nft}>Error <span className={styles.gradient}>404</span></span>

            <span className={styles.nft}>Page Not Found</span>
            <Link className={styles.nflink} href={'/'}>Back to homepage</Link>
        </div>
    );
}
