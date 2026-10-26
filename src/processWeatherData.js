import { weatherObject } from "./weatherObject.js"
export default function processWeatherData(data) {
    weatherObject.conditions = data.conditions;
    weatherObject.temp = data.temp;
    weatherObject.feelslike = data.feelslike;
    weatherObject.humidity = data.humidity;

}