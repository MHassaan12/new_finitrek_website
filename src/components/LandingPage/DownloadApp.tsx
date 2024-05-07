import { FunctionComponent } from "react";
import styles from "../../Assets/css/DownloadApp.module.css";

const DownloadApp: FunctionComponent = () => {
  return (
    <div className={styles.downloadApp}>
      <img className={styles.appDownloadGraphic} alt="" src="/vector-1.svg" />
      <img className={styles.downloadAppChild} alt="" src="/rectangle-9.svg" />
    
      <div className={styles.appInfoAvailabilityWrapper}>
        <div className={styles.appInfoAvailability}>
          <div className={styles.appInfoStatus}>
            <div className={styles.appInfoLabel}>
              <div className={styles.coomingSoon}>Cooming Soon!</div>
            </div>
            <h1 className={styles.downloadFinitrekAppContainer}>
              <span>{`Download FiniTrek App for `}</span>
              <span className={styles.free}>FREE</span>
            </h1>
          </div>
          <div className={styles.forFasterEasier}>
            For faster, easier booking and exclusive deals.
          </div>
          <div className={styles.appStoreIcons}>
            <img
              className={styles.image2Icon}
              loading="lazy"
              alt=""
              src="/image-2@2x.png"
            />
            <img
              className={styles.image3Icon}
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.iphone14ProSpaceBlackMock}>
        <div className={styles.phoneMockupContainer}>
          <div className={styles.phoneShadow}>
            <img className={styles.shadowIcon} alt="" src="/shadow@2x.png" />
            <img className={styles.mainIcon} alt="" src="/main@2x.png" />
          </div>
          <img
            className={styles.iphone14ProSpaceBlackMock1}
            alt=""
            src="/iphone-14-pro-space-black-mockup-label@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
