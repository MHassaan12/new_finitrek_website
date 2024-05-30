import { FunctionComponent, useState } from "react";
import styles from "../../Assets/css/Login.module.css";
import LoginOptions from "./LoginOptions";
import RegisterOptions from "./RegisterOptions";
import { Link } from "react-router-dom";
import Loader from "../Common/Loader";


const Register: FunctionComponent = () => {
    const [loading, setLoading]=useState<boolean>(false)

    if(loading) return <Loader/>
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
                <RegisterOptions setLoading={setLoading} />
                {/* <div className={styles.registerArea}>
                    <div className={styles.dontHaveAnContainer}>
                        <span>{`Don’t have an account? `}</span>
                        <Link to="/signin" className={styles.register}>Login</Link>
                    </div>
                </div> */}
            </div>
        </div>
    )
}

export default Register