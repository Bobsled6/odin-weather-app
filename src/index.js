import getWeather from "./getWeather.js";
import locationForm from "./locationForm.js";
import "./styles.css";
import { unitToggle } from "./unitObject.js";

unitToggle();
getWeather("london");
locationForm();


