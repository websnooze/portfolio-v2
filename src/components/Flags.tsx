import { ReactSVG } from "react-svg";
import countriesData from "./data/countries.json";

const Flags = ({ countryCode, width, height, className }) => {
  const countryData = countriesData.find(
    (data) => data.countryCode === countryCode
  );

  if (!countryData) {
    return (
      <ReactSVG
        src="/src/assets/flags/Unknown.svg"
        beforeInjection={(svg) => {
          svg.setAttribute("class", className);
          svg.setAttribute("width", width);
          svg.setAttribute("height", height);
        }}
      />
    );
  }

  const flagPath = `/src/assets/flags/${countryData.countryCode}.svg`;

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
