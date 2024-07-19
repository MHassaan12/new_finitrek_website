import React, { useState, FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styles from "../../Assets/css/Header.module.css";
import Navbar from "./Navbar";
import { Sling as Hamburger } from 'hamburger-react';

const Header: FunctionComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.header}>
            <header className={styles.uSPLayout}>
                <div className={styles.treeStructure}>
                    <Link to="/">
                        <div className={styles.uSPItems}>
                            <img
                                className={styles.groupIcon}
                                loading="lazy"
                                alt="Group Icon"
                                src="/group-12.svg"
                            />
                            <div className={styles.rentalSteps}>
                                <img className={styles.groupIcon1} alt="Group Icon 1" src="/group-1.svg" />
                            </div>
                        </div>
                    </Link>
                    <div className={styles.hamburger_menu}>
                        <Hamburger toggled={isOpen} toggle={setIsOpen} />
                        {isOpen && (
                            <div className={`menu ${isOpen ? 'open' : ''}`}>
                                <Navbar />
                                <div className={styles.authentication}>
                                    <div className={styles.authOptions}>
                                        <div className={styles.signInButton}>
                                            <Link to="/signin">
                                                <div className={styles.signIn}>Sign in</div>
                                            </Link>
                                        </div>
                                        <div className={styles.signUpWrapper}>
                                            <Link to="/signup" className={styles.link}>
                                                <div className={styles.signUp}>Sign up</div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <nav className={styles.benefitItemsWrapper}>
                        <Navbar />
                    </nav>
                    <div className={styles.authentication}>
                        <div className={styles.authOptions}>
                            <div className={styles.signInButton}>
                                <Link to="/signin">
                                    <div className={styles.signIn}>Sign in</div>
                                </Link>
                            </div>
                            <div className={styles.signUpWrapper}>
                                <Link to="/signup" className={styles.link}>
                                    <div className={styles.signUp}>Sign up</div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Header;
