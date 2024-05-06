import { FunctionComponent } from "react";
import styles from "./Footer.module.css";

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
                    A-32, Albany, New York, UK
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
                  <div className={styles.div}>02029-8-31288</div>
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
                    info@finitrek.com
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
              <div className={styles.career}>Career</div>
              <div className={styles.car}>Car</div>
              <div className={styles.packages}>Packages</div>
              <div className={styles.features}>Features</div>
              <div className={styles.priceline}>Priceline</div>
            </div>
          </div>
          <div className={styles.footerResources}>
            <div className={styles.resources}>Resources</div>
            <div className={styles.resourcesLinks}>
              <div className={styles.download}>Download</div>
              <div className={styles.helpCentre}>Help Centre</div>
              <div className={styles.guides}>Guides</div>
              <div className={styles.partnerNetwork}>Partner Network</div>
              <div className={styles.cruises}>Cruises</div>
              <div className={styles.developer}>Developer</div>
            </div>
          </div>
          <div className={styles.footerNavColumns1}>
            <div className={styles.aboutRentcars}>About Rentcars</div>
            <div className={styles.whyChooseUsParent}>
              <div className={styles.whyChooseUs}>Why choose us</div>
              <div className={styles.ourStory}>Our Story</div>
              <div className={styles.investorRelations}>Investor Relations</div>
              <div className={styles.pressCenter}>Press Center</div>
              <div className={styles.advertise}>Advertise</div>
            </div>
          </div>
          <div className={styles.footerSocial}>
            <div className={styles.followUs}>Follow Us</div>
            <div className={styles.socialIcons}>
              <img
                className={styles.vuesaxlinearfacebookIcon}
                loading="lazy"
                alt=""
                src="/vuesaxlinearfacebook.svg"
              />
              <img
                className={styles.vuesaxlinearinstagramIcon}
                loading="lazy"
                alt=""
                src="/vuesaxlinearinstagram.svg"
              />
              <img
                className={styles.vuesaxlinearyoutubeIcon}
                loading="lazy"
                alt=""
                src="/vuesaxlinearyoutube.svg"
              />
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
