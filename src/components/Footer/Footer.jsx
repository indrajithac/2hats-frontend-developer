import logoWhite from "../../assets/logoWhite.svg";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.containerBlackPadding}>
      <div className="container">
        <div className={styles.footerDiv}>
          <div className={styles.footerContent}>
            <img
              src={logoWhite}
              alt="Logo"
              className={styles.logo}
            />
            <div className={styles.footerContentSection2}>
              <div>
                <p>Products</p>
                <p className={styles.footerContentSectionText}>Sand Stone</p>
                <p className={styles.footerContentSectionText}>Stone</p>
                <p className={styles.footerContentSectionText}>Cement</p>
                <p className={styles.footerContentSectionText}>Soft Stone</p>
              </div>

              <div>
                <p>Services</p>
                <p className={styles.footerContentSectionText}>
                  Measurement Service
                </p>
                <p className={styles.footerContentSectionText}>
                  Product Advice
                </p>
                <p className={styles.footerContentSectionText}>
                  Interior Design
                </p>
              </div>

              <div className={styles.twoSpan}>
                <p>Contact information</p>
                <p className={styles.footerContentSectionText}>
                  3181 Al Imam Saud Ibn Abdul Aziz Branch Rd, An Nuzhah, Riyadh
                  12474, Saudi Arabia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
