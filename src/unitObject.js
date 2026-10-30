const unitObject =  {
    units:"imperial",
};

function unitToggle() {
const content = document.getElementById("content");
const unitToggleCheckbox = document.createElement("input");
const unitToggleLabel = document.createElement("label")
const unitToggleContainer = document.createElement("div");
const imperialDiv = document.createElement("div");
const metricDiv = document.createElement("div")

unitToggleCheckbox.id = "unitToggleCheckbox";
unitToggleLabel.id = "unitToggleLabel";
unitToggleContainer.id = "unitToggleContainer";
imperialDiv.id = "imperialDiv";
metricDiv.id = "metricDiv";

unitToggleCheckbox.setAttribute("type", "checkbox");
unitToggleLabel.setAttribute("for", "unitToggleCheckbox");

imperialDiv.innerText = "Imperial";
metricDiv.innerText = "Metric";

unitToggleLabel.appendChild(imperialDiv);
unitToggleLabel.appendChild(metricDiv);

unitToggleContainer.appendChild(unitToggleCheckbox);
unitToggleContainer.appendChild(unitToggleLabel);

content.appendChild(unitToggleContainer);

}


export {unitToggle , unitObject};