const weatherContainer = document.getElementById("weatherContainer");
import { weatherObject } from "./weatherObject.js";
import locationForm from "./locationForm.js";
import { unitObject } from "./unitObject.js";

function genHeader(location) {
  const header = document.createElement("h1");
  let headerCap = allWordsCap(location);
  header.innerHTML = headerCap;
  header.id = "header";
  weatherContainer.appendChild(header);
}

function genConditions() {
  const conditionsDiv = document.createElement("div");
  const tempDiv = document.createElement("div");
  const tempConditionsDiv = document.createElement("div");
  const feelsLikeDiv = document.createElement("div");
  const humidityDiv = document.createElement("div");
  const precipChanceDiv = document.createElement("div");
  const windspeedDiv = document.createElement("div");
  const toggle = document.getElementById("unitToggleCheckbox");

  const toggleStatus = toggle.checked;

  conditionsDiv.id = "conditionsDiv";
  tempDiv.id = "tempDiv";
  tempConditionsDiv.id = "tempConditionsDiv";
  feelsLikeDiv.id = "feelsLikeDiv";
  humidityDiv.id = "humidityDiv";
  precipChanceDiv.id = "precipChanceDiv";
  windspeedDiv.id = "windspeedDiv";

  conditionsDiv.innerHTML = allWordsCap(weatherObject.conditions);
  tempDiv.innerHTML = weatherObject.temp + unitObject[`${toggleStatus}Temp`];
  tempConditionsDiv.appendChild(tempDiv);
  tempConditionsDiv.appendChild(conditionsDiv);

  weatherDiv(
    "Feels Like",
    weatherObject.feelslike,
    feelsLikeDiv,
    unitObject[`${toggleStatus}Temp`],
  );
  weatherDiv("Humidity", weatherObject.humidity, humidityDiv, "%");
  weatherDiv(
    "Precipitation Chance",
    weatherObject.precipChance,
    precipChanceDiv,
    "%",
  );
  weatherDiv(
    "Wind Speed",
    weatherObject.windspeed,
    windspeedDiv,
    unitObject[`${toggleStatus}Wind`],
  );

  weatherContainer.appendChild(tempConditionsDiv);
  weatherContainer.appendChild(feelsLikeDiv);
  weatherContainer.appendChild(humidityDiv);
  weatherContainer.appendChild(precipChanceDiv);
  weatherContainer.appendChild(windspeedDiv);

  function weatherDiv(label, value, parentDiv, unit) {
    const labelDiv = document.createElement("div");
    const valueDiv = document.createElement("div");

    labelDiv.classList.add("labelDiv");
    valueDiv.classList.add("valueDiv");
    parentDiv.classList.add("parentDiv");

    labelDiv.innerHTML = label;
    valueDiv.innerHTML = value + unit;

    parentDiv.appendChild(labelDiv);
    parentDiv.appendChild(valueDiv);
  }
}

function allWordsCap(string) {
  let newString = string
    .toLowerCase()
    .split(` `)
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
  return newString;
}

export default function genHTML(location) {
  weatherContainer.innerHTML = "";
  locationForm();
  genHeader(location);
  genConditions();
}
