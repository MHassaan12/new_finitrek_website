import { FunctionComponent } from "react";
import styles from "../../Assets/css/Login.module.css";
import LoginOptions from "./LoginOptions";
import RegisterOptions from "./RegisterOptions";


const Register: FunctionComponent = () => {

    return (
        <div className={styles.login}>
            <div className={styles.bgParent}>
                <div className={styles.bg} />
                <div className={styles.welcomePanel}>
                    <div className={styles.welcomeToFinitrekContainer}>
                        <p className={styles.welcomeTo}>Welcome to</p>
                        <p className={styles.finitrek}>FiniTrek</p>
                    </div>
                </div>
                <RegisterOptions />
                <div className={styles.registerArea}>
                    <div className={styles.dontHaveAnContainer}>
                        <span>{`Don’t have an account? `}</span>
                        <span className={styles.register}>Register</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register