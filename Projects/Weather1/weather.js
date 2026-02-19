/** @param {Object} data */
function getCountry(data) {
    console.log(data);
    return data.location.country;
}

/** @param {Object} data */
function getIcon(data) {
    console.log(data);
    return data.current.weather_icons[0];
}

/** @param {Object} data */
function getTemperature(data) {
    console.log(data);
    return data.current.temperature;
}