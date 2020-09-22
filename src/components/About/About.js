import React from "react";
import styles from "./About.module.css";
import LinkIcon from "@material-ui/icons/Link";

const About = () => {
  return (
    <div id="about" className={styles.app__about}>
      <h2>
        This data has been collected from{" "}
        <a
          className={styles.about__link}
          href="https://www.disease.sh"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Disease Data <LinkIcon className={styles.link__icon} />
        </a>{" "}
        API
      </h2>
      <p>
        This data changes rapidly and might not reflect real-time numbers since
        some cases still being reported. Total counts include both confirmed and
        probable cases in some locations. Probable cases are identified by
        public health officials and use criteria developed by government
        authorities. Some areas may not have data because they haven’t published
        their data or haven’t done so recently. A couple of different data
        sources:{" "}
      </p>
      <ol>
        <li>
          <a
            className={styles.about__link}
            href="https://github.com/CSSEGISandData/COVID-19"
          >
            JOHNS HOPKINS UNIVERSITY
          </a>
        </li>
        <li>
          <a
            className={styles.about__link}
            href="https://github.com/nytimes/covid-19-data"
          >
            NEW YORK TIMES
          </a>
        </li>
        <li>
          <a
            className={styles.about__link}
            href="https://www.worldometers.info/coronavirus/"
          >
            WORLDOMETERS
          </a>
        </li>
        <li>
          <a
            className={styles.about__link}
            href="https://github.com/ActiveConclusion/COVID19_mobility"
          >
            APPLE REPPORTS
          </a>
        </li>
      </ol>

      <p>
        There are various sources that are tracking and aggregating coronavirus
        data. They update at different times and may have different ways of
        gathering data.
      </p>
    </div>
  );
};

export default About;
