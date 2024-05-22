import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "../../Assets/css/LoginWithGoogle.module.css";

export type LoginWithGoogleType = {
    search1?: string;
    loginWithGoogle?: string;

    /** Style props */
    propPadding?: CSSProperties["padding"];
    propWidth?: CSSProperties["width"];
    propOverflow?: CSSProperties["overflow"];
};

const LoginWithGoogle: FunctionComponent<LoginWithGoogleType> = ({
    search1,
    loginWithGoogle,
    propPadding,
    propWidth,
    propOverflow,
}) => {
    const loginWithGoogleStyle: CSSProperties = useMemo(() => {
        return {
            padding: propPadding,
        };
    }, [propPadding]);

    const search1IconStyle: CSSProperties = useMemo(() => {
        return {
            width: propWidth,
            overflow: propOverflow,
        };
    }, [propWidth, propOverflow]);

    return (
        <div className={styles.loginWithGoogle} style={loginWithGoogleStyle}>
            <div className={styles.loginWithGoogleChild} />
            <img
                className={styles.search1Icon}
                alt=""
                src={search1}
                style={search1IconStyle}
            />
            <div className={styles.loginWithGoogleWrapper}>
                <div className={styles.loginWithGoogle1}>{loginWithGoogle}</div>
            </div>
        </div>
    );
};

export default LoginWithGoogle;
