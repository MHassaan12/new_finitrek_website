import React, { useEffect, useState } from "react";
import Breadcrum from "../components/Common/Breadcrum";
import styles from "../Assets/css/help.module.css";
import { get } from "../utils/api";
import Loader from "../components/Common/Loader";

const HelpPage = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    useEffect(() => {
        setLoading(true);
        get('/faq').then((result) => {
            setData(result.data.faqs);
            setLoading(false);
        }).catch((error) => {
            setLoading(false);
        });
    }, []);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    if (loading) return <Loader />;

    return (
        <div className={styles.page}>
            <Breadcrum title="Help" />
            <div className={styles.main}>
                {data.map((item: any, index: number) => (
                    <div key={item.id} className={styles.popular}>
                        <h2 onClick={() => toggleAccordion(index)} className={styles.question}>
                            {item.question}
                        </h2>
                        {openIndex === index && (
                            <div className={styles.content}>
                                <p>{item.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HelpPage;
