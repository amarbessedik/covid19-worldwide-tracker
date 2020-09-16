import React, { useState, useEffect } from "react";
import "./TextSlider.css";

const TextSlider = () => {
  const titles = [
    "COVID19 WORLDWIDE TRACKER (SARS-COV-2)",
    "BE SURE TO SEEK SCIENTIFIC EVIDENCE!",
    "WASH HANDS, WEAR MASK & PRACTICE SOCIAL DISTANCING",
  ];

  const [index, setIndex] = useState(0);
  const [classToggle, setClassToggle] = useState("slide-right");

  useEffect(() => {
    const interval_left = setInterval(() => {
      setClassToggle("slide-left");
    }, 10000);
    const interval_right = setInterval(() => {
      setClassToggle("slide-right");
      if (index > 2) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 12000);
    return () => {
      clearInterval(interval_left);
      clearInterval(interval_right);
    };
  }, [index]);

  return (
    <div className={`main ${classToggle}`}>
      <p>
        {index < titles.length
          ? titles[index]
          : "STAY SAFE - STAY HEALTHY - BE WELL"}
      </p>
    </div>
  );
};

export default TextSlider;
