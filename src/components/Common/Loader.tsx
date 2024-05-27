// Loader.js
import React, { FunctionComponent } from 'react';
import styles from '../../Assets/css/Loader.module.css';

const Loader: FunctionComponent = () => {
    return (
        <div className={styles.loaderOverlay}>
            <div className={styles.loader}></div>
        </div>
    );
};

export default Loader;
