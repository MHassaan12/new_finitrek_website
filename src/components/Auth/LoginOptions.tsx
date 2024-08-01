import { FunctionComponent, useState } from "react";
import styles from "../../Assets/css/LoginOptions.module.css";
import LoginWithGoogle from "./LoginWithGoogle";
import { useForm } from "react-hook-form";
import { post } from "../../utils/api";
import { useNavigate } from "react-router-dom";


interface LoginOptionsProps {
    setLoading: Function;
}

interface FormData{
    username: string
    password: string
}

const LoginOptions: FunctionComponent<LoginOptionsProps> = ({ setLoading }) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate()

    const onSubmit = async (body: any) => {
        setLoading(true)
        try {
            const { data } = await post(`/user/login-submit?username=${body.username}&password=${body.password}`, body);
            if (data) {
                localStorage.setItem('user', JSON.stringify(data))
                setLoading(false)
                navigate('/')
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    
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
                        <div className={styles.inputContainers}>
                            <img className={styles.emailIcon} alt="" src="/vector-1.svg" />
                        </div>
                        <div className={styles.input}>
                            <div className={styles.email1}>Username</div>
                            <input className={styles.examplegmailcom} placeholder="Enter your username" {...register("username", { required: "Username is required" })} />
                            {errors.username && <span className={styles.error}>{errors.username.message}</span>}
                        </div>
                    </div>


                    <div className={styles.emailField}>
    <div className={styles.inputContainers}>
        <img className={styles.emailIcon} alt="" src="/group.svg" />
    </div>
    <div className={styles.input}>
        <div className={styles.password1}>Password</div>
        <input
            className={styles.examplegmailcom}
            type="password"
            placeholder="***********"
            {...register("password", { required: "Password is required" })}
        />
        {errors.password && <span className={styles.error}>{errors.password.message}</span>}
    </div>
   
</div>


                </div>
                <div className={styles.optionsArea}>
                    <div className={styles.rememberMe}>
                        <div className={styles.rememberBox}>
                            <div className={styles.checkbox}>
                                <input type="checkbox" className={styles.check} />
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
