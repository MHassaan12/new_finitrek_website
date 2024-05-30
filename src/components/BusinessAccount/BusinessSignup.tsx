import { FunctionComponent, useState } from "react";
import styles from "../../Assets/css/BusinessRegister.module.css";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../Common/Loader";
import { useForm } from "react-hook-form";
import { post } from "../../utils/api";
import LoginWithGoogle from "../Auth/LoginWithGoogle";


interface FormData{
    username: string
    email: string
    password: string
    password_confirmation: string
}

const BusinessSignup: FunctionComponent = () => {
    const [loading, setLoading] = useState(false)
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
    const navigate = useNavigate()

    const onSubmit = async (body: any) => {
        setLoading(true)
        try {
            const { data } = await post('/vendor/signup/submit', body);
            if (data?.authUser) {
                setLoading(false)
                navigate('/signin')
            }
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }


    if (loading) return <Loader />

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
                <form className={styles.loginOptions} onSubmit={handleSubmit(onSubmit)}>
                    <div className={styles.socialLogin}>
                        <LoginWithGoogle
                            search1="/search-1.svg"
                            loginWithGoogle="Login with Google"
                        />
                        <LoginWithGoogle
                            search1="/vector.svg"
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
                                    <img className={styles.emailIcon} alt="" src="/vector-1.svg" />
                                </div>
                                <div className={styles.input}>
                                    <div className={styles.email1}>Email</div>
                                    <input className={styles.examplegmailcom} placeholder="Enter your email" {...register("email", { required: "Email is required" })} />
                                    {errors.email && <span className={styles.error}>{errors.email.message}</span>}
                                </div>
                            </div>


                            <div className={styles.emailField}>

                                <div className={styles.inputContainers}>
                                    <img className={styles.emailIcon} alt="" src="/group.svg" />
                                </div>
                                <div className={styles.input}>
                                    <div className={styles.password1}>Password</div>
                                    <input className={styles.examplegmailcom} placeholder="***********"  {...register("password", { required: "Password is required" })} />
                                    {errors.password && <span className={styles.error}>{errors.password.message}</span>}
                                </div>
                            </div>
                            <div className={styles.emailField}>

                                <div className={styles.inputContainers}>
                                    <img className={styles.emailIcon} alt="" src="/group.svg" />
                                </div>
                                <div className={styles.input}>
                                    <div className={styles.password1}>Password</div>
                                    <input className={styles.examplegmailcom} placeholder="***********"  {...register("password_confirmation", { required: "Confirm Password is required" })} />
                                    {errors.password_confirmation && <span className={styles.error}>{errors.password_confirmation.message}</span>}
                                </div>
                            </div>

                        </div>

                        <button className={styles.button} type="submit">
                            <div className={styles.buttonChild} />
                            <div className={styles.login}>Carete Account</div>
                        </button>
                    </div>


                </form>
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

export default BusinessSignup