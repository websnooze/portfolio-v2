import { FC, useMemo } from 'react'
import { ReactSVG } from "react-svg";

import countriesData from "./data/countries.json";

interface Props {
  countryCode?: string,
  width?: number,
  height?: number,
  className?: string
}

const Flags = ({ countryCode, width = 0, height = 0, className }) => {
  const countryData = countriesData.find(
    (data) => data.countryCode === countryCode
  );

  const flagPath = useMemo(() => {
    const countryData = countriesData.find(
      (data) => data.countryCode === countryCode
    );
    return countryData ?  `/src/assets/flags/${countryData.countryCode}.svg` : "/src/assets/flags/Unknown.svg";
  }, [])


  return (
    <ReactSVG
      src={flagPath}
      beforeInjection={(svg) => {
        svg.setAttribute("class", className);
        svg.setAttribute("width", width);
        svg.setAttribute("height", height);
      }}
    />
  );
};

export default Flags;
