import React from 'react';
import InfoBox from '../InfoBox/InfoBox';
import styles from './Stats.module.css';
import {prettyPrintStat} from '../../utils';

const Stats = ({ casesType, setCasesType, countryInfo }) => {
  return (
    <div className={styles.stats}>
      <div className={styles.app__left__stats_wrapper}>
        <InfoBox
          active={casesType === "cases"}
          isblue={true}
          onClick={(e) => setCasesType("cases")}
          title="Infected"
          cases={prettyPrintStat(countryInfo.todayCases)}
          total={prettyPrintStat(countryInfo.cases)}
        />
        <InfoBox
          active={casesType === "recovered"}
          isgreen={true}
          onClick={(e) => setCasesType("recovered")}
          title="Recovered"
          cases={prettyPrintStat(countryInfo.todayRecovered)}
          total={prettyPrintStat(countryInfo.recovered)}
        />
        <InfoBox
          active={casesType === "deaths"}
          isred={true}
          onClick={(e) => setCasesType("deaths")}
          title="Fatalities"
          cases={prettyPrintStat(countryInfo.todayDeaths)}
          total={prettyPrintStat(countryInfo.deaths)}
        />
      </div>
    </div>
  );
};

export default Stats;
