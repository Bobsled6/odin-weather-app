const unitObject =  {
    units:"imperial",
};

function unitToggle() {
const content = document.getElementById("content");
const unitToggleCheckbox = document.createElement("input");
const unitToggleLabel = document.createElement("label")
const unitToggleContainer = document.createElement("div");
const imperialDiv = document.createElement("div");
const celsiusDiv = document.createElement("div")

unitToggleCheckbox.id = "unitToggleCheckbox";
unitToggleLabel.id = "unitToggleLabel";
unitToggleContainer.id = "unitToggleContainer";
imperialDiv.id = "imperialDiv";
celsiusDiv.id = "celsiusDiv";

unitToggleCheckbox.setAttribute("type", "checkbox");
unitToggleLabel.setAttribute("for", "unitToggleCheckbox");

imperialDiv.innerText = "Imperial";
celsiusDiv.innerText = "Celsius";

//unitToggleLabel.appendChild(imperialDiv);
//unitToggleLabel.appendChild(celsiusDiv);

unitToggleContainer.appendChild(unitToggleCheckbox);
unitToggleContainer.appendChild(unitToggleLabel);

content.appendChild(unitToggleContainer);

}


export {unitToggle , unitObject};