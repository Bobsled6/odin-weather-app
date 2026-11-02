import loadingIcon from "./loadingIcon/loading.svg";

export default function loading() {
    const weatherContainer = document.getElementById("weatherContainer");
    const loadingDiv = document.createElement("div");
    const loading = document.createElement('img');
    const unitToggleCheckbox = document.getElementById("unitToggleCheckbox");

    unitToggleCheckbox.disabled = true;

    loadingDiv.id = "loadingDiv";
    loading.src = loadingIcon;
    loading.id = "loadingIcon";
    loadingDiv.appendChild(loading);
    weatherContainer.innerHTML = "";
    weatherContainer.appendChild(loadingDiv);
}