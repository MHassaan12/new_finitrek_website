import { FunctionComponent } from "react";
import styles from "../../Assets/css/Footer.module.css";
import { Link } from "react-router-dom";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerMain}>
          <div className={styles.footerColumns}>
            <div className={styles.footerColumnContainer}>
              <img className={styles.groupIcon} alt="" src="/group-2.svg" />
              <div className={styles.footerColumnRight}>
                <img className={styles.groupIcon1} alt="" src="/group-3.svg" />
              </div>
            </div>
            <div className={styles.footerContactInfo}>
              <div className={styles.contactIcons}>
                <img
                  className={styles.vuesaxlinearlocationIcon}
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearlocation.svg"
                />
                <div className={styles.contactDetails}>
                  <div className={styles.a32AlbanyNew}>
                    Green lane RM8 1UU Dagenham London
                  </div>
                </div>
              </div>
              <div className={styles.contactIcons1}>
                <img
                  className={styles.vuesaxlinearcallIcon}
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearcall.svg"
                />
                <div className={styles.wrapper}>
                  <div className={styles.div}>+44 2039831288</div>
                  <div className={styles.div} style={{ marginTop: '12px' }}>+44 7711 572073</div>
                </div>
              </div>
              <div className={styles.contactIcons2}>
                <img
                  className={styles.vuesaxlinearsmsIcon}
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearsms.svg"
                />
                <div className={styles.infofinitrekcomWrapper}>
                  <div className={styles.infofinitrekcom}>
                    info@finitrek.co.uk
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footerNavigation}>
          <div className={styles.footerNavColumns}>
            <div className={styles.ourProduct}>Our Product</div>
            <div className={styles.footerNavLinks}>
              <a href="#" className={styles.career}>Career</a>
              <a href="#" className={styles.car}>Car</a>
              <a href="#" className={styles.packages}>Packages</a>
              <a href="#" className={styles.features}>Features</a>
              <a href="#" className={styles.priceline}>Priceline</a>
            </div>
          </div>
          <div className={styles.footerResources}>
            <div className={styles.resources}>Resources</div>
            <div className={styles.resourcesLinks}>
              <a href="#" className={styles.download}>Download</a>
              <Link to="/help" className={styles.helpCentre}>Help Centre</Link>
              <Link to="/privacy" className={styles.guides}>privacy policy</Link>
              <Link to="/terms" className={styles.partnerNetwork}>term and conditions</Link>
            
            </div>
          </div>
          <div className={styles.footerNavColumns1}>
            <div className={styles.aboutRentcars}>About Rentcars</div>
            <div className={styles.whyChooseUsParent}>
              <a href="#" className={styles.whyChooseUs}>Why choose us</a>
              <a href="#" className={styles.ourStory}>Our Story</a>
              <a href="#" className={styles.investorRelations}>Investor Relations</a>
              <a href="#" className={styles.pressCenter}>Press Center</a>
              <a href="#" className={styles.advertise}>Advertise</a>
            </div>
          </div>
          <div className={styles.footerSocial}>
            <div className={styles.followUs}>Follow Us</div>
            <div className={styles.socialIcons}>
              <a href="https://facebook.com" target="_blank">
                <img
                  className={styles.vuesaxlinearfacebookIcon}
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearfacebook.svg"
                />
              </a>
              <a href="https://instagram.com" target="_blank">
                <img
                  className={styles.vuesaxlinearinstagramIcon}
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearinstagram.svg"
                />
              </a>
              <a href="https://youtube.com" target="_blank">
                <img
                  className={styles.vuesaxlinearyoutubeIcon}
                  loading="lazy"
                  alt=""
                  src="/vuesaxlinearyoutube.svg"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <div className={styles.footerCopyrightChild} />
        <div className={styles.copyright2024}>
          Copyright 2024 ・ FiniTrek, All Rights Reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
