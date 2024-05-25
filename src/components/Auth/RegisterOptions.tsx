import { FunctionComponent } from "react";
import styles from "../../Assets/css/LoginOptions.module.css";
import LoginWithGoogle from "./LoginWithGoogle";
import { useForm } from "react-hook-form";
import { post } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const RegisterOptions: FunctionComponent = () => {
    const { register, handleSubmit, } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (body: any) => {
        try {
            const { data } = await post('/user/signup-submit', body);
            if (data?.authUser) {
                navigate('/signin')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form className={styles.loginOptions} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.socialLogin}>
                <LoginWithGoogle
                    search1="/search-1.svg"
                    loginWithGoogle="Login with Google"
                />
                <LoginWithGoogle
                    search1="/fb-1.svg"
                    loginWithGoogle="Login with Facebook" 
                    propWidth="16px"
                    propOverflow="unset"
                />
            </div>
            <div className={styles.loginOptionsInner}>
                <div className={styles.frameParent}>
                    <div className={styles.lineWrapper}>
                        <div className={styles.frameChild} />
                    </div>
                    <div className={styles.or}>OR</div>
                    <div className={styles.lineContainer}>
                        <div className={styles.frameItem} />
                    </div>
                </div>
            </div>
            <div className={styles.credentialsArea}>
                <div className={styles.inputFields}>
                    
                     
                    
                    <div className={styles.password}>
                        <div className={styles.passwordChild} />
                        <div className={styles.frameGroup}>
                            <div className={styles.groupWrapper}>
                                <img className={styles.groupIcon} alt="" src="/group.svg" />
                            </div>
                            <div className={styles.passwordField}>
                                <div className={styles.password1}>Username</div>
                                <input className={styles.empty} placeholder="Enter Username" {...(register("password"))} />
                            </div>
                        </div>
                        <div className={styles.bieyeFillWrapper}>
                            <img
                                className={styles.bieyeFillIcon}
                                alt=""
                                src="/bieyefill.svg"
                            />
                        </div>
                    </div>
                    <div className={styles.password}>
                        <div className={styles.passwordChild} />
                        <div className={styles.frameGroup}>
                            <div className={styles.groupWrapper}>
                                <img className={styles.groupIcon} alt="" src="/group.svg" />
                            </div>
                            <div className={styles.passwordField}>
                                <div className={styles.password1}>Email</div>
                                <input className={styles.empty} placeholder="Enter Your Email" {...(register("password"))} />
                            </div>
                        </div>
                        <div className={styles.bieyeFillWrapper}>
                            <img
                                className={styles.bieyeFillIcon}
                                alt=""
                                src="/bieyefill.svg"
                            />
                        </div>
                    </div>
                    <div className={styles.password}>
                        <div className={styles.passwordChild} />
                        <div className={styles.frameGroup}>
                            <div className={styles.groupWrapper}>
                                <img className={styles.groupIcon} alt="" src="/group.svg" />
                            </div>
                            <div className={styles.passwordField}>
                                <div className={styles.password1}>Password</div>
                                <input className={styles.empty} placeholder="***********" {...(register("password"))} />
                            </div>
                        </div>
                        <div className={styles.bieyeFillWrapper}>
                            <img
                                className={styles.bieyeFillIcon}
                                alt=""
                                src="/bieyefill.svg"
                            />
                        </div>
                    </div>
                    <div className={styles.password}>
                        <div className={styles.passwordChild} />
                        <div className={styles.frameGroup}>
                            <div className={styles.groupWrapper}>
                                <img className={styles.groupIcon} alt="" src="/group.svg" />
                            </div>
                            <div className={styles.passwordField}>
                                <div className={styles.password1}>Confirm Password</div>
                                <input className={styles.empty} placeholder="***********" {...(register("password_confirmation"))} />
                            </div>
                        </div>
                        <div className={styles.bieyeFillWrapper}>
                            <img
                                className={styles.bieyeFillIcon}
                                alt=""
                                src="/bieyefill.svg"
                            />
                        </div>
                    </div>
                </div>

                <button className={styles.button} type="submit">
                    <div className={styles.buttonChild} />
                    <div className={styles.login}>Carete Account</div>
                </button>
                
                <div className={styles.or}>OR</div>

                <button className={styles.button} type="submit">
                    <div className={styles.buttonChild} />
                    <div className={styles.login}>Carete Account</div>
                </button>
            </div>
        </form>
    );
};

export default RegisterOptions;
