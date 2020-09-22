import React from 'react';
import resourcesData from './ResourcesData';
import styles from './Resources.module.css';
import Resource from './Resource';

const Resources = () => {
    return (
        <div className={styles.resources__wrapper}>
            {resourcesData.map(entry =>{
              return <Resource {...entry}/>
            })}
        </div>
    );
}

export default Resources;
