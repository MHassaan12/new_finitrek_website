import { FunctionComponent } from "react";
import styles from "../../Assets/css/LoginOptions.module.css";
import LoginWithGoogle from "./LoginWithGoogle";
import { useForm } from "react-hook-form";
import { post } from "../../utils/api";
import { useNavigate } from "react-router-dom";

const LoginOptions: FunctionComponent = () => {
    const { register, handleSubmit, } = useForm();
    const navigate = useNavigate()

    const onSubmit = async (body: any) => {
        try {
            const { data } = await post(`/user/login-submit?username${body.username}&password=${body.password}`, body);
            if (data) {
                localStorage.setItem('user', JSON.stringify(data))
                navigate('/')
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
                    search1="/vector.svg"
                    loginWithGoogle="Login with Facebook"
                    // propPadding="var(--padding-6xl) var(--padding-221xl) var(--padding-2xl)"
                    // propWidth="16px"
                    // propOverflow="unset"
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
                         
                        <div className={styles.emailField}>
                            <div className={styles.email1}>Username</div>
                            <input className={styles.examplegmailcom} placeholder="Enter your username" {...(register("username"))} />
                        </div>
                   
                     
                    <div className={styles.emailField}>
                                <div className={styles.password1}>Password</div>
                                <input className={styles.examplegmailcom} placeholder="***********" {...(register("password"))} />
                    </div>
                       
                </div>
                <div className={styles.optionsArea}>
                    <div className={styles.rememberMe}>
                        <div className={styles.rememberBox}>
                            <div className={styles.checkbox}>
                                <div className={styles.check} />
                            </div>
                            <div className={styles.rememberMe1}>Remember me</div>
                        </div>
                        <div className={styles.forgotPassword}>Forgot Password?</div>
                    </div>
                </div>
                <button className={styles.button} type="submit">
                    <div className={styles.buttonChild} />
                    <div className={styles.login}>Login</div>
                </button>
            </div>
        </form>
    );
};

export default LoginOptions;
