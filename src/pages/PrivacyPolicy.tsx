import React, { useEffect, useState } from "react";
import Breadcrum from "../components/Common/Breadcrum";
import styles from "../Assets/css/PrivacyPolicy.module.css";
import { get } from "../utils/api";
import Loader from "../components/Common/Loader";

const PrivecyPolicy = () => {

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    get("/privacy-policy")
      .then((result) => {
        console.log('FFFFFFFFFFFFFFFFFFFFFFFFF', result)
        setData(result.data.pageInfo);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;

  return (
    <div className={styles.page}>
      <Breadcrum title="Privecy Policy" />
      <div className={styles.main}>
      {data?.content && <div className={styles.popular} dangerouslySetInnerHTML={{ __html: data.content }} />}
          {/* <div className={styles.popular}>
            <h2>{item.question}</h2>
            <div className={styles.content}>
              <p>{item.answer}</p>
            </div>
          </div> */}
   
      </div>
    </div>
  );
};

export default PrivecyPolicy;
