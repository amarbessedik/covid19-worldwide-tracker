import React from 'react';
import styles from './Links.module.css';
import TableChartIcon from "@material-ui/icons/TableChart";
import MoreIcon from "@material-ui/icons/More";
import TimelineIcon from "@material-ui/icons/Timeline";
import MapIcon from "@material-ui/icons/Map";
import InfoIcon from "@material-ui/icons/Info";

const Links = ({ dflex, links }) => {
    const d_flex={
        flexDirection: dflex
    }

    const navLinkIcons = [
      <MapIcon className={styles.navLink__icon} />,
      <TableChartIcon className={styles.navLink__icon} />,
      <TimelineIcon className={styles.navLink__icon} />,
      <InfoIcon className={styles.navLink__icon} />,
      <MoreIcon className={styles.navLink__icon} />,
    ];

    const cleanUrl = () => {
      window.history.pushState("object or string", "Page Title", "/");
    };

    return (
      <div className={styles.links}>
        <ul style={d_flex}>
          {links.map((link, i) => (
            <li
              onMouseLeave={cleanUrl}
              className={dflex === "column" ? `${styles.list__item}` : null}
              key={i}
            >
              {navLinkIcons[i]} <a href={link.id}>{link.name}</a>
            </li>
          ))}
        </ul>
      </div>
    );
}

export default Links;
