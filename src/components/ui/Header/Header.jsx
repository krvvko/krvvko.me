import React from 'react';
import styles from './index.module.css';
import RedirectWithShrimp from "@/components/logic/RedirectWithShrimp/RedirectWithShrimp";

const Header = () => {
    return (
        <header className={styles.container}>
            <RedirectWithShrimp model={'shrimp'} name={'home'} url={'/'} camera={{
                position: [2, 2, 3],
                target: [-4, -1.5, 0.75]
            }} />
            <RedirectWithShrimp model={'shrimp_experience'} name={'experience'} url={'/experience'} camera={{
                position: [-1, 2, 3],
                target: [4, -1.5, -0.75]
            }} />
            <RedirectWithShrimp model={'shrimp_contact'} name={'contact'} url={'/contact'} camera={{
                position: [-5, 4, 2],
                target: [8, 0, -3]
            }} />
        </header>
    );
}

export default Header;
