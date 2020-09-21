import React from "react";
import ShareButtons from "../../components/ShareButtons/ShareButtons";
import styles from "./Footer.module.css";

const center = {
  textAlign: "center",
};

function Footer() {
  return (
    <div className={styles.footer}>
      <ul className={styles.footer__list}>
        <li style={center}>
          <h4
            style={{
              padding: 0,
              marginBottom: "5px",
              color: "#008FFB",
            }}
          >
            <span>COVID-19 (SARS-COV-2) WORLDWIDE TRACKER</span>{" "}
          </h4>
        </li>
        <li style={center}>
          <span style={{ textTransform: "uppercase", fontSize: ".7rem" }}>
            &copy; DESIGNED &amp; BUILT BY AMAR BESSEDIK <br /> SOFTWARE
            ENGINNER (REACT DEVELOPER) BASED IN USA, SEPTEMBER 2020
            {!new Date().getFullYear() === 2020
              ? " - " + new Date().getFullYear()
              : null}
          </span>
        </li>
      </ul>
      <br />
      <ul className={styles.footer__list}>
        <li>
          <ShareButtons />
        </li>
      </ul>
    </div>
  );
}

export default Footer;
