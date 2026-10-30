import processWeatherData from "./processWeatherData.js";
import { weatherObject } from "./weatherObject.js";
import genHTML from "./genHTML.js";
import { unitObject } from "./unitObject.js";

export default async function getWeatherData(location) {
  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitObject.units}&key=7M6JA55NJLAAWDWUXP789RLVX`,
  )
    .then((response) => response.json())
    .then((data) => {
      const currentConditions = data.currentConditions;
      processWeatherData(currentConditions);
      genHTML(location);
      console.log(weatherObject);
    })
    .catch((error) => console.error(error));
}
