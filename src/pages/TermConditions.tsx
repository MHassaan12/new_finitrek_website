import React, { useEffect, useState } from "react";
import Breadcrum from "../components/Common/Breadcrum";
import styles from "../Assets/css/TermConditions.module.css";
import { get } from "../utils/api";
import Loader from "../components/Common/Loader";

const TermConditions = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)


    useEffect(() => {
        setLoading(true)
        get('/terms-&-condition').then((result) => {
            setData(result.data.pageInfo)
            setLoading(false)
        }).catch((error) => {
            setLoading(false)

        })
    }, [])

    if (loading) return <Loader />

    return (
        <div className={styles.page}>
            <Breadcrum title="Term and Conditions" />
            <div className={styles.main}>
                {data?.content && <div className={styles.popular} dangerouslySetInnerHTML={{ __html: data.content }} />}
                {/* {
                    data.map((item: any) => (

                        <div className={styles.popular}>
                            <h2>{item.question}</h2>
                            <div className={styles.content}>
                                <p>
                                    {item.answer}
                                </p>

                            </div>
                        </div>
                    ))
                } */}
            </div>
        </div>
    );
};

export default TermConditions;