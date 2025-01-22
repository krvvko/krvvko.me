import styles from "./page.module.css";

export const metadata = {
    title: "Contact",
    description: "Meow meow",
};

async function fetchPersonalData(apiUrl) {
    const personalResponse = await fetch(`${apiUrl}/personal`, { cache: "no-store" });
    const personal = await personalResponse.json();
    return personal;
}

const Contact = async () => {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const personal = await fetchPersonalData(apiUrl);

    return (
        <div className={styles.container}>
            <h1>Contact</h1>
            <section>
                <h2>Personal</h2>
                <pre>{JSON.stringify(personal, null, 2)}</pre>
            </section>
        </div>
    );
};

export default Contact;
