const contentDiv = document.getElementById("content");
import { weatherObject } from "./weatherObject.js";
import locationForm from "./locationForm.js";

function genHeader(location) {
  const header = document.createElement("h1");
  let headerCap = location
    .toLowerCase()
    .split(` `)
    .map((word) => word.charAt(0).toUpperCase() + word.substring(1))
    .join(" ");
  header.innerHTML = headerCap;
  header.id = "header";
  contentDiv.appendChild(header);
}

function genConditions() {
  const conditionsDiv = document.createElement("div");
  const tempDiv = document.createElement("div");
  const tempConditionsDiv = document.createElement("div");
  const feelsLikeDiv = document.createElement("div");
  const humidityDiv = document.createElement("div");
  const precipChanceDiv = document.createElement("div");
  const windspeedDiv = document.createElement("div");

  conditionsDiv.id = "conditionsDiv";
  tempDiv.id = "tempDiv";
  feelsLikeDiv.id = "feelsLikeDiv";
  humidityDiv.id = "humidityDiv";
  precipChanceDiv.id = "precipChanceDiv";
  windspeedDiv.id = "windspeedDiv";

  conditionsDiv.innerHTML = weatherObject.conditions;
  tempDiv.innerHTML = weatherObject.temp;
  tempConditionsDiv.appendChild(tempDiv);
  tempConditionsDiv.appendChild(conditionsDiv);


  weatherDiv("Feels Like", weatherObject.feelslike, feelsLikeDiv);
  weatherDiv("Humidity", weatherObject.humidity, humidityDiv);
  weatherDiv(
    "Precipitation Chance",
    weatherObject.precipChance,
    precipChanceDiv,
  );
  weatherDiv("Wind Speed", weatherObject.windspeed, windspeedDiv);

  contentDiv.appendChild(tempConditionsDiv);
  contentDiv.appendChild(feelsLikeDiv);
  contentDiv.appendChild(humidityDiv);
  contentDiv.appendChild(precipChanceDiv);
  contentDiv.appendChild(windspeedDiv);

  function weatherDiv(label, value, parentDiv) {
    const labelDiv = document.createElement("div");
    const valueDiv = document.createElement("div");

    labelDiv.classList.add("labelDiv");
    valueDiv.classList.add("valueDiv");
    parentDiv.classList.add("parentDiv");

    labelDiv.innerHTML = label;
    valueDiv.innerHTML = value;

    parentDiv.appendChild(labelDiv);
    parentDiv.appendChild(valueDiv);
  }
}

export default function genHTML(location) {
  contentDiv.innerHTML = "";
  locationForm();
  genHeader(location);
  genConditions();
}
