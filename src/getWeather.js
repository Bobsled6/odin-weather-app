import processWeatherData from "./processWeatherData.js";
import { weatherObject } from "./weatherObject.js";
import genHTML from "./genHTML.js";
import { unitObject } from "./unitObject.js";
import loading from "./loading.js";

export default async function getWeatherData(location) {
  const unitToggleCheckbox = document.getElementById("unitToggleCheckbox");

  fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitObject.units}&key=7M6JA55NJLAAWDWUXP789RLVX`,
  )
    .then((response) => response.json())
    .then((data) => {
      const currentConditions = data.currentConditions;
      processWeatherData(currentConditions);
      genHTML(location);
      console.log(unitToggleCheckbox);
      unitToggleCheckbox.disabled = false;
      console.log(weatherObject);
    })
    .catch(() => alert(`Weather data for ${location} could not be found, please enter a valid location and try again.`));

  loading();
}
