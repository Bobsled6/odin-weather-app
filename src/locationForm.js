const content = document.getElementById("content");
import getWeatherData from "./getWeather.js";

export default function locationForm() {
  const locationForm = document.createElement("form");
  const locationLabel = document.createElement("label");
  const locationInput = document.createElement("input");
  const locationButton = document.createElement("input");

  locationForm.id = "locationForm";
  locationLabel.id = "locationLabel";
  locationInput.id = "locationInput";
  locationButton.id = "locationButton";

  locationLabel.setAttribute("for", "locationInput");
  locationLabel.innerHTML = "Location";

  locationInput.setAttribute("type", "text");

  locationButton.setAttribute("type", "submit");
  locationButton.setAttribute("value", "Search");

  locationButton.addEventListener("click", () => {
    event.preventDefault();
    let location = locationInput.value;
    getWeatherData(location);
    locationInput.value = "";
  });

  locationForm.appendChild(locationLabel);
  locationForm.appendChild(locationInput);
  locationForm.appendChild(locationButton);

  content.appendChild(locationForm);
}
