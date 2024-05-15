import { FunctionComponent } from "react"
import styles from "../../Assets/css/Header.module.css"
import { Link } from "react-router-dom";



const Header: FunctionComponent = () => {
    return (
        <div className={styles.header}>
            <header className={styles.uSPLayout}>
                <div className={styles.treeStructure}>
                        <Link to="/">
                    <div className={styles.uSPItems}>
                        <img
                            className={styles.groupIcon}
                            loading="lazy"
                            alt=""
                            src="/group.svg"
                        />
                        <div className={styles.rentalSteps}>
                            <img className={styles.groupIcon1} alt="" src="/group-1.svg" />
                        </div>
                    </div>
                        </Link>
                    <nav className={styles.benefitItemsWrapper}>
                        <nav className={styles.benefitItems}>
                            <div className={styles.popularDestinations}>
                                Popular Destinations
                            </div>
                            <div className={styles.businessAccount}>Business Account</div>
                            <div className={styles.operatorSignup}>Operator Signup</div>
                            <div className={styles.help}>Help?</div>
                        </nav>
                    </nav>
                    <div className={styles.authentication}>
                        <div className={styles.authOptions}>
                            <div className={styles.signInButton}>
                                <div className={styles.signIn}>Sign in</div>
                            </div>
                            <div className={styles.signUpWrapper}>
                                <div className={styles.signUp}>Sign up</div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header;