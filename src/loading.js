import loadingIcon from "./loadingIcon/loading.svg";

export default function loading() {
    const weatherContainer = document.getElementById("weatherContainer");
    const loadingDiv = document.createElement("div");
    const loading = document.createElement('img');

    loadingDiv.id = "loadingDiv";
    loading.src = loadingIcon;
    loading.id = "loadingIcon";
    loadingDiv.appendChild(loading);
    weatherContainer.innerHTML = "";
    weatherContainer.appendChild(loadingDiv);
}